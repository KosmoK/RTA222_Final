let gamestate = 'mainMenu';
let startTime = 0;
let interval = 1000;
let secondsSinceStart;

function preload() {
	beeSong = loadSound("assets/audio/bee.mp3")

	// LOADSONGS
	bee = new song("assets/audio/bee.mp3",120,65);
	duckSong = new song("assets/audio/The Duck Song.mp3",186,120)
}

function setup() {
	new Canvas(500, 500);
	displayMode(CENTERED);
	rectMode(CENTER)
	colorMode(HSB);
}

function draw() {
	secondsSinceStart = millis() / 1000;
	if(gamestate == 'mainMenu'){
		mainMenu();
	}
	else if(gamestate == 'settings'){
		settings();
	}
	else if (gamestate == 'characterSelect'){
		characterSelect();
	}

	if (mouse.presses()) {
		bee.playSong();

		text(bee.bpm,width/2 + 100,height/2);
	}
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
	
	textAlign(CENTER);
	textSize(60);
	text("RHYTHM GAME", width/2, 120);
	
	stroke("white");
	rect(247, 180, 90, 30, 10); // button 1
	rect(245, 215, 90, 30, 10); // button 2
	rect(245, 250, 90, 30, 10); // button 3
	
	textAlign(CENTER);
	textSize(15);
	text("PLAY", 290, 200);
	text("SETTINGS", 290, 234);
	text("EXIT", 290, 269);
  
}

// CLASSES - HOGAN ONLY ZONE (Unless you know what is happening)
class note{
	#key;
	#time;
	#duration = 0;
	#lyric;

	constructor(key, time, duration = 1, lyric = null){
		this.#key = key;
		this.#time = time;
		this.#lyric = lyric;
	}

	// Getters
	getKey(){return this.#key;};
	getTime(){return this.#time;};
	getLyric(){return this.#lyric;};
	getDuration(){return this.#duration;}; 
}
class song{
	#audio;
	#length; // ITS IN SECONDS
	#notes;
	#speedMulti;
	#bpm;
	#bps;

	#playTime; // Timer goes from 0ms to end-of-song-ms

	constructor(audio, bpm, length, notes, speedMulti = 1){
		this.#audio = loadSound(audio);
		this.#length = length;
		this.#notes = notes;
		this.#bpm = bpm;
		this.#playTime = 0;
		this.#speedMulti = speedMulti;

		this.#bps = bpm * 60;
	}
	/** METHOD FOR DISPLAYING THE NOTES
	 *  Uses p5 play's tiles syste
	 *  https://p5play.org/learn/tiles.html
	 */
	displayNotes() {
		
	}
	/** METHOD FOR PLAYING THE SONG
	 * 	Plays audio, scrolls note, etc...
	 * 	If speed multi is not specified, plays at last speed multi
	 */
	playSong(speedMulti = this.#speedMulti) {
		this.#speedMulti = speedMulti;
		this.#audio.play()
		
		for(this.#playTime; this.#playTime < Math.ceil(this.#length); this.#playTime++){
			print("Testing!")
		}
	}
	/** METHOD FOR STOPPING THE SONG
	 * 	Stops the audio, scroll, etc...
	 */
	stopSong() {
		TODO // UNIMPLEMENTED
	}

	getPlayTime(){return this.#playTime;};
	getAudio(){return this.#audio;};
	getNotes(){return this.#notes;};
	getBPM(){return this.#bpm}
}