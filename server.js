const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/post', (req, res) =>{
      return app.render(req, res, '/post', req.query)
      console.log('ID:', req.params.id)
    })

    server.get('/p', (req, res) =>{
      return app.render(req, res, '/p', req.query)
      console.log('ID:', req.params.id)
    })

    server.get('/movie/:id', (req, res) =>{
      const actualPage = '/movie'
      const queryParams = { id: req.params.id}
      return app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) =>{
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> ready on http:localhost:${port}`);
    })






  })
