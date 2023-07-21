module.exports={
  // 添加自动前缀选项
  style: {
    sass: {
      loaderOptions: {
        // Prefer 'sass' (dart-sass) over 'node-sass' if both packages are installed.
        implementation: require('sass'),
        // Workaround for this bug: https://github.com/webpack-contrib/sass-loader/issues/804
        webpackImporter: false,
      },
    },
    postcss: {
      env: {
        autoprefixer: {
          cascade: true,
        },
        stage: 3,
        features: {
          'nesting-rules': true,
        },
      },
      // 优化和压缩 CSS
      plugins: [
        require('cssnano')({
          preset: 'default',
        }),
      ],
    },
  },
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
  // 设置端口号为 3000
  devServer: {
    port: 3001,
  },
}