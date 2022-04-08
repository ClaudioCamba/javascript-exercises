const ftoc = function (f) {
  f = (f - 32) / 1.8;
  let fc = parseFloat(f.toFixed(1));
  return fc;
};

const ctof = function (c) {
  c = (c * 1.8) + 32;
  let cf = parseFloat(c.toFixed(1));
  return cf;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
