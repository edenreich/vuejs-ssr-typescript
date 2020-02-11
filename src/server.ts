import express, { Express, Request, Response } from 'express';
import fs from 'fs';
import { createRenderer } from 'vue-server-renderer';
import { createIndexPage } from './entries/index';
import { createAboutPage } from './entries/about';
import { createContactPage } from './entries/contact';

const server: Express = express();
const renderer = createRenderer({
    template: fs.readFileSync('dist/public/main.html', { encoding: 'utf-8'})
});

interface PageInterface {
    title: string;
    meta?: string;
}

server.get('/index', async (request: Request, response: Response) => {
    const context: PageInterface = {
        title: 'Index Page'
    };

    const indexPage = createIndexPage({});
    const html: string = await renderer.renderToString(indexPage, context);
    response.set('Content-Type', 'text/html');
    response.end(html);
});

server.get('/about', async (request: Request, response: Response) => {
    const context: PageInterface = {
        title: 'About Page'
    };

    const aboutPage = createAboutPage({});
    const html: string = await renderer.renderToString(aboutPage, context);
    response.set('Content-Type', 'text/html');
    response.end(html);
});

server.get('/contact', async (request: Request, response: Response) => {
    const context: PageInterface = {
        title: 'Contact Page'
    };

    const contactPage = createContactPage({});
    const html: string = await renderer.renderToString(contactPage, context);
    response.set('Content-Type', 'text/html');
    response.end(html);
});


server.listen(process.env.PORT, (): void => console.log(`Server started listening on port ${process.env.PORT}`));