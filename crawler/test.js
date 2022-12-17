// install mysql2

const mysql2 = require('mysql2/promise');
//npm i dotenv
//2方法
require('dotenv').config();

(async () => {
  const connection = await mysql2.createConnection({
    // host: '127.0.0.1',
    // port: 3306,
    // user: 'admin',
    // password: '',
    // database: 'stock_mfee31',
    
    //2方法
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  });

  // simple query
  let result = await connection.query('SELECT * FROM `stocks`');
  let data = result[0];
  // console.log(result);
  console.log(data);

  connection.end();
})();