// Colorful background pattern SVGs & images

export const backgroundPatterns = [
  "https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
];

export const paisleyPattern = `
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="paisley" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M50,0 C30,30 30,70 50,100 C70,70 70,30 50,0" fill="none" stroke="#E91E63" stroke-width="2"/>
        <path d="M25,0 C5,30 5,70 25,100 C45,70 45,30 25,0" fill="none" stroke="#2196F3" stroke-width="2"/>
        <path d="M75,0 C55,30 55,70 75,100 C95,70 95,30 75,0" fill="none" stroke="#FFEB3B" stroke-width="2"/>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#paisley)"/>
  </svg>
`;

export const swirlyPattern = `
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="swirly" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        <path d="M0,0 C50,25 150,25 200,0 M0,50 C50,75 150,75 200,50 M0,100 C50,125 150,125 200,100 M0,150 C50,175 150,175 200,150" fill="none" stroke="#E91E63" stroke-width="3"/>
        <path d="M0,25 C50,0 150,0 200,25 M0,75 C50,50 150,50 200,75 M0,125 C50,100 150,100 200,125 M0,175 C50,150 150,150 200,175" fill="none" stroke="#2196F3" stroke-width="3"/>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#swirly)"/>
  </svg>
`;

export const dotsPattern = `
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="3" fill="#E91E63"/>
        <circle cx="0" cy="0" r="2" fill="#2196F3"/>
        <circle cx="20" cy="0" r="2" fill="#2196F3"/>
        <circle cx="0" cy="20" r="2" fill="#2196F3"/>
        <circle cx="20" cy="20" r="2" fill="#2196F3"/>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"/>
  </svg>
`;
