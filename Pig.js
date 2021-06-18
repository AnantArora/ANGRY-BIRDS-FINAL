class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.remove=true
  }
display()
{
 
if((this.body.speed)<2.5)
{super.display();
}else
{
if(this.remove===true){
  World.remove(world,this.body)  
  score=score+50
this.remove=false}
}}
};


