document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const form = event.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
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
  
      const result = await response.json();
      document.getElementById('response-message').textContent = result.message;
    } catch (error) {
      document.getElementById('response-message').textContent = 'An error occurred.';
    } finally {
      document.getElementById('spinner').style.display = 'none';
      document.getElementById('response-message').style.display = 'block';
    }
  });
  