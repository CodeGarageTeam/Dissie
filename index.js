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
  signInSuccessUrl: () => false,
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
  document.getElementById('mainchat-loader').classList.remove('active')
  
  if (firebaseUser) {
    user = firebaseUser
    document.getElementById('firebaseui-auth-container').classList.add('hide')
    document.getElementById('logout-button').classList.remove('hide')
    document.getElementById('buzon').classList.remove('hide')
    document.getElementById('footer').classList.remove('hide')
  } else {
    // User is signed out.
    document.getElementById('firebaseui-auth-container').classList.remove('hide')
    document.getElementById('logout-button').classList.add('hide')
    document.getElementById('buzon').classList.add('hide')
    document.getElementById('footer').classList.add('hide')
  }
}, error => console.log(error))

document.getElementById('logout-button').addEventListener('click', () => firebase.auth().signOut())

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
  name.innerHTML = user.displayName + 'probando'
  text.innerHTML = input.value
  container.appendChild(name)
  container.appendChild(text)

  // reseteando el input
  input.value = ''
  // mando el mensage
  mensage.appendChild(img)
  mensage.appendChild(container)
  buzon.appendChild(mensage)

  $('#buzon').animate({scrollTop: $('#buzon').prop("scrollHeight")}, 500)
}
