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
    let divListe = document.getElementById("liste");
    let ref = firebase.database().ref("nations");

    function visLand(snapshot) {
        let navn = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${navn}</h4>
            <ul>
             <li>Capital ${info.capital}
             <li>${info.title} ${info.leader}
             <li> Perks
                <ul>
                    <li> Money: ${info.perk.money}
                    <li> Move: ${info.perk.move}
                    <li> War: ${info.perk.war}
                    <li> Science: ${info.perk.science}
                </ul>
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visLand);

}