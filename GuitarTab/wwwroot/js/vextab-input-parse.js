var wholeNote= ":w "
var halfNote = ":h "
var quarterNote = ":q "
var eighthNote = ":8 "
var sixteenthNote = ":16 "
var thirtySecondNote = ":32 "
var quarterRest = ":4 ## "
var eighthRest = ":8 ## "

var songArr = [];
var noteType = "";
var noteString = "";
var noteFret = "";


whole-note
half-note
quarter-note
eighth-note
sixteenth-note
32nd-note
quarter-rest
eighth-rest

function ChooseNoteType(currentNoteType){
  noteParameter = currentNoteType;
}
function ChooseNoteString(currentNoteString){
  noteString = currentNoteString;
}
function ChooseNoteFret(currentNoteFret){
  noteFret = currentNoteFret;
}
function ConstructNote(currentNote){
  finalNote = noteType + noteString + "/" + noteFret;
}



$(document).ready(function(){

  $("button#whole-note").click(function(event) {
    ChooseNoteType(currentNoteType);
    });
  $("button#half-note").click(function(event) {
    ChooseNote(currentNoteType);
    });
  $("button#quarter-note").click(function(event) {
    ChooseNote(currentNoteType);
    });
  $("button#eighth-note").click(function(event) {
    ChooseNote(currentNoteType);
    });
  $("button#sixteenth-note").click(function(event) {
    ChooseNote(currentNoteType);
    });
  $("button#thirty-second-note").click(function(event) {
    ChooseNote(currentNoteType);
    });
  $("button#quarter-rest").click(function(event) {
    ChooseNote(currentNoteType);
    });
  $("button#eighth-rest").click(function(event) {
    ChooseNote(currentNoteType);
    });





});
