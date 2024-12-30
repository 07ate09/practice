

// let y = 6;
// const pi = 3.14;
// let Booker = "specials";
// let isAliciaClass = false;
// let undecided = null;
// let x2;
// let person =
// console.log(Booker);


// Middleware to parse JSON data
// import express from 'express';
// const app = express();
// app.use(express.json());

// app.post('/json-data', (req, res) => {      
//     console.log(req.body);
//     const { userId, message } = req.body; // Extract JSON data
//     res.json({
//         status: 'success',
//         userId: userId,
//         message: message,
//     });
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
import express from 'express';

const app = express();
app.use(express.json());

app.post('/json-data', (req, res) => {
  try {
    const { userId, message } = req.body;
    if (!userId || !message) {
      throw new Error('Missing required properties');
    }
    res.json({ status: 'success', userId, message });
  }
   catch (error) {
    console.error(error);
    res.status(400).json({ status: 'error', message: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});