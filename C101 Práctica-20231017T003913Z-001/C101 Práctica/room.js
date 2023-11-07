const firebaseConfig = {
    apiKey: "AIzaSyDP7h5P_QVECM2enjofcZUJ3zM9Is62UK8",
    authDomain: "red-social-23c0f.firebaseapp.com",
    databaseURL: "https://red-social-23c0f-default-rtdb.firebaseio.com",
    projectId: "red-social-23c0f",
    storageBucket: "red-social-23c0f.appspot.com",
    messagingSenderId: "923378359767",
    appId: "1:923378359767:web:d5db2c6f5f0093b2a03f92"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child("room_name").update({
    purpose : "adding room"
});

localStorage.setItem("room_name", room_name);
window.location = "page.html"
  }


  function getData(){

  }

  function redirectToRoomName(name){

    localStorage.setItem("room_name",name);
    window.location = "page.html"
  }

  function logout(){
    localStorage.removeTtem("user_name");
    localStorage.removeItem("room_name");
    window.location="practice.html;"
  }