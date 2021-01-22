const express = require('express')
require('dotenv').config()
const Currency = require('./model/Currency')
const mongoose = require('mongoose')
const { promptUser } = require('./readline-factory')

const app = express()

const PORT = process.env.my_port || 4000;

app.get('/currencies', (req, res) => {
    Currency.findOne().exec((err, doc) => {
        if (!err) {
            doc.toObject({ getters: true })
            res.json({
                amd: doc.rates.AMD,
                eur: doc.rates.EUR,
                usd: doc.rates.USD
            })
        }
    })
})

async function startDatabase() {
    try {

        await mongoose.connect(process.env.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

startDatabase()
promptUser()

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))