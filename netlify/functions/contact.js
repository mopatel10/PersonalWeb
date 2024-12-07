const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  const emailContent = {
    to: ['mohammed.h.p@hotmail.com'], //, 'adam.kunz+inft@durhamcollege.ca'
    from: 'no-reply@yourdomain.com',
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    text: `Message: ${message}\nFrom: ${name}\nEmail: ${email}`,
  };

  try {
    await sgMail.send(emailContent);
    return { statusCode: 200, body: JSON.stringify({ message: 'Email sent successfully!' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Failed to send email.' }) };
  }
};
