exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
  
    try {
      const data = JSON.parse(event.body);
      
      // Example: Log the received data
      console.log('Received data:', data);
  
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submission received successfully!' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Something went wrong.' }),
      };
    }
  };
  