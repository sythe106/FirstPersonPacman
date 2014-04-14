#pragma strict
var eater: Transform;
function Start () {}
function Update () {
	if(Mathf.Sqrt(Mathf.Pow(eater.position.x - transform.position.x, 2) +
	 Mathf.Pow(eater.position.z - transform.position.z, 2)) <= 1.5)
		eat();
		
}
function eat()
{
	
	eater.position.x=0;
	eater.position.z=2.6;
	eater.GetComponent(Lives).decrease();
}
