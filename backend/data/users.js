import bcrypt from 'bcryptjs';

const users = [
    {
      username: "Admin User",
      email: "adminOne@gmail.com",
      password: bcrypt.hashSync("123456", 10),
      role: "admin",
    },
    {
      username: "Admin Two",
      email: "adminTwo@gmail.com",
      password: bcrypt.hashSync("123456", 10),
      role: "admin",
    },
    {
      username: "Admin Three",
      email: "adminThree@gmail.com",
      password: bcrypt.hashSync("123456", 10),
      role: "admin",
    },
    {
      username: "Test",
      email: "test@gmail.com",
      password: bcrypt.hashSync("123456", 10),
      role: "user",
    },
  ];
  
  export default users;