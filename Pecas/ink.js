export default ({ p5, el = "iddoelemento", fcolor = "#000000" }) => {
  let sketch = function (p) {
    p.xs = [];
    p.ys = [];

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

      p.ellipseMode(p.CENTER);
      p.noStroke();
      p.fill(fcolor);
      p.ys[0] = document.getElementById(el).clientHeight / 2;
      p.xs[0] = 0;

      for (let i = 1; i < document.getElementById(el).clientWidth; i++) {
        p.xs[i] = p.xs[i - 1] + parseInt(p.random(200)) - 90;
        p.ys[i] = p.ys[i - 1] + parseInt(p.random(80)) - 40;

        if (p.ys[i] < 0) {
          p.ys[i] = 300 + p.ys[i];
        }

        if (p.ys[i] > 300) {
          p.ys[i] = p.ys[i] - 300;
        }
      }
    };

    p.draw = function () {
      p.fill(fcolor);
      p.noStroke();

      for (let i = 3; i < p.xs.length; i = i + 3) {
        p.stroke(fcolor);
        p.noFill();
        p.strokeWeight(1);

        /*
        p.curve(
          p.xs[i - 2],
          p.ys[i - 2],
          p.xs[i - 3],
          p.ys[i - 3],
          p.xs[i],
          p.ys[i],
          p.xs[i - 1],
          p.ys[i - 1]
        );
        p.curve(
          p.xs[i - 2],
          p.ys[i - 2] + 30,
          p.xs[i - 3],
          p.ys[i - 3],
          p.xs[i],
          p.ys[i],
          p.xs[i - 1],
          p.ys[i - 1] - 30
        );
        */

        p.stroke(fcolor + "aa");
        p.curve(
          p.xs[i - 2],
          p.ys[i - 2] + 85,
          p.xs[i - 3],
          p.ys[i - 3],
          p.xs[i],
          p.ys[i],
          p.xs[i - 1],
          p.ys[i - 1] - 85
        );
        p.curve(
          p.xs[i - 2],
          p.ys[i - 2] + 105,
          p.xs[i - 3],
          p.ys[i - 3],
          p.xs[i],
          p.ys[i],
          p.xs[i - 1],
          p.ys[i - 1] - 105
        );

        p.stroke(fcolor + "66");
        p.curve(
          p.xs[i - 2],
          p.ys[i - 2] + 175,
          p.xs[i - 3],
          p.ys[i - 3],
          p.xs[i],
          p.ys[i],
          p.xs[i - 1],
          p.ys[i - 1] - 175
        );
        p.curve(
          p.xs[i - 2],
          p.ys[i - 2] + 275,
          p.xs[i - 3],
          p.ys[i - 3],
          p.xs[i],
          p.ys[i],
          p.xs[i - 1],
          p.ys[i - 1] - 275
        );

        p.stroke(fcolor + "22");
        p.curve(
          p.xs[i - 2],
          p.ys[i - 2] + 375,
          p.xs[i - 3],
          p.ys[i - 3],
          p.xs[i],
          p.ys[i],
          p.xs[i - 1],
          p.ys[i - 1] - 375
        );

        if (i > 6 && i < p.xs.length - 6) {
          p.stroke(fcolor + "44");
          p.curve(
            p.xs[i],
            p.ys[i],
            p.xs[i - 3],
            p.ys[i - 3],
            p.xs[i + 3],
            p.ys[i + 3],
            p.xs[i],
            p.ys[i]
          );
          p.stroke(fcolor + "22");
          p.curve(
            p.xs[i - 3],
            p.ys[i - 3],
            p.xs[i - 6],
            p.ys[i - 6],
            p.xs[i],
            p.ys[i],
            p.xs[i - 3],
            p.ys[i - 3]
          );
        }

        p.stroke(fcolor + "FF");
        p.noFill();
        p.ellipse(p.xs[i], p.ys[i], 15, 15);

        if (Math.random() > 0.7) {
          p.stroke(fcolor + "66");
          p.ellipse(p.xs[i], p.ys[i], 55, 55);
        }

        if (Math.random() > 0.8) {
          p.stroke(fcolor + "33");
          p.ellipse(p.xs[i], p.ys[i], 85, 85);
        }

        if (Math.random() > 0.9) {
          p.stroke(fcolor + "22");
          p.ellipse(p.xs[i], p.ys[i], 185, 185);
        }

        if (Math.random() > 0.95) {
          p.stroke(fcolor + "11");
          p.ellipse(p.xs[i], p.ys[i], 385, 385);
        }

        p.fill(fcolor + "FF");
        p.ellipse(p.xs[i], p.ys[i], 5, 5);
      }

      p.noLoop();
    };

    p.windowResized = function () {
      p.ys[0] = 150;
      p.xs[0] = 0;

      for (let i = 1; i < document.getElementById(el).clientWidth; i++) {
        p.xs[i] = p.xs[i - 1] + parseInt(p.random(200)) - 90;
        p.ys[i] = p.ys[i - 1] + parseInt(p.random(80)) - 40;

        if (p.ys[i] < 0) {
          p.ys[i] = 300 + p.ys[i];
        }

        if (p.ys[i] > 300) {
          p.ys[i] = p.ys[i] - 300;
        }
      }
      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
      p.loop();
    };

    p.mousePressed = function () {
      p.windowResized();
    };
  };

  return new p5(sketch, el);
};
