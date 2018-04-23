function setup() {
    let bird = document.getElementById("bird");
    let above = document.getElementById("above");
    let below = document.getElementById("below");

    document.addEventListener("keydown", girSpeed);

    let ypos = 150;
    let speed = 0;

    function girSpeed(event) {
        speed = speed + 10; 
    }

    setInterval(moveStuff, 40);

    function moveStuff() {
        ypos = ypos - speed; 
        speed = speed - 0.2;
        bird.style.top = ypos + "px";

    }

}