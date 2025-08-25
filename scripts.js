console.log('Hello, world!');

document.getElementById('myForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from actually submitting the traditional way
  
    const userData = document.getElementById('userData').value;
  
    // Make a POST request to your Cloudflare Worker
    const response = await fetch('https://your-worker.subdomain.workers.dev/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userData })
    });
  
    if (response.ok) {
      console.log('Data sent successfully!');
    } else {
      console.error('Failed to