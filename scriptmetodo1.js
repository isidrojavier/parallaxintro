const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 15; //numero mas grande mas velocidad

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

//para evitar saltos en la carga de la imagen cuando se mueve
//se pueden utilizar dos imagenes
let x = 0;
let x2 = 2400; //tamaño en ancho de la imagen

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(backgroundLayer4, x, 0);
    ctx.drawImage(backgroundLayer4, x2, 0);
    //simplemente con esto ya habría movimiento, pero lo que quiero
    //conseguir es que se borre el viejo y pinte el nuevo
    //x--;

    //si no ponemos el if, entonces al final deja el lienzo vacio
    //añadiendo + x2 - gameSpeed logramos que se solapen mejor aunque no del todo
    if (x < - 2400) x = 2400 + x2 - gameSpeed;
    else x -= gameSpeed;
    if (x2 < - 2400) x2 = 2400 + x - gameSpeed;
    else x2 -= gameSpeed;

    requestAnimationFrame(animate);
};

animate();