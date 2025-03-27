let ball;

function setup() {
	new Canvas(500, 500);
	displayMode(CENTERED);

	ball = new Sprite();
	ball.diameter = 50;
}

function draw() {
	background('skyblue');

	if (mouse.presses()) {
		ball.speed = 10;
		ball.moveTo(mouse);
	}
}

class note{
	key;
	time;
	lyric;

	constructor(key, time, lyric = null){
		this.key = key;
		this.time = time;
		this.lyric = lyric;
	}
}
