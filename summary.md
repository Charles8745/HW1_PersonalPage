# Project Summary
**Date:** February 25, 2026

## Overview
Today, we successfully built and deployed a modern, single-page personal website for **Chen Xu-Lin**. The project was built using core web technologies (HTML, CSS, JavaScript) focusing on an aesthetic deeply rooted in modern web design principles.

## Features & Implementation

### 1. Visual Design (Glassmorphism & Depth)
- **Glassmorphism Card:** Integrated a frosted-glass effect with a backdrop blur and semi-transparent border to house the main content.
- **Dynamic Gradient Background:** Created an animated, deep purple and indigo gradient background that smoothly transitions over time.
- **Floating Orbs:** Added blurred background orbs for visual depth, which we later enhanced with an **interactive parallax effect** that subtly follows the user's cursor.
- **Typography & Styling:** Used Google Fonts (`Outfit` for headings and `Inter` for body). Implemented a stylish purple-gradient shimmer effect for the name title and clean staggered fade-up entrance animations for elements as the page loads.

### 2. Functional Elements
- **Live Clock & Date:** Wrote JavaScript logic to dynamically display the current time (hours, minutes, seconds) and format the current date, updating in real-time.
- **Loading State Check:** Added a smooth loading state to ensure the glass card and its animations only appear *after* the initial date and time values are injected, preventing placeholder text flashes.
- **Social Profile Links:** Added minimalist SVG icons at the base of the card (GitHub, Email, LinkedIn) with fun, interactive hover scaling/color transition effects.
- **Click Ripple Effect:** Implemented a satisfying tactile feature where clicking the main card generates a subtle radial ripple animation.

### 3. Version Control & Deployment
- Automatically initialized the Git repository and created commits.
- Added the remote origin (`https://github.com/Charles8745/HW1_PersonalPage.git`) and pushed the `main` code branch to GitHub.
- Prepared the project for live deployment on **GitHub Pages**.

## Final Result

Here is a look at the final design state of the application:
![Final Website Screenshot](screenshot.png)
