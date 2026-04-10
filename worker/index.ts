export interface Env {
  API_URL: string;
}

export default { 
  async fetch(request: Request, env: Env): Promise<Response> { 
    const url = new URL(request.url);

    switch (url.pathname) {
      case "/api/data":
        return new Response(JSON.stringify({ message: "API data response" }), { 
          headers: { "Content-Type": "application/json" } 
        });
      case "/pages/home":
        return new Response("<h1>Home Page</h1>", { 
          headers: { "Content-Type": "text/html" } 
        });
      default:
        return new Response("Not Found", { status: 404 });
    }
  }
}
