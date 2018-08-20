const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/about/:id', (req, res) =>{
      console.log('About QUERY A:', req.params)
      app.render(req, res, '/about', req.params)
    })
    server.get('/about/', (req, res) =>{
      console.log('About QUERY B:', req.query)
      app.render(req, res, '/about', req.params)
    })

    server.get('/work/:id', (req, res) =>{
      console.log('Work QUERY A:', req.params)
      app.render(req, res, '/work', req.params)
    })
    server.get('/work/', (req, res) =>{
      console.log('Work QUERY B:', req.query)
      app.render(req, res, '/work', {id: req.query.id})
    })


    server.get('*', (req, res) =>{
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> ready on http:localhost:${port}`);
    })

  })
