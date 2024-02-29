const { connection } = require('../db');

const router = require('express').Router()

router.post("/adduser", (req,res)=>{
    const {name , username , email, adderss, geo, phone, website, company_name, company_catchphrase, company_bs} = req.body ;
    const sql = `CREATE TABLE IF NOT EXISTS user (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        adderss VARCHAR(255) NOT NULL,
        geo VARCHAR(255) NOT NULL,
        phone VARCHAR(255) NOT NULL,
        website VARCHAR(255) NOT NULL,
        company_name VARCHAR(255) NOT NULL,
        company_catchphrase VARCHAR(255) NOT NULL,
        company_bs VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;
    
    connection.query(sql , function(err){
        if(err) {throw err}
            const insertData = "INSERT INTO user (name , username , email, adderss, geo, phone, website, company_name, company_catchphrase, company_bs) VALUES (?,?,?,?,?,?,?,?,?,?)";
            
            connection.query(insertData,[name , username , email, adderss, geo, phone, website, company_name, company_catchphrase, company_bs],function(err){
              if(err){throw err}
              res.send({success : "Course Added Successfull"})
            })
          }
        )
      })

 router.get('/getuser', (req,res)=>{
  const sql = "SELECT * FROM user";

  connection.query(sql,function(err,result){
    if(err) {throw err}

    if(result){
      res.json(result)
    }else{
      res.json({message : "There is no Course"})
    }
  })
 })

 router.put('/updateuser', (req,res)=>{
  const {id ,name , username , email, adderss, geo, phone, website, company_name, company_catchphrase, company_bs} = req.body ;

  const sql = "UPDATE user SET name = ?, username = ? , email =? , adderss = ?, geo = ?, phone = ?, website = ?, company_name = ?, company_catchphrase = ?, company_bs = ? WHERE id = ?";

  const response = "SELECT * FROM user WHERE id = ?"

  connection.query(sql, [name , username , email, adderss, geo, phone, website, company_name, company_catchphrase, company_bs,id],function(err,result){
    if(err) {throw err}

    if(result){
      // connection.query(response,[id],function(err,result){
      //   if (err) {throw err}

      //   if(result){
      //     res.json(result[0])
      //   }
      // })
      res.json({msg:"data updated sucessfully"})

    }else{
      res.json({message : "Update not succesfully"})
    }
  })
 })

 router.delete('/deleteuser', (req, res) => {
  const { id } = req.body;

  const deleteSql = "DELETE FROM user WHERE id = ?";
  // const selectSql = "SELECT * FROM user WHERE id = ?";

  connection.query(deleteSql, [id], function (err, deleteResult) {
      if (err) {
          throw err;
      }

      if (deleteResult) {
          // // connection.query(selectSql, [id], function (err, selectResult) {
          //     if (err) {
          //         throw err;
          //     }
              
          //     if(selectResult){
          //       res.json({id:id})
          //     }

          // })/
          res.json({msg:"data deleted sucessfully"})
      } else {
          res.status(404).json({ error: "Course Not Found"});
      }
  });
});




 module.exports = router;