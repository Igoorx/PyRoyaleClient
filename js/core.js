var VERSION = (function() {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    return myScript.src.split("?v=").slice(-1)[0];
})();

function include(script) {
    var elem = document.createElement("script");
    elem.setAttribute("src", script+"?v="+VERSION);
    elem.setAttribute("type", "text/javascript");
    document.body.appendChild(elem);
}

include("js/server.js");
include("js/url.js");
include("js/game.min.js");
