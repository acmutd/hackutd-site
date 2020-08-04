// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'HackUTD',
  siteUrl: 'https://hackutd.co',
  icon: './src/favicon.png',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    }
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@officers', '@/assets/officers')
  }
}
