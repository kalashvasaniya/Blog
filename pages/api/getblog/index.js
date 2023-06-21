// http://localhost:3000/api/getblog?slug=how-to-learn-nextjs
import * as fs from 'fs'

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (error, data) => {
    if (error) {
      res.status(404).json({ message: "Blog not found" })
      return
    }
    const blog = JSON.parse(data)
    res.status(200).json(blog)
  })
}