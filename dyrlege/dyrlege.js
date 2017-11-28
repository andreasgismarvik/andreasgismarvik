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

    let ref = firebase.database().ref("kunde");

    function visKunder(snapshot) {
        let kundenr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>Kunde nr ${kundenr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>Epost : ${info.epost}
             <li>Mobil ${info.mobil}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visKunder);

}