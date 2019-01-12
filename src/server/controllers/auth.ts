import { Router } from 'express';
import axios from 'axios';

const { RECAPTCHA_SECRET_KEY } = process.env;
const router = Router();

router.post('/recaptcha', async (req, res) => {
  const { token } = req.body;
  const verify = await axios.get(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      params: {
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      },
    },
  );

  res.json(verify.data);
});

export default router;
