
const app = require('./app')
//const { PORT } = require('./config')
const { PORT, DB_URL } = require('./config')



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})