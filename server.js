const express = require('express');
const path = require('path');
const app = express();
const port = Number(process.env.PORT || 3000);
app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use(express.json({limit:'1mb'}));
try { require('./api/api-routes')(app); } catch (e) { console.error('API route initialization failed:', e.message); }
app.get('/healthcheck', (_req,res) => res.status(200).json({status:'ok', service:'NIMAH BUG BOT PRO Web'}));
app.use(express.static(__dirname, { extensions:['html'], maxAge:'1h' }));
app.get('*', (req,res) => { if (req.path.startsWith('/api/')) return res.status(404).json({error:'API route not found'}); res.sendFile(path.join(__dirname,'index.html')); });
app.listen(port,'0.0.0.0',()=>console.log(`NIMAH BUG BOT PRO Web listening on ${port}`));
