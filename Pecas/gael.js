export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
}) => {
  let sketch = function (p) {
    p.pX = [];
    p.pY = [];
    p.forma = [];
    p.tamanho = [];
    p.novo = false;
    p.atual = 0;

    p.pausa = function () {
      p.noLoop();
    };

    p.roda = function () {
      p.loop();
    };

    p.cnv = "";

    p.setup = function () {
      p.cnv = p.createCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );

      p.cnv.mouseOut(p.pausa);
      p.cnv.mouseOver(p.roda);

      p.background(bgcolor);
      p.rectMode(p.CENTER);
      p.ellipseMode(p.CENTER);
      p.tamanho[p.atual] = p.random(p.width / 5);
      p.forma[p.atual] = p.int(p.random(3.9));
      p.fill(fcolor);
      p.noStroke();
    };

    p.draw = function () {
      p.background(bgcolor);

      for (let k = 0; k < p.atual; k++) {
        if (p.forma[k] < 1) {
          p.ellipse(p.pX[k], p.pY[k], p.tamanho[k], p.tamanho[k]);
        }
        if (p.forma[k] >= 1 && p.forma[k] < 2) {
          p.rect(p.pX[k], p.pY[k], p.tamanho[k], p.tamanho[k]);
        }
        if (p.forma[k] >= 2) {
          p.rect(p.pX[k], p.pY[k], p.tamanho[k], p.tamanho[k] / 2);
        }
      }

      if (p.forma[p.atual] < 1) {
        p.ellipse(p.mouseX, p.mouseY, p.tamanho[p.atual], p.tamanho[p.atual]);
      }
      if (p.forma[p.atual] >= 1 && p.forma[p.atual] < 2) {
        p.rect(p.mouseX, p.mouseY, p.tamanho[p.atual], p.tamanho[p.atual]);
      }
      if (p.forma[p.atual] >= 2) {
        p.rect(p.mouseX, p.mouseY, p.tamanho[p.atual], p.tamanho[p.atual] / 2);
      }
    };

    p.mousePressed = function () {
      p.pX[p.atual] = p.mouseX;
      p.pY[p.atual] = p.mouseY;
      p.atual++;
      p.tamanho[p.atual] = p.random(p.width / 5);
      p.forma[p.atual] = p.int(p.random(3.9));
    };

    p.mouseReleased = function () {
      p.novo = false;
    };

    p.windowResized = function () {
      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
      p.a = 0;
      p.s = 0.1 + p.random(0.1);
      p.l = 20 + p.random(10);
    };
  };

  return new p5(sketch, el);
};
