// index.js
const corsHeaders = {
  // lock to your site origin (recommended) or use "*" while testing
  "Access-Control-Allow-Origin": "https://spiderrichard.github.io",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    // Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method === "POST") {
      if (!env.MY_DATABASE) {
        return new Response("Database not connected", { status: 500, headers: corsHeaders });
      }

      let data;
      try {
        data = await request.json();
      } catch {
        return new Response("Invalid JSON", { status: 400, headers: corsHeaders });
      }

      await env.MY_DATABASE
        .prepare(`INSERT INTO submissions (value) VALUES (?)`)
        .bind(data.userInput)
        .run();

      return new Response("Stored", { status: 200, headers: corsHeaders });
    }

    return new Response("Send a POST request.", { headers: corsHeaders });
  },
};