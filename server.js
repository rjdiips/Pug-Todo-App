import express from "express";

const app = express();
const PORT = 3000;

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));

// Serve static assets from the "public" folder (css, images, client JS)
app.use(express.static("public"));

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", "./views");

// In-memory todo list
let todos = ["Buy groceries", "Walk the dog", "Read an old book"];

// Routes
app.get("/", (req, res) => {
  res.render("index", { todos });
});

app.post("/addTodo", (req, res) => {
  const newTodo = req.body.todo;
  if (newTodo) todos.push(newTodo);
  res.redirect("/");
});

app.get("/deleteTodo", (req, res) => {
  const itemToDelete = req.query.item;
  todos = todos.filter((todo) => todo !== itemToDelete);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
