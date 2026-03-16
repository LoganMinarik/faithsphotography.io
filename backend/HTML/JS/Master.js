console.log("Loading master.js");
// Load additional JS files
function loadScript(url) {
    let script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    document.head.appendChild(script);
}


loadScript("Zoom.js");
console.log("Zoom.js loaded")
loadScript("Index.js");
console.log("Index.js loaded")

