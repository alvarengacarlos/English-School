const bodyParser = require("body-parser");
const peopleRoute = require("./people");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(peopleRoute);    
};