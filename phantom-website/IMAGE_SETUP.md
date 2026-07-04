# Phantom X75 Website - Image Setup Guide

## Frame Animation Setup

The website uses 120 sequential WebP frames to create a smooth scroll-controlled animation of the keyboard assembly.

### Image Format & Location

- **Location**: `public/images/phantom/`
- **Format**: WebP (recommended) or JPG (fallback)
- **Frame Count**: 120 frames
- **Naming Convention**: `000.webp` to `119.webp` or `000.jpg` to `119.jpg`

### How to Prepare Your Images

1. **Extract Images from Zip**
   - Extract your frame images from the provided zip file
   - Save them in `public/images/phantom/`

2. **Rename Images Sequentially**
   ```bash
   # If you have frames 1-120, rename to 000-119
   # Using command line (PowerShell on Windows):
   $files = Get-ChildItem | Sort-Object {[int]($_.Name -split '\.')[0]}
   $i = 0
   foreach($file in $files) {
       $newName = "{0:D3}.webp" -f $i
       Rename-Item $file.Name $newName
       $i++
   }
   ```

3. **Optimize Images (Optional)**
   ```bash
   # Using ImageMagick to convert to WebP:
   for i in {0..119}; do
       convert $(printf "%03d" $i).jpg -quality 85 $(printf "%03d" $i).webp
   done
   ```

### Recommended Image Specifications

- **Dimensions**: 1920x1080 (or higher for quality)
- **Aspect Ratio**: 16:9
- **File Size**: 100-300KB per frame
- **Quality**: 85% (good balance of quality and file size)
- **Color Profile**: sRGB

### Frame Progression Visualization

The 120 frames should progress as follows:

1. **Frames 0-30**: Empty workspace, parts appearing
2. **Frames 31-60**: PCB assembly, switches being placed
3. **Frames 61-90**: Keycaps installing, chassis assembling
4. **Frames 91-120**: RGB lighting activation, final keyboard reveal

### Troubleshooting

**Issue: Frames not loading**
- Ensure images are in `public/images/phantom/`
- Check image naming: `000.webp` through `119.webp`
- Verify file permissions are readable

**Issue: Slow performance**
- Reduce image dimensions to 1280x720
- Further compress WebP quality to 75%
- Ensure you have sufficient RAM for canvas rendering

**Issue: Missing fallback images**
- Keep both WebP and JPG versions if possible
- Component automatically falls back to JPG if WebP fails

### Batch Processing Script

**For Windows (PowerShell):**
```powershell
# Place this in your phantom folder
$i = 0
Get-ChildItem *.jpg | Sort-Object {[int]($_.BaseName -split '_')[-1]} | ForEach-Object {
    $newName = "{0:D3}.jpg" -f $i
    Rename-Item $_.FullName $newName
    $i++
}
```

**For macOS/Linux (Bash):**
```bash
# Rename files sequentially
i=0
for file in *; do
    newname=$(printf "%03d.webp" $i)
    mv "$file" "$newname"
    ((i++))
done
```

### Upload to Server

After preparing your images:

1. Place all 120 frames in `public/images/phantom/`
2. Build and deploy:
   ```bash
   npm run build
   npm start
   # or
   npm run export  # for static deployment
   ```

The website will automatically load and display frames based on scroll progress.
