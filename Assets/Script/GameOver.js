#pragma strict

function Update () {
	if(Input.GetMouseButtonDown(0))
	{
		OnMouseUp();
	}

}
function OnMouseUp()
{
		Screen.showCursor = true;
        Application.LoadLevel(0);
}