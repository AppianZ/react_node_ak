import { Router, Request, Response, NextFunction } from 'express';
const router = Router();
import marked from  'marked';
const fs = require('fs');
const target = require('./../data/data');

router.get('/getarticle', async function (req: Request, res: Response, next: NextFunction) {
    const id = req.query.id.toString();
    const list = target.list.filter(item => {
        return item.id === id;
    });
    console.log(list);
    try {
        if (list.length > 0) {
            console.log(fs);
            fs.readFile(`./../data/article${id}.md`, (err, data) => {
                res.send({
                    code: 200,
                    content: marked(data.toString()),
                });
            });
        } else res.send({
            code: 404,
            errorMsg: 'article is not found'
        });
    } catch (err) {
        next(err);
    }
});

module.exports = function (app) {
  app.use('/api', router);
};

