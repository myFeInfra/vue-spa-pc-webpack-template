import path from 'path'
import { fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/webpack'
import Components from 'unplugin-vue-components/webpack'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// webpack.dev.ts
// 开发环境配置
const webpackDevConfig = {
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    compress: true, // 启用 gzip 压缩
    port: 9000, // 服务器端口
    open: true, // 自动打开浏览器
    hot: true, // 启用模块热替换
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:9000',
        pathRewrite: {
          '^/api': '',
        },
      },
    ],
  },
}

export default webpackDevConfig
