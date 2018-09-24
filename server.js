const express = require('express')
const request = require('request');
const bodyParser = require('body-parser')
const fs = require('fs');
const cors = require('cors')
const path = require('path')
const next = require('next')
const nextConfig = require('./next.config')
const sitemap = require('sitemap')


// import { HOST, apiUrl } from './constants/settings'
const HOST = 'http:/localhost';
const API = 'http://31.192.109.44/api';




const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3002;
const app = next({ dev })
const handle = app.getRequestHandler()

const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const i18n = require('./i18n')

// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
      addPath: path.join(__dirname, '/locales/{{lng}}/{{ns}}.missing.json')
    },
    detection: {
      order: ['cookie'],
      caches: false,
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupSession: 'lng',
      lookupPath: 'lng',
      lookupFromPathIndex: 0,
    },
    whitelist: [
      'ru',
      'en'
    ],
    lng: 'ru',
    load: 'currentOnly',
    fallbackLng: 'ru',
    preload: ['ru', 'en'], // preload all langages
    saveMissing: true,
    ns: ['common'], // need to preload all the namespaces
  }, () => {
    // loaded translations we can bootstrap our routes
    app.prepare()
      .then(() => {
        const server = express()

        server.use(cors())
        server.use(bodyParser.json())
        server.use(function (req, res, next) {

          // Website you wish to allow to connect
          res.setHeader('Access-Control-Allow-Origin', '*');

          // Request methods you wish to allow
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

          // Request headers you wish to allow
          res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

          // Set to true if you need the website to include cookies in the requests sent
          // to the API (e.g. in case you use sessions)
          res.setHeader('Access-Control-Allow-Credentials', true);

          // Pass to next layer of middleware
          next();
        });

        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n))


        // serve locales for client
        server.use('/locales', express.static(path.join(__dirname, '/locales')))

        // missing keys
        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n))

        // dynamic routes 
        server.get('/news/:id', (req, res) => {
          const actualPage = '/news-page';
          const queryParams = { id: req.params.id };
          app.render(req, res, actualPage, queryParams)
        })
        server.get('/album/:id', (req, res) => {
          const actualPage = '/album';
          const queryParams = { id: req.params.id };
          app.render(req, res, actualPage, queryParams)
        })
        server.get('/program-page/:id', (req, res) => {
          const actualPage = '/program-page';
          const queryParams = { id: req.params.id };
          sitemap.add({ url: `/program-page/${req.params.id}` });
          app.render(req, res, actualPage, queryParams)
        })

        const robotsOptions = {
          root: __dirname + '/static/',
          headers: {
            'Content-Type': 'text/plain;charset=UTF-8',
          }
        };
        server.get('/robots.txt', (req, res) => (
          res.status(200).sendFile('robots.txt', robotsOptions)
        ));


        const faviconOptions = {
          root: __dirname + '/static/'
        };
        server.get('/img/favicon.ico', (req, res) => (
          res.status(200).sendFile('favicon.ico', faviconOptions)
        ));


        const pages = fs.readdirSync('./pages/').map(file => {
          if (!file.includes('_') || !file.includes('-')) {
            return { url: file.slice(0, -3), changefreq: 'weekly' }
          }
        })

        sm = sitemap.createSitemap({
          hostname: `${HOST}:${port}`,
          cacheTime: 1000 * 60 * 24 * 7,
          urls: pages
        });

        server.get('/sitemap.xml', function (req, res) {
          sm.toXML(function (err, xml) {
            if (err) {
              return res.status(500).end();
            }
            res.header('Content-Type', 'application/xml');
            res.send(xml);
          });
        });

        function addDynamicRoute(url, id) {
          var ID = id;

          while (ID >= 1) {
            sm.add({ url: `${url}/${ID}` });
            ID--;
          }
        }

        request({ url: `${API}/news/`, json: true }, function (err, res, json) {
          addDynamicRoute('news', json.count);
        })
        request({ url: `${API}/gallery/`, json: true }, function (err, res, json) {
          addDynamicRoute('album', json.count);
        })
        request({ url: `${API}/concerts/`, json: true }, function (err, res, json) {
          addDynamicRoute('program-page', json.count);
        })

        // use next.js
        server.get('*', (req, res) => handle(req, res))

        server.listen(port, (err) => {
          if (err) throw err
          console.log(`Listening on http://localhost:${port}`);
        })
      })
  })
