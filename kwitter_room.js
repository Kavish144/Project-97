

  
var firebaseConfig = {
  apiKey: "AIzaSyCCtwkSWXXSGyh4dMc1h5P8gc4Tz3j67zc",
  authDomain: "kwitterapp-62153.firebaseapp.com",
  databaseURL: "https://kwitterapp-62153-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-62153",
  storageBucket: "kwitterapp-62153.appspot.com",
  messagingSenderId: "582857285147",
  appId: "1:582857285147:web:65aa45b67c2daeb0c4e2be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");

document.getElementById("user_name"),innerHTML = "Welcome " + user_name + "!";

function add_room() {
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child("room_name").update({purpose:"adding room name"});

localStorage.setItem("room_name", room_name);

window.location="kwitter_page.html";
} 




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name- " + Room_names);

  row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
  
  document.getElementById("output").innerHTML  += row;

        
  //End code
  });});}
getData();

function redirectToRoomName(name) {
console.log(name);

localStorage.setItem("room_name", name);

window.location="kwitter_page.html";


}

function log_out() {
localStorage.removeItem("user_name");

localStorage.removeItem("room_name");

window.location.replace("kwitter.html");
}


