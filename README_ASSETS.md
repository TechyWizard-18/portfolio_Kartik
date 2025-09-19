# Portfolio Assets

This directory contains static assets for the portfolio website.

## Required Files

### Resume
- **File**: `resume.pdf`
- **Description**: Your professional resume in PDF format
- **Location**: `/public/resume.pdf`
- **Usage**: Downloaded when users click "Download Resume" button

### Profile Photo
- **File**: `photo.jpg`
- **Description**: Your professional profile photo
- **Location**: `/public/photo.jpg`
- **Usage**: Displayed in the About section
- **Recommended**: Square aspect ratio, at least 400x400px

### Project Images
- **Files**: `project1.jpg`, `project2.jpg`, `project3.jpg`
- **Description**: Screenshots or images representing your projects
- **Location**: `/public/project*.jpg`
- **Usage**: Displayed in the Projects section
- **Recommended**: 16:9 aspect ratio, at least 800x450px

## Optional Files

### Lottie Animation
- **File**: `animations/logo.json`
- **Description**: Lottie animation file for enhanced splash screen
- **Location**: `/public/animations/logo.json`
- **Usage**: Alternative to CSS/SVG animation in splash screen
- **Note**: The splash screen works without this file using CSS animations

## File Placement Instructions

1. **Add your resume**: Replace the placeholder `resume.pdf` with your actual resume
2. **Add your photo**: Replace the placeholder `photo.jpg` with your professional photo
3. **Add project images**: Add images for your projects (project1.jpg, project2.jpg, etc.)
4. **Optional**: Add a Lottie animation file in the `animations/` folder

## Supported Formats

- **Images**: JPG, PNG, WebP, SVG
- **Documents**: PDF
- **Animations**: JSON (Lottie), SVG, GIF

## File Size Recommendations

- **Resume**: Keep under 5MB
- **Photos**: Optimize to under 500KB while maintaining quality
- **Project Images**: Optimize to under 1MB each
- **Animations**: Keep under 2MB for good performance

## Image Optimization Tips

1. Use modern formats like WebP when possible
2. Compress images without losing quality
3. Use appropriate dimensions (don't use 4K images for small displays)
4. Consider using multiple sizes for responsive images

## Accessibility

- Ensure images have appropriate alt text (handled in components)
- Use high contrast images when possible
- Provide text alternatives for important visual information