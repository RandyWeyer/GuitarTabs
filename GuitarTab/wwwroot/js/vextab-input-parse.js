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
var noteFret = "";
var noteString = "";

var TabOutput = "";


function ChooseNoteType(currentNoteType){
  noteType = currentNoteType;
  console.log(noteType);
}
function ChooseNoteFret(){
  noteFret = document.getElementById("guitar-fret-selection").value;
  console.log(noteFret);
}
function ChooseNoteString(){
  noteString = document.getElementById("guitar-string-selection").value;
  console.log(noteString);
}
function ConstructNote(){
  finalNote = noteType + noteFret + "/" + noteString + " ";
  songArr.push(finalNote);
  console.log(finalNote);
}
function update(newNoteArray){
    $(".editor").val($(".editor").val() + newNoteArray[newNoteArray.length-1]);
    $(function() {
    $('.editor').keydown();
    $('.editor').keypress();
    $('.editor').keyup();
    $('.editor').blur();
});

$(".editor").trigger('propertychange');
    $('.editor').blur();
}


$(document).ready(function(){
  // $("#note-form").submit(function(event) {
  // event.preventDefault();
  console.log($(".editor").val());

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


        $("button#add-note").click(function(event) {
            console.log(noteType);
            console.log(noteFret);
            console.log(noteString);
            ConstructNote();

            update(songArr);



            $("#tab-output").text(songArr.join());
            console.log(songArr);
            $("#final-tab-output").text("1");

          });
});
