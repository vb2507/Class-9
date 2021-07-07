var box;


function setup() {
  
createCanvas(400,400);
box = createSprite(200,200,50,50);
box.shapeColor = 'green';
}

function draw() 
{
  background('red');

  if(keyDown(LEFT_ARROW)){
  box.x = box.x -5;
  }
  if(keyDown(RIGHT_ARROW)){
    box.x = box.x +5; 
  }
  drawSprites();
}




