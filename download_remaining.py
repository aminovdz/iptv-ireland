import urllib.request
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

working_url = 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop'

images = [
    'tivimate-premium-setup-guide.webp',
    'watch-champions-league-ireland.webp',
    'iptv-freezing-virgin-media-ireland.webp',
    'smart-tv-iptv-apps-lg-samsung.webp'
]

for name in images:
    path = os.path.join('public/images/blog', name)
    if not os.path.exists(path) or os.path.getsize(path) == 0:
        print(f"Downloading {name}...")
        req = urllib.request.Request(working_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response, open(path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)

print("Done!")
