import express, { Express, Request, Response } from 'express';
import Vue from 'vue';
import * as VueRenderer from 'vue-server-renderer';
import fs from 'fs';

const server: Express = express(); 
const layout: string = fs.readFileSync('./layouts/main.html', {encoding: 'utf-8'});
const renderer: VueRenderer.Renderer = VueRenderer.createRenderer();

server.get('/index', async (request: Request, response: Response) => {

    const vueTemplate: string = fs.readFileSync('./pages/index.vue', {encoding: 'utf-8'}); 
    const app: Vue = new Vue({
        template: layout.replace('{{:content}}', vueTemplate)
    });

    try {
        const html: string = await renderer.renderToString(app);
        response.set('Content-Type', 'text/html');
        response.end(html);
    } catch (err) {
        console.error(err);
    }
});

server.get('/about', async (request: Request, response: Response) => {

});

server.get('/contact', async (request: Request, response: Response) => {

});

server.listen(process.env.PORT);