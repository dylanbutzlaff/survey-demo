

const { prompt } = require('enquirer')
const axios = require('axios')

let surveyUrl = ''

const setUrl = url => surveyUrl = url

const run = async () => {
    const { data } = await axios.get(surveyUrl)
    return await prompt(data)
}

module.exports = { setUrl, run }