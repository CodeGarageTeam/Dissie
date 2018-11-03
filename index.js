var user = {}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCxXq7SDRwsgYAuY1QP7LmBWj_ViLf_u_U",
  authDomain: "dissie-app.firebaseapp.com",
  databaseURL: "https://dissie-app.firebaseio.com",
  projectId: "dissie-app",
  storageBucket: "dissie-app.appspot.com",
  messagingSenderId: "321471252260"
};
firebase.initializeApp(config);

// FirebaseUI config.
var uiConfig = {
signInSuccessUrl: '<url-to-redirect-to-on-success>',
signInOptions: [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID
],
// Terms of service url/callback.
tosUrl: () => {},
// Privacy policy url/callback.
privacyPolicyUrl: () => {}
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (user) {
      user = firebaseUser
      // User is signed in.
      // var displayName = user.displayName
      // var email = user.email
      // var photoURL = user.photoURL
      // document.getElementById('sign-in-status').textContent = 'Signed in'
      // document.getElementById('sign-in').textContent = 'Sign out'
      // document.getElementById('account-details').textContent = JSON.stringify({
      //     displayName: displayName,
      //     email: email,
      //     photoURL: photoURL,
      // })
  } else {
      // User is signed out.
      document.getElementById('sign-in-status').textContent = 'Signed out'
      document.getElementById('sign-in').textContent = 'Sign in'
      document.getElementById('account-details').textContent = 'null'
  }
}, error => console.log(error)
)

// final of firebase configuration ----


var button = document.getElementById('send-button')
var input = document.getElementById('new-message-input')

button.addEventListener('click', addMessage)
input.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    addMessage()
  }
})

// crear nuevo mensage
function addMessage() {
  var buzon = document.getElementById('buzon')
  var mensage = document.createElement('li')
  var img = document.createElement('img')
  var container = document.createElement('div')
  var name = document.createElement('strong')
  var text = document.createElement('p')

  img.className = 'imagen1'
  img.src = user.photoURL
  name.innerHTML = user.displayName
  text.innerHTML = input.value
  container.appendChild(name)
  container.appendChild(text)

  // reseteando el input
  input.value = ''
  // mando el mensage
  mensage.appendChild(img)
  mensage.appendChild(container)
  buzon.appendChild(mensage)
}