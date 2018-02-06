function setup() {
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC2_VQZHpz8gIZ5nCpBcJV9PlFxy27r8KY",
    authDomain: "webchat-28818.firebaseapp.com",
    databaseURL: "https://webchat-28818.firebaseio.com",
    projectId: "webchat-28818",
    storageBucket: "webchat-28818.appspot.com",
    messagingSenderId: "120001627940"
  };
  firebase.initializeApp(config);
    let divListe = document.getElementById("liste");

    let ref = firebase.database().ref("medlem");

    function visMedlem(snapshot) {
        let medlemnr = snapshot.key;
        let info = snapshot.val();
        divListe.innerHTML += `
          <div>
            <h4>${medlemnr}</h4>
            <ul>
             <li>${info.fornavn} ${info.etternavn}
             <li>epost : ${info.epost}
             <li>adresse : ${info.adresse}
            </ul>
          </div>
        `;
    }
    ref.on("child_added", visMedlem);

}