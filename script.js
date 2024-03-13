const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 4; //numero mas grande mas velocidad
//let gameFrame = 0;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

//solo ejecutaré el código cuando la página esté completamente cargada
window.addEventListener('load', function(){
    const slider = document.getElementById('slider');
    slider.value = gameSpeed;
    const showGameSpeed = document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = gameSpeed;
    slider.addEventListener('change', function(e){
        //console.log(e.target.value);
        gameSpeed = e.target.value;
        showGameSpeed.innerHTML = e.target.value;
    });
    
    class Layer {
        constructor(image, SpeedModifier){
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            //this.x2 = this.width;
            this.image = image;
            this.SpeedModifier = SpeedModifier;
            this.speed = gameSpeed * this.SpeedModifier;
        }
        update(){
            this.speed = gameSpeed * this.SpeedModifier;
            if (this.x <= -this.width){
                //this.x = this.width + this.x2 - this.speed;
                //this.x = this.width - this.speed;
                this.x = 0;
            }
            /*if (this.x2 <= -this.width){
                this.x2 = this.width + this.x - this.speed;
            }
            this.x = Math.floor(this.x - this.speed);
            this.x2 = Math.floor(this.x2 - this.speed);*/
            //this.x = Math.floor(this.x - this.speed);
            this.x = this.x - this.speed;
            //con esta línea no puedo aumentar con el slider la velocidad
            //por ello devo involucrar a la velocidad
            //da un problema al cambiar la velocidad
            //this.x = gameFrame * this.speed % this.width;
        }
        draw(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }
    
    const layer1 = new Layer(backgroundLayer1, 0.2);
    const layer2 = new Layer(backgroundLayer2, 0.4);
    const layer3 = new Layer(backgroundLayer3, 0.6);
    const layer4 = new Layer(backgroundLayer4, 0.8);
    const layer5 = new Layer(backgroundLayer5, 1);
    
    const gameObjects = [layer1, layer2, layer3, layer4, layer5];
    
    function animate(){
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        /*layer4.update();
        layer4.draw();
        layer5.update();
        layer5.draw();*/
    
        gameObjects.forEach(object => {
            object.update();
            object.draw();
        });
        //gameFrame--;
        requestAnimationFrame(animate);
    };
    
    animate();
});

