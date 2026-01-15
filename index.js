export default {
  fetch(request) {
    return new Response(`
      <html>
        <head>
          <title>Startup – NxtGenSec</title>
        </head>
        <body>
          <h1>Startup via Workers</h1>
          <p>This site is fully dynamic.</p>
        </body>
      </html>
    `, {
      headers: { "content-type": "text/html" }
    })
  }
}
