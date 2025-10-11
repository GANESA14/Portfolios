// Function to check if the device is likely a TV
function isTV() {
    const width = window.screen.width;
    const height = window.screen.height;
    const ua = navigator.userAgent.toLowerCase();

    // Check for common TV keywords in user agent
    const tvKeywords = ["smart-tv", "appletv", "googletv", "hbbtv", "netcast", "viera", "roku", "dlnadoc"];

    const isTVUA = tvKeywords.some(keyword => ua.includes(keyword));

    // Check for large screen size (e.g., width >= 1920 for 1080p TVs)
    const isLargeScreen = width >= 1920 || height >= 1080;

    return isTVUA || isLargeScreen;
}

if (isTV()) {
    window.location.href = "trash.html";
} else {
    window.location.href = "index.html";
}
