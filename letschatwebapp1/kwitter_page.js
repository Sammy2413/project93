//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBWgUZswdCSlmo-Co9D4m1Mm8PcKMpSlWc",
      authDomain: "kwitter-b2bfc.firebaseapp.com",
      databaseURL: "https://kwitter-b2bfc-default-rtdb.firebaseio.com",
      projectId: "kwitter-b2bfc",
      storageBucket: "kwitter-b2bfc.appspot.com",
      messagingSenderId: "563578355264",
      appId: "1:563578355264:web:0f0c5851a15a8b45b6a9a5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "kwitter.html";
}

function send() 
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            });

            document.getElementById("msg").value = "";
}