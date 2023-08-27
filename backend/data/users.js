import bcrypt from 'bcryptjs';

const users = [
    {
      name: "Admin User",
      email: "adminOne@gmail.com",
      password: bcrypt.hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Admin Two",
      email: "adminTwo@gmail.com",
      password: bcrypt.hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Admin Three",
      email: "adminThree@gmail.com",
      password: bcrypt.hashSync("123456", 10),
      role: "admin",
    },
    {
      name: "Test",
      email: "test@gmail.com",
      password: bcrypt.hashSync("123456", 10),
      role: "user",
    },
  ];
  
  export default users;