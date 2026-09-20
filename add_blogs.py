import re

# New posts for index.astro
new_posts_index = """  {
    slug: 'best-iptv-ireland-2024',
    title: 'Best IPTV Service in Ireland for 2024: What to Look For',
    excerpt: 'Discover the top features, channels, and reliability markers to look for when choosing the best IPTV service in Ireland this year.',
    date: '2024-01-15',
    category: 'Guides',
    image: '/images/blog/best-iptv-ireland-2024.webp'
  },
  {
    slug: 'watch-rte-player-abroad',
    title: 'How to Watch RTÉ Player & Irish TV Abroad',
    excerpt: 'Missing out on Irish TV? Learn the most reliable ways to stream RTÉ, Virgin Media, and TG4 from anywhere in the world.',
    date: '2024-01-18',
    category: 'Guides',
    image: '/images/blog/watch-rte-player-abroad.webp'
  },
  {
    slug: 'gaago-vs-iptv',
    title: 'GAAGO vs Premium IPTV: Which is the Best Way to Watch GAA?',
    excerpt: 'A comprehensive comparison between the official GAAGO platform and premium IPTV services for watching GAA hurling and football in Ireland.',
    date: '2024-02-05',
    category: 'Comparison',
    image: '/images/blog/gaago-vs-iptv.webp'
  },
  {
    slug: 'iptv-smarters-firestick-ireland',
    title: 'How to Install IPTV Smarters on Firestick in Ireland',
    excerpt: 'A step-by-step guide to downloading and setting up IPTV Smarters Pro on your Amazon Fire TV Stick in Ireland.',
    date: '2024-02-12',
    category: 'Setup Guide',
    image: '/images/blog/iptv-smarters-firestick-ireland.webp'
  },
  {
    slug: 'is-iptv-safe-ireland',
    title: 'Is IPTV Safe to Use in Ireland? Security & Privacy Guide',
    excerpt: 'Everything you need to know about protecting your privacy, avoiding ISP tracking, and safely streaming IPTV in Ireland.',
    date: '2024-03-01',
    category: 'Information',
    image: '/images/blog/is-iptv-safe-ireland.webp'
  },
  {
    slug: 'best-broadband-iptv-ireland',
    title: 'Best Broadband Providers for IPTV in Ireland (2024)',
    excerpt: 'Does your IPTV keep buffering? We review the top Irish broadband providers (Eir, Virgin, Vodafone, Sky) for seamless 4K streaming.',
    date: '2024-03-10',
    category: 'Information',
    image: '/images/blog/best-broadband-iptv-ireland.webp'
  },
  {
    slug: 'tivimate-premium-setup-guide',
    title: 'TiviMate Premium Setup Guide: The Ultimate IPTV Player',
    excerpt: 'Unlock the full potential of your IPTV subscription with TiviMate Premium. Here is how to install and configure it for the best experience.',
    date: '2024-04-02',
    category: 'Setup Guide',
    image: '/images/blog/tivimate-premium-setup-guide.webp'
  },
  {
    slug: 'watch-champions-league-ireland',
    title: 'How to Watch UEFA Champions League Live in Ireland',
    excerpt: 'From TNT Sports to Premier Sports—discover the easiest and most cost-effective way to stream the Champions League live in Ireland.',
    date: '2024-04-15',
    category: 'Sports',
    image: '/images/blog/watch-champions-league-ireland.webp'
  },
  {
    slug: 'iptv-freezing-virgin-media-ireland',
    title: 'Fix IPTV Freezing on Virgin Media & Eir Broadband',
    excerpt: 'Are you experiencing constant buffering on Irish broadband networks? Learn how to stop ISP throttling and fix IPTV freezing for good.',
    date: '2024-05-05',
    category: 'Troubleshooting',
    image: '/images/blog/iptv-freezing-virgin-media-ireland.webp'
  },
  {
    slug: 'smart-tv-iptv-apps-lg-samsung',
    title: 'Best IPTV Apps for Samsung & LG Smart TVs in Ireland',
    excerpt: 'No Firestick? No problem. Discover the top IPTV applications available directly on your LG WebOS or Samsung Tizen Smart TV.',
    date: '2024-05-20',
    category: 'Guides',
    image: '/images/blog/smart-tv-iptv-apps-lg-samsung.webp'
  },
"""

# New articles for [slug].astro
new_articles_slug = """
  'best-iptv-ireland-2024': {
    title: 'Best IPTV Service in Ireland for 2024: What to Look For',
    date: '2024-01-15',
    category: 'Guides',
    image: '/images/blog/best-iptv-ireland-2024.webp',
    content: [
      { type: 'p', text: 'Finding a reliable IPTV service in Ireland can be a challenge. With so many options available, it is essential to know what features separate a premium provider from a low-quality one.' },
      { type: 'h2', text: '1. Server Stability and Anti-Freeze Technology' },
      { type: 'p', text: 'The most important factor is stability. Look for providers that offer Anti-Freeze technology and have multiple backup servers in Europe. This ensures your streams will not buffer during high-demand events like Premier League matches.' },
      { type: 'h2', text: '2. Channel Selection (UK & Irish Focus)' },
      { type: 'p', text: 'A good Irish IPTV service must have a comprehensive selection of local channels. This includes full coverage of RTÉ, Virgin Media, TG4, and comprehensive UK channels (Sky, TNT, BBC, ITV).' },
      { type: 'h2', text: '3. Video on Demand (VOD)' },
      { type: 'p', text: 'Beyond live TV, a premium service should include a massive, regularly updated library of Movies and TV Series, often pulling content from major streaming platforms like Netflix, Disney+, and Prime Video in up to 4K quality.' }
    ]
  },
  'watch-rte-player-abroad': {
    title: 'How to Watch RTÉ Player & Irish TV Abroad',
    date: '2024-01-18',
    category: 'Guides',
    image: '/images/blog/watch-rte-player-abroad.webp',
    content: [
      { type: 'p', text: 'If you are an Irish expat or just travelling abroad, you have likely encountered the frustrating "This content is not available in your location" message when trying to access the RTÉ Player.' },
      { type: 'h2', text: 'Why is Irish TV Geo-blocked?' },
      { type: 'p', text: 'Broadcasting rights restrict channels like RTÉ and Virgin Media from showing their content outside of the Republic of Ireland. This is especially strict for live sports and international movies.' },
      { type: 'h2', text: 'The Solution: Premium IPTV' },
      { type: 'p', text: 'While a VPN can sometimes bypass these blocks, they are frequently detected and banned by broadcasters. A high-quality IPTV subscription bypasses this entirely, delivering live Irish and UK channels directly to your device, anywhere in the world, without needing a VPN.' }
    ]
  },
  'gaago-vs-iptv': {
    title: 'GAAGO vs Premium IPTV: Which is the Best Way to Watch GAA?',
    date: '2024-02-05',
    category: 'Comparison',
    image: '/images/blog/gaago-vs-iptv.webp',
    content: [
      { type: 'p', text: 'For GAA fans, following the All-Ireland hurling and football championships is essential. Historically, GAAGO was the only option for those abroad, but premium IPTV has changed the landscape.' },
      { type: 'h2', text: 'The Cost of GAAGO' },
      { type: 'p', text: 'GAAGO offers an Annual Pass, but it can be quite expensive, and certain matches broadcast on RTÉ are blacked out on GAAGO within Ireland. This leads to a fragmented viewing experience.' },
      { type: 'h2', text: 'The IPTV Advantage' },
      { type: 'p', text: 'An IPTV subscription not only gives you access to every single GAA match (via RTÉ, TG4, BBC, and dedicated GAA channels) but also includes thousands of other sports, movies, and TV channels for a fraction of the cost of a single sports streaming package.' }
    ]
  },
  'iptv-smarters-firestick-ireland': {
    title: 'How to Install IPTV Smarters on Firestick in Ireland',
    date: '2024-02-12',
    category: 'Setup Guide',
    image: '/images/blog/iptv-smarters-firestick-ireland.webp',
    content: [
      { type: 'p', text: 'IPTV Smarters Pro is one of the most popular and user-friendly IPTV players available. Since it is not in the official Amazon App Store, you will need to "sideload" it onto your Firestick.' },
      { type: 'h2', text: 'Step 1: Get the Downloader App' },
      { type: 'p', text: 'Go to the Find menu on your Firestick home screen, search for "Downloader," and install it. This app allows you to download files from the internet.' },
      { type: 'h2', text: 'Step 2: Enable Unknown Sources' },
      { type: 'p', text: 'Go to Settings > My Fire TV > Developer Options, and turn ON "Install Unknown Apps" for the Downloader application.' },
      { type: 'h2', text: 'Step 3: Download IPTV Smarters' },
      { type: 'p', text: 'Open Downloader, enter the direct download URL provided by your IPTV service, and click Go. Once downloaded, click Install, and you are ready to log in with your Xtream Codes credentials!' }
    ]
  },
  'is-iptv-safe-ireland': {
    title: 'Is IPTV Safe to Use in Ireland? Security & Privacy Guide',
    date: '2024-03-01',
    category: 'Information',
    image: '/images/blog/is-iptv-safe-ireland.webp',
    content: [
      { type: 'p', text: 'As IPTV grows in popularity across Ireland, many users wonder about the safety, privacy, and security implications of streaming.' },
      { type: 'h2', text: 'Protecting Your Data' },
      { type: 'p', text: 'When streaming, your ISP (Internet Service Provider) can see the data you are downloading. To ensure maximum privacy, we highly recommend using a reputable VPN (Virtual Private Network). A VPN encrypts your connection, making your streaming habits completely anonymous.' },
      { type: 'h2', text: 'Choosing a Safe Provider' },
      { type: 'p', text: 'Always choose an IPTV provider that accepts secure payment methods (like PayPal or Crypto) and does not require unnecessary personal information to set up your account.' }
    ]
  },
  'best-broadband-iptv-ireland': {
    title: 'Best Broadband Providers for IPTV in Ireland (2024)',
    date: '2024-03-10',
    category: 'Information',
    image: '/images/blog/best-broadband-iptv-ireland.webp',
    content: [
      { type: 'p', text: 'A flawless IPTV experience relies heavily on a stable internet connection. If your stream is constantly freezing, your Irish broadband provider might be to blame.' },
      { type: 'h2', text: 'Speed Requirements' },
      { type: 'p', text: 'For standard HD streaming, you need a minimum of 15-20 Mbps. For 4K streams, a stable 50+ Mbps connection is highly recommended. Virgin Media and Eir Gigabit fibre are currently the top performers in Ireland.' },
      { type: 'h2', text: 'ISP Throttling' },
      { type: 'p', text: 'Some providers, particularly during high-profile Premier League matches, actively throttle IPTV traffic. If you have fast internet but still experience buffering, ISP throttling is likely the cause. A VPN instantly solves this by hiding your traffic.' }
    ]
  },
  'tivimate-premium-setup-guide': {
    title: 'TiviMate Premium Setup Guide: The Ultimate IPTV Player',
    date: '2024-04-02',
    category: 'Setup Guide',
    image: '/images/blog/tivimate-premium-setup-guide.webp',
    content: [
      { type: 'p', text: 'TiviMate is widely considered the best IPTV player for Android devices. Its sleek, cable-like interface and advanced features make it a must-have for serious streamers.' },
      { type: 'h2', text: 'Adding Your Playlist' },
      { type: 'p', text: 'Open TiviMate, select "Add Playlist," and choose "Xtream Codes login." Enter your server URL, username, and password provided by your IPTV service.' },
      { type: 'h2', text: 'TiviMate Premium Features' },
      { type: 'p', text: 'While the free version is good, Premium unlocks catch-up TV, multi-view (watch 4 matches at once), customizable TV guides (EPG), and the ability to add multiple playlists. It is a highly recommended €30 lifetime investment.' }
    ]
  },
  'watch-champions-league-ireland': {
    title: 'How to Watch UEFA Champions League Live in Ireland',
    date: '2024-04-15',
    category: 'Sports',
    image: '/images/blog/watch-champions-league-ireland.webp',
    content: [
      { type: 'p', text: 'The broadcasting rights for the UEFA Champions League in Ireland are split across multiple expensive subscriptions, including TNT Sports (formerly BT Sport), Premier Sports, and RTÉ.' },
      { type: 'h2', text: 'The Cost of Official Subscriptions' },
      { type: 'p', text: 'To legally watch every match, Irish fans often have to pay upwards of €80 per month combining Sky Sports, TNT, and terrestrial packages.' },
      { type: 'h2', text: 'The Ultimate Sports Solution' },
      { type: 'p', text: 'With a premium IPTV subscription, you get all TNT Sports, Sky Sports, Astro SuperSport, BEIN Sports, and Optus Sport channels in up to 4K resolution. This means you will never miss a single Champions League, Europa League, or Premier League match again, all in one package.' }
    ]
  },
  'iptv-freezing-virgin-media-ireland': {
    title: 'Fix IPTV Freezing on Virgin Media & Eir Broadband',
    date: '2024-05-05',
    category: 'Troubleshooting',
    image: '/images/blog/iptv-freezing-virgin-media-ireland.webp',
    content: [
      { type: 'p', text: 'Virgin Media and Eir are Ireland\'s most popular broadband providers, but they are notorious for strict traffic management during major sporting events, leading to IPTV freezing.' },
      { type: 'h2', text: 'Change Your DNS Settings' },
      { type: 'p', text: 'Sometimes, ISP-provided DNS servers are slow. Changing your device\'s DNS to Google (8.8.8.8) or Cloudflare (1.1.1.1) can dramatically improve connection stability to IPTV servers.' },
      { type: 'h2', text: 'The VPN Solution' },
      { type: 'p', text: 'If DNS changes do not work, your ISP is actively inspecting and throttling your packets. Using a VPN like ExpressVPN or NordVPN encrypts the data, making it impossible for Virgin Media or Eir to know you are streaming IPTV, completely stopping the throttling.' }
    ]
  },
  'smart-tv-iptv-apps-lg-samsung': {
    title: 'Best IPTV Apps for Samsung & LG Smart TVs in Ireland',
    date: '2024-05-20',
    category: 'Guides',
    image: '/images/blog/smart-tv-iptv-apps-lg-samsung.webp',
    content: [
      { type: 'p', text: 'If you do not want to buy an external device like a Firestick, you can download excellent IPTV applications directly on your Samsung Tizen or LG WebOS Smart TV.' },
      { type: 'h2', text: 'IBO Player' },
      { type: 'p', text: 'IBO Player is currently the most reliable app for modern Smart TVs. It has a fast interface, handles large playlists effortlessly, and offers a 7-day free trial (after which it costs €8 for a lifetime activation).' },
      { type: 'h2', text: 'Smarters Player Lite' },
      { type: 'p', text: 'Available on many regional App Stores, this is a free and reliable alternative. It offers the classic IPTV Smarters interface directly on your TV.' },
      { type: 'h2', text: 'Important Note' },
      { type: 'p', text: 'Smart TVs have limited processing power. For the absolute best, lag-free experience (especially with massive 100,000+ VOD libraries), we always recommend using a dedicated 4K Firestick over built-in TV apps.' }
    ]
  },
"""

def update_file(filename, marker_str, new_content):
    with open(filename, 'r') as f:
        content = f.read()
    
    if marker_str in content:
        updated = content.replace(marker_str, marker_str + "\n" + new_content)
        with open(filename, 'w') as f:
            f.write(updated)
        print(f"Updated {filename} successfully.")
    else:
        print(f"Could not find marker in {filename}")

update_file('src/pages/blog/index.astro', 'const posts = [', new_posts_index)
update_file('src/pages/blog/[slug].astro', 'const articles = {', new_articles_slug)

