const fs = require('fs');
const path = require('path');

const indexFile = '/Users/Mc/Documents/antigravity/iptv-irish/src/pages/blog/index.astro';
const slugFile = '/Users/Mc/Documents/antigravity/iptv-irish/src/pages/blog/[slug].astro';

let indexContent = fs.readFileSync(indexFile, 'utf8');
let slugContent = fs.readFileSync(slugFile, 'utf8');

const newPosts = `  {
    slug: 'best-iptv-ireland-2026',
    title: 'Best IPTV Service in Ireland 2026: A Complete Buyer\\'s Guide',
    excerpt: 'Looking for the best IPTV service in Ireland? We compare the top providers for stability, channel selection, and price.',
    date: '2026-09-15',
    category: 'Guides',
    image: '/images/blog/best-iptv-ireland-2026.jpg'
  },
  {
    slug: 'watch-premier-league-iptv',
    title: 'How to Watch Premier League Football on IPTV in Ireland',
    excerpt: 'Never miss a match. Here is the ultimate guide to streaming Premier League, Champions League, and GAA on your IPTV service.',
    date: '2026-09-10',
    category: 'Sports',
    image: '/images/blog/watch-premier-league.jpg'
  },
  {
    slug: 'is-iptv-legal-ireland',
    title: 'Is IPTV Legal in Ireland? A Complete Guide',
    excerpt: 'Everything you need to know about the legality of IPTV services in Ireland and how to stream safely.',
    date: '2026-09-05',
    category: 'Information',
    image: '/images/blog/is-iptv-legal.jpg'
  },
  {
    slug: 'top-5-iptv-players-apple-tv',
    title: 'Top 5 IPTV Players for Apple TV in Ireland',
    excerpt: 'Got an Apple TV? These are the 5 best IPTV applications for tvOS that offer the smoothest streaming experience.',
    date: '2026-08-28',
    category: 'Setup Guide',
    image: '/images/blog/apple-tv-iptv.jpg'
  },
  {
    slug: 'avoid-buffering-live-sports',
    title: 'How to Avoid IPTV Buffering During Big Sports Events',
    excerpt: 'Tired of buffering during the big match? Follow these technical steps to ensure a flawless streaming experience.',
    date: '2026-08-22',
    category: 'Troubleshooting',
    image: '/images/blog/avoid-buffering.jpg'
  },
  {
    slug: 'iptv-vs-sky-ireland',
    title: 'IPTV vs Sky TV: Which is Better for Irish Homes?',
    excerpt: 'We compare the costs, channels, and reliability of traditional Sky TV against modern IPTV subscriptions.',
    date: '2026-08-15',
    category: 'Comparison',
    image: '/images/blog/iptv-vs-sky.jpg'
  },
  {
    slug: 'tivimate-setup-guide',
    title: 'Setting Up Tivimate for IPTV: The Ultimate Guide',
    excerpt: 'Tivimate is widely considered the best IPTV player for Android. Learn how to set it up and unlock its premium features.',
    date: '2026-08-10',
    category: 'Setup Guide',
    image: '/images/blog/tivimate-setup.jpg'
  },
  {
    slug: 'watch-uk-channels-ireland',
    title: 'How to Watch UK Channels on IPTV from Ireland',
    excerpt: 'Missing BBC, ITV, or Channel 4? Discover how easy it is to stream all UK terrestrial and premium channels from Ireland.',
    date: '2026-08-05',
    category: 'Guides',
    image: '/images/blog/uk-channels.jpg'
  },
  {
    slug: 'best-broadband-iptv',
    title: 'Best Broadband Providers in Ireland for IPTV Streaming',
    excerpt: 'A reliable IPTV experience starts with good internet. We rank the best Irish broadband providers for 4K streaming.',
    date: '2026-07-28',
    category: 'Information',
    image: '/images/blog/best-broadband.jpg'
  },
  {
    slug: 'iptv-smarters-pro-guide',
    title: 'IPTV Smarters Pro: Complete Configuration Guide',
    excerpt: 'Master IPTV Smarters Pro with our comprehensive guide to adding playlists, EPGs, and customising your layout.',
    date: '2026-07-20',
    category: 'Setup Guide',
    image: '/images/blog/iptv-smarters.jpg'
  },`;

indexContent = indexContent.replace('const posts = [', 'const posts = [\n' + newPosts);

// Add image rendering to index.astro
const indexCardHtml = `<div class="flex items-center gap-2 mb-3">`;
const newIndexCardHtml = `{post.image && (
              <div class="w-full h-48 rounded-xl overflow-hidden mb-4 border border-white/5 shadow-lg">
                <img src={post.image} alt={post.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            )}
            <div class="flex items-center gap-2 mb-3">`;
indexContent = indexContent.replace(indexCardHtml, newIndexCardHtml);

// Make sure category 'Sports', 'Information', 'Comparison', 'Guides' are added to categories array
indexContent = indexContent.replace("const categories = ['All', 'Setup Guide', 'Troubleshooting', 'Features'];", "const categories = ['All', 'Setup Guide', 'Troubleshooting', 'Features', 'Guides', 'Sports', 'Information', 'Comparison'];");

fs.writeFileSync(indexFile, indexContent);

const newSlugs = `'best-iptv-ireland-2026', 'watch-premier-league-iptv', 'is-iptv-legal-ireland', 'top-5-iptv-players-apple-tv', 'avoid-buffering-live-sports', 'iptv-vs-sky-ireland', 'tivimate-setup-guide', 'watch-uk-channels-ireland', 'best-broadband-iptv', 'iptv-smarters-pro-guide',`;
slugContent = slugContent.replace(`const slugs = [`, `const slugs = [\n    ${newSlugs}`);

const newArticlesContent = `'best-iptv-ireland-2026': {
    title: 'Best IPTV Service in Ireland 2026: A Complete Buyer\\'s Guide',
    date: '2026-09-15',
    category: 'Guides',
    image: '/images/blog/best-iptv-ireland-2026.jpg',
    content: [
      { type: 'p', text: 'Finding the best IPTV service in Ireland can be overwhelming. With hundreds of providers claiming to be the best, how do you choose? In this guide, we break down what to look for when choosing an IPTV provider in 2026.' },
      { type: 'img', src: '/images/blog/best-iptv-ireland-2026.jpg', alt: 'Best IPTV Ireland' },
      { type: 'h2', text: '1. Channel Stability and Anti-Freeze Technology' },
      { type: 'p', text: 'The most critical aspect of any IPTV service is stability. A provider can offer 100,000 channels, but if they buffer during a big match, they are useless. Look for providers that explicitly advertise anti-freeze technology and 99.9% uptime.' },
      { type: 'h2', text: '2. Dedicated Irish and UK Server Locations' },
      { type: 'p', text: 'For the lowest latency, your provider should have servers located close to you. Servers in Dublin, London, or Amsterdam generally provide the best performance for Irish users.' },
      { type: 'h2', text: '3. Quality over Quantity' },
      { type: 'p', text: 'Many providers boast about having over 50,000 live channels. In reality, you only watch a fraction of these. Prioritise services that focus on high-quality (FHD/4K) streams for the channels you actually care about, like sports and documentaries.' }
    ]
  },
  'watch-premier-league-iptv': {
    title: 'How to Watch Premier League Football on IPTV in Ireland',
    date: '2026-09-10',
    category: 'Sports',
    image: '/images/blog/watch-premier-league.jpg',
    content: [
      { type: 'p', text: 'For football fans in Ireland, keeping up with the Premier League often means subscribing to multiple expensive sports packages. IPTV offers an all-in-one alternative. Here is how to ensure you never miss a kickoff.' },
      { type: 'img', src: '/images/blog/watch-premier-league.jpg', alt: 'Watch Premier League IPTV' },
      { type: 'h2', text: 'Finding the Right Sports Channels' },
      { type: 'p', text: 'A good IPTV subscription will include all major sports networks. When looking for a provider, ask for a trial to verify the quality of these specific channels during live events.' },
      { type: 'h2', text: 'Understanding FPS (Frames Per Second)' },
      { type: 'p', text: 'For fast-paced sports like football or GAA, 50fps or 60fps is essential. Standard 25fps or 30fps streams will look choppy and can cause eye strain. Always check if the provider offers 50fps sports channels.' },
      { type: 'h2', text: 'Backup Channels' },
      { type: 'p', text: 'During massive events, even the best servers can get congested. Premium providers offer backup channels for major events to ensure you have a fallback option if your primary stream drops.' }
    ]
  },
  'is-iptv-legal-ireland': {
    title: 'Is IPTV Legal in Ireland? A Complete Guide',
    date: '2026-09-05',
    category: 'Information',
    image: '/images/blog/is-iptv-legal.jpg',
    content: [
      { type: 'p', text: 'The legality of IPTV is one of the most common questions we receive. The short answer is: the technology itself is perfectly legal, but how it is used can sometimes fall into a grey area.' },
      { type: 'img', src: '/images/blog/is-iptv-legal.jpg', alt: 'Is IPTV Legal in Ireland' },
      { type: 'h2', text: 'The Technology vs The Content' },
      { type: 'p', text: 'IPTV stands for Internet Protocol Television. It is just a delivery method. Major broadcasters like RTÉ and BBC use IPTV technology for their online players. Using an IPTV app is 100% legal.' },
      { type: 'h2', text: 'When Does it Become Illegal?' },
      { type: 'p', text: 'The issue arises when a service distributes copyrighted content without proper licensing. Users streaming content for personal use generally face less scrutiny than those hosting or reselling the services, but it is always recommended to use a VPN to protect your privacy online.' },
      { type: 'h2', text: 'Staying Safe Online' },
      { type: 'p', text: 'Always use a reputable VPN when streaming online content. This encrypts your traffic, protecting your data from ISP monitoring and malicious actors.' }
    ]
  },
  'top-5-iptv-players-apple-tv': {
    title: 'Top 5 IPTV Players for Apple TV in Ireland',
    date: '2026-08-28',
    category: 'Setup Guide',
    image: '/images/blog/apple-tv-iptv.jpg',
    content: [
      { type: 'p', text: 'Apple TV is arguably the most powerful streaming box on the market. Paired with the right IPTV app, it delivers an unmatched, buttery-smooth viewing experience.' },
      { type: 'img', src: '/images/blog/apple-tv-iptv.jpg', alt: 'Apple TV IPTV Players' },
      { type: 'h2', text: '1. IPTVX' },
      { type: 'p', text: 'Designed specifically for Apple devices, IPTVX offers a Netflix-style interface that looks stunning on a big screen. It supports iCloud sync across your Apple devices.' },
      { type: 'h2', text: '2. GSE Smart IPTV' },
      { type: 'p', text: 'A classic and versatile player. While the interface is a bit dated, its robust feature set and ability to handle massive playlists make it a reliable choice.' },
      { type: 'h2', text: '3. iPlayTV' },
      { type: 'p', text: 'Another Apple TV exclusive, iPlayTV is renowned for its clean interface and excellent EPG integration.' },
      { type: 'h2', text: '4. Snappters' },
      { type: 'p', text: 'A newer entrant that is gaining popularity for its modern design and ease of use. It is great for VOD content.' },
      { type: 'h2', text: '5. VLC Media Player' },
      { type: 'p', text: 'While not a dedicated IPTV app, VLC can play M3U playlists flawlessly. It lacks a pretty interface but makes up for it in reliability.' }
    ]
  },
  'avoid-buffering-live-sports': {
    title: 'How to Avoid IPTV Buffering During Big Sports Events',
    date: '2026-08-22',
    category: 'Troubleshooting',
    image: '/images/blog/avoid-buffering.jpg',
    content: [
      { type: 'p', text: 'There is nothing worse than the stream freezing just as a striker lines up for a penalty. Here is a technical checklist to ensure your IPTV setup is rock solid on match day.' },
      { type: 'img', src: '/images/blog/avoid-buffering.jpg', alt: 'Avoid Buffering IPTV' },
      { type: 'h2', text: 'Ditch the Wi-Fi' },
      { type: 'p', text: 'We cannot stress this enough: use an Ethernet cable. Wi-Fi is prone to interference from walls, microwaves, and neighbours. A wired connection guarantees maximum stability.' },
      { type: 'h2', text: 'Reboot Everything 30 Minutes Prior' },
      { type: 'p', text: 'Restart your router and your streaming device half an hour before the event begins. This clears the cache and establishes a fresh connection to your ISP.' },
      { type: 'h2', text: 'Adjust the Buffer Size in Your App' },
      { type: 'p', text: 'If your app (like Tivimate or IPTV Smarters) has a "buffer size" setting, increase it to Large or Extra Large. This causes a slight delay in the live feed but drastically reduces stuttering.' },
      { type: 'h2', text: 'Connect Your VPN to the Right Location' },
      { type: 'p', text: 'If your ISP throttles sports streams, activate your VPN. Connect to a server geographically close to you (e.g., Dublin or London) to maintain high speeds.' }
    ]
  },
  'iptv-vs-sky-ireland': {
    title: 'IPTV vs Sky TV: Which is Better for Irish Homes?',
    date: '2026-08-15',
    category: 'Comparison',
    image: '/images/blog/iptv-vs-sky.jpg',
    content: [
      { type: 'p', text: 'The traditional television landscape in Ireland is changing rapidly. Many households are ditching their expensive satellite subscriptions for IPTV. Let us look at how they compare.' },
      { type: 'img', src: '/images/blog/iptv-vs-sky.jpg', alt: 'IPTV vs Sky TV Ireland' },
      { type: 'h2', text: 'Cost Comparison' },
      { type: 'p', text: 'A comprehensive Sky package with Sports and Cinema can easily exceed €100 per month. Premium IPTV subscriptions typically cost between €10 and €15 per month for similar, or often greater, channel access.' },
      { type: 'h2', text: 'Hardware and Installation' },
      { type: 'p', text: 'Sky requires a dish installation and a proprietary set-top box. IPTV requires an internet connection and works on devices you likely already own (Smart TV, Firestick, Smartphone).' },
      { type: 'h2', text: 'Reliability' },
      { type: 'p', text: 'Sky TV is generally more resilient to internet outages, relying on satellite signals (though bad weather can interfere). IPTV is 100% dependent on your internet connection; if your broadband goes down, so does your TV.' }
    ]
  },
  'tivimate-setup-guide': {
    title: 'Setting Up Tivimate for IPTV: The Ultimate Guide',
    date: '2026-08-10',
    category: 'Setup Guide',
    image: '/images/blog/tivimate-setup.jpg',
    content: [
      { type: 'p', text: 'Tivimate is widely considered the gold standard for IPTV players on Android devices. It offers a traditional cable-box experience with modern features.' },
      { type: 'img', src: '/images/blog/tivimate-setup.jpg', alt: 'Tivimate Setup Guide' },
      { type: 'h2', text: 'Adding Your Playlist' },
      { type: 'p', text: 'Open Tivimate and select "Add Playlist". Choose "Xtream Codes Login" (recommended) and enter your Server URL, Username, and Password. Hit Next and wait for the channels to process.' },
      { type: 'h2', text: 'Customising the TV Guide' },
      { type: 'p', text: 'Go to Settings > EPG. Ensure your EPG source is updating automatically on app start. You can also adjust the timeline interval and font size for better readability on your TV.' },
      { type: 'h2', text: 'Hiding Unwanted Groups' },
      { type: 'p', text: 'A massive playlist can be overwhelming. Long-press on a channel group you do not watch, select "Manage Groups", and toggle off the ones you want to hide. This drastically cleans up your interface.' }
    ]
  },
  'watch-uk-channels-ireland': {
    title: 'How to Watch UK Channels on IPTV from Ireland',
    date: '2026-08-05',
    category: 'Guides',
    image: '/images/blog/uk-channels.jpg',
    content: [
      { type: 'p', text: 'Many Irish viewers love UK terrestrial television, but accessing it without a satellite dish can be tricky. IPTV solves this problem instantly.' },
      { type: 'img', src: '/images/blog/uk-channels.jpg', alt: 'Watch UK Channels Ireland' },
      { type: 'h2', text: 'The UK Channel Package' },
      { type: 'p', text: 'Virtually all premium IPTV services catering to the Irish market will include a comprehensive UK channel list. This includes all BBC regions, ITV, Channel 4, Channel 5, and their various spin-off channels.' },
      { type: 'h2', text: 'Catchup and VOD' },
      { type: 'p', text: 'Missing a show on BBC One? Your IPTV service likely has a Catchup feature allowing you to rewind the TV guide up to 7 days. Alternatively, many UK shows are added to the VOD library shortly after airing.' },
      { type: 'h2', text: 'Geoblocking Issues' },
      { type: 'p', text: 'Unlike using the official BBC iPlayer or ITVX apps from Ireland, which require a VPN to bypass geo-restrictions, an IPTV stream bypasses these apps entirely, delivering the broadcast feed directly to you.' }
    ]
  },
  'best-broadband-iptv': {
    title: 'Best Broadband Providers in Ireland for IPTV Streaming',
    date: '2026-07-28',
    category: 'Information',
    image: '/images/blog/best-broadband.jpg',
    content: [
      { type: 'p', text: 'Your IPTV experience is only as good as your broadband connection. Here are the top providers in Ireland equipped to handle 4K streaming demands.' },
      { type: 'img', src: '/images/blog/best-broadband.jpg', alt: 'Best Broadband for IPTV Ireland' },
      { type: 'h2', text: '1. Virgin Media' },
      { type: 'p', text: 'Known for their high-speed coaxial network, Virgin Media offers speeds up to 1Gbps in many urban areas. Their network handles high-bandwidth streaming exceptionally well.' },
      { type: 'h2', text: '2. SIRO-Based Providers (Vodafone, Sky, Digiweb)' },
      { type: 'p', text: 'SIRO is a joint venture delivering 100% fibre-to-the-building (FTTB). Providers using the SIRO network offer incredibly low latency, which is perfect for live sports streaming.' },
      { type: 'h2', text: '3. Eir (Fibre to the Home)' },
      { type: 'p', text: 'Eirs expanding FTTH network is excellent. However, avoid older FTTC (Fibre to the Cabinet) connections if you live far from the exchange, as speeds drop off significantly.' }
    ]
  },
  'iptv-smarters-pro-guide': {
    title: 'IPTV Smarters Pro: Complete Configuration Guide',
    date: '2026-07-20',
    category: 'Setup Guide',
    image: '/images/blog/iptv-smarters.jpg',
    content: [
      { type: 'p', text: 'IPTV Smarters Pro is one of the most popular apps across smart TVs, mobiles, and PCs. Its multi-screen feature and simple layout make it a fan favourite.' },
      { type: 'img', src: '/images/blog/iptv-smarters.jpg', alt: 'IPTV Smarters Pro Guide' },
      { type: 'h2', text: 'Login via Xtream Codes API' },
      { type: 'p', text: 'Always use the Xtream Codes API option if available. Enter any name in the first box, then input your username, password, and the portal URL. This method automatically loads VOD and EPG data.' },
      { type: 'h2', text: 'Using the Multi-Screen Feature' },
      { type: 'p', text: 'Want to watch four football matches at once? Select the Multi-Screen icon from the dashboard. Add a screen and select the channels you want to monitor. Note: You need a multi-connection subscription for this to work without buffering.' },
      { type: 'h2', text: 'Updating the EPG' },
      { type: 'p', text: 'If your TV guide is blank, go to Settings > EPG and tap "Update EPG". Smarters Pro does not always update this automatically, so manual refreshes are occasionally needed.' }
    ]
  },`;

slugContent = slugContent.replace(`const articles = {`, `const articles = {\n${newArticlesContent}`);

// Update the rendering logic in [slug].astro
const renderLogic = `      <article>
        {article.content.map((block, i) => {
          if (block.type === 'h2') return <h2 class="text-2xl font-bold text-white mt-12 mb-4">{block.text}</h2>;
          if (block.type === 'p') return <p class="text-[#8C96AA] leading-relaxed mb-4">{block.text}</p>;
          return null;
        })}
      </article>`;

const newRenderLogic = `      <article>
        {article.image && (
          <div class="w-full h-auto md:h-[400px] rounded-3xl overflow-hidden mb-12 border border-white/5 shadow-2xl relative">
            <div class="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent z-10"></div>
            <img src={article.image} alt={article.title} class="w-full h-full object-cover relative z-0" />
          </div>
        )}
        {article.content.map((block, i) => {
          if (block.type === 'h2') return <h2 class="text-2xl font-bold text-white mt-12 mb-4 font-['Space_Grotesk']">{block.text}</h2>;
          if (block.type === 'h3') return <h3 class="text-xl font-bold text-white mt-8 mb-3 font-['Space_Grotesk']">{block.text}</h3>;
          if (block.type === 'p') return <p class="text-[#8C96AA] leading-relaxed mb-6 text-lg">{block.text}</p>;
          if (block.type === 'img') return <div class="my-10"><img src={block.src} alt={block.alt || article.title} class="w-full h-auto rounded-2xl shadow-lg border border-white/5 object-cover" /></div>;
          return null;
        })}
      </article>`;

slugContent = slugContent.replace(renderLogic, newRenderLogic);

// Add the image to the top hero section or inside article (handled by newRenderLogic)
fs.writeFileSync(slugFile, slugContent);

console.log('Successfully updated blog entries!');
