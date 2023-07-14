document.addEventListener('keydown', function(e) {
    switch (e.key) {
        case "PageUp":
            jump("header");
            break;
        case "ArrowUp":
            jump("header");
            break;

        case "PageDown":
            jump("talk");
            break;
        case "ArrowDown":
            jump("talk");
            break;
    }
});

function jump(h){
    var url = location.href;               //Save down the URL without hash.
    location.href = "#"+h;                 //Go to the target element.
    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
}