const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const isValidEmail = (email) => {
  // Simple regex for validating an email address
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// ONLY POST method allowed
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message, subject } = JSON.parse(event.body);

  // Check if the email is valid; if not, set a default replyTo email
  const replyToEmail = isValidEmail(email) ? email : 'no-reply@yourdomain.com';

  // Create the email content 
  const emailContent = {
    to: ['mohammed.h.p2003@gmail.com', 'adam.kunz@durhamcollege.ca'],
    from: 'mohammed.h.p@hotmail.com',
    replyTo: email, 
    subject: `New Contact Form Submission from ${name}`,
    text: `From: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\n`,
  };

  try {
    await sgMail.send(emailContent);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error:', error.response ? error.response.body : error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send email.',
        details: error.response ? error.response.body : error.message,
      }),
    };
  }
};
