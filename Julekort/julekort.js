function setup() {
    let divSky = document.getElementById("sky");
    let divNissen = document.getElementById("nissen");
    let stars = divSky.querySelectorAll(".star");
    stars.forEach( stjerne => {
        stjerne.style.left = -75 + Math.floor(Math.random()*80) + "px";
        stjerne.style.top = -80 + Math.floor(Math.random()*80) + "px";
               
    });

    divNissen.addEventListener("click" , dropGifts);

    function dropGifts(e) {
        let pakke = document.createElement('div');
        pakke.className = "pakke";
        pakke.style.left = e.screenX + "px";
        pakke.style.top = (e.screenY - 50) + "px";
        divSky.appendChild(pakke);
    }
}

