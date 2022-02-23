import express from 'express'
const app = express()

const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.send('dobara check kr rha hn or dobara check kr rha hn  ')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port at ${PORT}`)
})