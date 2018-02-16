// This Js File is for the LoginPage only. 
$(document).ready(function() {
//Initialize Firebase 
  var config = {
    apiKey: "AIzaSyCYUufSPbXZUAxm11iLYNUxbcunW0U3G0c",
    authDomain: "nutri-9d5a7.firebaseapp.com",
    databaseURL: "https://nutri-9d5a7.firebaseio.com",
    projectId: "nutri-9d5a7",
    storageBucket: "nutri-9d5a7.appspot.com",
    messagingSenderId: "781548795850"
  };
  firebase.initializeApp(config);

  //Get Elements 
  var txtName = $('#txtName'); 
  var txtEmail = document.getElementById('txtEmail');
  var txtPassword = document.getElementById('txtPassword');
  if (txtEmail.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (txtPassword.length < 4) {
          alert('Please enter a password.');
          return;
        } 
  var btnLogin = document.getElementById('btnLogin'); 
  var btnSignUp = document.getElementById('btnSignUp'); 
  var btnLogout = document.getElementById('btnLogout');
//Hidden Name: 
$('.registerName').hide();
$('#btnSignUp').hide(); 


//hanldes Registration Button

$('#btnRegiter').on('click', function(){
  event.preventDefault(); 
  $('.registerName').show();
  $('#btnSignUp').show(); 
}); 

  //Handles Login/sign
  //add login event on click listener
  btnLogin.addEventListener('click', e=>{
    event.preventDefault(); 
    //Get email and pass 
    var email = txtEmail.value; 
    var pass = txtPassword.value; 
    var auth = firebase.auth(); 
    // sign in 
    var promise = auth.signInWithEmailAndPassword(email, pass); 
    promise.catch(e => alert(e.message)); 
    console.log("Logging in");
  }); 

//Hanldes SignUP
  btnSignUp.addEventListener('click', e=>{
    //Get email and pass
    //TO DO: check for real emails 
    event.preventDefault(); 
    // alert("You've Signed up"); 
    var email = txtEmail.value; 
    var pass = txtPassword.value; 
    var auth = firebase.auth(); 
    // sign in 
    var promise = auth.createUserWithEmailAndPassword(email, pass); 
    promise.catch(e => console.log(e.message));
  });  

// //Hanldes SignOut / Log Out 
//   btnLogout.addEventListener('click', e=>{
//     firebase.auth().signOut(); 
//     console.log('Users have logged Out');  
//   }); 

//add a realtime Listener /handles Realtime Logged in User
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    event.preventDefault(); 
    location.href = "landingpage.html"
    console.log(user); 
    console.log(email); 
    console.log(firebase.user + 'user'); 
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

});   
