const files: Record<string, { content: string; type: string }> = {
  "/": {
    content: `${STATIC:index.html`},
    type: "text/html",
  },
  "/index.html": {
    content: `${STATIC:index.html`},
    type: "text/html",
  },
  "/styles.css": {
    content: `${STATIC:styles.css`},
    type: "text/css",
  },
  "/app.js": {
    content: `${STATIC:app.js`},
    type: "application/javascript",
  },
};

export const onRequest = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const path = url.pathname;

  if (files[path]) {
    return new Response(files[path].content, {
      headers: { "Content-Type": files[path].type },
    });
  }

  return new Response("Not Found", { status: 404 });
};