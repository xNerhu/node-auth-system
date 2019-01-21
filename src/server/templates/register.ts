import { SendMailOptions } from 'nodemailer';

export const registerTemplate = (verifyToken: string) => {
  return {
    subject: 'Subject',
    html: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum molestie lacus, sed
      rhoncus risus auctor id. Pellentesque orci massa, laoreet eget libero id, sollicitudin maximus felis.
      <br><a href="http://localhost:3000/verify/${verifyToken}">Verify</a>
      `,
  } as SendMailOptions;
};
