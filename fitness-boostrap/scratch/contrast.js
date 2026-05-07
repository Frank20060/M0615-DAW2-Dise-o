function getLuminance(hex) {
  const rgb = hex.match(/[A-Za-z0-9]{2}/g).map(v => {
    let s = parseInt(v, 16) / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

function getRatio(hex1, hex2) {
  const l1 = getLuminance(hex1);
  const l2 = getLuminance(hex2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function findClosestColor(baseHex, targetRatio, vsHex) {
  let r = parseInt(baseHex.slice(1, 3), 16);
  let g = parseInt(baseHex.slice(3, 5), 16);
  let b = parseInt(baseHex.slice(5, 7), 16);
  
  for (let i = 0; i < 200; i++) {
    let nr = Math.max(0, Math.round(r * (1 - i/200)));
    let ng = Math.max(0, Math.round(g * (1 - i/200)));
    let nb = Math.max(0, Math.round(b * (1 - i/200)));
    let nHex = "#" + [nr, ng, nb].map(x => x.toString(16).padStart(2, '0')).join('');
    let ratio = getRatio(nHex, vsHex);
    if (ratio >= targetRatio) {
      return { hex: nHex, ratio: ratio };
    }
  }
  return null;
}

console.log("Purple target 4.5:1 vs #f8f9fa:", findClosestColor("#8e5fca", 4.5, "#f8f9fa"));
console.log("Purple target 4.5:1 vs #eee7f7:", findClosestColor("#8e5fca", 4.5, "#eee7f7"));
console.log("Purple vs #ffffff ratio check:", getRatio("#8657c2", "#ffffff"));
