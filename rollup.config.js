import fs from 'fs'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { plugin as analyze } from 'rollup-plugin-analyzer'
import uglify from 'rollup-plugin-uglify-es'
import replace from 'rollup-plugin-replace'
import visualizer from 'rollup-plugin-visualizer'

const pkg = JSON.parse(fs.readFileSync('./package.json'))

const exports = 'named'
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  glamorous: 'glamorous',
  glamor: 'glamor',
  polished: 'polished',
}

export default {
  input: 'src/index.js',
  external: [
    'react',
    'react-dom',
    'glamor',
    'glamorous',
    'polished',
    'styled-system',
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({
      jsnext: true,
    }),
    commonjs({
      ignoreGlobal: true,
      include: 'node_modules/**',
      exclude: [
        'node_modules/polished/**',
        'node_modules/react-dom/**',
      ],
    }),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        ['es2015', {modules: false}],
        'stage-2',
        'react',
      ],
      plugins: [
        'external-helpers',
      ],
    }),
    uglify(),
    visualizer({
      filename: './catalog/static/bundle-stats.html',
      title: 'Genus',
    }),
    analyze({
      limit: 10,
    }),
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
