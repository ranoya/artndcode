export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
  module = 10,
  size = 2,
}) => {
  let sketch = function (p) {
    // quadradinho
    p.centipede = {
      direction: 0,
      module: module,
      size: size,
      ideltax: 0,
      ideltay: 0,
      linha: "",
      startlinha: function () {
        this.linha = [];
        for (let i = 0; i < this.size; i++) {
          this.linha[i] = {};
          this.linha[i].x = 0;
          this.linha[i].y = 0;
        }
      },
      x: 0,
      y: 0,
      count: 0,
      rd: 0,
      color: bgcolor,
      walk: function () {
        this.linha.shift();

        if (this.direction == 0) {
          this.linha[this.size - 1] = {};
          this.linha[this.size - 1].x =
            this.linha[this.size - 2].x + this.module;
          this.linha[this.size - 1].y = this.linha[this.size - 2].y;
        } else if (this.direction == 1) {
          this.linha[this.size - 1] = {};
          this.linha[this.size - 1].x = this.linha[this.size - 2].x;
          this.linha[this.size - 1].y =
            this.linha[this.size - 2].y - this.module;
        } else if (this.direction == 2) {
          this.linha[this.size - 1] = {};
          this.linha[this.size - 1].x = this.linha[this.size - 2].x;
          this.linha[this.size - 1].y =
            this.linha[this.size - 2].y + this.module;
        } else {
          this.linha[this.size - 1] = {};
          this.linha[this.size - 1].x =
            this.linha[this.size - 2].x - this.module;
          this.linha[this.size - 1].y = this.linha[this.size - 2].y;
        }

        this.count++;
        p.noStroke();
        p.fill(this.color);
        for (let i = 0; i < this.size; i++) {
          p.rect(
            this.linha[i].x + this.ideltax,
            this.linha[i].y + this.ideltay,
            this.module,
            this.module
          );
        }

        if (this.count > 2) {
          this.rd = Math.random();

          this.count = 0;
          if ((this.direction == 0 || this.direction == 3) && this.rd > 0.7) {
            this.direction = 1;
          } else if (
            (this.direction == 0 || this.direction == 3) &&
            this.rd <= 0.7 &&
            this.rd > 0.3
          ) {
            this.direction = 2;
          } else if (
            (this.direction == 1 || this.direction == 2) &&
            this.rd > 0.5
          ) {
            this.direction = 3;
          } else if (
            (this.direction == 1 || this.direction == 2) &&
            this.rd <= 0.5
          ) {
            this.direction = 0;
          }
        }
      },
    };

    // elementos
    p.ElemCenti = [];
    p.countEC = 0;

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

      p.background(fcolor);
      p.frameRate(15);

      for (
        let f = 0;
        f < document.getElementById(el).clientWidth;
        f = f + 3 * module
      ) {
        for (
          let k = 0;
          k < document.getElementById(el).clientHeight;
          k = k + 3 * module
        ) {
          if (Math.random() > 0.7) {
            p.ElemCenti[p.countEC] = { ...p.centipede };
            p.ElemCenti[p.countEC].startlinha();
            p.ElemCenti[p.countEC].ideltax = f;
            p.ElemCenti[p.countEC].ideltay = k;
            p.countEC++;
          }
        }
      }
    };

    p.draw = function () {
      p.background(fcolor + "22");
      for (let i = 0; i < p.ElemCenti.length; i++) {
        p.ElemCenti[i].walk();
      }
    };

    p.windowResized = function () {
      p.background(fcolor);
      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );

      /*
      p.ElemCenti = [];

      for (
        let f = 0;
        f < document.getElementById(el).clientWidth;
        f = f + 3 * module
      ) {
        for (
          let k = 0;
          k < document.getElementById(el).clientHeight;
          k = k + 3 * module
        ) {
          if (Math.random() > 0.7) {
            p.ElemCenti[p.countEC] = { ...p.centipede };
            p.ElemCenti[p.countEC].startlinha();
            p.ElemCenti[p.countEC].ideltax = f;
            p.ElemCenti[p.countEC].ideltay = k;
            p.countEC++;
          }
        }
      }
      */
    };
  };

  return new p5(sketch, el);
};
