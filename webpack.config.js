const path = require ('path');

module.exports = {
	entry: './themes/northendlab/assets/js/script.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'themes','northendlab','assets','js')
	},
	mode: 'production'
};