import fs from 'fs'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { plugin as analyze } from 'rollup-plugin-analyzer'
import { terser } from 'rollup-plugin-terser'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import visualizer from 'rollup-plugin-visualizer'

const pkg = JSON.parse(fs.readFileSync('./package.json'))

const exports = 'named'
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  emotion: 'emotion',
  polished: 'polished',
}

export default {
  input: 'src/index.js',
  external: id => {
    return [
      /react/,
      /emotion/,
      /polished/,
      /styled-system/,
    ].some(r => r.test(id))
  },
  plugins: [
    resolve(),
    commonjs({
      ignoreGlobal: true,
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        ['@babel/preset-env', {
          modules: false,
        }],
        '@babel/preset-react',
        '@emotion/babel-preset-css-prop',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
      ],
    }),
    sizeSnapshot(),
    terser({
      compress: {
        global_defs: {
          'process.env.NODE_ENV': 'production',
        }
      }
    }),
    visualizer({
      filename: './catalog/static/bundle-stats.html',
      title: 'Genus',
    }),
    //analyze({ limit: 10 }),
  ],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports,
      globals,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      exports,
      globals,
    },
    {
      file: pkg['umd:main'],
      format: 'umd',
      name: pkg.name,
      sourcemap: true,
      exports,
      globals,
    },
  ],
}
