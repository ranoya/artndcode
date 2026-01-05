export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
  rastro = 1,
}) => {
  let sketch = function (p) {
    p.working = "comeca";

    p.mousePressed = function () {
      if (p.working == "comeca") {
        p.working = "produz";
      }

      if (p.working == "produz") {
        p.background(bgcolor);
      }
    };

    p.circula = function (raioI, raioE, step, wide) {
      this.d = raioI;
      this.e = raioE;
      this.alfa = 0;
      this.s = step;
      this.beta = wide;

      this.scala = function (raioI, raioE) {
        this.d = raioI;
        this.e = raioE;
      };

      this.update = function (angulo) {
        for (let k = angulo; k < angulo + this.beta; k = k + this.s) {
          this.alfa = (k * Math.PI) / 180;
          p.line(
            p.cos(this.alfa) * this.d,
            p.sin(this.alfa) * this.d,
            p.cos(this.alfa) * this.e,
            p.sin(this.alfa) * this.e
          );
        }
      };
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

      p.stroke(fcolor);
      p.strokeWeight(1);
    };

    p.kc = new p.circula(20, 100, 3, 60);
    p.kp = new p.circula(80, 300, 5, 100);
    p.kn = new p.circula(80, 300, 2, 140);
    p.kk = new p.circula(80, 300, 1, 160);

    p.tempo = 0;

    p.draw = function () {
      if (p.working == "produz") {
        p.kc.scala(p.width / 15, p.width / 4);
        p.kp.scala((p.mouseY - 50) / 4, (p.mouseY + 50) / 3);
        p.kn.scala(p.width / 8, p.width / 1.8);
        p.kk.scala(p.mouseY / 10 + p.height / 3, p.mouseY / 8 + p.height / 2.5);

        p.translate(p.width / 2, p.height / 2);

        if (p.tempo > rastro) {
          p.tempo = 0;
        }

        p.kk.update(p.mouseX / -10);
        p.kc.update(p.mouseX / 1.3);
        p.kp.update(p.mouseX / 3);
        p.kn.update(p.mouseX / -3.5);

        p.tempo++;
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
