import path from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// webpack.prod.ts
// webpack 生产环境配置
const webpackProdConfig = {
  mode: 'production',
  // 下面移除的包使用我们的CDN模式实现引入吧
  externals: {
    vue: 'Vue',
  },
  // 优化配置
  optimization: {
    // TODO 分割代码 code split 配置
    splitChunks: {
      chunks: 'all', // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
      minSize: 20000, // 表示在压缩前的最小模块大小,默认值是 30kb
      minRemainingSize: 0, // 类似于 minSize，但是是在分割之后的大小，它表示在压缩前的模块大小，默认值是 0
      minChunks: 1, //  表示被引用次数，默认为 1；
      maxAsyncRequests: 30, // 最大的按需(异步)加载次数，默认为 1；
      maxInitialRequests: 30, // 最大的初始化加载次数，默认为 1；
      enforceSizeThreshold: 50000, // 超过50kb单独打包
      name: false, // 拆分出来块的名字(Chunk Names)，默认由块名和hash值自动生成；
      cacheGroups: {
        // 缓存组
        vendors: {
          // 抽离第三方插件
          test: /[\\/]node_modules[\\/]/, // 指定是node_modules下的第三方包
          priority: -10, // 优先级，先抽离第三方模块
          filename: 'js/[name].[contenthash:8]-vendor.js', // 打包后的文件名，任意命名
        },
        default: {
          // 抽离自己写的公共代码
          minChunks: 2, // 最小引用2次
          priority: -20, // 优先级
          reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
          filename: 'js/[name].[contenthash:8]-common.js', // 打包后的文件名，任意命名
        },
      },
    },
    // TODO 压缩代码
    minimize: true,
    // TODO 压缩代码的具体配置
    minimizer: [
      // 压缩 js
      new TerserPlugin({
        parallel: true, // 开启多线程压缩
        terserOptions: {
          compress: {
            pure_funcs: ['console.log'], // 移除 console
          },
          output: {
            comments: false, // 移除注释
          },
        },
      }),
      // 压缩 css
      new CssMinimizerPlugin({
        parallel: true, // 开启多线程压缩
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }, // 移除注释
            },
          ],
        },
      }),
    ],
  },
  // 将原本 optimization 下的 plugins 移到这里
  plugins: [
    new CleanWebpackPlugin({
      dry: false, // 启用删除文件
      verbose: true, // 启用详细输出
      // 确保不会删除 js 目录
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!js/**', // 排除 js 目录
        path.join(process.cwd(), 'build/**/*'),
      ],
      cleanAfterEveryBuildPatterns: [
        '**/*',
        '!js/**', // 排除 js 目录
        path.join(process.cwd(), 'build/**/*'),
      ],
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // TODO 最后优化
    new CompressionPlugin({
      test: /\.(js,ts,css,less,vue,scss,jsx,tsx)$/, // 匹配文件名
      threshold: 1024 * 10, // 对超过10k的数据进行压缩
      deleteOriginalAssets: false, // 不删除源文件
      minRatio: 0.8, // 压缩比
    }),
  ],
}

export default webpackProdConfig
