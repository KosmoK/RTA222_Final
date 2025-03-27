let ball;
let gamestate = 'mainMenu';

function preload() {
	beeSong = "assets/audio/bee.mp3"
}

function setup() {
	new Canvas(500, 500);
	displayMode(CENTERED);
	rectMode(CENTER)

	ball = new Sprite();
	ball.diameter = 50;
}

function draw() {
	background('skyblue');
	test = new note(0,1);

	text(test.key,width/2 + 100,height/2);

	if (mouse.presses()) {
		ball.speed = 10;
		ball.moveTo(mouse);
	}
	mainMenu()
}

// GAMESTATES
function settings(){
	background('skyblue');
}
function characterSelect(){
	background('skyblue');
	circle(12,3,46,6);
	image() // i want to add my eye flower fork image in here for the character as well as the second drawing at discord
}
function mainMenu(){
	background('skyblue');
	fill("blue");
	rect(252, 140, 190, 70, 20);
	text("Start", 250, 50);
	
	textAlign(CENTER);
}
function songSelectionScreen(){
	background('skyblue');
}
function songPlay(){
	background('skyblue');
}

// CLASSES - HOGAN ONLY ZONE (Unless you know what is happening)
class note{
	key;
	time;
	progress = 0;
	lyric;

	constructor(key, time, lyric = null){
		this.key = key;
		this.time = time;
		this.lyric = lyric;
	}

	get key(){return this.key;};
	get time(){return this.time;};
	get lyric(){return this.lyric;};
}
class song{
	static allAudio;

	audio;
	length;
	notes;
	speedMulti;

	playTime; // Timer goes from 0ms to end-of-song-ms

	constructor(audio, bpm, length, notes = []){
		if(allAudio == null){
			allAudio = [audio];
		}; // Not even sure if this works
		this.audio = loadSound(audio);
		append(allAudio, audio);

		this.length = length;
		this.notes = notes;
		this.bpm = bpm;
		this.playTime = 0;
		this.speedMulti = 1;
	}

	/** METHOD FOR PLAYING THE SONG
	 * 	Plays audio, scrolls note, etc...
	 * 	If speed multi is not specified, plays at last speed multi
	 */
	play(speedMulti = this.speedMulti) {
		this.speedMulti = speedMulti;		
	}
	/** METHOD FOR STOPPING THE SONG
	 * 	Stops the audio, scroll, etc...
	 */
	stop() {
		TODO // UNIMPLEMENTED
	}

	get playTime(){return this.playTime;};
	get audio(){return this.audio;};
	get notes(){return this.notes;};
}