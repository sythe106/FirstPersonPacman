
var cnt = 3;

function Start()
{
}
function Update()
{
}
function decrease()
{

	if(cnt<=1)
	{
		Application.LoadLevel(2);
	}
	else
	{
		cnt--;
		print(cnt);
	}
}
function getLives()
{
	return cnt;
}