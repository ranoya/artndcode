export default ({
  p5,
  el = "iddoelemento",
  bgcolor = "#000000",
  fcolor = "#FFFFFF",
}) => {
  let sketch = function (p) {
    let iX = [];
    let iY = [];
    let fX = [];
    let fY = [];
    let speed = [];

    p.pausa = function () {
      p.noLoop();
    };

    p.roda = function () {
      p.loop();
    };

    p.cnv = "";

    p.setup = function () {
      p.background(bgcolor);
      p.cnv = p.createCanvas(p.windowWidth, p.windowHeight);

      p.cnv.mouseOut(p.pausa);
      p.cnv.mouseOver(p.roda);

      for (let linha = 0; linha < p.windowWidth; linha++) {
        iX[linha] = parseInt(p.random(p.windowWidth / 2));
        fX[linha] = parseInt(p.random(p.windowWidth / 2) + p.windowHeight / 2);
        iY[linha] = linha;
        fY[linha] = linha;
        speed[linha] = parseInt(p.random(20)) + 2;
      }
    };

    p.draw = function () {
      p.strokeWeight(1);
      p.stroke(fcolor);
      p.background(bgcolor);

      for (let dl = 0; dl < p.windowHeight; dl++) {
        iX[dl] = iX[dl] + speed[dl];
        fX[dl] = fX[dl] + speed[dl];

        if (fX[dl] > p.windowWidth) {
          fX[dl] = 0;
          fY[dl] = fY[dl] + 1;
        }
        if (iX[dl] > p.windowWidth) {
          iX[dl] = 0;
          iY[dl] = iY[dl] + 1;
        }

        if (fY[dl] > p.windowHeight) {
          fY[dl] = 0;
        }
        if (iY[dl] > p.windowHeight) {
          iY[dl] = 0;
        }

        if (fX[dl] < iX[dl]) {
          p.line(fX[dl], fY[dl], p.windowWidth, fY[dl]);
          p.line(0, iY[dl], iX[dl], iY[dl]);
        } else {
          p.line(iX[dl], iY[dl], fX[dl], fY[dl]);
        }
      }
    };

    p.windowResized = function () {
      p.cnv = p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  };

  return new p5(sketch, el);
};
