
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const 
    console.log('Contact Form Submission:', { name, email, message });
    alert('Message sent successfully! Thank you, ' + name + '.');

    // Reset form
    event.target.reset();
    return false;
  }