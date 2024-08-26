/** @type {import('tailwindcss').Config} */
module.exports = { 
	content: [ "./src/**/*.{js,ts,jsx,tsx}" ], 
	theme: { 
		extend: {
      colors: {
        'mec-dark-blue': 'rgb(22, 69, 127)',
        'mec-light-blue': 'rgb(53, 112, 184)',
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