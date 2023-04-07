import express, { json } from "express";
import postgres from "postgres";
const sql = postgres('postgres://uvpanda:fuckyou@localhost:5432/reactmvp')

const PORT = 5172;
const server = express();

server.use(express.json());

server.get("/api/v1", (req, res) => {
  res.json({ message: "Hello!" });
});

server.get("/api/v1/testing", (req, res) => {
  res.json({ message: "testing" });
});

server.get("/api/v1/users", (req, res) => {
  sql`SELECT * FROM users`.then((result)=> {
    res.json(result);
  })
});

server.get("/api/v1/questions", (req, res) => {
  sql`SELECT * FROM questions`.then((result)=> {
    res.json(result);
  })
});

server.post("/api/v1/questions", function (req, res, next) {
  //const requiredKeys = ["question", "answer"];
  const requiredKeys = ["question"];
  if (
    requiredKeys.every((key) => req.body.hasOwnProperty(key))
  ) {
    sql`INSERT INTO questions(question) VALUES (${req.body.question}) RETURNING *;`
      .then((question) => {
        res.status(201);
        res.json(question[0]);
      })
      .catch(next);
  } else {
    res.status(400).send("Bad Request");
    console.log(req.body);
  }
});

server.patch("/api/v1/questions", function (req, res, next) {
  //const requiredKeys = ["question", "answer"];
  const requiredKeys = ["id"];
  if (
    requiredKeys.every((key) => req.body.hasOwnProperty(key))
  ) {
    sql`UPDATE questions 
      SET question = ${req.body.question}, 
      answer = ${req.body.answer} 
      WHERE id = ${req.body.id} 
      RETURNING *;`
      .then((question) => {
        res.status(200);
        res.json(question[0]);
      })
      .catch(next);
  } else {
    res.status(400).send("Bad Request");
    console.log(req.body);
  }
});

server.use((req, res, next) => {
  res.contentType("text/plain").status(404).send("Not Found");
});

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

server.listen(PORT, () => console.log(`start listening on port : ${PORT}`));

