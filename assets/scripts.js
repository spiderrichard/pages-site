document.getElementById('myForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const userInput = document.getElementById('userInput').value;

  const response = await fetch('https://pages-site.spiderrichard.workers.dev', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userInput })
  });

  const messageEl = document.getElementById('responseMessage');

  if (response.ok) {
    messageEl.textContent = "✅ Successfully submitted!";
    messageEl.style.color = 'green';
  } else {
    messageEl.textContent = "❌ Submission failed.";
    messageEl.style.color = 'red';
  }
});