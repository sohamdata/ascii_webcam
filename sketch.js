const density = "@#W$9876543210?!abc;:+=,.                    ";
// const density = '!;:+=-,._#7                    '

let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64, 48);
  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();
  let asciiImage = "handsome capybara";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 3];
      const avg = (r + g + b) / 3;
      const charIndex = floor(map(avg, 0, 255, 0, density.length));
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}