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

      p.background(bgcolor);
      p.stroke(fcolor);
    };

    p.raio = 15;
    p.step = 70;
    p.respiro = 0;

    p.alfa = function (mX, mY) {
      let deltaX = p.mouseX - mX;
      let deltaY = p.mouseY - mY;
      let angle = p.atan2(deltaY, deltaX);
      return angle;
    };

    p.draw = function () {
      p.background(bgcolor + "22");

      p.stroke(fcolor);
      p.strokeWeight(1);

      p.respiro += 0.05;

      for (let v = 0; v <= p.width + 2 * p.step; v = v + p.step) {
        for (let h = 0; h <= p.width + 2 * p.step; h = h + p.step) {
          p.raio = 15;
          p.strokeWeight(50);
          p.newC = p.color(fcolor);
          p.stroke(p.newC);

          p.contrai =
            p.sin(p.respiro) * 10 * (p.dist(h, v, p.mouseX, p.mouseY) / 150);

          p.line(
            h + (p.random(5) - 15),
            v + p.contrai / 2 + (p.random(5) - 5),
            h + (p.raio + p.random(15)) * p.cos(p.alfa(h, v)),
            v + p.contrai + (p.raio + p.random(10)) * p.sin(p.alfa(h, v))
          );
        }
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
