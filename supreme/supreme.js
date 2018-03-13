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


    // @ts-ignore
    firebase.initializeApp(config);

    // @ts-ignore
    let database = firebase.database()

    let divOrders = document.getElementById("orders");

    // @ts-ignore
    let ref = firebase.database().ref("order");

    function visOrders(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divOrders.innerHTML += `
          <div>
            <h4>First name: ${info.navn}</h4>
            <ul>
             <li>Size: ${info.stoerrelse}
             <li>Quantity: ${info.antall}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visOrders);


    let selectStoerrelse = document.getElementById("stoerrelse");
    let selectAntall = document.getElementById("antall");
    let inpNavn = document.getElementById("navn");

    let btnOrder = document.getElementById("order");
    // @ts-ignore
    btnOrder.addEventListener("click", lagreData);

    function lagreData(snapshot) {
        // @ts-ignore
        let stoerrelse = selectStoerrelse.value;
        // @ts-ignore
        let antall = selectAntall.value;
        // @ts-ignore
        let navn = inpNavn.value;
        let ref = database.ref("order/")
        ref.push({
            stoerrelse,
            antall,
            navn
        });
    }

    document.getElementById("order").addEventListener("click", aktiver);

    function aktiver(e) {
        setTimeout(() => {
            document.getElementById("orderanimation").classList.remove("aktiv");
        }, 2000);
        document.getElementById("orderanimation").classList.add("aktiv");
    }

}