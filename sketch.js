const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var umbrella, man, lightning;
var dropsArray=[];
var maxDrops=50;
var lightingEffect

function preload(){
    man = loadAnimation("images/Walking Frame/walking_8.png", "images/Walking Frame/walking_7.png",
     "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_5.png",
      "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_3.png",
       "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_1.png");

    lightning = loadAnimation("images/thunderbolt/1.png");
}

function setup(){
   createCanvas(400, 620);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(width/2, height/2+5, 170, 30);
    
    for(var i = 0; i<maxDrops; i++)
    {
        dropsArray.push(new Drops(random(0, 400), random(0, 200)));
    }
    var sptMan = createSprite(width/2, 450, 20, 200);
    sptMan.addAnimation("walking", man);
    sptMan.scale = 0.5;

    lightingEffect = createSprite(width/2, 100, 20, 100);
    lightingEffect.addAnimation("lighting", lightning);
    lightingEffect.scale = 0.5;
    lightingEffect.visible = true;
    Engine.run(engine);
}

function draw(){
    background(0);
    // console.log(frameCount);
    var caseAni = Math.round(random(1, 4));
    
    // lightingEffect.addAnimation("lighting", random(1, 4));
    var liAni;
    switch(caseAni){
        case 1:
            liAni = "images/thunderbolt/1.png";
            // console.log(1);
          break;
        case 2:
            liAni = "images/thunderbolt/2.png";
            // console.log(2);
          break;
        case 3:
            liAni = "images/thunderbolt/3.png";
            // console.log(3);
            break;
        case 4:
            liAni = "images/thunderbolt/4.png";
            // console.log(4);
            break;
        default:break
        
      }
      
      lightingEffect.addAnimation("lighting", lightning);
      
      if(frameCount%50==0){
          lightingEffect.visible = true;
          // alert("sifk");
        }
        
        else
        {
            lightingEffect.visible = false;
        }
        lightning = loadAnimation(liAni);
    for(var i = 0; i < dropsArray.length; i++) 
    {
        dropsArray[i].display();
        dropsArray[i].updateDrop();
    }


    umbrella.display();

    drawSprites();
}   

