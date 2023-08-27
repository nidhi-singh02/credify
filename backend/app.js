const express = require("express");
const routes = require('./routers/route');
var cors = require('cors')
const app = express();
const port = 8082

app.use(cors({
   origin: function(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }
      return callback(null, true);
   }
}));
app.use(express.json());
app.get('/ping', (request, response) => 
{
   response.json("pong");
});
app.use('/v1', routes)

app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});
