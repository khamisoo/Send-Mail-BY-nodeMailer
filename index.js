
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

app.get("/" , (req,res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "elkhamisadel@gmail.com",
      pass: "kegeahwdyyevbhbx"
    },
  });

  let mailOptions = {
    from: "elkhamisadel@gmail.com",           // asm eli ba3t 
    to: "aasystemsolution1@gmail.com",       
    subject: 'TESTING Nodemailer Project',   // da el 3nwan el kbir ll email
    text: 'Hi from your nodemailer project'   // el email
  };



  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
      res.send("Email sent successfully .")
    }
  });


});



app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
});



/*


Sending Option :-

    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  


    Sending Option With Attachements  :-

let message = {
    ...
    attachments: [
        {   // utf-8 string as an attachment
            filename: 'text1.txt',
            content: 'hello world!'
        },
        {   // binary buffer as an attachment
            filename: 'text2.txt',
            content: new Buffer('hello world!','utf-8')
        },
        {   // file on disk as an attachment
            filename: 'text3.txt',
            path: '/path/to/file.txt' // stream this file
        },
        {   // filename and content type is derived from path
            path: '/path/to/file.txt'
        },
        {   // stream as an attachment
            filename: 'text4.txt',
            content: fs.createReadStream('file.txt')
        },
        {   // define custom content type for the attachment
            filename: 'text.bin',
            content: 'hello world!',
            contentType: 'text/plain'
        },
        {   // use URL as an attachment
            filename: 'license.txt',
            path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
        },
        {   // encoded string as an attachment
            filename: 'text1.txt',
            content: 'aGVsbG8gd29ybGQh',
            encoding: 'base64'
        },
        {   // data uri as an attachment
            path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
        },
        {
            // use pregenerated MIME node
            raw: 'Content-Type: text/plain\r\n' +
                 'Content-Disposition: attachment;\r\n' +
                 '\r\n' +
                 'Hello world!'
        }
    ]
}


imgs Embedd :- 

let message = {
    ...
    html: 'Embedded image: <img src="cid:unique@nodemailer.com"/>',
    attachments: [{
        filename: 'image.png',
        path: '/path/to/file',
        cid: 'unique@nodemailer.com' //same cid value as in the html img src
    }]
}



*/