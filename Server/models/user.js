const con = require("./theLatest_db")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS User (
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    fullName VARCHAR(50) NOT NULL,
    phoneNum INT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    CONSTRAINT userPK PRIMARY KEY(userID)
  );`

  await con.query(sql)
}

createTable()

//check to see if username is in use:
async function userExists(user) {
  let sql = `
    SELECT * FROM User
    WHERE username = "${user.Username}"
  `
  return await con.query(sql)
}

// READ in CRUD - Logging in a user
async function login(user) {
  let cUser = await userExists(user)
  if(!cUser[0]) throw Error("Username does not exist!")
  if(cUser[0].Password != user.Password) throw Error("Password incorrect!!")

  return cUser[0]
}

// CREATE for User - registering
async function register(user) {
  let cUser = await userExists(user)
  if(cUser.length > 0) throw Error("Username already in use.")
  
  let sql = `
    INSERT INTO user (username, password, email)
    VALUES("${user.Username}", "${user.Password}", "${user.Email}")
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
    UPDATE User SET email="${user.Email}"
    WHERE username="${user.Username}"
  `
  await con.query(sql)
  let updatedUser = await userExists(user)
  return updatedUser[0]
}

async function getEmail(user) {
  let sql = `
    SELECT email FROM User
    WHERE email="${user.Email}"
  `
  let email = await con.query(sql)
  return email[0]
}

//D for Delete - delete user account
async function deleteAccount(user) {
  let sql = `
    DELETE from User
    WHERE username="${user.Username}"
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