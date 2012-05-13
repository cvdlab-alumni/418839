/**
 * @author Andrea Somma
 * 
 * Chess
 */

var scmodel;

function drawChess() {

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

		var oddRow = STRUCT([darkSquare,x_T,lightSquare,x_T,darkSquare,x_T,lightSquare,x_T,
			darkSquare,x_T,lightSquare,x_T,darkSquare,x_T,lightSquare]);

		var evenRow = STRUCT([lightSquare,x_T,darkSquare,x_T,lightSquare,x_T,darkSquare,x_T,
			lightSquare,x_T,darkSquare,x_T,lightSquare,x_T,darkSquare]);

		var matrix = [];
		for(i=0; i<8; i++){
			if(i%2===0){
				matrix.push(evenRow,y_T);
			}
			else matrix.push(oddRow,y_T);
		}
		return STRUCT(matrix);
	}


	function drawSquareBorder() {
		var bottom = T([0,1])([-0.2,-0.2])(CUBOID([8.4,0.2,1]));
		var top = T([0,1])([-0.2,8])(CUBOID([8.4,0.2,1]));
		var left = T([0,1])([-0.2,0])(CUBOID([0.2,8,1]));
		var right = T([0,1])([8,0])(CUBOID([0.2,8,1]));
		var base = T([0,1,2])([-0.2,-0.2,-0.2])(CUBOID([8.4,8.4,0.2]));
		var border = STRUCT([bottom,top,left,right,base]);
		return borderBrown(border);
	}


	function createCristalBorder() {
		var domain = DOMAIN([[0,1],[0,1]])([100,1]);
	
  	var knots = [0,0,0,1,2,3,4,5,6,7,8,9,10,11,11,11];

  	var points1 = [[-0.2,-0.2,1],[-0.3,-0.3,1.1],[-0.2,-0.2,1.2],
  		[-0.4,-0.4,1.3],[-0.5,-0.5,0.9],[-0.3,-0.3,0.8],[-0.6,-0.6,0.8],[-0.4,-0.4,0.6],
  		[-0.7,-0.7,0.6],[-0.3,-0.3,0.1],[-0.9,-0.9,-0.2],[-0.5,-0.5,-0.2],[-0.2,-0.2,-0.2]];

		var points2 = [[8.2,-0.2,1],[8.3,-0.3,1.1],[8.2,-0.2,1.2],
			[8.4,-0.4,1.3],[8.5,-0.5,0.9],[8.3,-0.3,0.8],[8.6,-0.6,0.8],[8.4,-0.4,0.6],
			[8.7,-0.7,0.6],[8.3,-0.3,0.1],[8.9,-0.9,-0.2],[8.5,-0.5,-0.2],[8.2,-0.2,-0.2]];

  	var curve1 = NUBS(S0)(2)(knots)(points1);
		var curve2 = NUBS(S0)(2)(knots)(points2);

 	 	var sup = BEZIER(S1)([curve1,curve2]);
  	sup = MAP(sup)(domain);
  	return sup;
	}

	function drawCristal() {
		var sBottom = createCristalBorder();
		var sTop = T([0,1])([8,8])(R([0,1])([PI])(sBottom));
		var sLeft = T([1])([8])(R([0,1])([-PI/2])(sBottom));
		var sRight = T([0])([8])(R([0,1])([PI/2])(sBottom));

		var cristal = STRUCT([sBottom,sTop,sLeft,sRight]);
		return COLOR([0,1,1,0.8])(cristal);
	}

	var squares = drawSquares();
	var borders = drawSquareBorder();
	var cristals = drawCristal();
	return STRUCT([squares,borders,cristals]);
}

scmodel = drawChess();