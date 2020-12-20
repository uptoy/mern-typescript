import app from './app'
import './database'

app.listen(process.env.PORT,()=>{
    console.log('server on port 8000')
})