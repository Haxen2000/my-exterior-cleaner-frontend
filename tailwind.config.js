/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ],
	theme: { 
		extend: {
      colors: {
        'mec-dark-blue': 'rgb(22, 69, 127)',
        'mec-light-blue': 'rgb(53, 112, 184)',
        'fb-blue': 'rgb(59, 89, 152)',
        'yt-red': 'rgb(255, 51, 51)',
        'li-blue': 'rgb(0, 127, 177)',
        'ig-red': 'rgb(233, 68, 117)',
        'pt-red': 'rgb(203, 33, 40)',
        'sc-yel': 'rgb(255, 201, 27)'
      },
    },
	},
	plugins: [],
	module: {
		rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                importLoaders: 1,
                ident: 'postcss',
                syntax: 'postcss-scss',
                plugins: [
                  require('postcss-import'),
                  require('tailwindcss'),
                  require('autoprefixer'),
                ]
              }
            }
          },
          {
            loader: 'sass-loader' // This is the fix
          }
        ]
      },
    ],
	}
}