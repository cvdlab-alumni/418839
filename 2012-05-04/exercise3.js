function drawStabilizers() {
  var domain1 = INTERVALS(1)(30);
  var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);

  //VERTICAL STABILIZERS
  var p1 = [[0,0,0.2],[0.1,0.5,0.3],[-0.1,0.5,0],[-0.05,0.5,0.01],[-0.1,1.1,0.01],
            [-1,1.3,0.01],[-1.3,1,0.01],[-1.3,0.3,0.01],[-1,-0,0.01],[-0.7,-0,0.01],[0,0,0.2]];
  var knots1 = [0,0,0,1,2,3,4,5,6,7,8,9,9,9];
  var c1 = NUBS(S0)(2)(knots1)(p1);

  var p2 = [[0,0,-0.2],[0.1,0.5,-0.3],[-0.1,0.5,-0],[-0.05,0.5,-0.01],[-0.1,1.1,-0.01],
            [-1,1.3,-0.01],[-1.3,1,-0.01],[-1.3,0.3,-0.01],[-1,-0,-0.01],[-0.7,-0,-0.01],[0,0,-0.2]];
  var knots2 = [0,0,0,1,2,3,4,5,6,7,8,9,9,9];
  var c2 = NUBS(S0)(2)(knots2)(p2);

  var s1 = BEZIER(S1)([c1,c2]);
  s1 = MAP(s1)(domain2);
  DRAW(s1);

  var p3 = [[0,0,0.2]];
  var c3 = BEZIER(S0)(p3);
  var curve3 = BEZIER(S1)([c1,c3]);
  var surface3 = MAP(curve3)(domain2);

  var p4 = [[0,0,-0.2]];
  var c4 = BEZIER(S0)(p4);
  var curve4 = BEZIER(S1)([c2,c4]);
  var surface4 = MAP(curve4)(domain2);

  DRAW(surface3);
  DRAW(surface4);

  //HORIZONTAL STABILIZERS
  var p3 = [[-0.1,0.5,0.3],[0,0.5,0.9],[-1,0.5,0.8],[-1,0.5,0.8],[-1,0.5,0.3],[-0.5,0.5,0.2],[-0.1,0.5,0.3]];
  var knots3 = [0,0,0,1,2,3,4,5,5,5];
  var c3 = NUBS(S0)(2)(knots3)(p3);

  var p4 = [[-0.1,0.48,0.3],[0,0.48,0.9],[-1,0.5,0.8],[-1,0.5,0.8],[-1,0.5,0.3],[-0.5,0.48,0.2],[-0.1,0.48,0.3]];
  var knots4 = [0,0,0,1,2,3,4,5,5,5];
  var c4 = NUBS(S0)(2)(knots4)(p4);

  var s2 = BEZIER(S1)([c3,c4]);
  s2 = MAP(s2)(domain2);

  var p5 = [[-0.1,0.5,0.3]];
  var c5 = BEZIER(S0)(p5);
  var curve5 = BEZIER(S1)([c3,c5]);
  var surface5 = MAP(curve5)(domain2);

  var p6 = [[-0.1,0.48,0.3]];
  var c6 = BEZIER(S0)(p6);
  var curve6 = BEZIER(S1)([c4,c6]);
  var surface6 = MAP(curve6)(domain2);

  var hStabRight = STRUCT([s2,surface5,surface6]);
  hStabRight = T([2])([-0.2])(hStabRight);
  var hStabLeft = S([2])([-1])(hStabRight);

  var tail = STRUCT([s1,hStabRight,hStabLeft])
  tail = COLOR([229/255,229/255,229/255,1])(tail);
  return tail;
}

DRAW(drawStabilizers());