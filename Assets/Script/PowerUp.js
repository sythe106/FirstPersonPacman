#pragma strict
var Blinky:Transform;
var Clyde:Transform;
var Inky: Transform;
var Pinky: Transform;
var wubwub: AudioClip;

private var act = false;
private var cnt = 0;
function Start () {
	audio.clip=wubwub;
}

function Update () {
	if(act&& cnt>0)
	{
		PowerUp();
		cnt--;
	}
	if(cnt == 0)
	{
		audio.Stop();
	}
}
	
function PowerUp(){
	if(Mathf.Sqrt(Mathf.Pow(Blinky.position.x - transform.position.x, 2) +
 	Mathf.Pow(Blinky.position.z - transform.position.z, 2)) <= 2){
 		Blinky.position.x = 2;
 		Blinky.position.z = 3;
 	}
 	if(Mathf.Sqrt(Mathf.Pow(Clyde.position.x - transform.position.x, 2) +
 	Mathf.Pow(Clyde.position.z - transform.position.z, 2)) <= 2){
 		Clyde.position.x = 2;
 		Clyde.position.z = 3;
 	}
 	if(Mathf.Sqrt(Mathf.Pow(Inky.position.x - transform.position.x, 2) +
 	Mathf.Pow(Inky.position.z - transform.position.z, 2)) <= 2){
 		Inky.position.x = 2;
 		Inky.position.z = 3;
 	}
 	if(Mathf.Sqrt(Mathf.Pow(Pinky.position.x - transform.position.x, 2) +
 	Mathf.Pow(Pinky.position.z - transform.position.z, 2)) <= 2){
 		Pinky.position.x = 2;
 		Pinky.position.z = 3;
 	}
}

function active(){
	act = true;
	cnt = 350;
	if(!audio.isPlaying)
	{
		audio.Play();
	}
	
	
}
function getTime()
{
	return cnt;
}