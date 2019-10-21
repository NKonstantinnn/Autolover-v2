import BaseController from './BaseController';
import IPathRoute from '../interfaces/IPathRoute';
import AuthController from './AuthController';
import AttachCurrentUser from '../middlewares/AttachCurrentUser';
import isAuth from '../middlewares/isAuth';

class AppController extends BaseController {
    private routeList: IPathRoute[] = [
        {path: '/auth', controller: AuthController}
    ];
    
    public init() {
        this.router.get('/test', isAuth, (req, res) => {
            res.json({api: "test"});
        });

        for(const {path, controller: Controller} of this.routeList) {
            const controller: BaseController = new Controller();
            controller.init();
            this.router.use(`${path}`, controller.getRouter());
        }
    }
}

export default AppController;
