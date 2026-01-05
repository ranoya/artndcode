export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
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
    };

    p.angulo = 0;

    p.forma = function (a) {
      p.line(0, 100 + p.sin(a) * 100, 200, 100 + p.sin(a + p.PI) * 100);
      p.line(200, 0, 200, 100 + p.sin(a + p.PI) * 100);
      p.line(0, 200, 0, 100 + p.sin(a) * 100);
      p.line(100 + p.sin(a + p.PI) * 100, 0, 100 + p.sin(a) * 100, 200);
      p.line(0, 0, 100 + p.sin(a + p.PI) * 100, 0);
      p.line(100 + p.sin(a) * 100, 200, 200, 200);
    };

    p.superforma = function (alfa, ini, dx, dy) {
      p.push();
      p.translate(dx, dy);
      p.scale(0.25, 0.25);

      p.forma(alfa + ini);
      p.push();
      p.translate(200, 200);
      p.scale(-1, 1);
      p.forma(alfa + ini);
      p.pop();

      p.push();
      p.translate(200, 200);
      p.scale(1, -1);
      p.forma(alfa + ini);
      p.pop();

      p.push();
      p.translate(400, 400);
      p.scale(-1, -1);
      p.forma(alfa + ini);
      p.pop();

      p.pop();
    };

    p.draw = function () {
      p.background(bgcolor);
      p.stroke(fcolor);
      p.strokeWeight(5);

      p.superforma(p.angulo + 0.05, 0, 0, 0);

      for (let v = 0; v < p.height; v = v + 100) {
        let cresce = 0;

        for (let k = 0; k < p.width; k = k + 100) {
          p.superforma(p.angulo, cresce, k, v);

          cresce = cresce + 0.3;
        }

        p.angulo = p.angulo + 0.01;
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
