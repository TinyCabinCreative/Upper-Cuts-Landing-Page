# UPPER CUTS Hair Studio - Landing Page

A modern, interactive landing page for a Toronto-based salon featuring smooth animations, an image slider, and a booking system.

# SCREENSHOT

![Upper Cuts Screenshot 1](img\sc1.png)
![Upper Cuts Screenshot 2](img\sc2.png)
![Upper Cuts Screenshot 3](img\sc3.png)
![Upper Cuts Screenshot 4](img\sc4.png)
![Upper Cuts Screenshot 5](img\sc5.png)

## JavaScript Interactivity

### 1. Image Slider Gallery
The photo gallery includes automatic and manual navigation controls:

- **Auto-advance**: Slides change every 5 seconds automatically
- **Manual controls**: Previous/Next buttons for manual navigation
- **Dot indicators**: Click any dot to jump to a specific slide
- **Pause on hover**: Auto-advance pauses when mouse hovers over the slider
- **Smooth transitions**: CSS transform animations for seamless sliding

**Key Functions:**
- `nextSlide()` / `prevSlide()` - Navigate through images
- `goToSlide(index)` - Jump to specific slide
- `updateSlider()` - Updates slider position and active dot indicator

### 2. Booking Form
Interactive form with client-side validation and console logging:

- **Real-time validation**: Input fields change border color based on validation state
  - Gold on focus
  - Green when valid
  - Red when invalid
- **Form submission**: Captures all booking data and logs to console
- **Date validation**: Minimum date set to today (prevents past bookings)
- **Server-ready**: Includes commented code template for API integration

**Form Data Captured:**
```javascript
{
  name, email, phone, service, date, time, notes, timestamp
}
```

**To Connect to Server:** Uncomment the `fetch()` code block in `script.js` and update the endpoint URL.

### 3. Smooth Scroll Navigation
All anchor links smoothly scroll to their target sections, accounting for the fixed navbar height.

### 4. Dynamic Navbar
The navigation bar adjusts its opacity based on scroll position for a modern, premium feel.

### 5. Scroll Animations
Service cards and the booking form fade in and slide up as they enter the viewport using the Intersection Observer API.

### 6. Mobile Menu Toggle
The hamburger menu button toggles the navigation menu visibility on mobile devices.

## Installation

1. Download all three files (`index.html`, `styles.css`, `script.js`)
2. Place them in the same directory
3. Open `index.html` in a web browser

## Browser Compatibility

Works on all modern browsers (Chrome, Firefox, Safari, Edge) with support for:
- CSS Grid & Flexbox
- CSS Transforms & Transitions
- Intersection Observer API
- ES6+ JavaScript

## Customization

- **Images**: Replace Unsplash URLs in HTML with your own salon photos
- **Colors**: Update CSS variables in `:root` selector
- **Services**: Modify service cards in HTML
- **Form fields**: Add/remove fields in the booking form as needed
- **API endpoint**: Update the fetch URL in the booking form handler

## Performance Features

- Efficient DOM manipulation
- Event delegation where applicable
- CSS-based animations (hardware accelerated)
- Optimized observer patterns
- No external JavaScript libraries required