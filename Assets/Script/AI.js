#pragma strict
private var fwdClear;
private var rightClear;
private var leftClear;
//private var xpoints;
//private var zpoints;

function Start () {
	//xpoints = new Array(12.0);
	//zpoints = new Array(-1.0);
}

function Update () {
	fwdClear = Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), 1.5);
	rightClear = Physics.Raycast(transform.position, transform.TransformDirection(Vector3.right), 2);
	leftClear = Physics.Raycast(transform.position, transform.TransformDirection(Vector3.left), 2);
	Movement();
}

function Wall() {
	var rand = Mathf.CeilToInt(Random.Range(0,2));
	if(!rightClear&&rand==0){
		for(var i = 0; i < 90; i++)
			transform.Rotate(Vector3.up);
	}
	else if(!leftClear&&rand==1){
		for(var j = 0; j < 90; j++)
			transform.Rotate(Vector3.down);
	}
	else if(!rightClear)
	{
		for(var k = 0; k < 90; k++)
			transform.Rotate(Vector3.up);
	}
	else if(!leftClear)
	{
		for(var l = 0; l < 90; l++)
			transform.Rotate(Vector3.down);
	}
}

function Turn() {
	var rand = Mathf.CeilToInt(Random.Range(0,4));
	rand = 0;
	if(!rightClear&&rand==0){
		for(var i = 0; i < 90; i++)
			transform.Rotate(Vector3.up);
		transform.Translate(Vector3.forward);
	}
	else if(!leftClear&&rand==1){
		for(var j = 0; j < 90; j++)
			transform.Rotate(Vector3.down);
		transform.Translate(Vector3.forward);
	}
}

function Movement() {
	if(!fwdClear){
		transform.Translate(Vector3.forward * .075);
	}
	/*for(var a = 0; a < xpoints.length; a++)
	{
		if(Mathf.Sqrt(Mathf.Pow(xpoints[a] - transform.position.x, 2)
		 + Mathf.Pow(zpoints[a] - transform.position.z), 2) <= 3)
			Turn();
	}*/
	if(fwdClear)
		Wall();
}
