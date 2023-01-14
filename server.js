const express = require("express");
const cors = require("cors")

const app = express()

var corsOptions = {
	origin: "http://127.0.0.1:8000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.get("/", (req,res) => {
	res.json({message: "Welcome to the-runtime application."})
});

const PORT = process.env.PORT || 8000;
require("./app/routes/tutorials.routes")(app);
app.listen(PORT, () => {
	console.log('Server is running on port ${PORT}.');
});




