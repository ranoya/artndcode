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
      p.background(bgcolor);
      p.cnv = p.createCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );

      p.cnv.mouseOut(p.pausa);
      p.cnv.mouseOver(p.roda);
    };

    p.desenho = function (px, py, valor) {
      let angulo = valor / (p.width / 4);

      p.push();
      p.rectMode(p.CENTER);
      p.stroke(fcolor);
      p.noFill();
      p.strokeWeight(1);
      p.translate(px, py);
      p.rotate(angulo);
      p.rect(0, 0, 34, 34);
      p.rotate(angulo / 2);
      p.rect(0, 0, 50, 50);
      p.rotate(angulo / 2);
      p.rect(0, 0, 75, 75);
      p.pop();

      p.push();
      p.stroke(fcolor);
      p.noFill();
      p.rectMode(p.CENTER);
      p.translate(px + 38 + 16, py + +38 + 16);
      p.rotate(-2 * angulo);
      p.rect(0, 0, 32, 32);
      p.pop();
    };

    p.draw = function () {
      p.background(bgcolor);

      for (let v = 0; v <= p.height + 100; v = v + 107) {
        for (let h = 0; h <= p.width + 100; h = h + 107) {
          p.desenho(h, v, p.mouseX);
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
