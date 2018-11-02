var button = document.getElementById('send-button')
var buzon = document.getElementById('buzon')

button.addEventListener('click', function () {
  var mensage = document.createElement('li')
  buzon.appendChild(mensage)
})