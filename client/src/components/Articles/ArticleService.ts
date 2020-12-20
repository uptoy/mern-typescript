import axios from 'axios'

export const getArticles = async () =>{
    return await axios.get('http://localhost/articles')
}