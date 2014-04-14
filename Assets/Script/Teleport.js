#pragma strict

function Start () {

}

function Update () {
	if(transform.position.x >= 20.0 && transform.position.z < 0 && transform.position.z > -3)
		transform.position.x = -16.0;
	if(transform.position.x <= -20.0 && transform.position.z < 0 && transform.position.z > -3)
		transform.position.x = 16;
}