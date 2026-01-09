/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const ALLOWED_ORIGIN = "https://spiderrichard.github.io";

function corsHeaders(origin: string | null) {
  const allowOrigin = origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN;

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

export default {
  async fetch(req: Request, env: { pages_site_db: D1Database }) {
    const url = new URL(req.url);
    const origin = req.headers.get("Origin");

    // ✅ Preflight
    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // ✅ POST /api/entry
    if (req.method === "POST" && url.pathname === "/api/entry") {
      const body = (await req.json().catch(() => null)) as { value?: string } | null;
      const code = body?.value?.trim();

      if (!code) {
        return new Response(JSON.stringify({ error: "Value required" }), {
          status: 400,
          headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
        });
      }

      await env.pages_site_db
        .prepare("INSERT INTO entries (code) VALUES (?)")
        .bind(code)
        .run();

      return new Response(JSON.stringify({ ok: true }), {
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    // ✅ (Optional) GET /api/entries
    if (req.method === "GET" && url.pathname === "/api/entries") {
      const { results } = await env.pages_site_db
        .prepare("SELECT id, code, created_at FROM entries ORDER BY id DESC LIMIT 50")
        .all();

      return new Response(JSON.stringify({ results }), {
        headers: { ...corsHeaders(origin), "Content-Type": "application/json" },
      });
    }

    // ✅ Always include CORS even on 404
    return new Response("Not Found", { status: 404, headers: corsHeaders(origin) });
  },
};