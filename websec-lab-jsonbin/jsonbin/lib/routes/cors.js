const cors = require('websec-lab-jsonbin/jsonbin/lib/routes/cors');
module.exports = cors({
  origin: '*',
  allowedHeaders: ['Authorization', 'Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
});
