import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import articleRoutes from './routes/articles.routes'

const app = express()

app.set('port',config.PORT)

app.use(morgan('dev')) //ログ出力
app.use(cors())　   //cors有効化
app.use(express.json())
app.use(express.urlencoded({extended:false}))



export default app