import { Router, Request, Response, NextFunction } from 'express';
const router = Router();
import list from './../data/data';
import marked from  'marked';

router.get('/getarticle', async function (req: Request, res: Response, next: NextFunction) {
    const id = req.query.id.toString;
    list.filter(item => {
        return item.id === id;
    });
    try {
        if (list.length > 0) {
            console.log('-------');
            console.log(require(`./../data/article${id}.md`));
            res.send(marked('#hello word'));
        } else res.send({
            errorCode: 404,
            errorMsg: 'article is not found'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = function (app) {
  app.use('/api', router);
};

