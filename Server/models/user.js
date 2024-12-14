const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS user (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    fullName VARCHAR(50) NOT NULL,
    phoneNum INT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
  );`

  await con.query(sql)
}

createTable();

//check to see if username is in use:
async function userExists(user) {
  let sql = `
    SELECT * FROM user
    WHERE username = "${user.username}"
  `
  return await con.query(sql)
}

// READ in CRUD - Logging in a user
async function login(user) {
  let cUser = await userExists(user)
  if(!cUser[0]) throw Error("Username does not exist!")
  if(cUser[0].password != user.password) throw Error("Password incorrect!!")

  return cUser[0]
}

// CREATE for User - registering
async function register(user) {
  let cUser = await userExists(user)
  if(cUser.length > 0) throw Error("Username already in use.")
  
  let sql = `
    INSERT INTO user (username, password, email)
    VALUES("${user.username}", "${user.password}", "${user.email}")
  `  
  await con.query(sql)
  let newUser = await login(user)
  return newUser //issue fixed from class: removed [0] since login function returns this already
}

//U for Update - Update email of user
async function updateEmail(user) {
  let cEmail = await getEmail(user)
  if(cEmail) throw Error("Email already in use!!")

  let sql = `
    UPDATE User SET email="${user.email}"
    WHERE username="${user.username}"
  `
  await con.query(sql)
  let updatedUser = await userExists(user)
  return updatedUser[0]
}

async function getEmail(user) {
  let sql = `
    SELECT email FROM User
    WHERE email="${user.email}"
  `
  let email = await con.query(sql)
  return email[0]
}

//D for Delete - delete user account
async function deleteAccount(user) {
  let sql = `
    DELETE from User
    WHERE username="${user.username}"
  `
  await con.query(sql)
}

// CRUD functions will go here 
//R for READ -- get all users
async function getAllUsers() {
  let sql = `SELECT * FROM user;`
  return await con.query(sql)
}

module.exports ={ getAllUsers, login, register, updateEmail, deleteAccount }