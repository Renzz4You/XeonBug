require("./doc/module.js")

global.prefix = ['','!','.',',','#','/']
global.owner = ['628973086040']
global.ownMain = '628973086040'
global.NamaOwner = '🦄日本 RynZxD' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'X-EndPoint' //
global.author = '🦄日本 RynZxD' //
global.packname = 'Xeon-Bug-API' //
global.url1 = 'https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20' //
global.url2 = 'https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20' //
global.linkgc = 'https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
