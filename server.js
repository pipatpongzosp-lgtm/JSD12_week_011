const http = require("http");

const port = 3030;

const server = http.createServer((req, res) => {
  console.log(`${req.url} ${req.method} ${req.headers}`);
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
      res.end("hello thailand welcome to Goose Goose Duck Resteruant");
    }
    if (req.url === "/menu") {
      const menu = [
        {
          name: "ข้าวผัด",
          price: 50,
          id: 1,
        },
        {
          name: "ผัดกระเพรา",
          price: 60,
          id: 2,
        },
        {
          name: "ส้มตำ",
          price: 40,
          id: 3,
        },
        {
          name: "เสต็ก",
          price: 120,
          id: 4,
        },
        {
          name: "ตำหลวงพระบางแซลมอน",
          price: 320,
          id: 5,
        },
        {
          name: "โอโทโร่",
          price: 500,
          id: 6,
        },
        {
          name: "แกงกะหรี่หมูทอด",
          price: 80,
          id: 7,
        },
      ];
      res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(menu));
    }
    if (req.url === "/randomMenu") {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      const randomNumber = Math.floor(Math.random() * menu.length);

      res.end(JSON.stringify(menu[randomNumber]));
    }
  }
});

server.listen(port, () => {
  console.log(`server is running port ${port} 🌍`);
});
