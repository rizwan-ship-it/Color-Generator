function fn_rgb_genrated() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

function fn_linear_gradient(numberOfGradient = 10) {
  // linear-gradient(180deg, color1, color2)

  const linearGradientList = [];
  for (let i = 1; i <= numberOfGradient; i++) {
    const color1 = fn_rgb_genrated();
    const color2 = fn_rgb_genrated();
    const degree = Math.floor(Math.random() * 361);
    const result = `linear-gradient(${degree}deg, ${color1},${color2})`;
    linearGradientList.push(result);
  }
  return linearGradientList;
}

function fn_radial_gradient(numberOfGradient = 10) {
  // background-image: radial-gradient(red, green);
  const radialGenratedList = [];

  for (let i = 1; i <= numberOfGradient; i++) {
    const color1 = fn_rgb_genrated();
    const color2 = fn_rgb_genrated();
    const result = `radial-gradient(${color1},${color2})`;
    radialGenratedList.push(result);
  }
  return radialGenratedList;
}
function fn_conic_gradient(numberOfGradient = 10) {
  const conicGenratedList = [];
  // background-image: conic-gradient( from 33deg, color1 0% 33%, color2 33% 66%, color3 66% 99%);

  for (let i = 1; i <= numberOfGradient; i++) {
    const color1 = fn_rgb_genrated();
    const color2 = fn_rgb_genrated();
    const color3 = fn_rgb_genrated();
    const degree = Math.floor(Math.random() * 361);

    const result = `conic-gradient(from ${degree}deg,  ${color1} 0% 33%,${color2} 33% 66%, ${color3} 66% 99%) `;
    conicGenratedList.push(result);
  }

  return conicGenratedList;
}

export {
  fn_rgb_genrated,
  fn_linear_gradient,
  fn_radial_gradient,
  fn_conic_gradient,
};
