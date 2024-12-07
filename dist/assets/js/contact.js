document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const form = event.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  document.getElementById('spinner').style.display = 'block';
  form.style.display = 'none';

  try {
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    // Log the raw response
    const result = await response.json();  // Ensure the response is parsed as JSON
    console.log(result);  // Log the result to see the response
    document.getElementById('response-message').textContent = result.message;
  } catch (error) {
    console.error(error);  // Log the error for debugging
    document.getElementById('response-message').textContent = 'An error occurred.';
  } finally {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('response-message').style.display = 'block';
  }
});
