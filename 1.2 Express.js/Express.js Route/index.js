const express = require('express');
const app = express();
const path=require("path")
const {open}=require("sqlite")
const dbpath=path.join(__dirname,dataBase_path)
const sqlite3=require("sqlite3")
let db=null
const initiailizeDBandServer=async()=>{
    try{
        db=await open({
            filename:dbpath,
            driver:sqlite3.Database
        })
    }catch(e){
        console.log("DBerror:${e.message}")
        process.exit(1)
    }
}
app.get('/posts', (req, res) => {
  // Query to select all posts from the 'posts' table
  const query = 'SELECT * FROM posts';
    try {
        const posts = await db.all(query);
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

initiailizeDBandServer()

