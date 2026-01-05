function draw() {}

export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
}) => {
  let dir = 1;
  let displ = 0;

  let sketch = function (p) {
    p.seta = function (d, f, x, y) {
      p.line(x, y, x + f * 30, y + f * 15 * d);
      p.line(x, y, x - f * 30, y + f * 15 * d);
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
        document.getElementById(el).clientHeight
      );

      p.cnv.mouseOut(p.pausa);
      p.cnv.mouseOver(p.roda);

      p.background(bgcolor);
      p.stroke(fcolor);
      p.strokeWeight(2);
    };

    p.draw = function () {
      p.background(bgcolor);
      p.stroke(fcolor);

      for (let py = -100; py < p.windowHeight + 100; py = py + 50) {
        dir = 1;
        for (let px = 80; px < p.windowWidth; px = px + 150) {
          p.seta(dir, 2, px, py + displ * dir * -1);
          dir = dir * -1;
        }
      }
      displ++;
      if (displ >= 100) {
        displ = 0;
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
