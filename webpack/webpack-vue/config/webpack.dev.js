const path = require("path")
module.exports = {
	mode: 'development',
	// 入口文件的配置
	entry: {
		// 里面的main随意
		main: './src/main.js'
	},
	output: {
		// 打包的路径
		path: path.resolve(__dirname, '../dist'),
		// 打包的文件名称
		filename: 'bundle.js'
	},
	// 模块：例如解读CSS，图片如何转换，压缩
	module: {
		rules: [
			// css loader
			{
				test: /\.css$/,
				use: [{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			},
			// babel loader
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					},
				}
			},
		],
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
}
