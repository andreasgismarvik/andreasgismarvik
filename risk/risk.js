// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZaGLcZOn4BZBL96yFk7XE0D1CLCYMovg",
    authDomain: "risk-30034.firebaseapp.com",
    databaseURL: "https://risk-30034.firebaseio.com",
    projectId: "risk-30034",
    storageBucket: "",
    messagingSenderId: "708071404076"
  };
  firebase.initializeApp(config);

  let database = firebase.database();

  let land = database.ref("land");
  land.on("child_added", visLand)

  let kort = database.ref("kort");
  kort.on("child_added", visKort)

  let spiller = database.ref("spiller");
  kort.on("child_added", visKort)


  function visLand(snapshot) {  
      let land = snapshot.key;
      let divMain = document.getElementById("land");
      divMain.innerHTML += `<p>${land}</p>`
  }

  function visKort(snapshot) {
      let kort = snapshot.key;
      let divMain = document.getElementById("kort");
      divMain.innerHTML += `<p>${kort}</p>`
  }

  function visSpiller(snapshot) {
      let spiller = snapshot.key;
      let divMain = document.getElementById("kort");
      divMain.innerHTML += `<p>${kort}</p>`
  }