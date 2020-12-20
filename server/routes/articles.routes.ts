import {Router} from 'express'
const router = Router()

router.get('/',(req,res)=>res.json('get article'))

export default router