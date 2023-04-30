let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Masukkan item growtopia\n\nContoh: ${usedPrefix + command} magplant`
	let dann = await fetch(`https://api.lolhuman.xyz/api/growiki?apikey=dannlaina&query=${text}`)
	let res = await dann.json()
	let hasil = `Name: ${res.result.name}\nDeskripsi: ${res.result.desc}\nRarity: ${res.result.rarity}\nRecipe: ${res.result.recipe}\nSplice: ${res.result.splice}\n\nInfo: ${res.result.info}`
	let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=dannlaina&query=growtopia%20${text}`
	conn.sendButton(m.chat, hasil, wm, thumb, [['Menu', '.menu']], m)
}

handler.help = ['growiki']
handler.tags = ['internet']
handler.command = /^(growiki)$/i

module.exports = handler