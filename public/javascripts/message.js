// $(() => {
//   $("#send").click(() => {
//     sendMessage({
//       name: $("#name").val(),
//       message: $("#message").val()
//     })
//   })
//   getMessages()
// })

// function addMessages(message) {
//   $('#messages').append(`
//       <h4> ${message.name} </h4>
//       <p>  ${message.message} </p>`)
// }

// function getMessages() {
//   $.get('http://localhost:3000/messages', (data) => {
//     data.forEach(addMessages)
//   }
//   )
// }

// function sendMessage(message) {
//   $.post('http://localhost:3000/messages', message)
// }

const sendButton = document.querySelector('#send')
const messages = document.querySelector('#messages')

function addMessages(message) {
  const h4 = document.createElement('h4')
  h4.innerHTML = `${message.name}`

  const p = document.createElement('p')
  p.innerHTML = `${message.message}`

  messages.appendChild(h4)
  messages.appendChild(p)
}

function getMessage() {
  messages.innerHTML = ''
  return axios.get('/messages')
    .then(({ data }) => data.forEach(item => addMessages(item)))
}

function sendMessage(data) {
  const { name, message } = data
  return axios.post('/messages', { name, message })
}

getMessage()

sendButton.addEventListener('click', function onSendButtonClicked() {
  const name = document.querySelector('#name').value
  const message = document.querySelector('#message').value

  axios.post('/messages', { name, message })
    .then(() => getMessage())
})