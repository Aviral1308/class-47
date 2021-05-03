const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var canvas,engine,world,bone,boneImage,dog1,dog2,dog1Image,dog2Image,dogs;
var database;
var allPlayers;
var gameState = 0;
var distance = 0;
var playerCount;
var form,game,player;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21;
var wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42;
var wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,wall53,wall54,wall55,wall56,wall57,wall58,wall59,wall60,wall61,wall62,wall63;
var wall64,wall65,wall66,wall67,wall68,wall69,wall70,wall71,wall72,wall73,wall74,wall75;

function preload(){
    boneImage = loadImage("images/bone.png")
    dog1Image = loadImage("images/dog1.png")
    dog2Image = loadImage("images/dog2.png")
}


function setup(){
    canvas = createCanvas(1356,598);
    database = firebase.database();
    engine = Engine.create();
    world = engine.world;

    game = new Game();
    game.getState();
    game.start();

    wall1 = new Walls(50,300,3,555)
    wall2 = new Walls(675,23,1250,3)
    wall3 = new Walls(1300,300,3,555)
    wall4 = new Walls(300,577,500,3)
    wall5 = new Walls(1050,577,500,3)
    wall6 = new Walls(171,550,3,50)
    wall7 = new Walls(678,50,3,50)
    wall8 = new Walls(890,50,3,50)
    wall9 = new Walls(1015,75,250,3)
    wall10 = new Walls(1140,100,3,50)
    wall11 = new Walls(1170,125,60,3)
    wall12 = new Walls(1200,100,3,50)
    wall13 = new Walls(680,75,160,3)
    wall14 = new Walls(760,96,3,45)
    wall15 = new Walls(660,120,400,3)
    wall16 = new Walls(680,275,3,305)
    wall17 = new Walls(460,98,3,47)
    wall18 = new Walls(405,75,110,3)
    wall19 = new Walls(350,97,3,45)
    wall20 = new Walls(940,190,3,230)
    wall21 = new Walls(1000,305,120,3)
    wall22 = new Walls(390,400,3,80)
    wall23 = new Walls(1000,270,3,65)
    wall24 = new Walls(850,190,175,3)
    wall25 = new Walls(96,120,90,3);
    wall26 = new Walls(764,225,3,70)
    wall27 = new Walls(850,300,3,120)
    wall28 = new Walls(985,360,440,3)
    wall29 = new Walls(570,426,220,3)
    wall30 = new Walls(355,550,3,50)
    wall31 = new Walls(465,525,220,3)
    wall32 = new Walls(575,503,3,45)
    wall33 = new Walls(670,480,190,3)
    wall34 = new Walls(765,392,3,65)
    wall35 = new Walls(1000,390,3,60)
    wall36 = new Walls(1204,390,3,60)
    wall37 = new Walls(1132,420,145,3)
    wall38 = new Walls(1140,447,3,50)
    wall39 = new Walls(1040,472,200,3)
    wall40 = new Walls(940,446,3,50)
    wall41 = new Walls(1005,553,3,50)
    wall42 = new Walls(845,530,320,3)
    wall43 = new Walls(850,470,3,115)
    wall44 = new Walls(1255,470,85,3)
    wall45 = new Walls(1214,495,3,50)
    wall46 = new Walls(1150,520,130,3)
    wall47 = new Walls(575,300,550,3) 
    wall48 = new Walls(1255,220,85,3)
    wall49 = new Walls(1214,195,3,50)
    wall50 = new Walls(1108,170,215,3)
    wall51 = new Walls(1000,149,3,45)
    wall52 = new Walls(1023,125,50,3)
    wall53 = new Walls(1060,200,3,60)
    wall54 = new Walls(1095,230,70,3)
    wall55 = new Walls(1130,262,3,65)
    wall56 = new Walls(1165,295,70,3)
    wall57 = new Walls(460,450,3,50)
    wall58 = new Walls(330,475,260,3)
    wall59 = new Walls(200,450,3,50)
    wall60 = new Walls(145,525,55,3)
    wall61 = new Walls(120,500,3,50)
    wall62 = new Walls(165,425,70,3)
    wall63 = new Walls(130,360,3,130)
    wall64 = new Walls(165,295,70,3)
    wall65 = new Walls(200,185,3,220)
    wall66 = new Walls(410,240,160,3)
    wall67 = new Walls(400,185,3,110)
    wall68 = new Walls(580,240,3,120)
    wall69 = new Walls(540,180,80,3)
    wall70 = new Walls(260,180,275,3)
    wall71 = new Walls(100,240,95,3)
    wall72 = new Walls(280,475,3,120)
    wall73 = new Walls(300,330,3,60)
    wall74 = new Walls(400,360,380,3)
    wall75 = new Walls(160,75,80,3)
    wall25 = new Walls(96,120,90,3);
}


function draw(){
    background(0, 255, 219);

    Engine.update(engine)
    text(mouseX + "," + mouseY,mouseX,mouseY);

    wall1.display();
    wall2.display();
    wall3.display();
    wall4.display();
    wall5.display();
    wall6.display();
    wall7.display();
    wall8.display();
    wall9.display();
    wall10.display();
    wall11.display();
    wall12.display();
    wall13.display();
    wall14.display();
    wall15.display();
    wall16.display();
    wall17.display();
    wall18.display();
    wall19.display();
    wall20.display();
    wall21.display();
    wall22.display();
    wall23.display();
    wall24.display();
    wall25.display();
    wall26.display();
    wall27.display();
    wall28.display();
    wall29.display();
    wall30.display();
    wall31.display();
    wall32.display();
    wall33.display();
    wall34.display();
    wall35.display();
    wall36.display();
    wall37.display();
    wall38.display();
    wall39.display();
    wall40.display();
    wall41.display();
    wall42.display();
    wall43.display();
    wall44.display();
    wall45.display();
    wall46.display();
    wall47.display();
    wall48.display();
    wall49.display();
    wall50.display();
    wall51.display();
    wall52.display();
    wall53.display();
    wall54.display();
    wall55.display();
    wall56.display();
    wall57.display();
    wall58.display();
    wall59.display();
    wall60.display();
    wall61.display();
    wall62.display();
    wall63.display();
    wall64.display();
    wall65.display();
    wall66.display();
    wall67.display();
    wall68.display();
    wall69.display();
    wall70.display();
    wall71.display();
    wall72.display();
    wall73.display();
    wall74.display();
    wall75.display();  
}