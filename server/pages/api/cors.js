import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)
  
  var dict = {
    Apple: "500cal",
    Banana: "300cal",
    Orange: "250cal"
  };

  food = req.query.food;

  if (!(food in dict)) {
    res.json({message: 'ERROR'});
    return;
  }

  // Rest of the API logic
  res.json({ message: dict[food]})
}
