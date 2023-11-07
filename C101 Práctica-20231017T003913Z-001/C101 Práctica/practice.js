
// ADD YOUR FIREBASE LINKS

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

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });

window.location="room.html"

}


