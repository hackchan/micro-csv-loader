import app from './app'

const port = app.get('port')
app.listen(port)
console.log(`server running on port ${port}`)
