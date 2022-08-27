const jsftp = require("jsftp");
const path = require('path');
const fs = require("fs");

module.exports = {
  async FtpService(){
    const ftp = new jsftp({
      host: "ftp.com.br",
      user: "ftp.com.br", // defaults to "anonymous"
      pass: "123" // defaults to "@anonymous"
    });
  
    console.log('__dirname', __dirname)
    
    fs.readFile(local, function(err, buffer) {
    console.log('aqui')
        if(err) {
            console.error(err);
            callback(err);
        }
        else {
          ftp.put('/path/to/file.xlsx', '/path/to/remote/file/qwer.xlsx', err => {
              console.log('in')
              if(!err){ 
                console.log("File transferred successfully!")
              }
              else {console.log(err)}
          })
        }
    })
  }
}
//PASTA /enviado/$arquivo