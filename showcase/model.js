function lightBrown(model){
	return COLOR([238/255,232/255,170/255,1])(model);
}

function darkBrown(model){
	return COLOR([139/255,69/255,19/255,1])(model);
}

function borderBrown(model){
	return COLOR([92/255,51/255,23/255,1])(model);
}

function drawSquares() {
	var square = CUBOID([1,1,1]);
	var lightSquare = lightBrown(square);
	var darkSquare = darkBrown(square);
	var x_T = T([0])([1]);
	var y_T = T([1])([1]);
	var oddRow = STRUCT([darkSquare,x_T,lightSquare,x_T,darkSquare,x_T,lightSquare,x_T,darkSquare,x_T,lightSquare,x_T,darkSquare,x_T,lightSquare]);
	var evenRow = STRUCT([lightSquare,x_T,darkSquare,x_T,lightSquare,x_T,darkSquare,x_T,lightSquare,x_T,darkSquare,x_T,lightSquare,x_T,darkSquare]);
	var matrix = [];
	for(i=0; i<8; i++){
		if(i%2===0){
			matrix.push(evenRow,y_T);
		}
		else matrix.push(oddRow,y_T);
	}
	return STRUCT(matrix);
}

DRAW(drawSquares());

function drawSquareBorder() {
	//var internalPoints = [[0,0],[8,0],[8,8],[0,8],[0,0]];
	//var externalPoints = [[-0.2,-0.2],[8.2,-0.2],[8.2,8.2],[-0.2,8.2],[-0.2,-0.2]];
	//var intSqr = POLYLINE(internalPoints);
	//var extSqr = POLYLINE(externalPoints);
	//var border = STRUCT([intSqr,extSqr]);
	//return BOUNDARY(EXTRUDE([2])(border));
	var bottom = T([0,1])([-0.2,-0.2])(CUBOID([8.4,0.2,1]));
	var top = T([0,1])([-0.2,8])(CUBOID([8.4,0.2,1]));
	var left = T([0,1])([-0.2,0])(CUBOID([0.2,8,1]));
	var right = T([0,1])([8,0])(CUBOID([0.2,8,1]));
	var base = T([0,1,2])([-0.2,-0.2,-0.2])(CUBOID([8.4,8.4,0.2]));
	var border = STRUCT([bottom,top,left,right,base]);
	return borderBrown(border);
}

DRAW(drawSquareBorder());