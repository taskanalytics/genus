import fs from 'fs'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import analyze from 'rollup-analyzer-plugin'
import uglify from 'rollup-plugin-uglify-es'
import ignore from 'rollup-plugin-ignore'

const pkg = JSON.parse(fs.readFileSync('./package.json'))

export default {
  entry: 'src/index.js',
  external: ['react', 'glamorous'],
  exports: 'named',
  globals: { react: 'React', 'glamorous': 'glamorous' },
  useStrict: false,
  sourceMap: true,
  plugins: [
    ignore([
      'prop-types',
    ]),
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
      externalHelpers: true,
      presets: [
        ['es2015', {modules: false}],
        'stage-2',
        'react',
      ],
      plugins: [
        'external-helpers',
      ],
    }),
    resolve({
      jsnext: false,
      main: true,
      browser: true,
    }),
    uglify(),
    analyze({
      limit: 10,
    }),
  ],
  targets: [
    {dest: pkg.main, format: 'cjs'},
    {dest: pkg.module, format: 'es'},
    {dest: pkg['umd:main'], format: 'umd', moduleName: pkg.name},
  ],
}
