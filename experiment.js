const express = require('express')
const app = express()
const port = 3000

app.get('/fast', (req, res) => {
    res.send('Fast Response!')
})

app.get('/slow', (req, res) => {
    console.log('Slow task started')
    setTimeout(() => {
        console.log('Slow task finished')
        res.send('Slow response after 5 seconds!')
    }, 5000)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})