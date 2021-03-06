const routes = (appName) => `import { Router } from 'express';
import userRouters from './user';

const router = new Router();

// / url
router.get('/', (req, res) => {
    res.status(200).send({
        message: "Welcome to ${appName}"
    });
});

router.use('/user', userRouters);

export default router;
`;

module.exports = routes;
