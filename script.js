window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas7');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 720;

  class InputHandler {
    constructor(){
      this.keys = []
      window.addEventListener('keydown', e => {
        if ((   e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight')
                && this.keys.indexOf(e.key) === -1){
            this.keys.push(e.key);
        }
      });
      window.addEventListener('keyup', e => {
        if (    e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight'){
           this.keys.splice(this.keys.indexOf(e.key), 1);
        }
      });
    }
  }

  class Player {
    constructor(gameWidth, gameHeight){
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.width = 200;
      this.height = 200;
      this.x = 0;
      this.y = this.gameHeight - this.height;
      this.image = document.getElementById('playerImage');
      this.frameX = 0;
      this.frameY = 0;
      this.speed = 0;
    }
    draw(context){
      context.fillStyle = 'white';
      context.fillRect(this.x, this.y, this.width, this.height);
      context.drawImage(this.image, 5 * this.width, 1 * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    update(){
      this.x += this.speed;
    }
  }

  class Background {

  }

  class Enemy {

  }

  function handleEnemies(){

  }

  function displayStatusText(){

  }

  const input = new InputHandler();
  const player = new Player(canvas.width, canvas.height);
  player.draw(ctx);
  player.update();

  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    player.update();
    requestAnimationFrame(animate);
  }
  animate();
});
