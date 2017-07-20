import { fontFace } from 'polished'
import { css } from 'glamor'

export default [
  fontFace({
    fontFamily: 'Brandon Text',
    fontFilePath: '/static/fonts/Brandon_txt_light-webfont',
    fontWeight: 300,
  }),
  fontFace({
    fontFamily: 'Brandon Text',
    fontFilePath: '/static/fonts/Brandon_txt_reg-webfont',
    fontWeight: 400,
  }),
  fontFace({
    fontFamily: 'Brandon Text',
    fontFilePath: '/static/fonts/Brandon_txt_bld-webfont',
    fontWeight: 700,
  }),
]
