import express from "express";
const router = express.Router();
import { getUsers, getUserById, updateUserById, deleteUserById, createUser } from "../controllers/userController.js";
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// const app = express();

// const SECRET_KEY = 'milance123'; // Tajni ključ za potpisivanje tokena

// app.use(cors());
// app.use(express.json());

// // Endpoint za prijavu
// app.post('/api/user/login', (req, res) => {
//   const { email, password } = req.body;
  
//   // Simulacija provjere korisničkih podataka u bazi
//   if (email === 'user@example.com' && password === 'password') {
//     // Stvaranje JWT tokena
//     const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.status(401).json({ error: 'Invalid credentials' });
//   }
// });

// // Endpoint za zaštitu ruta
// app.get('/api/user/protected', (req, res) => {
//   const token = req.header('Authorization');
//   if (!token) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
//   try {
//     // Verifikacija JWT tokena
//     const decoded = jwt.verify(token, SECRET_KEY);
//     // Ovdje dodajte logiku za pristup zaštićenim resursima
//     res.json({ message: 'Authorized', user: decoded.email });
//   } catch (error) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


router.route('/').get(getUsers);
router.route('/:id').get(getUserById);
router.route('/:id').put(updateUserById);
router.route('/:id').delete(deleteUserById);
router.route('/create').post(createUser);

export default router;
