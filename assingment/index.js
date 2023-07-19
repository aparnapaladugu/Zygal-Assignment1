const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const fontSize = 20;
const fontFamily = 'Arial';
const fontColor = 'green';
ctx.font = `${fontSize}px ${fontFamily}`;
ctx.fillStyle = fontColor;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('A', canvas.width / 2, canvas.height / 2);
 const downloadLink = document.getElementById('downloadLink');
 downloadLink.addEventListener('click', () => {
  const canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let hexData = '';
 for (let i = 0; i < canvasData.length; i += 4) {
    const red = canvasData[i].toString(16).padStart(2, '0');
    const green = canvasData[i + 1].toString(16).padStart(2, '0');
    const blue = canvasData[i + 2].toString(16).padStart(2, '0');
    const alpha = canvasData[i + 3].toString(16).padStart(2, '0');
    hexData += '0x' + red + green + blue + alpha + ', ';
    if ((i + 4) % (4 * canvas.width) === 0) {
      hexData += '\n';
    }
  }
 const blob = new Blob([hexData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  downloadLink.href = url;
});