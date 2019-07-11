function print(text) {
    var elem = document.createElement("p");
    elem.innerText = text;
    elem.setAttribute("class", "debugLog");
    document.getElementById("log").appendChild(elem);
}
var VERSION = (function() {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    return myScript.src.split("?v=").slice(-1)[0];
})();

var scripts = ["js/server.js", "js/url.js", "js/game.js"]

function loadNext() {
    if (scripts.length == 0) return;
    var next = scripts.shift();
    print("loading "+next.split("/").pop()+" started");
    $.ajax({
        type: "GET",
        url: next + '?v=' + VERSION, 
        success: function() {
            loadNext();
        },
        dataType: "script",
        cache: true
    });
}

print("loading core.js finished");

loadNext();
