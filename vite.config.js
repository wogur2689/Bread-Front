module.exports = {
  /* outputDir: '../src/main/resources/static', */
  outputDir: './app/dist',
  devServer: {

    /* Dev */
    // proxy: {
    //   '^/': {
    //     /// springboot랑 다른 포트 사용
    //     target: 'http://localhost:8081',
    //     changeOrigin: true
    //   }
    // }

    /* Pub */
    proxy:  'http://localhost:8081'
  },
  transpileDependencies: true,
  lintOnSave:false
};
