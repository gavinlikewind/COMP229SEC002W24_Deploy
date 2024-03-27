import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/api/users').post(userCtrl.create);
router.route('/api/users').get(userCtrl.list);
router.param('userId', userCtrl.userByID);
router.route('/api/users/:userId').get(userCtrl.read);
//router.route('/api/users/:userId').put(userCtrl.update);
router.route('/api/users/:userId').put(authCtrl.requireSignin, authCtrl.hasAuthorization,userCtrl.update);
//router.route('/api/users/:userId').delete(userCtrl.remove);
router.route('/api/users/:userId').delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);
 export default router;
