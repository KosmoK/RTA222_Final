let ball;
let gamestate = 'mainMenu';

function preload() {
	
}

function setup() {
	new Canvas(500, 500);
	displayMode(CENTERED);

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
}

// GAMESTATES
function settings(){
	background('skyblue');
}
function characterSelect(){
	background('skyblue');
}
function mainMenu(){
	background('skyblue');
}
function songPlay(){
	background('skyblue');
}

// CLASSES - HOGAN ONLY ZONE :> (Unless you know what is happening)
class note{
	key;
	time;
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
	audio;
	notes;
	speedMulti = 1;

	playTime; // Timer goes from 0ms to end-of-song-ms

	constructor(audio, notes = []){
		this.audio = audio;
		this.notes = notes;
		this.playTime = 0;
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
}