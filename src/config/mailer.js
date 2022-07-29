import nodemailer from 'nodemailer'
// import SMTPConnection from 'nodemailer/lib/smtp-connection';

// const connection = new SMTPConnection(options);

export const account = {
  user: process.env.NODE_JS_APP_GMAIL_USER,
  password: process.env.NODE_JS_APP_GMAIL_PASSWORD,
  smtp: {
    host: process.env.NODE_JS_APP_MAIL_HOST,
    port: process.env.NODE_JS_APP_MAIL_PORT,
    secure: process.env.NODE_JS_APP_MAIL_SECURE,
  },
}

// create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
  host: account.smtp.host,
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: account.user,
    pass: account.password,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

transporter.verify().then(() => {
  console.log('Ready for send emails')
})

// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: testAccount.user, // generated ethereal user
//     pass: testAccount.pass, // generated ethereal password
//   },
// });g
