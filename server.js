const app = require('./app.js')
require('./utils/db')
app.listen(process.env.PORT, console.log(`Listening on port ${process.env.PORT}`))