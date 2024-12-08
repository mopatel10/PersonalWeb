// Listen for the buttom click
document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get the elements and assign to variables
  const form = event.target;
  const submitButton = document.getElementById('submit');
  const spinner = document.createElement('div');
  spinner.className = 'spinner';

  // Add the spinner to the button
  submitButton.appendChild(spinner);
  submitButton.classList.add('loading'); 

  // Get data from form
  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
  };

  // try fetching the serverless function response deployed on netlify
  try {
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Simulate success for demonstration
      setTimeout(() => {
        alert('Message sent successfully!');
        form.reset();
      }, 1000);
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
  } finally {
    // Remove the spinner and reset the button state
    spinner.remove();
    submitButton.classList.remove('loading');
  }
});
