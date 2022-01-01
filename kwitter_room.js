
var firebaseConfig = {
      apiKey: "AIzaSyDSnXMIeV76LTGlqMNIoFUFENIepiUW3qo",
      authDomain: "kwitter-525ea.firebaseapp.com",
      databaseURL: "https://kwitter-525ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-525ea",
      storageBucket: "kwitter-525ea.appspot.com",
      messagingSenderId: "479960351069",
      appId: "1:479960351069:web:b33a98338ee9f4731668b4",
      measurementId: "G-4M65T4FL2X"
    };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!🥳😁😊🎉🎊";

function addRoom(){

room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child("room_name").update({

      pupose: "adding room name"

});

localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";


}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row= "<div class='room_name' id = " + Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";

}

function redirectToRoomName(name){

console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html"

}