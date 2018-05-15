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


function ChooseNoteType(currentNoteType){
  noteParameter = currentNoteType;
  console.log(noteParameter);
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
  // $("#note-form").submit(function(event) {
  // event.preventDefault();

    var inputtedFret = $("input#guitar-fret-seletion").val();
    var inputtedString = $("input#guitar-string-seletction").val();

    $("button#whole-note").click(function(event) {
      currentNoteType = wholeNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#half-note").click(function(event) {
      currentNoteType = halfNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#quarter-note").click(function(event) {
      currentNoteType = quarterNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#eighth-note").click(function(event) {
      currentNoteType = eighthNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#sixteenth-note").click(function(event) {
      currentNoteType = sixteenthNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#thirty-second-note").click(function(event) {
      currentNoteType = thirtySecondNote;
      ChooseNoteType(currentNoteType);
      });
    $("button#quarter-rest").click(function(event) {
      currentNoteType = quarterRest;
      ChooseNoteType(currentNoteType);
      });
    $("button#eighth-rest").click(function(event) {
      currentNoteType = eighthRest;
      ChooseNoteType(currentNoteType);
      });




  // });
});
