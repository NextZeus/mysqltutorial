async function main() {
  // get the client
  const  mysql = require('mysql2/promise');
  try {
    // create the connection
    const connection = await mysql.createConnection({host:'0.0.0.0', port:3306,user: 'root', password:'b3RmELKOvCUrAdxIg0GEmugc3SY', database: 'mysql'});
    // query database
    const [rows, fields] = await connection.execute('SELECT 1 + 1 AS solution');
    console.log('rows:',rows);
    console.log('fields:',fields);
    await connection.end();
  } catch(e){
    console.error(e);
  }
}

main();
