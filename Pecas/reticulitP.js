export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
  rastro = 1,
}) => {
  let sketch = function (p) {
    p.bloco = function (t, x, y) {
      if (typeof t == "undefined" || t == null || t == "" || t == 0) {
        t = 1;
      }

      if (t == 3) {
        p.line(x - 5, y - 4, x - 3, y - 4);
        p.line(x - 4, y - 5, x - 4, y - 3);

        p.line(x + 5, y - 4, x + 3, y - 4);
        p.line(x + 4, y - 5, x + 4, y - 3);

        p.line(x - 5, y + 4, x - 3, y + 4);
        p.line(x - 4, y + 5, x - 4, y + 3);

        p.line(x + 5, y + 4, x + 3, y + 4);
        p.line(x + 4, y + 5, x + 4, y + 3);

        p.line(x - 5, y, x - 3, y);
        p.line(x - 4, y - 1, x - 4, y + 1);

        p.line(x - 1, y - 4, x + 1, y - 4);
        p.line(x, y - 5, x, y - 3);

        p.line(x - 1, y + 4, x - 1, y + 4);
        p.line(x, y + 5, x, y + 3);

        p.line(x + 5, y, x + 3, y);
        p.line(x + 4, y - 1, x + 4, y + 1);

        p.line(x - 1, y, x + 1, y);
        p.line(x, y - 1, x, y + 1);
      }

      if (t == 2) {
        p.line(x - 3, y - 3, x + 3, y + 3);
        p.line(x - 3, y + 3, x + 3, y - 3);
      }

      if (t == 1) {
        p.line(x - 1, y, x + 1, y);
        p.line(x, y - 1, x, y + 1);
      }
    };

    p.paintblock = function (xi, yi) {
      let s = Math.random();
      let t = 1;
      if (s > 0.95) {
        t = 3;
      }
      if (s > 0.99) {
        t = 2;
      }
      for (let y = yi; y < yi + 8 * 16; y = y + 16) {
        for (let x = xi; x < xi + 8 * 16; x = x + 16) {
          if (x < p.windowWidth - 8 && y < p.windowHeight - 8) {
            p.bloco(t, x, y);
          }
        }
      }
    };

    p.mouseClicked = function () {
      p.background(bgcolor);
      p.stroke(fcolor);
      p.loop();
    };

    p.cnv = "";

    p.setup = function () {
      p.ellipseMode(p.CENTER);
      p.strokeCap(p.SQUARE);
      p.cnv = p.createCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight,
      );

      p.strokeWeight(1);
      p.stroke(fcolor);
      p.background(bgcolor);
      p.noFill();
    };

    p.draw = function () {
      for (let y = 16; y < p.windowHeight - 8; y = y + 8 * 16) {
        for (let x = 16; x < p.windowWidth - 8; x = x + 8 * 16) {
          p.paintblock(x, y);
        }
      }

      p.noLoop();
    };

    p.windowResized = function () {
      p.ellipseMode(p.CENTER);
      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight,
      );

      p.strokeCap(p.SQUARE);
      p.strokeWeight(1);
      p.background(bgcolor);
      p.noFill();
      p.stroke(fcolor);
      p.loop();
    };
  };

  return new p5(sketch, el);
};
