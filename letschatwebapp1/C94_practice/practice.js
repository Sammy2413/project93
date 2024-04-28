
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyB91SSp_L2ng5GjCxI9_m3MxQo1bXoiOTo",
    authDomain: "kwitterpractice-ef70b.firebaseapp.com",
    databaseURL: "https://kwitterpractice-ef70b-default-rtdb.firebaseio.com",
    projectId: "kwitterpractice-ef70b",
    storageBucket: "kwitterpractice-ef70b.appspot.com",
    messagingSenderId: "632787880699",
    appId: "1:632787880699:web:8bf7b88a6ceb6afdde7e5e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}