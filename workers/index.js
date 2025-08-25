export default {
  async fetch(request, env, ctx) {
    if (request.method === 'POST') {
      const data = await request.json();
      console.log("Received data:", data);

      await env.MY_DATABASE.prepare(
        `INSERT INTO submissions (value) VALUES (?)`
      ).bind(data.userInput).run();

      return new Response("Stored", { status: 200 });
    }

    return new Response("Send a POST request.");
  }
}