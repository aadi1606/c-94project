var firebaseConfig = {
    apiKey: "AIzaSyBNGbMwJGqgKcVGrdtYnoNjJUNDP5dekek",
    authDomain: "c-934567project.firebaseapp.com",
    databaseURL: "https://c-934567project-default-rtdb.firebaseio.com",
    projectId: "c-934567project",
    storageBucket: "c-934567project.appspot.com",
    messagingSenderId: "611656922444",
    appId: "1:611656922444:web:47b030ba641354697ecbe9",
    measurementId: "G-4TFPHDD57P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "login_page.html";
}