const bodyParser = require("body-parser");
const peopleRoute = require("./people");
const levelsRoute = require("./levels");
const classes = require("./classes");

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(peopleRoute);    
    app.use(levelsRoute);
    app.use(classes);
};