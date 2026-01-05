export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
}) => {
  let sketch = function (p) {
    p.rescale = function ([a, b], [c, d]) {
      return function (e) {
        return ((e - a) / (b - a)) * (d - c) + c;
      };
    };

    p.rx;
    p.mmX;
    p.mmY;

    p.curva = function (x, y, r1, r2, s, c, m) {
      for (let a = 0; a < 2 * Math.PI; a = a + s) {
        p.noFill();

        if (c) {
          p.stroke(fcolor);
        } else {
          p.stroke(fcolor + "55");
        }

        p.line(
          Math.cos(a + m) * r1 + x,
          Math.sin(a + m) * r1 + y,
          Math.cos(a + m) * r2 + x,
          Math.sin(a + m) * r2 + y
        );
      }
    };

    p.act = [];
    p.act[1] = false;
    p.act[2] = false;
    p.act[3] = false;
    p.act[4] = false;
    p.act[5] = false;
    p.act[6] = false;
    p.act[7] = false;
    p.act[8] = false;
    p.act[9] = false;
    p.act[10] = false;
    p.act[11] = false;
    p.act[12] = false;

    p.vai = [];
    p.vai[1] = Math.random();
    p.vai[2] = Math.random();
    p.vai[3] = Math.random();
    p.vai[4] = Math.random();
    p.vai[5] = Math.random();
    p.vai[6] = Math.random();
    p.vai[7] = Math.random();
    p.vai[8] = Math.random();
    p.vai[9] = Math.random();
    p.vai[10] = Math.random();
    p.vai[11] = Math.random();
    p.vai[12] = Math.random();

    p.prop = 0;

    p.conta = 0;

    p.mouseClicked = function () {
      p.vai[1] = Math.random();
      p.vai[2] = Math.random();
      p.vai[3] = Math.random();
      p.vai[4] = Math.random();
      p.vai[5] = Math.random();
      p.vai[6] = Math.random();
      p.vai[7] = Math.random();
      p.vai[8] = Math.random();
      p.vai[9] = Math.random();
      p.vai[10] = Math.random();
      p.vai[11] = Math.random();
      p.vai[12] = Math.random();
    };

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

      if (window.innerWidth >= window.innerHeight) {
        p.prop = document.getElementById(el).clientWidth / 1350;

        p.rx = p.rescale(
          [0, 1350],
          [0, document.getElementById(el).clientWidth]
        );
        p.ry = p.rescale(
          [0, 700],
          [0, document.getElementById(el).clientHeight]
        );
      } else {
        p.prop = document.getElementById(el).clientWidth / 700;

        p.ry = p.rescale(
          [0, 700],
          [0, document.getElementById(el).clientWidth]
        );
        p.rx = p.rescale(
          [0, 1350],
          [0, document.getElementById(el).clientHeight]
        );
      }
    };

    p.draw = function () {
      p.conta++;

      p.am = p.mouseX;

      p.background(bgcolor);

      p.mx = (p.mouseX - document.getElementById(el).clientWidth / 2) / 10;
      p.my = (p.mouseY - document.getElementById(el).clientHeight / 2) / 10;

      p.push();
      p.scale(p.prop);

      if (window.innerWidth < window.innerHeight) {
        p.translate(document.getElementById(el).clientWidth * 1.5, 0);
        p.rotate(Math.PI / 2);

        p.mmX = p.mouseY;
        p.mmY = document.getElementById(el).clientWidth - p.mouseX;
      } else {
        p.mmX = p.mouseX;
        p.mmY = p.mouseY;
      }

      if (p.mmX < p.rx(420) && p.mmY > p.ry(400) && p.mmY < p.ry(600)) {
        p.act[6] = true;
      } else {
        p.act[6] = false;
      }

      if (p.mmX < p.rx(420) && p.mmY >= p.ry(600)) {
        p.act[9] = true;
      } else {
        p.act[9] = false;
      }

      if (p.mmX < p.rx(420) && p.mmY <= p.ry(400) && p.mmY > p.ry(200)) {
        p.act[1] = true;
      } else {
        p.act[1] = false;
      }

      if (p.mmX < p.rx(300) && p.mmY <= p.ry(200)) {
        p.act[10] = true;
      } else {
        p.act[10] = false;
      }

      if (p.mmX >= p.rx(420) && p.mmX < p.rx(610) && p.mmY < p.ry(420)) {
        p.act[5] = true;
      } else {
        p.act[5] = false;
      }

      if (p.mmX >= p.rx(670) && p.mmX < p.rx(1050) && p.mmY < p.ry(200)) {
        p.act[4] = true;
      } else {
        p.act[4] = false;
      }

      if (p.mmX >= p.rx(1050) && p.mmY < p.ry(200)) {
        p.act[11] = true;
      } else {
        p.act[11] = false;
      }

      if (
        p.mmX >= p.rx(610) &&
        p.mmX < p.rx(800) &&
        p.mmY >= p.ry(200) &&
        p.mmY < p.ry(400)
      ) {
        p.act[2] = true;
      } else {
        p.act[2] = false;
      }

      if (p.mmX >= p.rx(420) && p.mmX < p.rx(1000) && p.mmY >= p.ry(400)) {
        p.act[3] = true;
      } else {
        p.act[3] = false;
      }

      if (p.mmX >= p.rx(1000) && p.mmY >= p.ry(400)) {
        p.act[8] = true;
      } else {
        p.act[8] = false;
      }

      if (p.mmX >= p.rx(1000) && p.mmY > p.ry(200) && p.mmY < p.ry(400)) {
        p.act[7] = true;
      } else {
        p.act[7] = false;
      }

      if (
        p.mmX < p.rx(1000) &&
        p.mmX >= p.rx(800) &&
        p.mmY > p.ry(200) &&
        p.mmY < p.ry(400)
      ) {
        p.act[12] = true;
      } else {
        p.act[12] = false;
      }

      if (p.vai[1] > 0.7) {
        // 1
        p.curva(20 + p.mx / 5, 20, 400, 430, 0.02, p.act[1], p.am / 4000);
      }

      if (p.vai[2] > 0.7) {
        // 2
        p.curva(400 + p.mx / 2, 450, 300, 380, 0.04, p.act[2], p.am / 3200);
      }

      if (p.vai[3] > 0.7) {
        // 3
        p.curva(700 + p.mx / 8, 1200, 700, 810, 0.01, p.act[3], p.am / 5000);
      }

      if (p.vai[4] > 0.7) {
        // 4
        p.curva(
          1200 + p.mx / 1.5,
          -800,
          1000,
          1070,
          0.006,
          p.act[4],
          p.am / 6000
        );
      }

      if (p.vai[5] > 0.7) {
        // 5
        p.curva(2000 + p.mx / 6, 350, 1340, 1470, 0.003, p.act[5], p.am / 7000);
      }

      if (p.vai[6] > 0.7) {
        // 6
        p.curva(-10 + p.mx / 3, 820, 540, 590, 0.006, p.act[6], p.am / 6000);
      }

      if (p.vai[7] > 0.7) {
        // 8
        p.curva(1200 + p.mx / 8, 650, 280, 320, 0.04, p.act[8], p.am / 4000);
      }

      if (p.vai[8] > 0.7) {
        // 7
        p.curva(
          2850 + p.mx * 2,
          1250,
          2040,
          2070,
          0.002,
          p.act[7],
          p.am / 8000
        );
      }

      if (p.vai[9] > 0.7) {
        // 9
        p.curva(-480 + p.mx / 15, 1220, 880, 910, 0.003, p.act[9], p.am / 7000);
      }

      if (p.vai[10] > 0.7) {
        // 10
        p.curva(-60 + p.mx * 1.4, -120, 200, 300, 0.01, p.act[10], p.am / 4000);
      }

      if (p.vai[11] > 0.7) {
        // 11
        p.curva(
          2300 + p.mx / 10,
          -450,
          1200,
          1350,
          0.003,
          p.act[11],
          p.am / 6000
        );
      }

      if (p.vai[12] > 0.7) {
        // 12
        p.curva(850 + p.mx / 4, 320, 100, 140, 0.03, p.act[12], p.am / 3000);
      }

      p.pop();

      if (p.conta > 2000) {
        p.conta = 0;
        p.vai[1] = Math.random();
        p.vai[2] = Math.random();
        p.vai[3] = Math.random();
        p.vai[4] = Math.random();
        p.vai[5] = Math.random();
        p.vai[6] = Math.random();
        p.vai[7] = Math.random();
        p.vai[8] = Math.random();
        p.vai[9] = Math.random();
        p.vai[10] = Math.random();
        p.vai[11] = Math.random();
        p.vai[12] = Math.random();
      }
    };

    p.windowResized = function () {
      if (window.innerWidth >= window.innerHeight) {
        p.prop = document.getElementById(el).clientWidth / 1350;

        p.rx = p.rescale(
          [0, 1350],
          [0, document.getElementById(el).clientWidth]
        );
        p.ry = p.rescale(
          [0, 700],
          [0, document.getElementById(el).clientHeight]
        );
      } else {
        p.prop = document.getElementById(el).clientWidth / 700;

        p.ry = p.rescale(
          [0, 700],
          [0, document.getElementById(el).clientWidth]
        );
        p.rx = p.rescale(
          [0, 1350],
          [0, document.getElementById(el).clientHeight]
        );
      }

      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
    };
  };

  return new p5(sketch, el);
};
