import { SendMailOptions, createTransport } from 'nodemailer';

const { email, emailHost, emailAuthUser, emailAuthPassword } = process.env;

export const sendEmail = (to: string, options: SendMailOptions) => {
  return new Promise((resolve, reject) => {
    const transporter = createTransport({
      host: emailHost,
      auth: {
        user: emailAuthUser,
        pass: emailAuthPassword,
      },
    });

    const mailOptions = {
      ...options,
      ...{
        from: email,
        to,
      },
    };

    transporter.sendMail(mailOptions, err => {
      if (err) return reject(err);
      resolve();
    });
  });
};
