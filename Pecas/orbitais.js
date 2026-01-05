export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
}) => {
  let sketch = function (p) {
    p.quadrado = function () {
      this.alfa = p.random(2 * p.PI);
      this.alfaz = 0;
      this.tamanho = 1 + 1.5 * p.random(10);
      this.orbita = 50 + p.random(1050);
      this.fator = 0.2 + p.random(0.4);
      this.orbitazeixooriginal = 0.1 + p.random(0.7);
      this.orbitazeixo = this.orbitazeixooriginal;
      this.velocidadeoriginal = 0.01 + p.random(0.025);
      this.velocidade = this.velocidadeoriginal;
      this.cor = p.color(fcolor);

      this.update = function () {
        p.noStroke();
        this.cor.setAlpha(p.cos(this.alfaz) * 100 + 150);
        p.fill(this.cor);
        p.rect(
          p.sin(this.alfa) * this.orbita,
          this.orbitazeixo * p.cos(this.alfa) * this.orbita,
          this.tamanho + p.cos(this.alfaz) * (this.tamanho * this.fator),
          this.tamanho + p.cos(this.alfaz) * (this.tamanho * this.fator)
        );
        this.alfa = this.alfa + this.velocidade;
        this.alfaz = this.alfaz + this.velocidade;
        if (this.alfa > p.PI * 2) {
          this.alfa = 0;
        }
        if (this.alfaz > p.PI * 2) {
          this.alfaz = 0;
        }
        this.orbitazeixo =
          this.orbitazeixooriginal + (p.mouseY - p.height / 2) / 500;

        this.velocidade =
          this.velocidadeoriginal + ((p.mouseX - p.width / 2) / 15400 - 0.02);
      };
    };

    p.elementos = [];

    for (let k = 0; k < 300; k++) {
      p.elementos[k] = new p.quadrado();
    }

    p.pausa = function () {
      p.noLoop();
    };

    p.roda = function () {
      p.loop();
    };

    p.cnv = "";

    p.setup = function () {
      p.colorMode(p.HSB, 360, 2, 2, 100);
      p.cnv = p.createCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );

      p.cnv.mouseOut(p.pausa);
      p.cnv.mouseOver(p.roda);
    };

    p.draw = function () {
      p.background(bgcolor);
      p.translate(p.width / 2, p.height / 2);

      for (let i = 0; i < 300; i++) {
        p.elementos[i].update();
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
