let destination = "";

try {
    // Grab the hash part of the URL and convert to a proper URL
    destination = new URL(location.hash.slice(1));

    // If protocol is missing, default to https
    if (!destination.protocol) {
        destination = new URL("https://" + destination.href);
    }
} catch (err) {
    alert(`Bad # string or bad URL. Got error:\n${err}`);
    throw err;
}

// Absolute path to Service Worker on GitHub Pages
const swPath = "/sitehubwiththechips/games/tiktok/s/uv-sw.js";
const swScope = "/sitehubwiththechips/games/tiktok/"; // scope to cover this folder

// Register the Service Worker
navigator.serviceWorker.register(swPath, { scope: swScope })
    .then(() => {
        // Open the proxied URL once SW is ready
        window.open(
            __uv$config.prefix + __uv$config.encodeUrl(destination.toString()),
            "_self"
        );
    })
    .catch((err) => {
        alert(`Encountered error:\n${err}`);
    });
