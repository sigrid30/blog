const resource = [ /* --- CSS --- */ '/blog/assets/css/style.css', /* --- JavaScripts --- */ '/blog/assets/js/dist/home.min.js', '/blog/assets/js/dist/page.min.js', '/blog/assets/js/dist/post.min.js', '/blog/assets/js/dist/categories.min.js', '/blog/assets/js/data/search.json', '/blog/app.js', '/blog/sw.js', /* --- HTML --- */ '/blog/index.html', '/blog/404.html', '/blog/categories/', '/blog/tags/', '/blog/archives/', '/blog/about/', /* --- Favicons --- */ '/blog/assets/img/favicons/android-chrome-192x192.png', '/blog/assets/img/favicons/android-chrome-512x512.png', '/blog/assets/img/favicons/apple-touch-icon.png', '/blog/assets/img/favicons/favicon-16x16.png', '/blog/assets/img/favicons/favicon-32x32.png', '/blog/assets/img/favicons/favicon.ico', // '/blog/assets/img/favicons/mstile-150x150.png', '/blog/assets/img/favicons/site.webmanifest', '/blog/assets/img/favicons/browserconfig.xml' ]; /* The request url with below domain will be cached */ const allowedDomains = [ 'sigrid30.github.io', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
