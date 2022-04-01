const nodemailer = require('nodemailer')
const emailsuporteclaro = "atendimentoclaro@redeinova.net";


const sendEmail = async (text) => {

    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "71737c3ddd2b5d",
          pass: "66c1e9134a33ad"
        }
      });
     /*  let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: process.env.EMAIL_ENVIO,
          pass: process.env.SENHA_ENVIO
        },
        secure:false,
        tls: {
            rejectUnauthorized: false
        }
      }); */
      
      let info = await transport.sendMail({
        from: '"Redeinova" <brandon.alves@redeinova.net>', // sender address
        to: "brandon.alves@redeinova.net",//emailsuporteclaro, // list of receivers
        subject: "Email de teste", // Subject line
        text: "Teste", // plain text body
        html: `
            <html>
                <body>
                    <h1><span style="color: red" >${text}</span></h1>
                </body>           
            </html>
        
        `, // html body
      });
      console.log('email enviado com sucesso')
}

module.exports = sendEmail;