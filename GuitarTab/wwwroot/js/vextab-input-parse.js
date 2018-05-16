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

function PlaySounds(
   songArr.forEach(function(noteSound, index) {

   }
)



var sixthStringNoFret = new Howl({
  src: ['Audio/lowE-String/0:6.mp3']
});
var sixthStringFirstFret = new Howl({
  src: ['Audio/lowE-String/1:6.mp3']
});
var sixthStringSecondFret = new Howl({
  src: ['Audio/lowE-String/2:6.mp3']
});
var sixthStringThirdFret = new Howl({
  src: ['Audio/lowE-String/3:6.mp3']
});
var sixthStringFourthFret = new Howl({
  src: ['Audio/lowE-String/4:6.mp3']
});
var sixthStringFifthFret = new Howl({
  src: ['Audio/lowE-String/5:6.mp3']
});
var sixthStringSixthFret = new Howl({
  src: ['Audio/lowE-String/6:6.mp3']
});
var sixthStringSeventhFret = new Howl({
  src: ['Audio/lowE-String/7:6.mp3']
});
var sixthStringEighthFret = new Howl({
  src: ['Audio/lowE-String/8:6.mp3']
});
var sixthStringNinthFret = new Howl({
  src: ['Audio/lowE-String/9:6.mp3']
});
var sixthStringTenthFret = new Howl({
  src: ['Audio/lowE-String/10:6.mp3']
});
var sixthStringEleventhFret = new Howl({
  src: ['Audio/lowE-String/11:6.mp3']
});
var sixthStringTwelfthFret = new Howl({
  src: ['Audio/lowE-String/12:6.mp3']
});
var sixthStringThirtheethFret = new Howl({
  src: ['Audio/lowE-String/13:6.mp3']
});
var sixthStringFourteenthFret = new Howl({
  src: ['Audio/lowE-String/14:6.mp3']
});
var sixthStringFifteenthFret = new Howl({
  src: ['Audio/lowE-String/15:6.mp3']
});
var sixthStringSixteenthFret = new Howl({
  src: ['Audio/lowE-String/16:6.mp3']
});
var sixthStringSeventeenthFret = new Howl({
  src: ['Audio/lowE-String/17:6.mp3']
});
var sixthStringEighteenthFret = new Howl({
  src: ['Audio/lowE-String/18:6.mp3']
});
var sixthStringNineteenthFret = new Howl({
  src: ['Audio/lowE-String/19:6.mp3']
});
var sixthStringTwentyithFret = new Howl({
  src: ['Audio/lowE-String/20:6.mp3']
});


var fifthStringNoFret = new Howl({
  src: ['Audio/lowE-String/0:5.mp3']
});
var fifthStringFirstFret = new Howl({
  src: ['Audio/lowE-String/1:5.mp3']
});
var fifthStringSecondFret = new Howl({
  src: ['Audio/lowE-String/2:5.mp3']
});
var fifthStringThirdFret = new Howl({
  src: ['Audio/lowE-String/3:5.mp3']
});
var fifthStringFourthFret = new Howl({
  src: ['Audio/lowE-String/4:5.mp3']
});
var fifthStringFifthFret = new Howl({
  src: ['Audio/lowE-String/5:5.mp3']
});
var fifthStringSixthFret = new Howl({
  src: ['Audio/lowE-String/6:5.mp3']
});
var fifthStringSeventhFret = new Howl({
  src: ['Audio/lowE-String/7:5.mp3']
});
var fifthStringEighthFret = new Howl({
  src: ['Audio/lowE-String/8:5.mp3']
});
var fifthStringNinthFret = new Howl({
  src: ['Audio/lowE-String/9:5.mp3']
});
var fifthStringTenthFret = new Howl({
  src: ['Audio/lowE-String/10:5.mp3']
});
var fifthStringEleventhFret = new Howl({
  src: ['Audio/lowE-String/11:5.mp3']
});
var fifthStringTwelfthFret = new Howl({
  src: ['Audio/lowE-String/12:5.mp3']
});
var fifthStringThirtheethFret = new Howl({
  src: ['Audio/lowE-String/13:5.mp3']
});
var fifthStringFourteenthFret = new Howl({
  src: ['Audio/lowE-String/14:5.mp3']
});
var fifthStringFifteenthFret = new Howl({
  src: ['Audio/lowE-String/15:5.mp3']
});
var fifthStringSixteenthFret = new Howl({
  src: ['Audio/lowE-String/16:5.mp3']
});
var fifthStringSeventeenthFret = new Howl({
  src: ['Audio/lowE-String/17:5.mp3']
});
var fifthStringEighteenthFret = new Howl({
  src: ['Audio/lowE-String/18:5.mp3']
});
var fifthStringNineteenthFret = new Howl({
  src: ['Audio/lowE-String/19:5.mp3']
});
var fifthStringTwentyithFret = new Howl({
  src: ['Audio/lowE-String/20:5.mp3']
});




var fourthStringNoFret = new Howl({
  src: ['Audio/lowE-String/0:4.mp3']
});
var fourthStringFirstFret = new Howl({
  src: ['Audio/lowE-String/1:4.mp3']
});
var fourthStringSecondFret = new Howl({
  src: ['Audio/lowE-String/2:4.mp3']
});
var fourthStringThirdFret = new Howl({
  src: ['Audio/lowE-String/3:4.mp3']
});
var fourthStringFourthFret = new Howl({
  src: ['Audio/lowE-String/4:4.mp3']
});
var fourthStringFifthFret = new Howl({
  src: ['Audio/lowE-String/5:4.mp3']
});
var fourthStringSixthFret = new Howl({
  src: ['Audio/lowE-String/6:4.mp3']
});
var fourthStringSeventhFret = new Howl({
  src: ['Audio/lowE-String/7:4.mp3']
});
var fourthStringEighthFret = new Howl({
  src: ['Audio/lowE-String/8:4.mp3']
});
var fourthStringNinthFret = new Howl({
  src: ['Audio/lowE-String/9:4.mp3']
});
var fourthStringTenthFret = new Howl({
  src: ['Audio/lowE-String/10:4.mp3']
});
var fourthStringEleventhFret = new Howl({
  src: ['Audio/lowE-String/11:4.mp3']
});
var fourthStringTwelfthFret = new Howl({
  src: ['Audio/lowE-String/12:4.mp3']
});
var fourthStringThirtheethFret = new Howl({
  src: ['Audio/lowE-String/13:4.mp3']
});
var fourthStringFourteenthFret = new Howl({
  src: ['Audio/lowE-String/14:4.mp3']
});
var fourthStringFifteenthFret = new Howl({
  src: ['Audio/lowE-String/15:4.mp3']
});
var fourthStringSixteenthFret = new Howl({
  src: ['Audio/lowE-String/16:4.mp3']
});
var fourthStringSeventeenthFret = new Howl({
  src: ['Audio/lowE-String/17:4.mp3']
});
var fourthStringEighteenthFret = new Howl({
  src: ['Audio/lowE-String/18:4.mp3']
});
var fourthStringNineteenthFret = new Howl({
  src: ['Audio/lowE-String/19:4.mp3']
});
var fourthStringTwentyithFret = new Howl({
  src: ['Audio/lowE-String/20:4.mp3']
});





var thirdStringNoFret = new Howl({
  src: ['Audio/lowE-String/0:3.mp3']
});
var thirdStringFirstFret = new Howl({
  src: ['Audio/lowE-String/1:3.mp3']
});
var thirdStringSecondFret = new Howl({
  src: ['Audio/lowE-String/2:3.mp3']
});
var thirdStringThirdFret = new Howl({
  src: ['Audio/lowE-String/3:3.mp3']
});
var thirdStringFourthFret = new Howl({
  src: ['Audio/lowE-String/4:3.mp3']
});
var thirdStringFifthFret = new Howl({
  src: ['Audio/lowE-String/5:3.mp3']
});
var thirdStringSixthFret = new Howl({
  src: ['Audio/lowE-String/6:3.mp3']
});
var thirdStringSeventhFret = new Howl({
  src: ['Audio/lowE-String/7:3.mp3']
});
var thirdStringEighthFret = new Howl({
  src: ['Audio/lowE-String/8:3.mp3']
});
var thirdStringNinthFret = new Howl({
  src: ['Audio/lowE-String/9:3.mp3']
});
var thirdStringTenthFret = new Howl({
  src: ['Audio/lowE-String/10:3.mp3']
});
var thirdStringEleventhFret = new Howl({
  src: ['Audio/lowE-String/11:3.mp3']
});
var thirdStringTwelfthFret = new Howl({
  src: ['Audio/lowE-String/12:3.mp3']
});
var thirdStringThirtheethFret = new Howl({
  src: ['Audio/lowE-String/13:3.mp3']
});
var thirdStringFourteenthFret = new Howl({
  src: ['Audio/lowE-String/14:3.mp3']
});
var thirdStringFifteenthFret = new Howl({
  src: ['Audio/lowE-String/15:3.mp3']
});
var thirdStringSixteenthFret = new Howl({
  src: ['Audio/lowE-String/16:3.mp3']
});
var thirdStringSeventeenthFret = new Howl({
  src: ['Audio/lowE-String/17:3.mp3']
});
var thirdStringEighteenthFret = new Howl({
  src: ['Audio/lowE-String/18:3.mp3']
});
var thirdStringNineteenthFret = new Howl({
  src: ['Audio/lowE-String/19:3.mp3']
});
var thirdStringTwentyithFret = new Howl({
  src: ['Audio/lowE-String/20:3.mp3']
});



var secondStringNoFret = new Howl({
  src: ['Audio/lowE-String/0:2.mp3']
});
var secondStringFirstFret = new Howl({
  src: ['Audio/lowE-String/1:2.mp3']
});
var secondStringSecondFret = new Howl({
  src: ['Audio/lowE-String/2:2.mp3']
});
var secondStringThirdFret = new Howl({
  src: ['Audio/lowE-String/3:2.mp3']
});
var secondStringFourthFret = new Howl({
  src: ['Audio/lowE-String/4:2.mp3']
});
var secondStringFifthFret = new Howl({
  src: ['Audio/lowE-String/5:2.mp3']
});
var secondStringSixthFret = new Howl({
  src: ['Audio/lowE-String/6:2.mp3']
});
var secondStringSeventhFret = new Howl({
  src: ['Audio/lowE-String/7:2.mp3']
});
var secondStringEighthFret = new Howl({
  src: ['Audio/lowE-String/8:2.mp3']
});
var secondStringNinthFret = new Howl({
  src: ['Audio/lowE-String/9:2.mp3']
});
var secondStringTenthFret = new Howl({
  src: ['Audio/lowE-String/10:2.mp3']
});
var secondStringEleventhFret = new Howl({
  src: ['Audio/lowE-String/11:2.mp3']
});
var secondStringTwelfthFret = new Howl({
  src: ['Audio/lowE-String/12:2.mp3']
});
var secondStringThirtheethFret = new Howl({
  src: ['Audio/lowE-String/13:2.mp3']
});
var secondStringFourteenthFret = new Howl({
  src: ['Audio/lowE-String/14:2.mp3']
});
var secondStringFifteenthFret = new Howl({
  src: ['Audio/lowE-String/15:2.mp3']
});
var secondStringSixteenthFret = new Howl({
  src: ['Audio/lowE-String/16:2.mp3']
});
var secondStringSeventeenthFret = new Howl({
  src: ['Audio/lowE-String/17:2.mp3']
});
var secondStringEighteenthFret = new Howl({
  src: ['Audio/lowE-String/18:2.mp3']
});
var secondStringNineteenthFret = new Howl({
  src: ['Audio/lowE-String/19:2.mp3']
});
var secondStringTwentyithFret = new Howl({
  src: ['Audio/lowE-String/20:2.mp3']
});






var firstStringNoFret = new Howl({
  src: ['Audio/lowE-String/0:1.mp3']
});
var firstStringFirstFret = new Howl({
  src: ['Audio/lowE-String/1:1.mp3']
});
var firstStringSecondFret = new Howl({
  src: ['Audio/lowE-String/2:1.mp3']
});
var firstStringThirdFret = new Howl({
  src: ['Audio/lowE-String/3:1.mp3']
});
var firstStringFourthFret = new Howl({
  src: ['Audio/lowE-String/4:1.mp3']
});
var firstStringFifthFret = new Howl({
  src: ['Audio/lowE-String/5:1.mp3']
});
var firstStringSixthFret = new Howl({
  src: ['Audio/lowE-String/6:1.mp3']
});
var firstStringSeventhFret = new Howl({
  src: ['Audio/lowE-String/7:1.mp3']
});
var firstStringEighthFret = new Howl({
  src: ['Audio/lowE-String/8:1.mp3']
});
var firstStringNinthFret = new Howl({
  src: ['Audio/lowE-String/9:1.mp3']
});
var firstStringTenthFret = new Howl({
  src: ['Audio/lowE-String/10:1.mp3']
});
var firstStringEleventhFret = new Howl({
  src: ['Audio/lowE-String/11:1.mp3']
});
var firstStringTwelfthFret = new Howl({
  src: ['Audio/lowE-String/12:1.mp3']
});
var firstStringThirtheethFret = new Howl({
  src: ['Audio/lowE-String/13:1.mp3']
});
var firstStringFourteenthFret = new Howl({
  src: ['Audio/lowE-String/14:1.mp3']
});
var firstStringFifteenthFret = new Howl({
  src: ['Audio/lowE-String/15:1.mp3']
});
var firstStringSixteenthFret = new Howl({
  src: ['Audio/lowE-String/16:1.mp3']
});
var firstStringSeventeenthFret = new Howl({
  src: ['Audio/lowE-String/17:1.mp3']
});
var firstStringEighteenthFret = new Howl({
  src: ['Audio/lowE-String/18:1.mp3']
});
var firstStringNineteenthFret = new Howl({
  src: ['Audio/lowE-String/19:1.mp3']
});
var firstStringTwentyithFret = new Howl({
  src: ['Audio/lowE-String/20:1.mp3']
});






$(document).ready(function(){

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
      });
});
