const path = require("path")
module.exports = {
	mode: 'development',
	// 入口文件的配置
	entry: {
		// 里面的main随意
		main:'./src/main.js'
	},
	output : {
		// 打包的路径
		path:path.resolve(__dirname, '../dist'),
		// 打包的文件名称
		filename: 'bundle.js'
	},
	// 模块：例如解读CSS，图片如何转换，压缩
	module:{},
	// 插件，用于生产模板和各项功能
	plugins:[],
	// 配置webpack开发服务功能
	devServer:{}
}
