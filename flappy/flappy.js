function setup() {

    const MAXSPEED = 15;

    let bird = document.getElementById("bird");
    let above = document.getElementById("above");
    let below = document.getElementById("below");

    document.addEventListener("keydown", girSpeed);

    bird.ypos = 235;
    bird.xpos = window.innerWidth / 2 - 50;
    bird.speed = 0;

    above.xpos = window.innerWidth;
    below.xpos = window.innerWidth;

    const GAP = 235;

    const SPENN = window.innerHeight - 235;

    let poeng = 0;
    let divPoeng = document.getElementById("poeng");

    let top;

    function hoydeTilSoyler() {
        top = Math.floor(Math.random() * SPENN);
        above.style.height = top + "px";
        below.style.height = (window.innerHeight - GAP - top) + "px";
    }

    hoydeTilSoyler();

    function girSpeed(event) {
        bird.speed = bird.speed + 8;
    }

    let timer = setInterval(moveStuff, 9);

    function moveStuff() {
        bird.ypos = bird.ypos - bird.speed;
        bird.speed = bird.speed - 0.1;
        if (bird.speed > MAXSPEED) {
            bird.speed = MAXSPEED;
        }
        if (bird.speed < -MAXSPEED) {
            bird.speed = -MAXSPEED;
        }
        if (bird.ypos < 0) {
            bird.ypos = 0;
            bird.speed = 0;
        }
        if (bird.ypos > window.innerHeight - 100) {
            bird.ypos = window.innerHeight - 100;
            bird.speed = 0;
        }
        bird.style.top = bird.ypos + "px";

        above.xpos = above.xpos - 5;
        if (above.xpos < 0) {
            above.xpos = window.innerWidth;
            poeng = poeng + 10;
            divPoeng.innerHTML = "Points: " + poeng.toFixed(0);
            hoydeTilSoyler();
            new Audio('coin.mp3').play()

        }
        above.style.left = above.xpos + "px";

        below.xpos = below.xpos - 5;
        if (below.xpos < 0) {
            below.xpos = window.innerWidth;

        }
        below.style.left = below.xpos + "px";

        if (bird.xpos > above.xpos - 100 &&
            bird.xpos < above.xpos + 80 &&
            bird.ypos < top
        ) {


            clearInterval(timer);
            document.addEventListener("keydown", startPaaNy);
            //poeng = poeng - 0.1;
            //divPoeng.innerHTML = "Points: " + poeng.toFixed(0);
            //poeng -= 1;

            //bird.classList.add("hidden")


        }


    }


}