var points = [[0,0],[0,2],[1,2],[1,22],[9,22],[9,17],[39,17],[39,16],[51,16],[51,6],[52,6],[52,4],[39,4],[39,0],[0,0]];
var contorno = COLOR([0,0,0])(POLYLINE(points));
DRAW(contorno);
var points1 = [[47,5],[47,16],[51,16],[51,5],[47,5]];
var stanza = COLOR([0,0,0])(POLYLINE(points1));
DRAW(stanza);
var points2 = [[1,1],[1,10],[21,10],[21,1],[1,1]];
var piscina = COLOR([0,0,0])(POLYLINE(points2));
DRAW(piscina);

var lineeVerticali = [];
var lineeOrizzontali = [];

//i punti vanno in senso antiorario, a partire dal vertice in basso a sinistra
//il punto 3 non serve
var grid = function(p1,p2,p4) {
  var lineeVerticali = [];
  var lineeOrizzontali = [];
  for(i = p1[0]; i<=p2[0]; i++) {
    lineeVerticali.push(POLYLINE([[i,p1[1]],[i,p4[1]]]));
  }
  for(i = p1[1]; i<=p4[1]; i++) {
    lineeOrizzontali.push(POLYLINE([[p1[0],i],[p2[0],i]]));
  }

  return STRUCT([
    STRUCT([lineeVerticali]),STRUCT([lineeOrizzontali])
  ]);
}

var grid1 = grid([0,0],[1,0],[0,1]);
DRAW(grid1);
var grid2 = grid([1,0],[39,0],[1,1]);
DRAW(grid2);
var grid3 = grid([1,10],[9,10],[1,22]);
DRAW(grid3);
var grid4 = grid([21,1],[36,1],[21,4]);
DRAW(grid4);
var grid5 = grid([21,4],[52,4],[0,10]);
DRAW(grid5);
var grid6 = grid([51,4],[52,4],[51,6]);
DRAW(grid6);
var grid7 = grid([9,10],[21,10],[9,17]);
DRAW(grid7);
var grid8 = grid([21,5],[39,5],[21,17]);
DRAW(grid8);
var grid9 = grid([39,5],[51,5],[39,16]);
DRAW(grid19);