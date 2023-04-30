let didyoumean = require('didyoumean')
let similarity = require('similarity')

let handler = m => m

handler.before = function (m, { match, usedPrefix, text, args }) {
	if ((usedPrefix = (match[0] || '')[0])) {
		let noPrefix = m.text.replace(usedPrefix, '')
		let args = noPrefix.trim().split` `.slice(1)
		let text = args.join` `
		let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
		if (alias.includes(noPrefix)) return
		let mean = didyoumean(noPrefix, alias)
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = conn.getName(who)
		let tag = `*@${who.split("@")[0]}*`
		let sim = similarity(noPrefix, mean)
		let som = sim * 100
	 if (mean) this.sendButton(m.chat, `👋 Hai kak ${tag}\n\nApakah kamu mencari *${usedPrefix + mean}*?\n\nHasil Kemiripan ➲ *${parseInt(som)}%*`, wm, 'https://telegra.ph/file/3a2417111d0d67e375896.png', [['BENAR', usedPrefix + mean], ['TIDAK', usedPrefix + 'iya']], m)
	}
  }

module.exports = handler

/*
  * Dann Official
  * Instagram: @dannalwaysalone
*/