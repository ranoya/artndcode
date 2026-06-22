export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
  space = 10,
}) => {
  let sketch = function (p) {
    p.x = 0;
    p.a = 0.01;
    p.posy = 0;
    p.raio = Math.random() * 300;
    p.speed = 0.05;
    p.ys = [];
    p.ysb = [];
    p.start = 0;

    p.projeta = function () {
      for (let i = 0; i < 5000; i++) {
        p.ys[i] = Math.sin(p.a) * p.raio;

        if (Math.random() > 0.5) {
          p.speed = p.speed - 0.001;
          if (p.speed < 0.01) {
            p.speed = 0.01;
          }
        } else {
          p.speed = p.speed + 0.001;
          if (p.speed > 0.1) {
            p.speed = 0.1;
          }
        }

        p.a = p.a + p.speed;

        p.x = p.x + space;

        if (p.a > Math.PI * 2) {
          p.raio = Math.random() * 500;
          p.a = 0;
        }
      }

      p.x = 0;

      for (let i = 0; i < 5000; i++) {
        p.ysb[i] = Math.sin(p.a) * p.raio;

        if (Math.random() > 0.5) {
          p.speed = p.speed - 0.001;
          if (p.speed < 0.01) {
            p.speed = 0.01;
          }
        } else {
          p.speed = p.speed + 0.001;
          if (p.speed > 0.1) {
            p.speed = 0.1;
          }
        }

        p.a = p.a + p.speed;

        p.x = p.x + space;

        if (p.a > Math.PI * 2) {
          p.raio = Math.random() * 500;
          p.a = 0;
        }
      }
    };

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
        document.getElementById(el).clientHeight,
      );
      p.strokeWeight(1);
      p.background(bgcolor);
      p.stroke(fcolor);
      p.projeta();
    };

    p.draw = function () {
      p.background(bgcolor);
      p.push();
      p.translate(0, p.height / 2);

      for (let i = 0; i < width / space; i++) {
        if (p.ysb[p.start + i] > p.ys[p.start + i]) {
          p.line(i * space, -5000, i * space, p.ys[p.start + i]);
          p.line(i * space, 5000, i * space, p.ysb[p.start + i]);
        } else {
          p.line(i * space, -5000, i * space, p.ysb[p.start + i]);
          p.line(i * space, 5000, i * space, p.ys[p.start + i]);
        }

        p.line(i * space + space / 2, -5000, i * space + space / 2, 5000);
      }

      p.start++;

      p.pop();

      p.noLoop();
    };

    p.windowResized = function () {
      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight,
      );

      p.setup();
      p.loop();
    };
  };

  return new p5(sketch, el);
};
