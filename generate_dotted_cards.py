from PIL import Image, ImageDraw, ImageFont
import os

URL = "https://subhanallah-restraunt-menu.netlify.app"

def get_font(name, size):
    for path in [name, f"C:/Windows/Fonts/{name}", f"C:/Windows/Fonts/{name.lower()}", "arial.ttf"]:
        try:
            return ImageFont.truetype(path, size)
        except:
            continue
    return ImageFont.load_default()

def create_dotted_cards():
    cards_dir = "QR Codes/cards"
    os.makedirs(cards_dir, exist_ok=True)
    
    # Load Dotted QR codes
    qr_dotted_dark_path = "QR Codes/qr_code_black_and_gold.png"
    qr_dotted_gold_path = "QR Codes/qr_code_gold_edition.png"
    
    qr_dotted_dark = Image.open(qr_dotted_dark_path).convert("RGBA")
    qr_dotted_gold = Image.open(qr_dotted_gold_path).convert("RGBA")
    
    # -------------------------------------------------------------
    # 1. MIDNIGHT BLACK & GOLD DOTTED CARD
    # -------------------------------------------------------------
    card_w = 1200
    card_h = 1650
    card_dark = Image.new("RGBA", (card_w, card_h), (8, 6, 4, 255))
    draw_dark = ImageDraw.Draw(card_dark)
    
    # Dual Gold Luxury Border
    draw_dark.rectangle([25, 25, card_w - 25, card_h - 25], outline=(204, 164, 59, 255), width=3)
    draw_dark.rectangle([35, 35, card_w - 35, card_h - 35], outline=(255, 215, 0, 120), width=1)
    
    for (cx, cy) in [(45, 45), (card_w - 45, 45), (45, card_h - 45), (card_w - 45, card_h - 45)]:
        draw_dark.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=(212, 175, 55, 255))
        
    header_logo = Image.open("logo.png").convert("RGBA")
    header_logo = header_logo.resize((180, 180), Image.Resampling.LANCZOS)
    card_dark.paste(header_logo, ((card_w - 180) // 2, 65), header_logo)
    
    font_title = get_font("georgia.ttf", 48)
    font_sub = get_font("arial.ttf", 25)
    font_tag = get_font("georgia.ttf", 34)
    font_url = get_font("arial.ttf", 26)
    font_contact = get_font("arial.ttf", 28)
    font_addr = get_font("arial.ttf", 24)
    
    draw_dark.text((card_w // 2, 280), "SUBHAN ALLAH RESTAURANT", fill=(243, 208, 120), font=font_title, anchor="mm")
    draw_dark.text((card_w // 2, 330), "PHALIA • MANDI BAHAUDDIN", fill=(204, 164, 59), font=font_sub, anchor="mm")
    
    # Decorative line
    draw_dark.line([(card_w // 2 - 220, 375), (card_w // 2 + 220, 375)], fill=(204, 164, 59), width=2)
    draw_dark.ellipse([card_w // 2 - 6, 375 - 6, card_w // 2 + 6, 375 + 6], fill=(255, 215, 0))
    
    draw_dark.text((card_w // 2, 430), "SCAN TO VIEW DIGITAL MENU", fill=(255, 255, 255), font=font_tag, anchor="mm")
    
    # Place Dotted QR Code
    qr_display_size = 780
    qr_resized_dark = qr_dotted_dark.resize((qr_display_size, qr_display_size), Image.Resampling.LANCZOS)
    qr_x = (card_w - qr_display_size) // 2
    qr_y = 490
    
    draw_dark.rectangle([qr_x - 12, qr_y - 12, qr_x + qr_display_size + 12, qr_y + qr_display_size + 12], outline=(204, 164, 59), width=3)
    card_dark.paste(qr_resized_dark, (qr_x, qr_y), qr_resized_dark)
    
    # Bottom info with updated phone numbers
    draw_dark.text((card_w // 2, 1340), "https://subhanallah-restraunt-menu.netlify.app", fill=(243, 208, 120), font=font_url, anchor="mm")
    draw_dark.text((card_w // 2, 1420), "Call / WhatsApp: 0321-7752266 | 0332-7752266", fill=(255, 220, 90), font=font_contact, anchor="mm")
    draw_dark.text((card_w // 2, 1485), "Mandi Bahauddin Road, Phalia", fill=(175, 175, 175), font=font_addr, anchor="mm")
    
    out_dark_card = os.path.join(cards_dir, "subhan_allah_dotted_qr_card.png")
    card_dark.save(out_dark_card, "PNG", optimize=True)
    print(f"Saved {out_dark_card}")

    # -------------------------------------------------------------
    # 2. IMPERIAL GOLD DOTTED CARD
    # -------------------------------------------------------------
    card_gold = Image.new("RGBA", (card_w, card_h), (246, 225, 155, 255))
    draw_gold = ImageDraw.Draw(card_gold)
    
    draw_gold.rectangle([25, 25, card_w - 25, card_h - 25], outline=(14, 11, 7, 255), width=3)
    draw_gold.rectangle([35, 35, card_w - 35, card_h - 35], outline=(180, 135, 35, 180), width=1)
    
    for (cx, cy) in [(45, 45), (card_w - 45, 45), (45, card_h - 45), (card_w - 45, card_h - 45)]:
        draw_gold.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=(14, 11, 7, 255))
        
    card_gold.paste(header_logo, ((card_w - 180) // 2, 65), header_logo)
    
    draw_gold.text((card_w // 2, 280), "SUBHAN ALLAH RESTAURANT", fill=(14, 11, 7), font=font_title, anchor="mm")
    draw_gold.text((card_w // 2, 330), "PHALIA • MANDI BAHAUDDIN", fill=(120, 85, 20), font=font_sub, anchor="mm")
    
    draw_gold.line([(card_w // 2 - 220, 375), (card_w // 2 + 220, 375)], fill=(14, 11, 7), width=2)
    draw_gold.ellipse([card_w // 2 - 6, 375 - 6, card_w // 2 + 6, 375 + 6], fill=(180, 135, 35))
    
    draw_gold.text((card_w // 2, 430), "SCAN TO VIEW DIGITAL MENU", fill=(14, 11, 7), font=font_tag, anchor="mm")
    
    qr_resized_gold = qr_dotted_gold.resize((qr_display_size, qr_display_size), Image.Resampling.LANCZOS)
    draw_gold.rectangle([qr_x - 12, qr_y - 12, qr_x + qr_display_size + 12, qr_y + qr_display_size + 12], outline=(14, 11, 7), width=3)
    card_gold.paste(qr_resized_gold, (qr_x, qr_y), qr_resized_gold)
    
    # Bottom info with updated phone numbers
    draw_gold.text((card_w // 2, 1340), "https://subhanallah-restraunt-menu.netlify.app", fill=(80, 55, 10), font=font_url, anchor="mm")
    draw_gold.text((card_w // 2, 1420), "Call / WhatsApp: 0321-7752266 | 0332-7752266", fill=(14, 11, 7), font=font_contact, anchor="mm")
    draw_gold.text((card_w // 2, 1485), "Mandi Bahauddin Road, Phalia", fill=(90, 70, 40), font=font_addr, anchor="mm")
    
    out_gold_card = os.path.join(cards_dir, "subhan_allah_dotted_qr_card_gold.png")
    card_gold.save(out_gold_card, "PNG", optimize=True)
    print(f"Saved {out_gold_card}")

if __name__ == "__main__":
    create_dotted_cards()
