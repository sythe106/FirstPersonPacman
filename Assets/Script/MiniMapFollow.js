#pragma strict
var Dad: Transform;
function Start () {

}

function Update () {
	transform.position = new Vector3(Dad.position.x + 70.5,Dad.position.y-63,Dad.position.z);
	transform.rotation = Dad.rotation;
}