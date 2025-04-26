import webpackDevConfig from './webpack.dev.ts'
import webpackProdConfig from './webpack.prod.ts'
import webpackPreviewConfig from './webpack.preview.ts'
import { VueLoaderPlugin } from 'vue-loader' //解析 vue 必要的插件吧
import HtmlWebpackPlugin from 'html-webpack-plugin' //解析HTML
import Unocss from '@unocss/webpack' //解析 unocss 样式
import path from 'path'
import { merge } from 'webpack-merge'
import { swcConfig } from './swc.config.ts'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const outputPath = path.resolve(__dirname, '../dist')
console.log('Output path:', outputPath)

// webpack公共配置
const webpackCommonConfig = {
  // stats: 'verbose',
  // 入口文件配置
  entry: {
    app: {
      import: './src/main.ts',
      // filename: 'js/[name].[contenthash:8]-bundle.js',
      // chunkFilename: 'js/[name].[contenthash:8]-chunk.js',
      // dependOn: 'shared'
    },
    // shared: []
  },
  // 输出文件配置
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash:8]-bundle.js',
    chunkFilename: 'js/[name].[contenthash:8]-chunk.js',
    assetModuleFilename: 'assets/[name].[contenthash:8][ext]',
    publicPath: '/',
  },
  //TODO 提高webpack 的进一步的解析实现吧
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@component': path.resolve(__dirname, '../component'),
    },
  },
  // 模块配置
  module: {
    rules: [
      //TODO ts loader配置
      {
        test: /\.(ts|js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: swcConfig,
        },
      },
      //TODO img loader配置
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[contenthash:8][ext]',
        },
      },
      //TODO font loader配置
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[contenthash:8][ext]',
        },
      },
      //TODO css 解析
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                syntax: 'postcss-scss',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                syntax: 'postcss-less',
              },
            },
          },
          'less-loader',
        ],
      },
      //TODO vue 解析
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  // 插件配置
  plugins: [
    // vue-loader插件, 用于解析.vue文件
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    Unocss(),
  ],
}

function getWebpackConfig(mode: string) {
  let needMergeConfig
  switch (mode) {
    case 'development':
      needMergeConfig = webpackDevConfig
      break
    case 'production':
      needMergeConfig = webpackProdConfig
      break
    case 'preview':
      needMergeConfig = webpackPreviewConfig
      break
  }
  return merge(webpackCommonConfig as any, needMergeConfig as any)
}

export default getWebpackConfig
