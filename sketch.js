let gamestate = 'mainMenu';
let startTime = 0;
let interval = 1000;
let secondsSinceStart;

let bee;
let duckSong;
let hmcQueen;

function preload() {
	// LOADSONGS
	beeN1 = [1,0,0,0,1];
	beeN2 = [0,1,0,0,0];
	beeN3 = [0,0,2,0,1];
	beeN4 = [0,0,0,1,0];
	bee = new Song("assets/audio/bee.mp3",120,65, beeN1, beeN2, beeN3, beeN4);

	duckSong = new Song("assets/audio/The Duck Song.mp3",186,120)
	hmcQueen = new Song("assets/audio/hacha mecha carnival (rin&len).mp3",120,147)
}

function setup() {
	new Canvas(500, 500);
	displayMode(CENTER);
	rectMode(CENTER)
	colorMode(HSB);
}

function draw() {
	secondsSinceStart = millis() / 1000;
	if(gamestate == 'mainMenu'){
		mainMenu();

		if(bee.isSongPlaying()){
			bee.displayNotes();
		}
	}
	else if(gamestate == 'settings'){
		settings();
	}
	else if (gamestate == 'characterSelect'){
		characterSelect();
	}

	if (mouse.presses()) {
		bee.playSong();

		text(bee.getNotesPerSecond(),width/2 + 100,height/2);
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
function songChoose(){
	background('skyblue');
}
function mainMenu(){
	background('skyblue');
	
	textAlign(CORNER);
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

function textTwirl(pos, direction, duration = 1){
	
}

// // CLASSES - HOGAN ONLY ZONE (Unless you know what is happening)
// class note{
// 	#key;
// 	#time;
// 	#duration;
// 	#lyric;

// 	constructor(key, time, duration = 0, lyric = null){
// 		this.#key = key;
// 		this.#time = time;
// 		this.#lyric = lyric;
// 		this.#duration = duration;
// 		// 0 = tap, anything greater then 0 = hold for that long in seconds
// 	}

// 	// Getters
// 	getKey(){return this.#key;};
// 	getTime(){return this.#time;};
// 	getLyric(){return this.#lyric;};
// 	getDuration(){return this.#duration;}; 
// }
class Song{
	#audio;
	#length; // ITS IN SECONDS
	#notes;
	#speedMulti;
	#nps;
	#progress;
	#startTime;
	#playing;

	constructor(audio, bpm, length, notes1, notes2, notes3, notes4, notesPerBeat = 4, speedMulti = 1){
		this.#audio = loadSound(audio);
		this.#length = length;
		this.#notes = [notes1, notes2, notes3, notes4];
		this.#nps = bpm/60/notesPerBeat;
		this.#speedMulti = speedMulti;

		this.#playing = false;
		this.#progress = 0;
		this.#startTime = millis();
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

		for(let i = 0; i < this.#notes.length; i++){ // Key = index
			for(let j = 0; j < this.#notes[i].length; j++){ // position in NPS = index
				this.drawnote(this.#notes[i][j],i,j+this.#progress);
			}
		}
	}

	// Different from displayNote, private. Dont use it outside of this class
	// Simply draws a square relating to the length of the note
	drawnote(length,xpos,nps){
		rectMode(CORNER);
		fill("black")
		stroke("white")

		if(length != 0){
			rect(
				width-((width/4)) - (width/8)*xpos - width/8/2, 
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
		this.#speedMulti = speedMulti;
		this.#audio.play()
		this.#progress = 0;

		this.#startTime = millis();
		this.#playing = true;

		this.displayNotes();
	}
	/** METHOD FOR STOPPING THE SONG
	 * 	Stops the audio, scroll, etc...
	 */
	stopSong() {
		TODO // UNIMPLEMENTED
	}

	getPlayTime(){return this.#progress;};
	getAudio(){return this.#audio;};
	getNotes(){return this.#notes;};
	getNotesPerSecond(){return this.#nps;};
	isSongPlaying(){return this.#playing;};
}