import numpy as np
from PIL import Image, ImageFilter

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert('RGB')
    arr = np.array(img, dtype=np.float32)
    
    # Background color estimate (from corners)
    corners = np.concatenate([
        arr[:20, :20].reshape(-1, 3),
        arr[:20, -20:].reshape(-1, 3),
        arr[-20:, :20].reshape(-1, 3),
        arr[-20:, -20:].reshape(-1, 3)
    ])
    bg_color = np.median(corners, axis=0)
    print("Estimated bg color:", bg_color)
    
    # Distance/Difference from bg color
    # Use max channel intensity and difference from background
    brightness = np.max(arr, axis=2)
    
    # Low and high thresholds for smooth alpha transition
    t_low = 25.0
    t_high = 80.0
    
    # Calculate alpha mask with smoothstep
    alpha = np.clip((brightness - t_low) / (t_high - t_low), 0.0, 1.0)
    # Smoothstep curve: 3x^2 - 2x^3
    alpha = alpha * alpha * (3.0 - 2.0 * alpha)
    
    # Color un-mixing (decontaminate background from semi-transparent edge pixels)
    # For pixels with alpha > 0, recover foreground gold color
    alpha_expanded = alpha[:, :, np.newaxis]
    fg_arr = np.zeros_like(arr)
    mask = alpha > 0.01
    
    # Un-blend: C_fg = (C_comp - (1 - a) * C_bg) / a
    for c in range(3):
        fg_arr[mask, c] = np.clip(
            (arr[mask, c] - (1.0 - alpha[mask]) * bg_color[c]) / np.maximum(alpha[mask], 0.1),
            0.0, 255.0
        )
    
    # For fully opaque areas, preserve original high-fidelity pixels
    fg_arr[alpha >= 0.99] = arr[alpha >= 0.99]
    
    # Assemble RGBA
    rgba = np.dstack([fg_arr, alpha * 255.0]).astype(np.uint8)
    out_img = Image.fromarray(rgba, 'RGBA')
    
    # Trim excess transparent padding around the bounding box with a comfortable margin
    bbox = out_img.getbbox()
    if bbox:
        # Add 20px padding
        pad = 20
        w, h = out_img.size
        crop_box = (
            max(0, bbox[0] - pad),
            max(0, bbox[1] - pad),
            min(w, bbox[2] + pad),
            min(h, bbox[3] + pad)
        )
        cropped_img = out_img.crop(crop_box)
    else:
        cropped_img = out_img
        
    cropped_img.save(output_path, 'PNG', optimize=True)
    print(f"Saved transparent logo to {output_path} with size {cropped_img.size}")
    
    # Also create a favicon version (square)
    fav_size = max(cropped_img.size)
    fav_square = Image.new('RGBA', (fav_size, fav_size), (0, 0, 0, 0))
    offset = ((fav_size - cropped_img.width) // 2, (fav_size - cropped_img.height) // 2)
    fav_square.paste(cropped_img, offset)
    
    favicon = fav_square.resize((192, 192), Image.Resampling.LANCZOS)
    favicon.save('favicon.png', 'PNG')
    
    # Also standard 32x32 favicon.ico
    fav32 = fav_square.resize((32, 32), Image.Resampling.LANCZOS)
    fav32.save('favicon.ico', format='ICO')
    print("Saved favicon.png and favicon.ico")

if __name__ == '__main__':
    remove_background('logo.jpeg', 'logo.png')
