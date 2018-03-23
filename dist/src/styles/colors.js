'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = undefined;
exports.get = get;

var _polished = require('polished');

var base = '#F0F4F7';
var primary = '#2084d8';
var primaryDark = (0, _polished.shade)(0.2, primary);
var primaryShaded = (0, _polished.tint)(0.5, primary);
var text = '#2d3644';

var colors = exports.colors = {
  primary: primary,
  primaryDark: primaryDark,
  primaryShaded: primaryShaded,
  base: base,
  white: '#fff',
  dark: '#323C4C',
  text: text,
  muted: (0, _polished.rgba)(text, 0.7),
  link: primary,
  linkHover: (0, _polished.shade)(0.2, primaryDark),
  good: (0, _polished.rgba)(140, 215, 150, 1),
  goodLight: (0, _polished.rgba)(140, 215, 150, 0.25),
  headsUp: (0, _polished.rgba)(255, 212, 0, 1),
  headsUpLight: (0, _polished.rgba)(255, 212, 0, 0.15),
  trouble: (0, _polished.rgba)(255, 90, 20, 1),
  troubleLight: (0, _polished.rgba)(255, 90, 20, 0.25)
};

function get(name) {
  return name in colors ? colors[name] : name;
}

//# sourceMappingURL=colors.js.map