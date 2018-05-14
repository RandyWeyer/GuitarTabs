F = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "boo".
var div = document.getElementById("boo")
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(500, 500);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a tab stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.TabStave(10, 40, 400);
stave.addClef("tab").setContext(context).draw();

var notes = [
  // A single note
  new VF.TabNote({
    positions: [{str: 3, fret: 7}],
    duration: "q"}),

//G chord
  new VF.TabNote({
    positions: [{str: 1, fret: 3},
    						{str: 2, fret: 0},
                {str: 3, fret: 0},
                {str: 4, fret: 0},
                {str: 5, fret: 2},
                {str: 6, fret: 3}],
    duration: "q"}),

  // A chord with the note on the 3rd string bent
  new VF.TabNote({
    positions: [{str: 2, fret: 10},
                {str: 3, fret: 9}],
    duration: "q"}).
  addModifier(new VF.Bend("Full"), 1),

  // A single note with a harsh vibrato
  new VF.TabNote({
    positions: [{str: 2, fret: 5}],
    duration: "h"}).
  addModifier(new VF.Vibrato().setHarsh(true).setVibratoWidth(70), 0)
];

VF.Formatter.FormatAndDraw(context, stave, notes);
