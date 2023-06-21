// Read folder from readdir
import * as fs from 'fs'

export default function handler(req, res) {
    fs.readdir(`blogdata`, (error, data) => {
        let allBlogs = []
        data.forEach((blog) => {
            let blogData = fs.readFileSync(`blogdata/${blog}`, 'utf-8')
            allBlogs.push(JSON.parse(blogData))
        })
        res.status(200).json(allBlogs)
    })
}