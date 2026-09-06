import qrcode
from PIL import Image, ImageDraw, ImageFont
import cv2
import numpy as np
import os

URL = "https://subhanallah-restraunt-menu.netlify.app"

def get_font(name, size):
    for path in [name, f"C:/Windows/Fonts/{name}", f"C:/Windows/Fonts/{name.lower()}", "arial.ttf"]:
        try:
            return ImageFont.truetype(path, size)
        except:
            continue
    return ImageFont.load_default()

def generate_qr_assets():
    print(f"Generating QR Code suite for: {URL}")
    os.makedirs("QR Codes/cards", exist_ok=True)
    
    # Base QR Code with 30% High Error Correction
    qr_maker = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=20,
        border=4,
    )
    qr_maker.add_data(URL)
    qr_maker.make(fit=True)
    
    # -------------------------------------------------------------
    # 1. LUXURY BLACK & GOLD QR CODE
    # -------------------------------------------------------------
    qr_dark = qr_maker.make_image(
        fill_color=(218, 178, 62),   # Radiant Royal Gold
        back_color=(8, 7, 5)          # Deep Midnight Obsidian
    ).convert("RGBA")
    
    logo = Image.open("logo.png").convert("RGBA")
    qr_w, qr_h = qr_dark.size
    logo_size = int(qr_w * 0.22)
    logo_thumb = logo.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    
    badge_size = logo_size + 24
    badge = Image.new("RGBA", (badge_size, badge_size), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(badge)
    b_draw.ellipse([0, 0, badge_size, badge_size], fill=(10, 8, 5, 255), outline=(218, 178, 62, 255), width=4)
    b_draw.ellipse([3, 3, badge_size - 3, badge_size - 3], outline=(255, 235, 140, 220), width=2)
    
    logo_offset = ((badge_size - logo_thumb.width) // 2, (badge_size - logo_thumb.height) // 2)
    badge.paste(logo_thumb, logo_offset, logo_thumb)
    
    badge_pos = ((qr_w - badge_size) // 2, (qr_h - badge_size) // 2)
    qr_dark.paste(badge, badge_pos, badge)
    
    draw_dark = ImageDraw.Draw(qr_dark)
    draw_dark.rectangle([6, 6, qr_w - 6, qr_h - 6], outline=(218, 178, 62, 255), width=3)
    draw_dark.rectangle([12, 12, qr_w - 12, qr_h - 12], outline=(255, 235, 140, 100), width=1)
    
    qr_dark.save("QR Codes/menu_qr_code.png", "PNG", optimize=True)
    print(f"Saved QR Codes/menu_qr_code.png")

    # -------------------------------------------------------------
    # 2. IMPERIAL GOLD QR CODE
    # -------------------------------------------------------------
    qr_gold = qr_maker.make_image(
        fill_color=(12, 10, 7),        # Obsidian Black
        back_color=(246, 222, 142)     # Champagne Gold
    ).convert("RGBA")
    
    qr_gold.paste(badge, badge_pos, badge)
    draw_gold = ImageDraw.Draw(qr_gold)
    draw_gold.rectangle([6, 6, qr_w - 6, qr_h - 6], outline=(12, 10, 7, 255), width=3)
    
    qr_gold.save("QR Codes/menu_qr_code_gold.png", "PNG", optimize=True)
    print(f"Saved QR Codes/menu_qr_code_gold.png")

    # -------------------------------------------------------------
    # 3. PRINTABLE TABLE CARD 1: MIDNIGHT BLACK & GOLD EDITION
    # -------------------------------------------------------------
    create_card_dark(qr_dark)

    # -------------------------------------------------------------
    # 4. PRINTABLE TABLE CARD 2: IMPERIAL GOLD EDITION
    # -------------------------------------------------------------
    create_card_gold(qr_gold)

def create_card_dark(qr_img):
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
    header_logo = header_logo.resize((180, 180), Image.Resampling.LANCZOS)
    card.paste(header_logo, ((card_w - 180) // 2, 65), header_logo)
    
    font_title = get_font("georgia.ttf", 48)
    font_sub = get_font("arial.ttf", 25)
    font_tag = get_font("georgia.ttf", 34)
    font_url = get_font("arial.ttf", 26)
    font_contact = get_font("arial.ttf", 28)
    font_addr = get_font("arial.ttf", 24)
        
    draw.text((card_w // 2, 280), "SUBHAN ALLAH RESTAURANT", fill=(243, 208, 120), font=font_title, anchor="mm")
    draw.text((card_w // 2, 330), "PHALIA • MANDI BAHAUDDIN", fill=(204, 164, 59), font=font_sub, anchor="mm")
    
    # Decorative line
    draw.line([(card_w // 2 - 220, 375), (card_w // 2 + 220, 375)], fill=(204, 164, 59), width=2)
    draw.ellipse([card_w // 2 - 6, 375 - 6, card_w // 2 + 6, 375 + 6], fill=(255, 215, 0))
    
    draw.text((card_w // 2, 430), "SCAN TO VIEW DIGITAL MENU", fill=(255, 255, 255), font=font_tag, anchor="mm")
    
    # Place QR Code
    qr_display_size = 780
    qr_resized = qr_img.resize((qr_display_size, qr_display_size), Image.Resampling.LANCZOS)
    qr_x = (card_w - qr_display_size) // 2
    qr_y = 490
    
    draw.rectangle([qr_x - 12, qr_y - 12, qr_x + qr_display_size + 12, qr_y + qr_display_size + 12], outline=(204, 164, 59), width=3)
    card.paste(qr_resized, (qr_x, qr_y), qr_resized)
    
    # Bottom info with updated phone numbers
    draw.text((card_w // 2, 1340), "https://subhanallah-restraunt-menu.netlify.app", fill=(243, 208, 120), font=font_url, anchor="mm")
    draw.text((card_w // 2, 1420), "Call / WhatsApp: 0321-7752266 | 0332-7752266", fill=(255, 220, 90), font=font_contact, anchor="mm")
    draw.text((card_w // 2, 1485), "Mandi Bahauddin Road, Phalia", fill=(175, 175, 175), font=font_addr, anchor="mm")
    
    card.save("QR Codes/cards/subhan_allah_menu_qr_card.png", "PNG", optimize=True)
    print("Saved QR Codes/cards/subhan_allah_menu_qr_card.png")

def create_card_gold(qr_img):
    card_w = 1200
    card_h = 1650
    card = Image.new("RGBA", (card_w, card_h), (246, 225, 155, 255))
    draw = ImageDraw.Draw(card)
    
    # Dual Dark Luxury Border
    draw.rectangle([25, 25, card_w - 25, card_h - 25], outline=(14, 11, 7, 255), width=3)
    draw.rectangle([35, 35, card_w - 35, card_h - 35], outline=(180, 135, 35, 180), width=1)
    
    # Corner Accents
    for (cx, cy) in [(45, 45), (card_w - 45, 45), (45, card_h - 45), (card_w - 45, card_h - 45)]:
        draw.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=(14, 11, 7, 255))
    
    # Header logo at top
    header_logo = Image.open("logo.png").convert("RGBA")
    header_logo = header_logo.resize((180, 180), Image.Resampling.LANCZOS)
    card.paste(header_logo, ((card_w - 180) // 2, 65), header_logo)
    
    font_title = get_font("georgia.ttf", 48)
    font_sub = get_font("arial.ttf", 25)
    font_tag = get_font("georgia.ttf", 34)
    font_url = get_font("arial.ttf", 26)
    font_contact = get_font("arial.ttf", 28)
    font_addr = get_font("arial.ttf", 24)
        
    draw.text((card_w // 2, 280), "SUBHAN ALLAH RESTAURANT", fill=(14, 11, 7), font=font_title, anchor="mm")
    draw.text((card_w // 2, 330), "PHALIA • MANDI BAHAUDDIN", fill=(120, 85, 20), font=font_sub, anchor="mm")
    
    # Decorative line
    draw.line([(card_w // 2 - 220, 375), (card_w // 2 + 220, 375)], fill=(14, 11, 7), width=2)
    draw.ellipse([card_w // 2 - 6, 375 - 6, card_w // 2 + 6, 375 + 6], fill=(180, 135, 35))
    
    draw.text((card_w // 2, 430), "SCAN TO VIEW DIGITAL MENU", fill=(14, 11, 7), font=font_tag, anchor="mm")
    
    # Place QR Code
    qr_display_size = 780
    qr_resized = qr_img.resize((qr_display_size, qr_display_size), Image.Resampling.LANCZOS)
    qr_x = (card_w - qr_display_size) // 2
    qr_y = 490
    
    draw.rectangle([qr_x - 12, qr_y - 12, qr_x + qr_display_size + 12, qr_y + qr_display_size + 12], outline=(14, 11, 7), width=3)
    card.paste(qr_resized, (qr_x, qr_y), qr_resized)
    
    # Bottom info with updated phone numbers
    draw.text((card_w // 2, 1340), "https://subhanallah-restraunt-menu.netlify.app", fill=(80, 55, 10), font=font_url, anchor="mm")
    draw.text((card_w // 2, 1420), "Call / WhatsApp: 0321-7752266 | 0332-7752266", fill=(14, 11, 7), font=font_contact, anchor="mm")
    draw.text((card_w // 2, 1485), "Mandi Bahauddin Road, Phalia", fill=(90, 70, 40), font=font_addr, anchor="mm")
    
    card.save("QR Codes/cards/subhan_allah_menu_qr_card_gold.png", "PNG", optimize=True)
    print("Saved QR Codes/cards/subhan_allah_menu_qr_card_gold.png")

if __name__ == "__main__":
    generate_qr_assets()
