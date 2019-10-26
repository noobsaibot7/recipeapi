GET  /api/recipes  — returns all recipes in database
GET  /api/recipes/:id  — returns the recipe with the provided ID from the database
POST  /api/recipes  — adds a new recipe to the database
PUT  /api/recipes/:id  — modifies the recipe with the provided ID
DELETE  /api/recipes/:id  — deletes the recipe with the provided ID

You will provide the URL to a Git repo containing your project.  Your project will contain at least:

a server.js file containing your Node server
an app.js file containing your Express app
a package.json file containing all necessary dependencies
a models folder, containing a Recipe model (Mongoose)
After cloning (and an  npm install  ), your app must run with the command "  node server  " or "  nodemon server . "  The marker will be running the front end app in parallel, and it must work seamlessly with your API.

create a RESTful web API using Node, Express and MongoDB
Evaluation criteria

running "node server" or "nodemon server" spins the Node server up correctly, serving the Express app
each endpoint is implemented using separate middleware
the correct HTTP methods are used in each middleware
no CORS errors occur
all Promise errors are caught and sent back to the client
suitable HTTP status codes are attributed to each response

use Mongoose to access a MongoDB database in an Express app
Evaluation criteria
the Express app is able to correctly connect to its MongoDB Atlas cluster
a sensible Recipe schema is built using Mongoose, including any required fields, and is exported as a model
appropriate Mongoose methods are used properly for database access in various app routes

export class Recipe {
  title: string;
  ingredients: string;
  instructions: string;
  difficulty: number;
  time: number;
  _id: string;
}