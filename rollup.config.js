import fs from 'fs'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import analyze from 'rollup-analyzer-plugin'
import uglify from 'rollup-plugin-uglify-es'
import ignore from 'rollup-plugin-ignore'
import replace from 'rollup-plugin-replace'

const pkg = JSON.parse(fs.readFileSync('./package.json'))

export default {
  input: 'src/index.js',
  external: ['react', 'glamorous'],
  exports: 'named',
  globals: {
    react: 'React',
    glamorous: 'glamorous',
  },
  useStrict: false,
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    ignore([
      'prop-types',
    ]),
    resolve({
      jsnext: false,
      main: true,
      browser: true,
    }),
    commonjs({
      ignoreGlobal: true,
      include: 'node_modules/**',
      exclude: [
        'node_modules/polished/**',
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
    analyze({
      limit: 10,
    }),
  ],
  output: [
    {file: pkg.main, format: 'cjs', sourcemap: true},
    {file: pkg.module, format: 'es', sourcemap: true},
    {file: pkg['umd:main'], format: 'umd', name: pkg.name, sourcemap: true},
  ],
}
