const express = require('express')
const path = require('path')
const next = require('next')
const nextConfig = require('./next.config');

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;
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

        const sitemapOptions = {
          root: __dirname + '/static/',
          headers: {
            'Content-Type': 'text/xml;charset=UTF-8',
          }
        };
        server.get('/sitemap.xml', (req, res) => (
          res.status(200).sendFile('sitemap.xml', sitemapOptions)
        ));

        // use next.js
        server.get('*', (req, res) => handle(req, res))

        server.listen(port, (err) => {
          if (err) throw err
          console.log(`Listening on http://localhost:${port}`);
        })
      })
  })
