import express, { Express } from 'express';
import Vue from 'vue';

const server: Express = express(); 

const app = new Vue({
    template: `<div>Hello World</div>`
})

const renderer = require('vue-server-renderer').createRenderer()

renderer.renderToString(app, (err: any, html: any) => {
    if (err) throw err
    console.log(html)
})

renderer.renderToString(app).then((html: any) => {
    console.log(html)
}).catch((err: any) => {
    console.error(err)
})

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>The visited URL is: {{ url }}</div>`
    })

    renderer.renderToString(app, (err: any, html: any) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
    <!DOCTYPE html>
    <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
    </html>
    `)
    })
})

server.listen(process.env.PORT)