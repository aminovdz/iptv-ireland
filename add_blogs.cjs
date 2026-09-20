const fs = require('fs');

const indexAstroPath = '/Users/Mc/Documents/antigravity/iptv-irish/src/pages/blog/index.astro';
const slugAstroPath = '/Users/Mc/Documents/antigravity/iptv-irish/src/pages/blog/[slug].astro';

let indexAstro = fs.readFileSync(indexAstroPath, 'utf8');
let slugAstro = fs.readFileSync(slugAstroPath, 'utf8');

const newPosts = [
  {
    slug: 'best-iptv-subscription-ireland-2024',
    title: 'Best IPTV Subscription in Ireland 2024',
    excerpt: 'Discover the top-rated IPTV service in Ireland for 2024, featuring 4K sports, live TV, and VOD with zero buffering.',
    date: '2024-12-20',
    category: 'Features'
  },
  {
    slug: 'how-to-watch-premier-league-ireland',
    title: 'How to Watch Premier League Live in Ireland',
    excerpt: 'Never miss a match. Learn how to stream every Premier League game live in HD and 4K from Ireland.',
    date: '2024-12-18',
    category: 'Setup Guide'
  },
  {
    slug: 'iptv-legal-ireland-guide',
    title: 'Is IPTV Legal in Ireland? A Complete Guide',
    excerpt: 'Everything you need to know about the legality of IPTV services in Ireland and how to stream safely.',
    date: '2024-12-12',
    category: 'Features'
  },
  {
    slug: 'watch-gaa-live-abroad-iptv',
    title: 'How to Watch GAA Matches Live Anywhere with IPTV',
    excerpt: 'Stream live GAA hurling and football matches from anywhere in the world using a premium IPTV subscription.',
    date: '2024-12-08',
    category: 'Setup Guide'
  },
  {
    slug: 'best-iptv-app-apple-tv-ireland',
    title: 'Best IPTV Apps for Apple TV in Ireland',
    excerpt: 'Transform your Apple TV into the ultimate streaming device with the best IPTV apps available on tvOS.',
    date: '2024-12-02',
    category: 'Setup Guide'
  },
  {
    slug: 'iptv-smarters-pro-setup-guide',
    title: 'IPTV Smarters Pro: The Ultimate Setup Guide',
    excerpt: 'Step-by-step tutorial on how to install and configure IPTV Smarters Pro on any device for the best viewing experience.',
    date: '2024-11-25',
    category: 'Setup Guide'
  },
  {
    slug: 'tivimate-vs-smarters-pro',
    title: 'TiviMate vs IPTV Smarters Pro: Which is Better?',
    excerpt: 'Comparing the two most popular IPTV players. Find out whether TiviMate or IPTV Smarters Pro is right for you.',
    date: '2024-11-22',
    category: 'Features'
  },
  {
    slug: 'watch-uk-tv-channels-ireland',
    title: 'How to Watch UK TV Channels in Ireland',
    excerpt: 'Access all your favourite UK TV channels including BBC, ITV, and Channel 4 from Ireland with zero restrictions.',
    date: '2024-11-18',
    category: 'Features'
  },
  {
    slug: 'iptv-buffering-fix',
    title: 'Ultimate Guide to Fixing IPTV Freezing Issues in Ireland',
    excerpt: 'Stop the buffering. Proven fixes to eliminate freezing and ensure smooth 4K IPTV streaming on your network.',
    date: '2024-11-12',
    category: 'Troubleshooting'
  },
  {
    slug: 'android-box-vs-firestick-iptv',
    title: 'Android Box vs Firestick for IPTV in Ireland',
    excerpt: 'Which hardware is better for IPTV? A detailed comparison between Android TV Boxes and the Amazon Firestick.',
    date: '2024-11-08',
    category: 'Setup Guide'
  }
];

const newArticles = {
  'best-iptv-subscription-ireland-2024': {
    title: 'Best IPTV Subscription in Ireland 2024',
    date: '2024-12-20',
    category: 'Features',
    content: [
      { type: 'img', src: '/images/blog/best-iptv-ireland.webp', alt: 'Best IPTV in Ireland' },
      { type: 'p', text: 'Finding a reliable IPTV provider in Ireland can be challenging with so many options on the market. In 2024, viewers expect 4K quality, zero buffering, and a massive selection of live sports, movies, and TV series.' },
      { type: 'h2', text: 'What Makes a Premium IPTV Service?' },
      { type: 'p', text: 'A premium service stands out through server stability. Cheaper alternatives often oversell their servers, leading to buffering during major events like Premier League matches or GAA finals. The best subscriptions use dedicated global servers to ensure high uptime.' },
      { type: 'h2', text: 'Key Features to Look For' },
      { type: 'p', text: 'Always look for Catch-Up TV, an accurate EPG (Electronic Programme Guide), and VOD (Video on Demand) libraries that update frequently. Anti-freeze technology is also crucial for uninterrupted viewing.' }
    ]
  },
  'how-to-watch-premier-league-ireland': {
    title: 'How to Watch Premier League Live in Ireland',
    date: '2024-12-18',
    category: 'Setup Guide',
    content: [
      { type: 'img', src: '/images/blog/premier-league-iptv.webp', alt: 'Premier League Live IPTV' },
      { type: 'p', text: 'For football fans in Ireland, catching every Premier League match used to require multiple expensive sports packages. With a premium IPTV subscription, you get all the action in one place.' },
      { type: 'h2', text: 'All the Matches, Zero Blackouts' },
      { type: 'p', text: 'Traditional broadcasters often have 3 PM blackout rules, preventing certain matches from being shown live. IPTV provides access to international sports channels, allowing you to watch any match, any time.' },
      { type: 'h2', text: 'Setting Up for Match Day' },
      { type: 'p', text: 'To ensure a smooth stream on match day, connect your Smart TV or Android box directly to your router via Ethernet. This provides a much more stable connection than Wi-Fi.' }
    ]
  },
  'iptv-legal-ireland-guide': {
    title: 'Is IPTV Legal in Ireland? A Complete Guide',
    date: '2024-12-12',
    category: 'Features',
    content: [
      { type: 'img', src: '/images/blog/iptv-legal-ireland.webp', alt: 'IPTV Legal Guide Ireland' },
      { type: 'p', text: 'The legality of IPTV is a common question among users in Ireland. The short answer: IPTV technology itself is completely legal. It simply stands for Internet Protocol Television.' },
      { type: 'h2', text: 'Understanding the Law' },
      { type: 'p', text: 'While the technology is legal, the legality depends on the content being streamed and whether the provider has the proper licensing agreements. Streaming copyrighted content without permission is against the law.' },
      { type: 'h2', text: 'Why People Use VPNs' },
      { type: 'p', text: 'Many users opt to use a VPN (Virtual Private Network) with their IPTV service to protect their privacy and prevent their Internet Service Provider (ISP) from throttling their connection speeds during peak streaming hours.' }
    ]
  },
  'watch-gaa-live-abroad-iptv': {
    title: 'How to Watch GAA Matches Live Anywhere with IPTV',
    date: '2024-12-08',
    category: 'Setup Guide',
    content: [
      { type: 'img', src: '/images/blog/gaa-iptv-live.webp', alt: 'Watch GAA Live IPTV' },
      { type: 'p', text: 'Whether you are an expat living abroad or simply want access to all county matches, a premium IPTV service is the best way to watch GAA hurling and football.' },
      { type: 'h2', text: 'Accessing Local Channels' },
      { type: 'p', text: 'A good IPTV provider will carry local Irish channels, including RTÉ and TG4, in high definition. This means you will never miss the All-Ireland Championship or crucial league games.' },
      { type: 'h2', text: 'Streaming on the Go' },
      { type: 'p', text: 'With IPTV, you aren\'t tied to your television. You can install apps on your smartphone or tablet, allowing you to stream GAA matches while travelling or commuting.' }
    ]
  },
  'best-iptv-app-apple-tv-ireland': {
    title: 'Best IPTV Apps for Apple TV in Ireland',
    date: '2024-12-02',
    category: 'Setup Guide',
    content: [
      { type: 'img', src: '/images/blog/apple-tv-iptv.webp', alt: 'IPTV on Apple TV' },
      { type: 'p', text: 'Apple TV is one of the most powerful streaming devices available, making it perfect for IPTV. However, finding the right app on the App Store is crucial for a smooth experience.' },
      { type: 'h2', text: 'Top App Recommendations' },
      { type: 'p', text: 'UHF, iPlayTV and GSE Smart IPTV are among the best apps for tvOS. UHF offers a beautiful, native Apple TV interface with excellent EPG support and fast channel switching.' },
      { type: 'h2', text: 'Setting Up Your Playlist' },
      { type: 'p', text: 'Most Apple TV apps use the Xtream Codes API or M3U playlists. Simply enter the credentials provided by your IPTV service into the app to load your channels and VOD library.' }
    ]
  },
  'iptv-smarters-pro-setup-guide': {
    title: 'IPTV Smarters Pro: The Ultimate Setup Guide',
    date: '2024-11-25',
    category: 'Setup Guide',
    content: [
      { type: 'img', src: '/images/blog/iptv-smarters-setup.webp', alt: 'IPTV Smarters Setup Guide' },
      { type: 'p', text: 'IPTV Smarters Pro is one of the most popular and user-friendly IPTV players in the world. It works on Android, iOS, Windows, and Smart TVs.' },
      { type: 'h2', text: 'Installation Process' },
      { type: 'p', text: 'You can download the app directly from your device\'s app store or via the Downloader app on Firestick. Once installed, select "Login with Xtream Codes API".' },
      { type: 'h2', text: 'Entering Your Details' },
      { type: 'p', text: 'You will need four pieces of information: Any Name (e.g., IPTV Ireland), your Username, Password, and the Server URL. Enter these details exactly as provided by your subscription service.' }
    ]
  },
  'tivimate-vs-smarters-pro': {
    title: 'TiviMate vs IPTV Smarters Pro: Which is Better?',
    date: '2024-11-22',
    category: 'Features',
    content: [
      { type: 'img', src: '/images/blog/tivimate-vs-smarters.webp', alt: 'TiviMate vs IPTV Smarters Pro' },
      { type: 'p', text: 'When it comes to Android IPTV players, TiviMate and IPTV Smarters Pro dominate the market. But which one should you choose?' },
      { type: 'h2', text: 'TiviMate: The Premium Choice' },
      { type: 'p', text: 'TiviMate is designed exclusively for TV screens. It offers a traditional cable box feel, incredible customization, and the best EPG integration on the market. However, premium features require a paid unlock.' },
      { type: 'h2', text: 'Smarters Pro: The All-Rounder' },
      { type: 'p', text: 'IPTV Smarters is excellent because it is free, easy to set up, and works across multiple platforms (mobile, PC, and TV). Its VOD section layout is highly praised by users.' }
    ]
  },
  'watch-uk-tv-channels-ireland': {
    title: 'How to Watch UK TV Channels in Ireland',
    date: '2024-11-18',
    category: 'Features',
    content: [
      { type: 'img', src: '/images/blog/uk-tv-ireland.webp', alt: 'Watch UK TV in Ireland' },
      { type: 'p', text: 'Accessing UK TV channels like BBC One, ITV, Channel 4, and Sky Sports from Ireland used to require complex satellite setups. IPTV simplifies this entirely.' },
      { type: 'h2', text: 'The Complete UK Package' },
      { type: 'p', text: 'A premium IPTV service provides all UK channels in HD and 4K quality, complete with regional variations and 7-day catch-up features, so you never miss your favorite shows.' },
      { type: 'h2', text: 'No Geoblocking Restrictions' },
      { type: 'p', text: 'Traditional streaming apps often block users based on their location. An IPTV subscription bypasses these restrictions, giving you direct access to the streams without needing a VPN for access (though a VPN is still recommended for privacy).' }
    ]
  },
  'iptv-buffering-fix': {
    title: 'Ultimate Guide to Fixing IPTV Freezing Issues in Ireland',
    date: '2024-11-12',
    category: 'Troubleshooting',
    content: [
      { type: 'img', src: '/images/blog/iptv-buffering-fix.webp', alt: 'Fix IPTV Buffering' },
      { type: 'p', text: 'Nothing ruins a match or a movie more than constant buffering. If your IPTV stream keeps freezing, here are the most effective ways to fix it.' },
      { type: 'h2', text: '1. ISP Throttling' },
      { type: 'p', text: 'Internet Service Providers in Ireland often throttle IPTV traffic, especially during peak hours or major sporting events. Using a good VPN encrypts your traffic, stopping the ISP from slowing down your stream.' },
      { type: 'h2', text: '2. Device Memory and Cache' },
      { type: 'p', text: 'Streaming devices like Firesticks have limited memory. Clear your IPTV app\'s cache regularly, and ensure you have at least 1GB of free storage space for smooth playback.' }
    ]
  },
  'android-box-vs-firestick-iptv': {
    title: 'Android Box vs Firestick for IPTV in Ireland',
    date: '2024-11-08',
    category: 'Setup Guide',
    content: [
      { type: 'img', src: '/images/blog/android-vs-firestick.webp', alt: 'Android Box vs Firestick' },
      { type: 'p', text: 'Choosing the right hardware is essential for a flawless IPTV experience. The Amazon Firestick and dedicated Android TV Boxes are the two most popular options.' },
      { type: 'h2', text: 'Amazon Firestick: Budget-Friendly and Reliable' },
      { type: 'p', text: 'The Firestick 4K Max is incredibly powerful for its size and price. It easily handles 4K streaming and IPTV apps. However, its closed ecosystem requires "sideloading" some apps via the Downloader tool.' },
      { type: 'h2', text: 'Android TV Box: Maximum Power' },
      { type: 'p', text: 'High-end Android boxes like the Nvidia Shield TV offer superior processing power, gigabit Ethernet ports, and full access to the Google Play Store. They are perfect for users who want the absolute best performance without compromise.' }
    ]
  }
};

// 1. Update index.astro
// Find the posts array and append new posts
const postsRegex = /const posts = \[([\s\S]*?)\];/;
const match = indexAstro.match(postsRegex);
if (match) {
  const currentPostsStr = match[1];
  
  // Create the string for new posts
  const newPostsStr = newPosts.map(p => `  {
    slug: '${p.slug}',
    title: '${p.title.replace(/'/g, "\\'")}',
    excerpt: '${p.excerpt.replace(/'/g, "\\'")}',
    date: '${p.date}',
    category: '${p.category}',
  },`).join('\n');
  
  const updatedPosts = `const posts = [${currentPostsStr}\n${newPostsStr}\n];`;
  indexAstro = indexAstro.replace(postsRegex, updatedPosts);
  fs.writeFileSync(indexAstroPath, indexAstro, 'utf8');
  console.log('Updated index.astro');
}

// 2. Update [slug].astro
// Find the articles object and append new articles
const articlesRegex = /const articles = \{([\s\S]*?)};\n\nconst article/;
const match2 = slugAstro.match(articlesRegex);
if (match2) {
  const currentArticlesStr = match2[1];
  
  let newArticlesStr = '';
  for (const [slug, data] of Object.entries(newArticles)) {
    newArticlesStr += `  '${slug}': {
    title: '${data.title.replace(/'/g, "\\'")}',
    date: '${data.date}',
    category: '${data.category}',
    content: [\n`;
    
    for (const block of data.content) {
      if (block.type === 'img') {
        newArticlesStr += `      { type: 'img', src: '${block.src}', alt: '${block.alt}' },\n`;
      } else {
        newArticlesStr += `      { type: '${block.type}', text: '${block.text.replace(/'/g, "\\'")}' },\n`;
      }
    }
    newArticlesStr += `    ],\n  },\n`;
  }
  
  const updatedArticles = `const articles = {${currentArticlesStr}\n${newArticlesStr}};\n\nconst article`;
  slugAstro = slugAstro.replace(articlesRegex, updatedArticles);
}

// 3. Update getStaticPaths in [slug].astro
const getStaticPathsRegex = /const slugs = \[([\s\S]*?)\];/;
const match3 = slugAstro.match(getStaticPathsRegex);
if (match3) {
  const currentSlugsStr = match3[1];
  const newSlugsStr = newPosts.map(p => `    '${p.slug}',`).join('\n');
  const updatedSlugs = `const slugs = [${currentSlugsStr}\n${newSlugsStr}\n  ];`;
  slugAstro = slugAstro.replace(getStaticPathsRegex, updatedSlugs);
}

// 4. Update the render loop in [slug].astro to support 'img'
const renderRegex = /if \(block\.type === 'h2'\) return <h2 class="text-2xl font-bold text-white mt-12 mb-4">\{block\.text\}<\/h2>;\s*if \(block\.type === 'p'\) return <p class="text-\[#8C96AA\] leading-relaxed mb-4">\{block\.text\}<\/p>;/;
const updatedRender = `if (block.type === 'img') return <img src={block.src} alt={block.alt} class="w-full h-auto rounded-2xl my-8 object-cover shadow-lg border border-white/10" loading="lazy" />;\n          if (block.type === 'h2') return <h2 class="text-2xl font-bold text-white mt-12 mb-4">{block.text}</h2>;\n          if (block.type === 'p') return <p class="text-[#8C96AA] leading-relaxed mb-4">{block.text}</p>;`;

slugAstro = slugAstro.replace(renderRegex, updatedRender);

fs.writeFileSync(slugAstroPath, slugAstro, 'utf8');
console.log('Updated [slug].astro');

