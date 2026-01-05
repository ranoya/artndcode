export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
}) => {
  let sketch = function (p) {
    p.bolinha = function (novoraio) {
      this.x = p.random(p.width);
      this.y = p.random(p.height);
      this.z = p.random(100);

      this.realraio = novoraio;
      this.raio = 5 + this.realraio * 0.01 * this.z;

      this.inerciaX = 0;
      this.inerciaY = 0;
      this.inerciaZ = 0;

      this.vetorX = p.random(9) + 1;
      this.vetorY = p.random(9) + 1;
      this.vetorZ = p.random(9) + 1;
      //this.realraio = 10;
      //this.raio = 10;

      this.aplicaforca = function (vx, vy, vz) {
        this.inerciaX = this.inerciaX + vx;
        this.inerciaY = this.inerciaY + vy;
        this.inerciaZ = this.inerciaZ + vz;
      };

      this.movimenta = function () {
        this.x = this.x + this.inerciaX;
        this.y = this.y + this.inerciaY;
        this.z = this.z + this.inerciaZ;

        this.raio = 5 + this.realraio * 0.01 * this.z;

        if (this.z > 500 - this.raio) {
          this.z = 500 - this.raio;
          this.aplicaforca(0, 0, -1.7 * this.inerciaZ);
        }

        if (this.z < 0 - this.raio) {
          this.z = this.raio;
          this.aplicaforca(0, 0, -1.7 * this.inerciaZ);
        }

        if (
          this.y > p.height - this.raio &&
          this.x > 200 &&
          this.x < p.width - 200
        ) {
          this.y = p.height - this.raio;
          this.aplicaforca(0, -1.7 * this.inerciaY, 0);
        }

        if (this.y > p.height + 200) {
          this.aplicaforca(0, -2.4 * this.inerciaY, 0);
        }

        if (this.x > p.width - this.raio) {
          this.x = p.width - this.raio;
          this.aplicaforca(-1.7 * this.inerciaX, 0, 0);
        }

        if (this.x < 0 + this.raio) {
          this.x = 0 + this.raio;
          this.aplicaforca(-1.7 * this.inerciaX, 0, 0);
        }

        p.ellipseMode(p.RADIUS);
        p.fill(fcolor);
        p.noStroke();

        p.ellipse(this.x, this.y, this.raio, this.raio);
      };
    };

    p.bola = [];

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

      for (let b = 0; b < 20; b++) {
        p.bola[b] = new p.bolinha(p.int(p.random(20)));
        p.bola[b].aplicaforca(p.random(10) - 5, 0, p.random(10) - 5);
      }
    };

    p.draw = function () {
      p.background(bgcolor);

      for (let z = 0; z < 20; z++) {
        p.bola[z].movimenta();
        p.bola[z].aplicaforca(0, 0.4, 0);
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
