import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: String(process.env.SMTP_SERVER),
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: String(process.env.SMTP_USER),
    pass: String(process.env.SMTP_PASSWORD),
  }
});

/* Here come the templates */

export const sendEmailCode = ({ email, code }) => {
    return new Promise<void>((resolve, reject) => {
        transporter.sendMail({
            from: `Work In IT <${String(process.env.SMTP_USER)}>`,
            to: email,
            subject: 'Someone is trying to log in',
            text: `Use the code ${code} to confirm`,
            html: `
                <p>Someone is trying to login to Taulu using this email. Use the following code to confirm the login or ignore this message.</p>
                <h1>${code}</h1>
            `,
        }, (err) => 
            err ? reject(err) : resolve()
        );
    });
};
