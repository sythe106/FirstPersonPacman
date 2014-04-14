#pragma strict
var parent: Transform;

function Update () {
	if(parent.childCount==0)
	{
		Screen.showCursor = true;
		Application.LoadLevel(3);
	}
}