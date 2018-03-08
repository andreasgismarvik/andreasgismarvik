// @ts-check
function setup() {

    var config = {
        apiKey: "AIzaSyCtM_RZahKwdzmSF9AV8elR7u0NLtzYXIc",
        authDomain: "supreme-76c54.firebaseapp.com",
        databaseURL: "https://supreme-76c54.firebaseio.com",
        projectId: "supreme-76c54",
        storageBucket: "",
        messagingSenderId: "525954289649"
    };


    firebase.initializeApp(config);

    let database = firebase.database()

    let divBestillinger = document.getElementById("bestillinger");

    let ref = firebase.database().ref("order");

    function visBestillinger(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divBestillinger.innerHTML += `
          <div>
            <h4>First name: ${navn}</h4>
            <ul>
             <li>Size: ${info.stoerrelse}
             <li>Quantity: ${info.antall}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visBestillinger);


let selectStoerrelse = document.getElementById("stoerrelse");
let selectAntall = document.getElementById("antall");
let inpNavn = document.getElementById("navn");

let btnOrder = document.getElementById("order");
btnOrder.addEventListener("click", lagreData);

function lagreData(snapshot) {
    let stoerrelse = selectStoerrelse.value;
    let antall = selectAntall.value;
    let navn = inpNavn.value;
    let ref = database.ref("order/" + navn)
    ref.push({
        stoerrelse,
        antall,
        navn
    });
}
}
