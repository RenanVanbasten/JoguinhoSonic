function Sprite(x, y, largura, altura){
    this.x = x
    this.y = y
    this.largura = largura
    this.altura = altura

    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura)
    }
}
let bg = new Sprite(53, 20, 600, 600)
boneco = new Sprite(720, 50, 110, 150)
perdeu = new Sprite(78, 650, 397, 358)
jogar = new Sprite(600, 738, 397, 347)
novo = new Sprite(692, 325, 287, 93)
spriteRecord = new Sprite(538, 650, 441, 95)
spriteChao = new Sprite(20, 1100, 600, 54)