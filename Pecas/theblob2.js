export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
}) => {
  let sketch = function (p) {
    p.objecto = function (a, b) {
      this.x = a;
      this.y = b;
      this.dx = 0;
      this.dy = 0;
      this.disp = 0;
      this.a = 0;
      this.raio = 60;

      this.setp = function (a, b) {
        this.x = a;
        this.y = b;
      };

      this.setraio = function (k) {
        this.raio = k;
      };

      this.displace = function () {
        this.disp =
          120 + (20 * this.raio) / p.dist(p.mouseX, p.mouseY, this.x, this.y);
        this.a = p.atan2(p.mouseY - this.y, p.mouseX - this.x);
      };

      this.desenha = function () {
        this.dx = this.x - p.cos(this.a) * this.disp;
        this.dy = this.y - p.sin(this.a) * this.disp;
        //ellipse(x-(p.cos(a)*disp), y-(p.sin(a)*disp), raio,raio);
      };
    };

    p.bolas = [];
    p.bolasB = [];
    p.bolasC = [];
    p.bolasD = [];

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

      p.ellipseMode(p.RADIUS);
      p.ang = 0;

      for (let i = 0; i < 301; i++) {
        p.bolas[i] = new p.objecto(
          p.cos(p.ang) * 100 + p.width / 2,
          p.sin(p.ang) * 100 + p.height / 2
        );
        p.bolasB[i] = new p.objecto(
          p.cos(p.ang) * 200 + p.width / 2,
          p.sin(p.ang) * 200 + p.height / 2
        );
        p.bolasC[i] = new p.objecto(
          p.cos(p.ang) * 350 + p.width / 2,
          p.sin(p.ang) * 350 + p.height / 2
        );
        p.bolasD[i] = new p.objecto(
          p.cos(p.ang) * 450 + p.width / 2,
          p.sin(p.ang) * 450 + p.height / 2
        );
        p.ang = p.ang + (p.PI * 2) / 300;
        p.bolas[i].setraio(20 + p.random(10));
        p.bolasB[i].setraio(5 + p.random(1));
      }

      p.bolas[300] = p.bolas[0];
      p.bolasB[300] = p.bolasB[0];
      p.bolasC[300] = p.bolasC[0];
      p.bolasD[300] = p.bolasD[0];
    };

    p.mousePressed = function () {
      p.ang = 0;

      for (let i = 0; i < 300; i++) {
        p.bolas[i].setp(
          p.cos(p.ang) * 30 + p.width / 2,
          p.sin(p.ang) * 30 + p.height / 2
        );
        p.bolasB[i].setp(
          p.cos(p.ang) * 100 + p.width / 2,
          p.sin(p.ang) * 100 + p.height / 2
        );
        p.ang = p.ang + (p.PI * 2) / 300;
      }

      p.bolas[300] = p.bolas[0];
      p.bolasB[300] = p.bolasB[0];
      p.bolasC[300] = p.bolasC[0];
      p.bolasD[300] = p.bolasD[0];
    };

    p.mouseReleased = function () {
      let ang = 0;

      for (let i = 0; i < 300; i++) {
        p.bolas[i].setp(
          p.cos(p.ang) * 100 + p.width / 2,
          p.sin(p.ang) * 100 + p.height / 2
        );
        p.bolasB[i].setp(
          p.cos(p.ang) * 300 + p.width / 2,
          p.sin(p.ang) * 300 + p.height / 2
        );
        p.ang = p.ang + (p.PI * 2) / 300;
      }

      p.bolas[300] = p.bolas[0];
      p.bolasB[300] = p.bolasB[0];
      p.bolasC[300] = p.bolasC[0];
      p.bolasD[300] = p.bolasD[0];
    };

    p.draw = function () {
      p.translate(p.width / 3);
      p.background(bgcolor + "44");
      p.fill(fcolor);
      for (let i = 0; i < 300; i++) {
        p.bolas[i].displace();
        p.bolas[i].desenha();
        p.bolasB[i].displace();
        p.bolasB[i].desenha();
        p.bolasC[i].displace();
        p.bolasC[i].desenha();
        p.bolasD[i].displace();
        p.bolasD[i].desenha();

        p.stroke(fcolor);
        p.line(p.bolas[i].dx, p.bolas[i].dy, p.bolasB[i].dx, p.bolasB[i].dy);
        p.line(
          p.bolasB[i + 1].dx,
          p.bolasB[i + 1].dy,
          p.bolasC[i].dx,
          p.bolasC[i].dy
        );
        p.line(p.bolasC[i].dx, p.bolasC[i].dy, p.bolasD[i].dx, p.bolasD[i].dy);
      }

      p.bolas[300] = p.bolas[0];
      p.bolasB[300] = p.bolasB[0];
      p.bolasC[300] = p.bolasC[0];
      p.bolasD[300] = p.bolasD[0];
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
