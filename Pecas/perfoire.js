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
      p.ellipseMode(p.CENTER);
      p.stroke(fcolor);
      p.fill(bgcolor);
      p.strokeWeight(10);
    };

    p.t = 300;
    p.working = "comeca";
    p.extratime = 0;

    p.mousePressed = function () {
      if (p.working == "comeca") {
        p.working = "produz";
      }
    };

    p.mouseDragged = function () {
      p.t = p.t - 1;

      if (p.t <= 0) {
        p.working = "pausa";
      }

      if (p.working == "pausa") {
        p.extratime++;

        if (p.extratime > 50) {
          p.extratime = 0;
          p.t = 300;
          p.working = "comeca";
        }
      }
    };

    p.draw = function () {
      if (p.working == "produz") {
        p.stroke(fcolor);
        p.fill(bgcolor);
        p.strokeWeight(2);
        p.ellipse(p.mouseX, p.mouseY, p.t, p.t);
      }

      if (p.working == "comeca") {
        p.background(bgcolor);
        p.stroke(fcolor);
        p.fill(bgcolor);
        p.strokeWeight(2);
        p.ellipse(p.mouseX, p.mouseY, p.t, p.t);
      }

      if (p.working == "pausa") {
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
