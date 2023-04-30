let handler = async (m, { conn, isROwner }) => {
    if (!isROwner) throw false
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `balas gambarnya!`
        conn.updateProfilePicture(bot, img)
        m.reply('```Sukses```')
    }
}
handler.help = ['setbotpp']
handler.tags = ['owner']
handler.command = /^(set(bot)?pp)$/i

module.exports = handler

async function generateProfilePicture(buffer) {
	const jimp_1 = await Jimp.read(buffer);
	const minz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(720, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 720)
	const jimp_2 = await Jimp.read(await minz.getBufferAsync(Jimp.MIME_JPEG));
	return {
	  img: await minz.getBufferAsync(Jimp.MIME_JPEG)
	}
}