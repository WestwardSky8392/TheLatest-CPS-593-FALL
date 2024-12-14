const express = require('express');
const app = express();

const userRoutes = require("./Server/routes/user");

app.use(function(req, res, next){
res.header("Access-Control-Allow-Origin","*")
res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
res.header("Access-Control-Allow-Origin","GET, POST, PUT, DELETE, OPTIONS")
next();
});

app.use("/users", userRoutes);
app.use(express.json());

const PORT  = process.env.PORT || 6000
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
