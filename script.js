/* Code listens/waits for a click on the button and then activates the function called "changing" */
document.getElementById('main-button').addEventListener('click', changing)
/* Upon clicking the button, the function displays whatever is typed into the text box called "typing" as an alert */
function changing () {
  alert(document.getElementById('typing').value)
}
