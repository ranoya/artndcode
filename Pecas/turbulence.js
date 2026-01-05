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

      p.rectMode(p.RADIUS);
      p.noFill();
      p.frameRate(30);
      p.background(fcolor);
      p.strokeWeight(1);
    };

    p.a = 0;
    p.s = 0.1 + Math.random() * 0.1;
    p.l = 20 + Math.random() * 10;

    p.draw = function () {
      p.stroke(bgcolor);
      p.translate(p.width / 2 + p.cos(p.a) * 30, p.height / 2);
      p.scale(p.a);
      p.rotate(p.a / 2);
      p.rect(0, 0, p.l, p.l);

      p.a = p.a + p.s;

      if (p.a > 100) {
        p.noLoop();
      }
    };

    p.windowResized = function () {
      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
      p.background(fcolor);
      p.strokeWeight(1);
      p.a = 0;
      p.s = 0.1 + Math.random() * 0.1;
      p.l = 20 + Math.random() * 10;
      p.loop();
    };

    p.mousePressed = function () {
      p.windowResized();
    };
  };

  return new p5(sketch, el);
};
