let gamestate = 'mainMenu';
let startTime = 0;
let interval = 1000;
let secondsSinceStart;

let bee;
let duckSong;
let hmcQueen;

let score = 0;

let play;
let settings;
let credButton;
let exitButton;
let backButton;
let saveButton;
let song1;
let song2;
let song3;
let gameState = 0;

function preload() {
	// LOADSONGS                                                                                                                                                                                                                                    v Song starts here            v Second badadadadada
	beeN1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	beeN2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	beeN3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	beeN4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	bee = new Song("assets/audio/bee.mp3",120,65, beeN1, beeN2, beeN3, beeN4,16);

	dsN1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    dsN2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0];
    dsN3 = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    dsN4 = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1];
	duckSong = new Song("assets/audio/The Duck Song.mp3",186,120, dsN1,dsN2,dsN3,dsN4);
                                                                                                                                                                                            //song starts here 
	hmcN1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0];
	hmcN2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0];
	hmcN3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1];
	hmcN4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0];
	hmcQueen = new Song("assets/audio/hacha mecha carnival (rin&len).mp3",120,147, hmcN1,hmcN2,hmcN3,hmcN4, 8.3);
}
	////////////////////////////////////////////////
function setup() {
	createCanvas(800, 800);
	colorMode(HSB);
	
	play = new Sprite(); // play button
	play.x = 290;
	play.y = 200;
	play.width = 450;
	play.color = "#e4c1f9";
	play.stroke = "#e4c1f9";
	play.text = "Play";
	play.textSize = 20;
	
	settings = new Sprite(); // settings button
	settings.x = 292;
	settings.y = 265;
	settings.width = 450;
	settings.color = "#d0f4de";
	settings.stroke = "#d0f4de";
	settings.text = "Settings";
	settings.textSize = 20;
	
	credButton = new Sprite(); // credits button
		credButton.x = 418;
		credButton.y = 330;
		credButton.width = 200;
		credButton.color = "white";
		credButton.stroke = "white";
		credButton.text = "Credits";
		credButton.textSize = 18;
	
	exitButton = new Sprite() // exit button
	exitButton.x = 182;
	exitButton.y = 330;
	exitButton.width = 230;
	exitButton.color = "rgb(239, 107, 107)";
	exitButton.stroke = "rgb(239, 107, 107)";
	exitButton.text = "Exit Game";
	exitButton.textSize = 18;
	
	backButton = createButton('Back');
		backButton.position(15, 15);
		backButton.size(100);
	
	 key1Box = createInput('a');
		key1Box.attribute('maxlength', 1);
		key1Box.position(250, 123);
		key1Box.size(80);
		
		key2Box = createInput('s');
		key2Box.attribute('maxlength', 1);
		key2Box.position(250, 165);
		key2Box.size(80);
		
		key3Box = createInput('k');
		key3Box.attribute('maxlength', 1);
		key3Box.position(250, 205);
		key3Box.size(80);
		
		key4Box = createInput('l');
		key4Box.attribute('maxlength', 1);
		key4Box.position(250, 245);
		key4Box.size(80);
  
	song1 = new Sprite()
	  song1.x = width/2;
	  song1.y = 120;
	  song1.width = 400;
	  song1.color = "white";
	  song1.stroke = "white";
	  song1.text = "bee";
	  song1.textSize = 20;
	  
	  song2 = new Sprite()
	  song2.x = 300;
	  song2.y = 210;
	  song2.width = 400;
	  song2.color = "white";
	  song2.stroke = "white";
	  song2.text = "HACHA MECHA Carnival (feat.Rin & Len)";
	  song2.textSize = 15;
	  
	  song3 = new Sprite()
	  song3.x = 300;
	  song3.y = 300;
	  song3.width = 400;
	  song3.color = "white";
	  song3.stroke = "white";
	  song3.text = "The Duck Song";
	  song3.textSize = 20;
  }

function draw() {
	secondsSinceStart = millis() / 1000;
	if(gameState == 0) {
		bg();
		rectMode(CENTER);
		textAlign(CENTER);
		
		fill('white');
		textFont("Verdana");
		textSize(60);
		text("RHYTHM GAME", 295, 125); // title
		
		key1Box.hide();
		key2Box.hide();
		key3Box.hide();
		key4Box.hide();
		backButton.hide();
		  song1.remove();
		  song2.remove();
		  song3.remove();
		}
		
		function songs() {
		  song1 = new Sprite()
		  song1.x = width/2;
		  song1.y = 120;
		  song1.width = 400;
		  song1.color = "white";
		  song1.stroke = "white";
		  song1.text = "bee";
		  song1.textSize = 20;
		  
		  song2 = new Sprite()
		  song2.x = 300;
		  song2.y = 210;
		  song2.width = 400;
		  song2.color = "white";
		  song2.stroke = "white";
		  song2.text = "HACHA MECHA Carnival (feat.Rin & Len)";
		  song2.textSize = 15;
		  
		  song3 = new Sprite()
		  song3.x = 300;
		  song3.y = 300;
		  song3.width = 400;
		  song3.color = "white";
		  song3.stroke = "white";
		  song3.text = "The Duck Song";
		  song3.textSize = 20;
		}
		
		function songSelect() {
		  background("rgb(246,221,255)");
		  play.remove();
		  settings.remove();
		  exitButton.remove();
		  credButton.remove();
		  
		  textSize(30);
		  fill("rgb(155,155,188)")
		  stroke("rgb(155,155,188)");
		  textAlign(CENTER);
		  text("Please select a song: ", width/2, 50);

		  backButton = createButton('Back');
			backButton.position(255, 345);
			backButton.size(100);
			backButton.mousePressed(mainMenu2);
		  
		  songs();
		}
		
		if(play.mouse.pressed()) { // play game
		  gameState = 1;
		  songSelect();
		}
		
		if(song1.mouse.pressed()) {
		  gameState = 2;
		  background("rgb(246,221,255)");
		  song1.remove();
		  song2.remove();
		  song3.remove();
		  backButton.hide();
		  
		  if(mouse.pressed() == true) {
			bee.playSong();
		  }
		}
		
		if(song2.mouse.pressed()) {
		  gameState = 3;
		  background("rgb(246,221,255)");
		  song1.remove();
		  song2.remove();
		  song3.remove();
		  backButton.hide();
		  
		  if(mouse.pressed() == true) {
			hmcQueen.playSong();
		  }
		}
		
		if(song3.mouse.pressed()) {
		  gameState = 4;
		  background("rgb(246,221,255)");
		  song1.remove();
		  song2.remove();
		  song3.remove();
		  backButton.hide();
		  
		  textAlign(CENTER);    
		  textSize(30);
		  fill("black");
		  text("Ready?", width/2, height/2);
		  
		  textSize(15);
		  text("Press anything to start", width/2, 220);
		  
		  if(mouse.pressed() == true) {
			duckSong.playSong();
		  }
		}

		if(gameState == 2){
			bee.progressSong();

			fill("black");
		    textFont("Arial");
			text("SCORE: " + bee.getScore(), width/2, height/2)

			if(!(bee.isSongPlaying())){
				gameState = 1;
				songSelect();
			}
		}
		if(gameState == 3){
			hmcQueen.progressSong();

			fill("black");
		    textFont("Arial");
			text("SCORE: " + hmcQueen.getScore(), width/2, height/2)
			
			if(!(hmcQueen.isSongPlaying())){
				gameState = 1;
				songSelect();
			}
		}
		if(gameState == 4){
			duckSong.progressSong();

			fill("black");
		    textFont("Arial");
			text("SCORE: " + duckSong.getScore(), width/2, height/2)
			
			if(!(duckSong.isSongPlaying())){
				gameState = 1;
				songSelect();
			}
		}
		
	   ////////////////////////////////////////////////
		  if(settings.mouse.pressed()) { // to change game controls
			gameState = 1;
			background("#b9b5ff");
			
			settings.remove();
			play.remove();
			exitButton.remove();
			credButton.remove();
			goBackSettings();
			
			key1Box.show();
			key2Box.show();
			key3Box.show();
			key4Box.show();
			
			textFont();
			textSize(20);
			text("**Keyboard Controls**", width/2, 100);
			fill("white");
			text("Key 1:", 200, 140);
			text("Key 2:", 200, 180);
			text("Key 3:", 200, 220);
			text("Key 4:", 200, 260);
		  }
		
		////////////////////////////////////////////////
		if(exitButton.mouse.pressed()) { // exit game
		  gameState = 1;
		  background(0);
		  settings.remove();
			play.remove();
			exitButton.remove();
			credButton.remove();
		  
		  fill("white");
		  textFont("Arial");
		  textSize(30);
		  text("See you Soon! ^^", width/2, 200);
		}
		
		////////////////////////////////////////////////
		if(credButton.mouse.pressed()) { // credits
		  gameState = 1;
		  background("#b9b5ff");
		  settings.remove();
			play.remove();
			exitButton.remove();
			credButton.remove();
		  goBack();
		  
		  fill("black");
		  textFont("Arial");
		  textSize(20);
		  text('Game by: Hogan Kwak, Queen Zerit & Harini Haridan', width/2, 120);
		  text('Songs in-game:', width/2, 160);
		  text("'Bee' (by GroovyDomino52 on Youtube)", width/2, 190);
		  text("'HACHA MECHA Carnival (feat.Rin & Len)' (by Tonbi on Youtube)", width/2, 220);
		  text("'The Duck Song' (by forrestfire101 on Youtube)", width/2, 250);
		}
}

// GAMESTATES
function bg(){
  background('rgb(246,221,255)');
  fill('rgb(155,155,188)');
  stroke('rgb(230,208,174)');
  //big circles
  circle(390, 390, 100);
  circle(50, 50, 100);
  circle(750, 750, 100);
  circle(50, 750, 100);
  circle(750, 50, 100);
  fill('rgb(160,139,182)');
  stroke('rgb(163,101,101)');
  //small circles
  circle(390, 200, 50);
  circle(390, 600, 50);
  circle(50, 390, 50);
  circle(750, 390, 50);
}
function mainMenu() {
	gameState = 0;
	background("#b9b5ff");
	backButton.hide();
	key1Box.hide();
	key2Box.hide();
	key3Box.hide();
	key4Box.hide();
song1.remove();
song2.remove();
song3.remove();

let firstKey = key1Box.value();
let secKey = key2Box.value();
let thirdKey = key3Box.value();
let fourthKey = key4Box.value();
console.log("Key 1: ", firstKey);
console.log("Key 2: ", secKey);
console.log("Key 3: ", thirdKey);
console.log("Key 4: ", fourthKey);

setup();
}
function mainMenu2() {
	gameState = 0;
	background("#b9b5ff");
	backButton.hide();
	key1Box.hide();
	key2Box.hide();
	key3Box.hide();
	key4Box.hide();
song1.remove();
song2.remove();
song3.remove();
setup();
}
function goBackSettings() {
    backButton = createButton('Back');
      backButton.position(15, 15);
      backButton.size(100);
      backButton.mousePressed(mainMenu);
}
function goBack() {
	backButton = createButton('Back');
		backButton.position(15, 15);
		backButton.size(100);
		backButton.mousePressed(mainMenu2);
}

// // CLASSES - HOGAN ONLY ZONE (Unless you know what is happening)
class Song{
	#audio;
	#length; // ITS IN SECONDS
	#notes;
	#speedMulti;
	#nps;
	#progress;
	#lastUpdate;
	#playing;
	#score;

	constructor(audio, bpm, length, notes1, notes2, notes3, notes4, notesPerBeat = 4, speedMulti = 1){
		this.#audio = loadSound(audio);
		this.#length = length;
		this.#notes = [notes1, notes2, notes3, notes4];
		this.#nps = bpm/60/notesPerBeat;
		this.#speedMulti = speedMulti;

		this.#playing = false;
		this.#progress = 0;
		this.#lastUpdate = millis();
		this.#score = 0;
	}
	/** METHOD FOR DISPLAYING THE NOTES
	 * 	Updates the screen w/ notes
	 *  Uses p5 play's tiles system for reading notes? na.
	 *  https://p5play.org/learn/tiles.html
	 * 
	 *  Notes work like this:
		* note1 = [] where index = position in NPS, and integer value = how long to hold it
		* note2 = [] where index = position in NPS, and integer value = how long to hold it
		* ...
		* then combined into notes[note1, note2, note3, note4] where index = which key needs to be pressed
	 */
	displayNotes() {
		// progressInMilis = this.#progress*this.#nps*1000;
		bg();

		for(let i = 0; i < this.#notes.length; i++){ // Key = index
			for(let j = 0; j < this.#notes[i].length; j++){ // position in NPS = index
				rectMode(CORNER);
				fill("black")
				stroke("white")
				this.drawnote(this.#notes[i][j],i,j-this.#progress);
			}
		}
	}

	// Different from displayNote, private. Dont use it outside of this class
	// Simply draws a square relating to the length of the note
	drawnote(length,xpos,nps){
		if(length != 0){
			rect(
				(width/8)*xpos + width/2 - width/4, 
				(height/8)*nps, 
				width/8, 
				(height/8)*length);
		}
	}

	/** METHOD FOR PLAYING THE SONG
	 * 	Plays audio, scrolls note, etc...
	 * 	If speed multi is not specified, plays at last speed multi
	 */
	playSong(speedMulti = this.#speedMulti) {
		this.#score = 0;
		this.#speedMulti = speedMulti;
		this.#audio.play()
		this.#progress = 0;

		this.#lastUpdate = millis();
		this.#playing = true;
		this.displayNotes();
	}

	progressSong(amount = 1){
		// convert NPS to milliseconds

		let millisecondVersion = this.#nps * 1000

		if((millis() - this.#lastUpdate) >= millisecondVersion){
			this.#lastUpdate = millis();
			this.#progress++;
			this.displayNotes();

			// D = 68, F = 70, J = 74, K = 75
			let keyboardKeys = [68,70,74,75];

			let isConditionBrokenOnce = false; // this is set to true if ONE of the keys is wrong

			

			for(let i = 0; i < this.#notes.length; i++){
				let tileValue = this.#notes[i][this.#progress]
				let keyToPress = keyboardKeys[i]

				if (keyIsDown(keyToPress)){
					fill("white");
					rectMode(CORNER);
					stroke("white")
					this.drawnote(1,i,0);
				}
				else{
					noFill()
					rectMode(CORNER);
					stroke("white")
					this.drawnote(1,i,0);
				}

				if(tileValue == 0 && keyIsDown(keyToPress)){
					isConditionBrokenOnce = true;
					print("NOPE")
				}
			}

			for(let i = 0; (i < this.#notes.length) && !(isConditionBrokenOnce); i++){
				let tileValue = this.#notes[i][this.#progress]
				let keyToPress = keyboardKeys[i]

				if(tileValue != 0 && keyIsDown(keyToPress)){
					this.#score++;
					print("SCORE: " + this.#score + " | " + "TILEVALUE: "+tileValue + " | " + "CURRENTPROGRESS:" + this.#progress)
					
					noFill();
					rectMode(CORNER);
					stroke("white")
					this.drawnote(1,i,0);
				}
			}

			if(this.#progress >= this.#notes[0].length){
				print("Nope!")
				this.stopSong();
			}
		}
	}
	/** METHOD FOR STOPPING THE SONG
	 * 	Stops the audio, scroll, etc...
	 */
	stopSong() {
		this.#audio.stop();
		this.#progress = 0;
		gameState = 1
		print("Song ended")
		this.#playing = false
	}

	getPlayTime(){return this.#progress;};
	getAudio(){return this.#audio;};
	getNotes(){return this.#notes;};
	getNotesPerSecond(){return this.#nps;};
	isSongPlaying(){return this.#playing;};
	getScore(){return this.#score;};
}