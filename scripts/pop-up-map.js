var mapBtn = document.querySelector(".contacts button");
var mapLink = document.querySelector(".footer-contacts a");
var mapPopup = document.querySelector(".pop-up-map");
var mapPopupCloseBtn = mapPopup.querySelector(".close-button");

mapBtn.addEventListener("click", function (evt){
    evt.preventDefault();
    mapPopup.classList.add("pop-up-show");
});

mapLink.addEventListener("click", function (evt){
    evt.preventDefault();
    mapPopup.classList.add("pop-up-show");
});

mapPopupCloseBtn.addEventListener("click", function (){
    mapPopup.classList.remove("pop-up-show");
});

window.addEventListener("keydown", function (evt){
    if (evt.key === "Esc" || evt.key === "Escape") {
        if (mapPopup.classList.contains("pop-up-show")){
            evt.preventDefault();
            mapPopup.classList.remove("pop-up-show");
        }
    }
});