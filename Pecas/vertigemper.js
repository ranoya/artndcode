export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
}) => {
  let sketch = function (p) {
    p.layer = [];
    p.aa = 0;

    p.da = 0;
    p.stk = 1;

    p.inv = true;

    p.fg = fcolor;

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

      p.strokeCap(p.SQUARE);

      p.c = 1;
      p.lastc2 = 0;

      for (let l = 0; l < 20; l++) {
        p.layer[l] = [];
        p.layer[l].c1 = p.lastc2;
        p.layer[l].c2 = p.lastc2 + 3 + Math.random() * 150;
        p.layer[l].d = 100 + Math.random() * 350;
        p.lastc2 = p.layer[l].c2;

        p.layer[l].as = [];
        p.layer[l].as[0] = Math.random() / 4;

        p.c = 1;
        p.aa = 0;

        while (p.aa < Math.PI * 2) {
          p.layer[l].as[p.c] = p.layer[l].as[p.c - 1] + Math.random() / 4;
          p.aa = p.layer[l].as[p.c];
          p.c++;
        }
      }
    };

    p.mousePressed = function () {
      p.background(bgcolor);
    };

    p.draw = function () {
      if (p.pmouseX < p.mouseX) {
        p.fg = fcolor;
      } else {
        p.fg = bgcolor;
      }

      p.stroke(p.fg);

      p.push();
      p.translate(
        document.getElementById(el).clientWidth / 2,
        document.getElementById(el).clientHeight / 2
      );

      for (let l = 0; l < p.layer.length; l++) {
        p.stk = 1;

        for (let k = 0; k < p.layer[l].as.length; k++) {
          p.da = p.mouseX / p.layer[l].d;
          p.strokeWeight(p.stk);
          p.stk += 0.09;
          p.line(
            Math.cos(p.layer[l].as[k] + p.da) * p.layer[l].c1,
            Math.sin(p.layer[l].as[k] + p.da) * p.layer[l].c1,
            Math.cos(p.layer[l].as[k] + p.da) * p.layer[l].c2,
            Math.sin(p.layer[l].as[k] + p.da) * p.layer[l].c2
          );
        }
      }

      p.pop();
    };

    p.windowResized = function () {
      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );

      p.aa = 0;

      p.da = 0;
      p.stk = 1;

      p.fg = fcolor;

      p.c = 1;
      p.lastc2 = 0;

      p.layer = [];

      for (let l = 0; l < 20; l++) {
        p.layer[l] = [];
        p.layer[l].c1 = p.lastc2;
        p.layer[l].c2 = p.lastc2 + 3 + Math.random() * 150;
        p.layer[l].d = 100 + Math.random() * 350;
        p.lastc2 = p.layer[l].c2;

        p.layer[l].as = [];
        p.layer[l].as[0] = Math.random() / 4;

        p.c = 1;
        p.aa = 0;

        while (p.aa < Math.PI * 2) {
          p.layer[l].as[p.c] = p.layer[l].as[p.c - 1] + Math.random() / 4;
          p.aa = p.layer[l].as[p.c];
          p.c++;
        }
      }
    };
  };

  return new p5(sketch, el);
};
