import {Router} from 'express'
const router = Router()

import * as articleCtrl from './controllers/articles.controller'

router.get('/articles',articleCtrl.getArticles)
router.get('/articles/:id',articleCtrl.getArticle)
router.post('/articles',articleCtrl.postArticle)
router.delete('/articles/:id',articleCtrl.deleteArticle)
router.put('/articles/:id',articleCtrl.updateArticle)

export default router