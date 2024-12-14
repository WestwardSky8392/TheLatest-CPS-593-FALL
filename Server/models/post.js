const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS post (
    post_id INT NOT NULL,
    content BLOB NOT NULL,
    likes INT NULL,
    user_id INT NOT NULL
  );`

  await con.query(sql)
}

createTable();

// CREATE for Posts
async function Posting(post) {
  let sql = `
    INSERT INTO post (post_id, content, user_id)
    VALUES("${post.post_id}", "${post.content}", "${post.user_id}")
  `  
  await con.query(sql)
  let newPost = await login(post)
  return newPost 
}

//U for Update - Update email of user
async function updateContent(post) {
  let cContent = await getContent(post)
  if(cContent) throw Error("Email already in use!!")

  let sql = `
    UPDATE post SET content="${user.content}"
    WHERE user_id="${post.username}"
  `
  await con.query(sql)
  let updatedContent = await postExists(post)
  return updatedContent[0]
}

async function getPostID(post) {
  let sql = `
    SELECT post_id FROM post
    WHERE post_id="${post.post_id}"
  `
  let postID = await con.query(sql)
  return postID
}

//D for Delete - delete user account
async function deleteContent(post) {
  let sql = `
    DELETE from post
    WHERE post="${post.content}"
  `
  await con.query(sql)
}


module.exports ={ Posting, updateContent, getPostID, deleteContent }