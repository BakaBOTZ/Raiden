let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  
let res = await fetch('https://api.lolhuman.xyz/api/ceritahoror?apikey=31fe0c7b7761a4dcb6d8e227')
    let json = await res.json()
    
await conn.sendButtonImg(m.chat, json.result.thumbnail, `Judul: ${json.result.title}

Deskripsi: ${json.result.desc}
Cerita: ${json.result.story}`, wm, 'Next', '.ceritahoror', m)
}
handler.help = ['ceritahoror']
handler.tags = ['internet','fun']
handler.command = /^ceritahoror$/i


module.exports = handler