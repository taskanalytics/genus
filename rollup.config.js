import fs from 'fs'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'

const pkg = JSON.parse(fs.readFileSync('./package.json'))

export default {
  entry: 'src/index.js',
  external: ['glamorous'],
  globals: {glamorous: 'glamorous'},
  exports: 'named',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        ['es2015', {modules: false}],
        'stage-0',
        'stage-2',
      ],
      plugins: [
        'external-helpers',
        ['transform-react-jsx', {pragma:'h'}],
      ],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    commonjs({
      ignoreGlobal: true,
      include: 'node_modules/**',
    }),
  ],
  targets: [
    {dest: pkg.main, format: 'cjs'},
    {dest: pkg.module, format: 'es'},
    {dest: pkg['umd:main'], format: 'umd', moduleName: pkg.name},
  ],
}
