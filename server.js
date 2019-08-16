let http = require("http");

const html = `
<html>
	<head>
	<style>
		p {
			color: blue;
		}
	</style>
	</head>
	<h1>This is a header</h1>
	<p>This is a p tag</p>
</html>
`;

http
  .createServer((_, res) => {
    res.end(html);
  })
  .listen(3000);
