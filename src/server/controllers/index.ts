import { Router, static as expressStatic } from 'express';
import { resolve } from 'path';

import AuthRouter from './auth';
import DevRouter from './dev';

const isProduction = process.env.NODE_ENV === 'production';
const router = Router();

router.use('/auth', AuthRouter);
router.use(expressStatic(resolve('./build/public')));

!isProduction && router.use('/dev', DevRouter);

router.get('*', (req, res) => {
  return res.sendFile('index.html', { root: 'build/public' });
});

export default router;
