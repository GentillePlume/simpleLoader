/*
##################################################
                    CONFIG
##################################################
*/

// Loader path
var loaders_path = "AmethystLoader/loaders/";
var loader_image = "gears.svg";

// Message to display after the content loader
var loader_text = false;
var loader_text_content = "";

/*
##################################################
                    ENGINE
##################################################
*/

var overlay = document.createElement("div");
overlay.setAttribute("id", "slOverlay");
$("body")[0].appendChild(overlay);

var loader = document.createElement("img");
loader.setAttribute("id", "slLoader");
loader.setAttribute("src", loaders_path + loader_image);
//loader.setAttribute("class", "animated jackInTheBox");
$("body")[0].appendChild(loader);

overlay.style.transition = "opacity " + 1 + "s" + " ease-in-out 0s";
// loader.style.transition = "opacity " + 1 / 2 + "s" + " ease-in-out 0s";

$('*').waitForImages(true).done(function() {

  overlay.style.opacity = 0;
  loader.style.opacity = 0;

  setTimeout(function() {
    overlay.style.display = "none";
    loader.style.display = "none";
  }, 1000);
});