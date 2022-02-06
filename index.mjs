import express from 'express'
const app = express()

const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Bakwaas bnd kroooooo  ')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port at ${PORT}`)
})