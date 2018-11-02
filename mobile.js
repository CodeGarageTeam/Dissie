var button = document.getElementById('send-button')
var input = document.getElementById('new-message-input')

button.addEventListener('click', addMessage)
input.addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
    addMessage()
  }
})

// crear nuevo mensage
function addMessage() {
  var buzon = document.getElementById('buzon')
  var mensage = document.createElement('li')
  // accediendo a lo q escribi
  mensage.innerHTML = input.value
  // reseteando el input
  input.value = ''
  // mando el mensage
  buzon.appendChild(mensage)

}