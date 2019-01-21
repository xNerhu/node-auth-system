import { Router, static as expressStatic } from 'express';
import { resolve } from 'path';

import { sendEmail } from '@server/utils';
import { registerTemplate } from '@server/templates';

const router = Router();

router.use(expressStatic(resolve('./build/public')));
router.use(expressStatic(resolve('./static')));

router.post('/send-email', async (req, res) => {
  await sendEmail('xnerhu@gmail.com', registerTemplate('test'));
  res.json({ sucess: true });
});

router.get('*', (req, res) => {
  return res.sendFile('index.html', { root: 'build/public' });
});

export default router;
