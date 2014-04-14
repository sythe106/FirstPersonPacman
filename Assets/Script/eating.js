#pragma strict
var eater: Transform;
function Start () {}
function Update () {
	if(Mathf.Sqrt(Mathf.Pow(eater.position.x - transform.position.x, 2) +
	 Mathf.Pow(eater.position.z - transform.position.z, 2)) <= 2)
		eat();
		
}
function eat()
{
	Destroy(gameObject);
}
