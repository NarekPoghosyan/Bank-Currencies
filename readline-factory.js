const readline = require('readline');
const fetch = require('node-fetch');
const Currency = require('./model/Currency')
require('dotenv').config()

const promptUser = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    rl.question('Want to take todays currencies YES/NO? \n', (answer) => {
        if (answer.toLocaleLowerCase() === 'yes' || answer.toLocaleLowerCase() === 'ye' || answer.toLocaleLowerCase() === 'y') {
            console.log(`Wait a few seconds...`);
            callAPi()
        }

        if (answer.toLocaleLowerCase() === 'no' || answer.toLocaleLowerCase() === 'n') {
            console.log(`As you wish...`)
        }

        rl.close();
    });

}

async function callAPi() {
    const response = await fetch(process.env.Api)
    const data = await response.json()
    const rates = new Currency({
        success: data.success,
        timestamp: data.timestamp,
        base: data.base,
        date: data.date,
        rates: data.rates
    })
    await rates.save()
    console.log(rates)
}

module.exports = {
    promptUser
}