// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();
// const cors = require('cors'); // Dodano za obradu CORS zahtjeva

// const SECRET_KEY = 'milance123'; // Vaša tajna ključna reč za generisanje JWT

// app.use(cors()); // Upotreba CORS middleware-a
// app.use(express.json());

// // Endpoint za prijavu
// app.post('/user/login', (req, res) => {
//   const { email, password } = req.body;
//   // Ovde dodajte logiku za proveru korisničkih podataka u bazi
//   if (email === 'user@example.com' && password === 'password') {
//     const token = jwt.sign({ email }, SECRET_KEY);
//     res.json({ token });
//   } else {
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
// });

// // Endpoint za zaštitu ruta
// app.get('/user/protected', (req, res) => {
//   const token = req.header('Authorization');
//   if (!token) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
//   try {
//     const decoded = jwt.verify(token, SECRET_KEY);
//     // Ovde dodajte logiku za pristup zaštićenim resursima
//     res.json({ message: 'Authorized', user: decoded.email });
//   } catch (error) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// });