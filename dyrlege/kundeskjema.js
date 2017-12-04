function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB3bUAg4i2f43k_THFdUlNWm40FPd2EjYw",
        authDomain: "project-x-68b9e.firebaseapp.com",
        databaseURL: "https://project-x-68b9e.firebaseio.com",
        projectId: "project-x-68b9e",
        storageBucket: "project-x-68b9e.appspot.com",
        messagingSenderId: "360112061867"
    };
    firebase.initializeApp(config);
    let spanKunde = document.getElementById("kundevelger");
    let divDyr = document.getElementById("dyr");

    let ref = firebase.database().ref("kunde");

    ref.once("value").then(function (snapshot) {
        let kundene = snapshot.val();
        if (kundene) {
            let dropBox = makeDrop(kundene);
            spanKunde.innerHTML = dropBox;

            let drpKunde = document.getElementById("kundenr");
            drpKunde.addEventListener("change", visDyr);
        }
    });

    function visDyr(e) {
        let ref = firebase.database().ref("dyr");
        ref.once("value").then(function (snapshot) {
            let dyrene = snapshot.val();
            if (dyrene) {
                let dyrnr = Object.keys(dyrene);
                let dyrliste = `<ol>` +
                    dyrnr.map(e => `<li>${dyrene[e].navn} ${dyrene[e].art}</li>`).join("") +
                    `</ol>`;
                divDyr.innerHTML = dyrliste;

            }
        });
    }


    function makeDrop(kunder) {
        let box = '<select id="kundenr">';
        let kundenr = Object.keys(kunder);
        let navn = kundenr.map(e =>
            `<option values="${e}">${kunder[e].fornavn}</option>`);
        box += navn.join("") + "</select>";
        return box;
    }

}