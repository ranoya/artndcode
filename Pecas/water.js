export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
}) => {
  let sketch = function (p) {
    p.sn_x = -200;
    p.lm_x = -10;
    p.crescendo = 1;

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

    p.draw = function () {
      p.background(bgcolor);
      p.stroke(fcolor);

      p.sn_x = -500;
      for (let ln_x = 0; ln_x < p.lm_x; ln_x = ln_x + 0.5) {
        p.line(
          Math.cos(p.sn_x) * (130 + p.crescendo) + ln_x,
          Math.sin(p.sn_x) * (130 + p.crescendo) +
            document.getElementById(el).clientHeight / 2,
          Math.cos(p.sn_x) * (470 + p.crescendo) + ln_x,
          Math.sin(p.sn_x) * (470 + p.crescendo) +
            document.getElementById(el).clientHeight / 2
        );

        p.sn_x = p.sn_x + 0.01;
      }

      p.crescendo++;
      p.lm_x = p.lm_x + 5;

      if (p.lm_x > 1800) {
        p.lm_x = 1800;
      }

      if (p.crescendo > 1800) {
        p.crescendo = 1;
        p.lm_x = -10;
      }
    };

    p.windowResized = function () {
      p.sn_x = -200;
      p.lm_x = -10;
      p.crescendo = 1;

      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
    };
  };

  return new p5(sketch, el);
};
