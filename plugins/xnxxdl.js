let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau download apa?\n\nContoh: ${usedPrefix + command} link xnxx`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!';
	try {
		let res = await fetch(`https://restapi.frteam.xyz/xnxxdl?url=${text}&apikey=085759681568`)
		if (res.status !== 200) throw 'Nice'
    let w = await res.json()
    let x = w.result
    let caption = `*${htki} xnxxdl ${htka}*
*Title:* ${x.title}
*Info:* ${x.info}
*Duration:* ${x.duration}
    `
    conn.sendButton(m.chat, x.image, caption, author,
'LOW', '.xnxxvid ' + x.files.low,
'HIGH', '.xnxxvid ' + x.files.high
, m)
	} catch (e) {
		throw e;
	}
}
handler.help = ["xnxxdl", "dlxnxx"].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(xnxxdl|dlxnxx)$/i
handler.register = true
handler.premium = false
handler.private = false

module.exports = handler