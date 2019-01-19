import { Router, static as expressStatic } from 'express';
import { resolve } from 'path';

const router = Router();

router.use(expressStatic(resolve('./build/public')));
router.use(expressStatic(resolve('./static')));

router.get('*', (req, res) => {
  return res.sendFile('index.html', { root: 'build/public' });
});

export default router;
