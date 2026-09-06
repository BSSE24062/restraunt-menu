import qrcode
from PIL import Image, ImageDraw, ImageFont
import cv2
import numpy as np
import arabic_reshaper
from bidi.algorithm import get_display

URL = "https://subhanallah-restraunt-menu.netlify.app"

def reshape_urdu(text):
    reshaped = arabic_reshaper.reshape(text)
    return get_display(reshaped)

def generate_qr_assets():
    print(f"Generating verified QR Code suite for: {URL}")
    
    # -------------------------------------------------------------
    # 1. LUXURY BLACK & GOLD QR CODE (Midnight Black Background + Gold Modules)
    # -------------------------------------------------------------
    qr_dark_maker = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=20,
        border=4,
    )
    qr_dark_maker.add_data(URL)
    qr_dark_maker.make(fit=True)
    
    qr_dark = qr_dark_maker.make_image(
        fill_color=(218, 178, 62),   # Radiant Royal Gold
        back_color=(8, 7, 5)          # Deep Midnight Obsidian
    ).convert("RGBA")
    
    # Add Logo Badge in Center
    logo = Image.open("logo.png").convert("RGBA")
    qr_w, qr_h = qr_dark.size
    logo_size = int(qr_w * 0.22)
    logo_thumb = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    
    badge_size = logo_size + 24
    badge = Image.new("RGBA", (badge_size, badge_size), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(badge)
    
    # Dual Gold Border Shield
    b_draw.ellipse([0, 0, badge_size, badge_size], fill=(10, 8, 5, 255), outline=(218, 178, 62, 255), width=4)
    b_draw.ellipse([3, 3, badge_size - 3, badge_size - 3], outline=(255, 235, 140, 220), width=2)
    
    logo_offset = ((badge_size - logo_thumb.width) // 2, (badge_size - logo_thumb.height) // 2)
    badge.paste(logo_thumb, logo_offset, logo_thumb)
    
    badge_pos = ((qr_w - badge_size) // 2, (qr_h - badge_size) // 2)
    qr_dark.paste(badge, badge_pos, badge)
    
    # Decorative Outer Frame
    draw_dark = ImageDraw.Draw(qr_dark)
    draw_dark.rectangle([6, 6, qr_w - 6, qr_h - 6], outline=(218, 178, 62, 255), width=3)
    draw_dark.rectangle([12, 12, qr_w - 12, qr_h - 12], outline=(255, 235, 140, 100), width=1)
    
    qr_dark.save("menu_qr_code.png", "PNG", optimize=True)
    print(f"Saved menu_qr_code.png ({qr_dark.size})")

    # -------------------------------------------------------------
    # 2. IMPERIAL GOLD QR CODE (Champagne Gold Base + Obsidian Modules)
    # -------------------------------------------------------------
    qr_gold_maker = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=20,
        border=4,
    )
    qr_gold_maker.add_data(URL)
    qr_gold_maker.make(fit=True)
    
    qr_gold = qr_gold_maker.make_image(
        fill_color=(12, 10, 7),        # Obsidian Black
        back_color=(246, 222, 142)     # Champagne Gold
    ).convert("RGBA")
    
    qr_gold.paste(badge, badge_pos, badge)
    draw_gold = ImageDraw.Draw(qr_gold)
    draw_gold.rectangle([6, 6, qr_w - 6, qr_h - 6], outline=(12, 10, 7, 255), width=3)
    
    qr_gold.save("menu_qr_code_gold.png", "PNG", optimize=True)
    print(f"Saved menu_qr_code_gold.png ({qr_gold.size})")

    # -------------------------------------------------------------
    # 3. VERIFY SCANS
    # -------------------------------------------------------------
    det = cv2.QRCodeDetector()
    res_gold, _, _ = det.detectAndDecode(cv2.imread("menu_qr_code_gold.png"))
    res_dark_inv, _, _ = det.detectAndDecode(255 - cv2.imread("menu_qr_code.png"))
    print(f">> Verification Imperial Gold: '{res_gold}'")
    print(f">> Verification Black & Gold (Inverted): '{res_dark_inv}'")

    # -------------------------------------------------------------
    # 4. PRINTABLE TABLE DISPLAY CARD (1200x1650 Luxury Table Tent / Flyer)
    # -------------------------------------------------------------
    create_table_card(qr_dark)

def create_table_card(qr_img):
    card_w = 1200
    card_h = 1650
    card = Image.new("RGBA", (card_w, card_h), (8, 6, 4, 255))
    draw = ImageDraw.Draw(card)
    
    # Dual Gold Luxury Border
    draw.rectangle([25, 25, card_w - 25, card_h - 25], outline=(204, 164, 59, 255), width=3)
    draw.rectangle([35, 35, card_w - 35, card_h - 35], outline=(255, 215, 0, 120), width=1)
    
    # Corner Accents
    for (cx, cy) in [(45, 45), (card_w - 45, 45), (45, card_h - 45), (card_w - 45, card_h - 45)]:
        draw.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=(212, 175, 55, 255))
    
    # Header logo at top
    header_logo = Image.open("logo.png").convert("RGBA")
    header_logo = header_logo.resize((170, 170), Image.Resampling.LANCZOS)
    card.paste(header_logo, ((card_w - 170) // 2, 60), header_logo)
    
    # Fonts
    def get_font(name, size):
        for path in [name, f"C:/Windows/Fonts/{name}", f"C:/Windows/Fonts/{name.lower()}", "arial.ttf"]:
            try:
                return ImageFont.truetype(path, size)
            except:
                continue
        return ImageFont.load_default()
        
    font_title = get_font("georgia.ttf", 46)
    font_sub = get_font("arial.ttf", 24)
    font_urdu = get_font("tahoma.ttf", 26)
    font_tag = get_font("georgia.ttf", 30)
    font_url = get_font("arial.ttf", 24)
        
    draw.text((card_w // 2, 250), "SUBHAN ALLAH RESTAURANT", fill=(243, 208, 120), font=font_title, anchor="mm")
    draw.text((card_w // 2, 295), "PHALIA • MANDI BAHAUDDIN", fill=(204, 164, 59), font=font_sub, anchor="mm")
    
    # Decorative line
    draw.line([(card_w // 2 - 200, 335), (card_w // 2 + 200, 335)], fill=(204, 164, 59), width=2)
    draw.ellipse([card_w // 2 - 5, 335 - 5, card_w // 2 + 5, 335 + 5], fill=(255, 215, 0))
    
    draw.text((card_w // 2, 380), "SCAN TO VIEW DIGITAL MENU", fill=(255, 255, 255), font=font_tag, anchor="mm")
    
    # Reshaped Urdu subtitle
    urdu_sub = reshape_urdu("موبائل کیمرے سے اسکین کر کے شاہی مینو دیکھیں")
    draw.text((card_w // 2, 420), urdu_sub, fill=(243, 208, 120), font=font_urdu, anchor="mm")
    
    # Place QR Code
    qr_display_size = 760
    qr_resized = qr_img.resize((qr_display_size, qr_display_size), Image.Resampling.LANCZOS)
    
    qr_x = (card_w - qr_display_size) // 2
    qr_y = 475
    
    # Outer gold frame with glowing shadow
    draw.rectangle([qr_x - 10, qr_y - 10, qr_x + qr_display_size + 10, qr_y + qr_display_size + 10], outline=(204, 164, 59), width=3)
    card.paste(qr_resized, (qr_x, qr_y), qr_resized)
    
    # Bottom details
    draw.text((card_w // 2, 1315), "https://subhanallah-restraunt-menu.netlify.app", fill=(243, 208, 120), font=font_url, anchor="mm")
    draw.text((card_w // 2, 1375), "• Authentic Butter Karahi • Live Charcoal BBQ • Chinese Gravies •", fill=(220, 220, 220), font=font_sub, anchor="mm")
    draw.text((card_w // 2, 1435), "Call / WhatsApp: 0300-8800000 | 0345-7700000", fill=(255, 215, 0), font=font_sub, anchor="mm")
    draw.text((card_w // 2, 1490), "Mandi Bahauddin Road, Phalia", fill=(170, 170, 170), font=font_sub, anchor="mm")
    
    card.save("subhan_allah_menu_qr_card.png", "PNG", optimize=True)
    print("Saved subhan_allah_menu_qr_card.png")

if __name__ == "__main__":
    generate_qr_assets()
