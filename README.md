Bittree – Link-in-Bio Platform

Bittree is a modern, responsive link-in-bio web application inspired by Linktree. It allows users to create a personalized page where they can share multiple links through a single handle. The project is built using Next.js (App Router) and Tailwind CSS, focusing on performance, clean UI, and scalability.

Users can claim a unique handle, customize their page, and share all important links from one place—perfect for creators, developers, and businesses.

🚀 Features

🔗 Create a unique link-in-bio page using a custom handle

⚡ Fast and optimized performance with Next.js

🎨 Fully responsive UI using Tailwind CSS

🖼️ Optimized images using next/image

📱 Mobile-first design

🔔 Form validation and user feedback with toast notifications

🧭 Smooth client-side navigation using Next.js routing

🛠️ Tech Stack

Next.js 15 (App Router)

React

Tailwind CSS

JavaScript (ES6+)

React Hot Toast

Vercel (Deployment ready)

🧩 Challenges Faced & Solutions
1. ESLint & Next.js Strict Rules

Problem:
Next.js enforced strict ESLint rules (e.g., no <img> tags and unescaped entities).

Solution:

Replaced all <img> tags with next/image for better performance.

Fixed JSX text issues by properly escaping quotes using template literals.

2. Git & GitHub Push Conflicts

Problem:
Multiple failed push attempts caused merge conflicts and rejected pushes.

Solution:

Reset Git history and re-initialized the repository for a clean start.

Properly structured commits and followed correct Git workflow.

3. Responsive Layout Issues

Problem:
UI alignment issues on different screen sizes.

Solution:

Used Tailwind’s responsive utilities (sm, md, lg) to ensure a consistent layout across devices.

📸 Demo

🔗 Live Demo: (Add your deployed Vercel link here)
