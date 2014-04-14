#pragma strict
var pacman : Transform;
var pellot : Transform;
function OnGUI()
{
	GUI.Box(Rect (0,0,100,50), "Lives "+pacman.GetComponent(Lives).getLives());
	GUI.Box(Rect (100,0,100,50), "Pellots "+pellot.GetChildCount());
	GUI.Box(Rect (200,0,130,50), "Power Time: "+pacman.GetComponent(PowerUp).getTime());
}

function Update () {

}