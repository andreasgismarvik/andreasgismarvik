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

    let divCart = document.getElementById("cart");

    let ref = firebase.database().ref("add");

    function visCart(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divCart.innerHTML += `
          <div>
            <h4>First name: ${navn}</h4>
            <ul>
             <li>Size: ${info.stoerrelse}
             <li>Quantity: ${info.antall}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visCart);


let selectStoerrelse = document.getElementById("stoerrelse");
let selectAntall = document.getElementById("antall");
let inpNavn = document.getElementById("navn");

let btnAddtobasket = document.getElementById("addtobasket");
btnAddtobasket.addEventListener("click", lagreData);

function lagreData(snapshot) {
    let stoerrelse = selectStoerrelse.value;
    let antall = selectAntall.value;
    let navn = inpNavn.value;
    let ref = database.ref("addtobasket/" + navn )
    ref.push({
        stoerrelse,
        antall,
        navn
    });
}
}
