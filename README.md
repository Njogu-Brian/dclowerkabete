# Coming Soon Website

A beautiful one-page "coming soon" website with a background image slideshow, contact section with social media links, and Google Maps integration.

## Features

- **Background Slideshow**: 10 images that automatically rotate every 5 seconds
- **Contact Section**: Social media links (Facebook, Twitter, Instagram, LinkedIn, Email)
- **Google Maps**: Interactive map showing your location
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Setup Instructions

### 1. Setting Up Images

1. Create an `images` folder in the project root directory:
   ```
   mkdir images
   ```

2. Add your 10 images to the `images` folder with the following names:
   - `slide1.jpg`
   - `slide2.jpg`
   - `slide3.jpg`
   - `slide4.jpg`
   - `slide5.jpg`
   - `slide6.jpg`
   - `slide7.jpg`
   - `slide8.jpg`
   - `slide9.jpg`
   - `slide10.jpg`

   **Note**: You can use `.jpg`, `.jpeg`, or `.png` formats. Just make sure to update the file extensions in `index.html` if you use different formats.

3. **Recommended image specifications**:
   - Resolution: 1920x1080 or higher
   - Format: JPG or PNG
   - File size: Optimize images to keep file sizes reasonable (under 500KB each is recommended)

4. If you want to use different image names or have more/fewer images:
   - Open `index.html`
   - Find the `.slideshow-container` section
   - Add or remove `<div class="slide fade">` elements
   - Update the `background-image: url()` paths to match your image filenames

### 2. Setting Up Contact Links

1. Open `index.html` in a text editor

2. Find the social media links section (around line 50-90)

3. Update the `href` attributes for each social media platform:

   **Facebook:**
   ```html
   <a href="https://facebook.com/yourpage" target="_blank" class="social-link facebook">
   ```
   Replace `https://facebook.com/yourpage` with your actual Facebook page URL

   **Twitter:**
   ```html
   <a href="https://twitter.com/yourhandle" target="_blank" class="social-link twitter">
   ```
   Replace `https://twitter.com/yourhandle` with your actual Twitter profile URL

   **Instagram:**
   ```html
   <a href="https://instagram.com/yourhandle" target="_blank" class="social-link instagram">
   ```
   Replace `https://instagram.com/yourhandle` with your actual Instagram profile URL

   **LinkedIn:**
   ```html
   <a href="https://linkedin.com/company/yourcompany" target="_blank" class="social-link linkedin">
   ```
   Replace `https://linkedin.com/company/yourcompany` with your actual LinkedIn company/profile URL

   **Email:**
   ```html
   <a href="mailto:contact@yourwebsite.com" class="social-link email">
   ```
   Replace `contact@yourwebsite.com` with your actual email address

4. **To remove a social media link**: Simply delete the entire `<a>` tag for that platform

5. **To add a new social media link**: Copy one of the existing social link structures and modify it:
   ```html
   <a href="YOUR_URL" target="_blank" class="social-link YOUR_PLATFORM">
       <svg>...</svg>
       <span>Platform Name</span>
   </a>
   ```

### 3. Setting Up Google Maps

1. **Get a Google Maps API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the "Maps JavaScript API"
   - Create credentials (API Key)
   - Copy your API key

2. **Add your API key to the website**:
   - Open `index.html`
   - Find this line near the bottom (around line 120):
     ```html
     <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap" async defer></script>
     ```
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key

3. **Set your location**:
   - Open `script.js`
   - Find the `initMap()` function
   - Locate this line:
     ```javascript
     const defaultLocation = { lat: 40.7128, lng: -74.0060 }; // New York City
     ```
   - Replace the latitude (`lat`) and longitude (`lng`) values with your location's coordinates
   - You can find coordinates using [Google Maps](https://www.google.com/maps) - right-click on your location and select the coordinates

4. **Update the marker info** (optional):
   - In `script.js`, find the `infoWindow` section:
     ```javascript
     content: '<h3>Our Location</h3><p>Visit us here!</p>'
     ```
   - Customize the text to match your business information

### 4. Customization Options

#### Change Slideshow Speed
- Open `script.js`
- Find: `setInterval(nextSlide, 5000);`
- Change `5000` (milliseconds) to your desired interval (e.g., `3000` for 3 seconds)

#### Change Overlay Opacity
- Open `styles.css`
- Find: `background: rgba(0, 0, 0, 0.5);`
- Adjust the last number (0.5) between 0 (transparent) and 1 (fully opaque)

#### Change Colors
- Open `styles.css`
- Modify color values throughout the file to match your brand

## Running the Website

### Option 1: Open Directly
Simply open `index.html` in a web browser. Note: Google Maps may not work without a local server due to CORS restrictions.

### Option 2: Using a Local Server (Recommended)

**Python 3:**
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (using http-server):**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

## File Structure

```
project/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Slideshow and map functionality
├── README.md          # This file
└── images/            # Folder for your slideshow images
    ├── slide1.jpg
    ├── slide2.jpg
    ├── ...
    └── slide10.jpg
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

**Images not showing:**
- Check that the `images` folder exists and contains the image files
- Verify the filenames match exactly (case-sensitive)
- Check browser console for 404 errors

**Google Maps not loading:**
- Verify your API key is correct
- Ensure the Maps JavaScript API is enabled in Google Cloud Console
- Check browser console for API errors
- Make sure you're running the site from a server (not just opening the HTML file)

**Slideshow not working:**
- Check browser console for JavaScript errors
- Ensure all image paths are correct
- Verify `script.js` is properly linked in `index.html`

## License

Feel free to use this template for your projects!
