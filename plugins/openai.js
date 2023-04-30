let fetch = require('node-fetch')
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw 'Mau nanya apa?'
let dann = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=dannlaina&text=${text}&user=user-unique-id`)
let hasil = await dann.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai', 'openai']
handler.tags = ['internet','tools']
handler.command = /^(ai|yae|openai)$/i
module.exports = handler