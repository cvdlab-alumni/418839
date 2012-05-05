function drawFuselage() {
  var domain1 = INTERVALS(1)(30);
  var domain2 = DOMAIN([[0,1],[0,1]])([20,30]);

  var p0 = [[0,0,0.2],[-0.8,5,0.4],[-0.4,6.2,0.5],[-0.3,6.5,0.5],[1.7,7,0.5],[0.2,3,0.3],[1.5,-0.5,0.3],[0,0,0.2]];
  var p1 = [[0,0,-0.2],[-0.8,5,-0.4],[-0.4,6.2,-0.5],[-0.3,6.5,-0.5],[1.7,7,-0.5],[0.2,3,-0.3],[1.5,-0.5,-0.3],[0,0,-0.2]];

  var c0 = BEZIER(S0)(p0);
  var c1 = BEZIER(S0)(p1);

  var p2 = [[0,0,0.2]];
  var c2 = BEZIER(S0)(p2);
  var curve1 = BEZIER(S1)([c0,c2]);
  var surface1 = MAP(curve1)(domain2);
  //DRAW(surface1);

  var p3 = [[0,0,-0.2]];
  var c3 = BEZIER(S0)(p3);
  var curve2 = BEZIER(S1)([c1,c3]);
  var surface2 = MAP(curve2)(domain2);
  //DRAW(surface2);

  var lateral = BEZIER(S1)([c0,c1]);
  var fuselage = MAP(lateral)(domain2);

  var p4 = [[0.5,5.8,0.15],[0.5,4,0.15],[-1,5.6,0.15],[0.5,5.8,0.15]];
  var p5 = [[0.5,5.8,-0.15],[0.5,4,-0.15],[-1,5.6,-0.15],[0.5,5.8,-0.15]];

  var c4 = BEZIER(S0)(p4);
  var c5 = BEZIER(S0)(p5);

  var p6 = [[0.5,5.8,0.15]];
  var c6 = BEZIER(S0)(p6);
  var curve3 = BEZIER(S1)([c4,c6]);
  var surface3 = MAP(curve3)(domain2);
  //DRAW(surface3);

  var p7 = [[0.5,5.8,-0.15]];
  var c7 = BEZIER(S0)(p7);
  var curve4 = BEZIER(S1)([c5,c7]);
  var surface4 = MAP(curve4)(domain2);
 //DRAW(surface4);

  var lateral2 = BEZIER(S1)([c4,c5]);
  var cockpit = MAP(lateral2)(domain2);

  var cockpitStruct = STRUCT([cockpit, surface3, surface4]);
  cockpitStruct = T([0,1])([0.1,-0.05])(cockpitStruct);

  var struct = STRUCT([fuselage, surface1, surface2, cockpitStruct]);
  DRAW(COLOR([229/255,229/255,229/255,1])(struct));
}

drawFuselage();