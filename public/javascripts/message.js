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

function addMessages(message) {
  const messages = document.querySelector('#messages')

  messages.appendChild(`
      <h4> ${message.name} </h4>
      <p>  ${message.message} </p>
  `)
}

function getMessage() {
  return axios.get('/messages')
    .then(res => console.log(res))
}

function sendMessage(data) {
  const { name, message } = data
  return axios.post('/messages', { name, message })
}

getMessage()

sendButton.addEventListener('click', function onSendButtonClicked() {
  const name = document.querySelector('#name').value
  const message = document.querySelector('#message').value

  sendMessage({ name, message })
    .then(() => getMessage())
})