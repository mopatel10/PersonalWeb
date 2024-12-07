document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const form = event.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  // Show spinner and hide the form
  document.getElementById('spinner').style.display = 'block';
  form.style.display = 'none';

  // Show spinner text, hide other messages
  document.getElementById('response-message').style.display = 'block';
  document.getElementById('thank-you-message').style.display = 'none';
  document.getElementById('error-message').style.display = 'none';

  try {
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();  // Ensure the response is parsed as JSON
    console.log(result);  // Log the result to see the response

    // Display success message
    document.getElementById('thank-you-message').style.display = 'block';
  } catch (error) {
    console.error(error);  // Log the error for debugging
    // Display error message
    document.getElementById('error-message').style.display = 'block';
  } finally {
    // Hide the spinner after response is received
    document.getElementById('spinner').style.display = 'none';
  }
});
