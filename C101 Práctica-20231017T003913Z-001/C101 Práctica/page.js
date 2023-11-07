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

  function send(){
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
      name:user_name,
      message: msg,
      like:0
    })
    document.getElementById("msg").value = " ";
  }


  function getData() { firebase.database().ref("/"+room_name).on('value',
  function(snapshot) { document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { childkey = childSnapshot.key;
childDat = childSnapshot.val(); if(childkey != "purpose"){

  firebase_message_id=childkey;
  message_data = childData;

name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

name_with_tag = "<h4> " + name + "</h4>"
message_with_tag = "<h4 class='message_h4' "> + message + "</h4>";
like_button = "button class='btn btn-warning' id=" + firebase_message_id + 
" value=" + like + " onclick='updateLike(this.id)'> Likes: " + like + "</button>"

row = name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML += row;


}})})}
getData();

function updateLike(message_id){

  button_id = message_id;
lies=document.getElementById(button_id).value;
update_likes = Number(likes) + 1;

firebase.database().ref(room_name).child(message_id).update({
like:updated_likes
})
}
 function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("practice.html");
 }
