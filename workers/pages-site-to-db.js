export default {
  async fetch(request, env) {
    if (request.method === 'POST') {
      const data = await request.json();

      // Here you would interact with your D1 database. This is just an example.
      const db = env.YOUR_D1_BINDING; // Make sure you have a binding set up for your D1 database.

      // Insert data into your D1 table. Let's say you have a table called 'user_data' with a 'data' column.
      await db.prepare('INSERT INTO user_data (data) VALUES (?)').bind(data.userData).run();

      return new Response('Data stored successfully!', { status: 200 });
    }

    return new Response('Method not allowed', { status: 405 });
  },
};