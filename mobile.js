var button = document.getElementById('send-button')
var buzon = document.getElementById('buzon')

button.addEventListener('click', function () {
  var mensage = document.createElement('LI')
  buzon.appendChild(mensage)
})