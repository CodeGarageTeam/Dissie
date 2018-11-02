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

  img.src = 'photos/pilot.png'
  img.className = 'imagen1'
  name.innerHTML = 'Santy'
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