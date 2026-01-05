export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
  rastro = 1,
}) => {
  let sketch = function (p) {
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

      p.stroke(fcolor);
      p.strokeWeight(1);
    };

    p.anguloA = 45;
    p.anguloB = 280;
    p.aBA = 0;
    p.aBB = 0;
    p.traco = 70;

    p.draw = function () {
      p.translate(p.width / 2, p.height / 2);
      p.background(bgcolor);
      p.anguloA = p.anguloA + 1;
      p.anguloB = p.anguloB + 2;
      p.aBA = p.anguloA;
      p.aBB = p.anguloB;

      for (let i = 0; i < p.traco; i++) {
        p.aA = (p.aBA * p.PI) / 180;
        p.aB = (p.aBB * p.PI) / 180;
        p.line(
          p.sin(p.aA) * (p.width / 2),
          p.cos(p.aA) * (p.height / 1.5),
          p.cos(p.aB) * (p.width / 1.8),
          p.sin(p.aB) * (p.height / 6)
        );
        p.aBA = p.aBA + 1;
        p.aBB = p.aBB + 2;
        if (p.aBA > 720) {
          p.aBA = 0;
        }
        if (p.aBB > 720) {
          p.aBB = 0;
        }
      }

      if (p.anguloA > 360) {
        p.anguloA = 0;
      }
      if (p.anguloB > 360) {
        p.anguloB = 0;
      }
    };

    p.windowResized = function () {
      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
    };
  };

  return new p5(sketch, el);
};
