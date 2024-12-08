document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const form = event.target;
  const spinner = document.getElementById('spinner');
  const thankYouMessage = document.getElementById('thank-you-message');
  const errorMessage = document.getElementById('error-message');

  // Reset visibility of messages and show spinner
  thankYouMessage.style.display = 'none';
  errorMessage.style.display = 'none';
  spinner.style.display = 'block';

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
  };

  try {
    console.log('Sending request...');
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate server delay
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Response received:', result);
      thankYouMessage.style.display = 'block';
      form.reset();
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error(error);
    errorMessage.style.display = 'block';
  } finally {
    spinner.style.display = 'none';
  }
});
