import urllib.request
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

images = {
    'best-iptv-ireland-2024.webp': 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop',
    'watch-rte-player-abroad.webp': 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?q=80&w=1200&auto=format&fit=crop',
    'gaago-vs-iptv.webp': 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop',
    'iptv-smarters-firestick-ireland.webp': 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1200&auto=format&fit=crop',
    'is-iptv-safe-ireland.webp': 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1200&auto=format&fit=crop',
    'best-broadband-iptv-ireland.webp': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
    'tivimate-premium-setup-guide.webp': 'https://images.unsplash.com/photo-1558485292-62283a0429f9?q=80&w=1200&auto=format&fit=crop',
    'watch-champions-league-ireland.webp': 'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=1200&auto=format&fit=crop',
    'iptv-freezing-virgin-media-ireland.webp': 'https://images.unsplash.com/photo-1611095790444-1fd816922247?q=80&w=1200&auto=format&fit=crop',
    'smart-tv-iptv-apps-lg-samsung.webp': 'https://images.unsplash.com/photo-1593789382576-54f489574d26?q=80&w=1200&auto=format&fit=crop'
}

for name, url in images.items():
    path = os.path.join('public/images/blog', name)
    if not os.path.exists(path):
        print(f"Downloading {name}...")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response, open(path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)

print("Done!")
