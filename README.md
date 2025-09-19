# Kartik Gupta - Backend Developer Portfolio

## Project Overview
- **Name**: Kartik Gupta Portfolio Website
- **Goal**: Modern, responsive portfolio showcasing backend development skills and projects
- **Features**: Animated splash screen, glassmorphic design, interactive components, responsive layout

## URLs
- **Local Development**: http://localhost:3000
- **Production**: [To be deployed]

## Data Architecture
- **Data Models**: All portfolio data centralized in `src/data.js`
- **Storage**: Static data configuration with easy customization
- **Content Management**: JSON-like structure for skills, projects, experience, and contact info

## User Guide

### For Developers
1. **Clone/Download** this repository
2. **Install dependencies**: `npm install`
3. **Customize content** in `src/data.js`
4. **Add assets** (resume, photos, project images) to `public/` folder
5. **Run development server**: `npm run dev`
6. **Build for production**: `npm run build`

### For Visitors
- **Navigate** through sections using the fixed navigation bar
- **Explore projects** with interactive cards and modal details
- **Download resume** from multiple sections
- **Contact** via the form or social media links
- **View skills** with animated progress indicators

## Deployment
- **Platform**: Vite + React SPA
- **Status**: ✅ Development Ready
- **Tech Stack**: React 18, Vite, Framer Motion, React Icons
- **Last Updated**: 2024

## Technology Stack

### Core Technologies
- **Frontend**: React 18 with Hooks and Functional Components
- **Build Tool**: Vite for fast development and optimized builds
- **Animations**: Framer Motion for smooth, performant animations
- **Icons**: React Icons for consistent iconography
- **Styling**: Vanilla CSS with CSS Variables and Glassmorphic design

### Key Libraries
```json
{
  "react": "^18.2.0",
  "framer-motion": "^10.16.0",
  "react-icons": "^4.11.0",
  "lottie-react": "^2.4.0"
}
```

### Features Implemented
- ✅ **Animated Splash Screen** with SVG logo animation and skip functionality
- ✅ **Glassmorphic UI Design** with blur effects and translucent surfaces
- ✅ **Responsive Layout** that works on all device sizes
- ✅ **Interactive Navigation** with smooth scrolling and active section tracking
- ✅ **Project Showcase** with filtering, modal views, and detailed descriptions
- ✅ **Skills Visualization** with animated progress bars and categorization
- ✅ **Contact Form** (ready for integration with email services)
- ✅ **Resume Download** functionality with PDF handling
- ✅ **Social Media Integration** with all major platforms
- ✅ **Accessibility Features** including keyboard navigation and screen reader support
- ✅ **Performance Optimized** with lazy loading and efficient animations
- ✅ **SEO Ready** with proper meta tags and structured data

## Project Structure
```
webapp/
├── src/
│   ├── components/          # All React components
│   │   ├── SplashScreen.jsx # Animated loading screen
│   │   ├── Navbar.jsx       # Fixed navigation bar
│   │   ├── Hero.jsx         # Main landing section
│   │   ├── About.jsx        # About me section
│   │   ├── Skills.jsx       # Skills and technologies
│   │   ├── Projects.jsx     # Project showcase
│   │   ├── Experience.jsx   # Work experience and education
│   │   ├── Contact.jsx      # Contact form and info
│   │   ├── Footer.jsx       # Footer with links
│   │   └── *.css           # Component-specific styles
│   ├── styles/
│   │   └── global.css      # Global styles and CSS variables
│   ├── data.js             # All portfolio content and configuration
│   ├── App.jsx             # Main application component
│   └── main.jsx            # Application entry point
├── public/
│   ├── resume.pdf          # Professional resume (TO BE ADDED)
│   ├── photo.jpg           # Profile photo (TO BE ADDED)
│   ├── project*.jpg        # Project images (TO BE ADDED)
│   └── animations/         # Optional Lottie animations
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md              # This file
```

## Customization Guide

### 1. Personal Information (`src/data.js`)
```javascript
export const personal = {
  name: "Your Name",              // Replace with your name
  title: "Your Title",            // Replace with your job title
  email: "your@email.com",        // Replace with your email
  phone: "your-phone",            // Replace with your phone
  location: "Your Location",      // Replace with your location
  // ... update all personal fields
};
```

### 2. Skills & Technologies
```javascript
export const skills = [
  {
    category: "Your Category",
    items: ["Skill 1", "Skill 2", "Skill 3"] // Add your skills
  }
  // Add more categories as needed
];
```

### 3. Projects
```javascript
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    technologies: ["Tech 1", "Tech 2"],
    githubUrl: "https://github.com/you/project",
    demoUrl: "https://your-demo.com",
    featured: true // Set to true for featured projects
  }
  // Add more projects
];
```

### 4. Assets (Required)
- **Resume**: Add `resume.pdf` to `public/` folder
- **Profile Photo**: Add `photo.jpg` to `public/` folder  
- **Project Images**: Add `project1.jpg`, `project2.jpg`, etc. to `public/` folder

### 5. Contact Form Setup
To make the contact form functional, configure one of these services:

#### Option A: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Update `contactConfig.formEndpoint` in `data.js`
3. Uncomment Formspree code in `Contact.jsx`

#### Option B: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Update `contactConfig.emailJS` settings in `data.js`  
3. Uncomment EmailJS code in `Contact.jsx`
4. Install EmailJS: `npm install emailjs-com`

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features
- **Optimized Images**: Automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components load as needed
- **Minimal Bundle**: Tree-shaking removes unused code
- **Fast Refresh**: Hot reload during development

## Accessibility Features
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: ARIA labels and semantic HTML
- **High Contrast Mode**: Supports system preferences
- **Reduced Motion**: Respects user motion preferences
- **Focus Management**: Clear focus indicators

## Deployment Options

### Option 1: Netlify
1. Build: `npm run build`
2. Deploy `dist/` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Option 2: Vercel
1. Connect GitHub repository
2. Vercel auto-detects Vite configuration
3. Automatic deployments on push

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

### Option 4: Cloudflare Pages
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

## License
This project is open source and available under the MIT License.

## Support
If you encounter any issues or need help customizing the portfolio:
1. Check the `src/data.js` file for configuration options
2. Ensure all required assets are in the `public/` folder
3. Check browser console for any errors
4. Verify all dependencies are installed correctly

## Credits
- **Design**: Modern glassmorphic design with futuristic elements
- **Animations**: Framer Motion for smooth interactions
- **Icons**: React Icons library
- **Fonts**: Google Fonts (Inter + Dancing Script)
- **Developer**: Portfolio template by Kartik Gupta