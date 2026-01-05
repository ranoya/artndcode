export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
}) => {
  let sketch = function (p) {
    p.persi = {
      x: 0,
      y: 0,
      w: 2,
      efct: 1200,
      tempw: 2,
      d: function () {
        let wdt = this.w;
        let invdist = 0;

        if (this.x > p.mouseX) {
          invdist = this.efct / (this.x - p.mouseX);
        } else {
          invdist = this.efct / (p.mouseX - this.x);
        }

        if (this.y < p.mouseY && this.y + 200 > p.mouseY) {
          if (this.tempw < invdist && this.tempw < 20) {
            this.tempw = this.tempw + 1;
          }
          if (this.tempw > 20 || this.tempw > invdist) {
            this.tempw = this.tempw - 1;
          }
          if (this.tempw < this.w) {
            this.tempw = this.w;
          }
          wdt = this.tempw;
        } else {
          // volta ao normal
          if (this.tempw > this.w) {
            this.tempw = this.tempw - 0.5;
          }
          if (this.tempw < this.w) {
            this.tempw = this.tempw + 0.5;
          }
          wdt = this.tempw;
        }

        p.noStroke();
        p.fill(fcolor);
        p.rect(this.x - wdt / 2, this.y, wdt, 200);
      },
    };
    p.multip = [];

    p.pausa = function () {
      p.noLoop();
    };

    p.roda = function () {
      p.loop();
    };

    p.cnv = "";

    p.step = 35;

    p.setup = function () {
      p.background(bgcolor);
      p.cnv = p.createCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );

      p.cnv.mouseOut(p.pausa);
      p.cnv.mouseOver(p.roda);
      p.noStroke();
      p.fill(fcolor);
      p.background(bgcolor);

      let c = 0;
      let dw = 2;
      for (
        let dy = 0;
        dy < document.getElementById(el).clientHeight;
        dy = dy + 202
      ) {
        for (
          let dx = 0;
          dx < document.getElementById(el).clientWidth;
          dx = dx + p.step
        ) {
          p.multip[c] = { ...p.persi };
          p.multip[c].x = dx;
          p.multip[c].y = dy;
          p.multip[c].efct = p.random() * 1200;
          dw = 2;
          if (p.random() > 0.5) {
            dw = 2;
          } else if (p.random() > 0.7) {
            dw = 4;
          } else if (p.random() > 0.9) {
            dw = 8;
          }
          p.multip[c].w = dw;
          c++;
        }
      }
    };

    p.draw = function () {
      p.background(bgcolor);

      for (let i = 0; i < p.multip.length; i++) {
        p.multip[i].d();
      }
    };

    p.windowResized = function () {
      p.cnv = p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
      p.setup();
    };
  };

  return new p5(sketch, el);
};
