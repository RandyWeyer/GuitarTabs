var wholeNote= ":w ";
var halfNote = ":h ";
var quarterNote = ":q ";
var eighthNote = ":8 ";
var sixteenthNote = ":16 ";
var thirtySecondNote = ":32 ";
var quarterRest = ":4 ## ";
var eighthRest = ":8 ## ";
var newMeasure = "| ";
var newStaff = "\ntabstave time=4/4 key=C notation=true\nnotes ";

var songArr = [];
var noteType = "";
var noteFret = "";
var noteString = "";

var timeSignature=1;
var noteAmount;
var measureCount = 2;
var timeCount = timeSignature;

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
function CreateNewStaff(){
  songArr.push(newStaff);
}
function CreateNewMeasure(){
  songArr.push(newMeasure);
}
function ConstructNote(){
  finalNote = noteType + noteFret + "/" + noteString + " ";
  songArr.push(finalNote);
  timeCount -= noteAmount;

  if (timeCount < 0){

    CreateNewMeasure();
    measureCount -= 1;
    timeCount=timeSignature;
  }
  if (measureCount < 0){
    CreateNewStaff();
    measureCount=2;
    timeCount=timeSignature;
  }

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


var sixthStringNoFret = new Howl({
  src: ['~/Audio/lowE-String/0:6.mp3']
});
var sixthStringFirstFret = new Howl({
  src: ['~/Audio/lowE-String/1:6.mp3']
});
var sixthStringSecondFret = new Howl({
  src: ['~/Audio/lowE-String/2:6.mp3']
});
var sixthStringThirdFret = new Howl({
  src: ['~/Audio/lowE-String/3:6.mp3']
});
var sixthStringFourthFret = new Howl({
  src: ['~/Audio/lowE-String/4:6.mp3']
});
var sixthStringFifthFret = new Howl({
  src: ['~/Audio/lowE-String/5:6.mp3']
});
var sixthStringSixthFret = new Howl({
  src: ['~/Audio/lowE-String/6:6.mp3']
});
var sixthStringSeventhFret = new Howl({
  src: ['~/Audio/lowE-String/7:6.mp3']
});
var sixthStringEighthFret = new Howl({
  src: ['~/Audio/lowE-String/8:6.mp3']
});
var sixthStringNinthFret = new Howl({
  src: ['~/Audio/lowE-String/9:6.mp3']
});
var sixthStringTenthFret = new Howl({
  src: ['~/Audio/lowE-String/10:6.mp3']
});
var sixthStringEleventhFret = new Howl({
  src: ['~/Audio/lowE-String/11:6.mp3']
});
var sixthStringTwelfthFret = new Howl({
  src: ['~/Audio/lowE-String/12:6.mp3']
});
var sixthStringThirtheethFret = new Howl({
  src: ['~/Audio/lowE-String/13:6.mp3']
});
var sixthStringFourteenthFret = new Howl({
  src: ['~/Audio/lowE-String/14:6.mp3']
});
var sixthStringFifteenthFret = new Howl({
  src: ['~/Audio/lowE-String/15:6.mp3']
});
var sixthStringSixteenthFret = new Howl({
  src: ['~/Audio/lowE-String/16:6.mp3']
});
var sixthStringSeventeenthFret = new Howl({
  src: ['~/Audio/lowE-String/17:6.mp3']
});
var sixthStringEighteenthFret = new Howl({
  src: ['~/Audio/lowE-String/18:6.mp3']
});
var sixthStringNineteenthFret = new Howl({
  src: ['~/Audio/lowE-String/19:6.mp3']
});
var sixthStringTwentyithFret = new Howl({
  src: ['~/Audio/lowE-String/20:6.mp3']
});


var fifthStringNoFret = new Howl({
  src: ['~/Audio/lowE-String/0:5.mp3']
});
var fifthStringFirstFret = new Howl({
  src: ['~/Audio/lowE-String/1:5.mp3']
});
var fifthStringSecondFret = new Howl({
  src: ['~/Audio/lowE-String/2:5.mp3']
});
var fifthStringThirdFret = new Howl({
  src: ['~/Audio/lowE-String/3:5.mp3']
});
var fifthStringFourthFret = new Howl({
  src: ['~/Audio/lowE-String/4:5.mp3']
});
var fifthStringFifthFret = new Howl({
  src: ['~/Audio/lowE-String/5:5.mp3']
});
var fifthStringSixthFret = new Howl({
  src: ['~/Audio/lowE-String/6:5.mp3']
});
var fifthStringSeventhFret = new Howl({
  src: ['~/Audio/lowE-String/7:5.mp3']
});
var fifthStringEighthFret = new Howl({
  src: ['~/Audio/lowE-String/8:5.mp3']
});
var fifthStringNinthFret = new Howl({
  src: ['~/Audio/lowE-String/9:5.mp3']
});
var fifthStringTenthFret = new Howl({
  src: ['~/Audio/lowE-String/10:5.mp3']
});
var fifthStringEleventhFret = new Howl({
  src: ['~/Audio/lowE-String/11:5.mp3']
});
var fifthStringTwelfthFret = new Howl({
  src: ['~/Audio/lowE-String/12:5.mp3']
});
var fifthStringThirtheethFret = new Howl({
  src: ['~/Audio/lowE-String/13:5.mp3']
});
var fifthStringFourteenthFret = new Howl({
  src: ['~/Audio/lowE-String/14:5.mp3']
});
var fifthStringFifteenthFret = new Howl({
  src: ['~/Audio/lowE-String/15:5.mp3']
});
var fifthStringSixteenthFret = new Howl({
  src: ['~/Audio/lowE-String/16:5.mp3']
});
var fifthStringSeventeenthFret = new Howl({
  src: ['~/Audio/lowE-String/17:5.mp3']
});
var fifthStringEighteenthFret = new Howl({
  src: ['~/Audio/lowE-String/18:5.mp3']
});
var fifthStringNineteenthFret = new Howl({
  src: ['~/Audio/lowE-String/19:5.mp3']
});
var fifthStringTwentyithFret = new Howl({
  src: ['~/Audio/lowE-String/20:5.mp3']
});




var fourthStringNoFret = new Howl({
  src: ['~/Audio/lowE-String/0:4.mp3']
});
var fourthStringFirstFret = new Howl({
  src: ['~/Audio/lowE-String/1:4.mp3']
});
var fourthStringSecondFret = new Howl({
  src: ['~/Audio/lowE-String/2:4.mp3']
});
var fourthStringThirdFret = new Howl({
  src: ['~/Audio/lowE-String/3:4.mp3']
});
var fourthStringFourthFret = new Howl({
  src: ['~/Audio/lowE-String/4:4.mp3']
});
var fourthStringFifthFret = new Howl({
  src: ['~/Audio/lowE-String/5:4.mp3']
});
var fourthStringSixthFret = new Howl({
  src: ['~/Audio/lowE-String/6:4.mp3']
});
var fourthStringSeventhFret = new Howl({
  src: ['~/Audio/lowE-String/7:4.mp3']
});
var fourthStringEighthFret = new Howl({
  src: ['~/Audio/lowE-String/8:4.mp3']
});
var fourthStringNinthFret = new Howl({
  src: ['~/Audio/lowE-String/9:4.mp3']
});
var fourthStringTenthFret = new Howl({
  src: ['~/Audio/lowE-String/10:4.mp3']
});
var fourthStringEleventhFret = new Howl({
  src: ['~/Audio/lowE-String/11:4.mp3']
});
var fourthStringTwelfthFret = new Howl({
  src: ['~/Audio/lowE-String/12:4.mp3']
});
var fourthStringThirtheethFret = new Howl({
  src: ['~/Audio/lowE-String/13:4.mp3']
});
var fourthStringFourteenthFret = new Howl({
  src: ['~/Audio/lowE-String/14:4.mp3']
});
var fourthStringFifteenthFret = new Howl({
  src: ['~/Audio/lowE-String/15:4.mp3']
});
var fourthStringSixteenthFret = new Howl({
  src: ['~/Audio/lowE-String/16:4.mp3']
});
var fourthStringSeventeenthFret = new Howl({
  src: ['~/Audio/lowE-String/17:4.mp3']
});
var fourthStringEighteenthFret = new Howl({
  src: ['~/Audio/lowE-String/18:4.mp3']
});
var fourthStringNineteenthFret = new Howl({
  src: ['~/Audio/lowE-String/19:4.mp3']
});
var fourthStringTwentyithFret = new Howl({
  src: ['~/Audio/lowE-String/20:4.mp3']
});





var thirdStringNoFret = new Howl({
  src: ['~/Audio/lowE-String/0:3.mp3']
});
var thirdStringFirstFret = new Howl({
  src: ['~/Audio/lowE-String/1:3.mp3']
});
var thirdStringSecondFret = new Howl({
  src: ['~/Audio/lowE-String/2:3.mp3']
});
var thirdStringThirdFret = new Howl({
  src: ['~/Audio/lowE-String/3:3.mp3']
});
var thirdStringFourthFret = new Howl({
  src: ['~/Audio/lowE-String/4:3.mp3']
});
var thirdStringFifthFret = new Howl({
  src: ['~/Audio/lowE-String/5:3.mp3']
});
var thirdStringSixthFret = new Howl({
  src: ['~/Audio/lowE-String/6:3.mp3']
});
var thirdStringSeventhFret = new Howl({
  src: ['~/Audio/lowE-String/7:3.mp3']
});
var thirdStringEighthFret = new Howl({
  src: ['~/Audio/lowE-String/8:3.mp3']
});
var thirdStringNinthFret = new Howl({
  src: ['~/Audio/lowE-String/9:3.mp3']
});
var thirdStringTenthFret = new Howl({
  src: ['~/Audio/lowE-String/10:3.mp3']
});
var thirdStringEleventhFret = new Howl({
  src: ['~/Audio/lowE-String/11:3.mp3']
});
var thirdStringTwelfthFret = new Howl({
  src: ['~/Audio/lowE-String/12:3.mp3']
});
var thirdStringThirtheethFret = new Howl({
  src: ['~/Audio/lowE-String/13:3.mp3']
});
var thirdStringFourteenthFret = new Howl({
  src: ['~/Audio/lowE-String/14:3.mp3']
});
var thirdStringFifteenthFret = new Howl({
  src: ['~/Audio/lowE-String/15:3.mp3']
});
var thirdStringSixteenthFret = new Howl({
  src: ['~/Audio/lowE-String/16:3.mp3']
});
var thirdStringSeventeenthFret = new Howl({
  src: ['~/Audio/lowE-String/17:3.mp3']
});
var thirdStringEighteenthFret = new Howl({
  src: ['~/Audio/lowE-String/18:3.mp3']
});
var thirdStringNineteenthFret = new Howl({
  src: ['~/Audio/lowE-String/19:3.mp3']
});
var thirdStringTwentyithFret = new Howl({
  src: ['~/Audio/lowE-String/20:3.mp3']
});



var secondStringNoFret = new Howl({
  src: ['~/Audio/lowE-String/0:2.mp3']
});
var secondStringFirstFret = new Howl({
  src: ['~/Audio/lowE-String/1:2.mp3']
});
var secondStringSecondFret = new Howl({
  src: ['~/Audio/lowE-String/2:2.mp3']
});
var secondStringThirdFret = new Howl({
  src: ['~/Audio/lowE-String/3:2.mp3']
});
var secondStringFourthFret = new Howl({
  src: ['~/Audio/lowE-String/4:2.mp3']
});
var secondStringFifthFret = new Howl({
  src: ['~/Audio/lowE-String/5:2.mp3']
});
var secondStringSixthFret = new Howl({
  src: ['~/Audio/lowE-String/6:2.mp3']
});
var secondStringSeventhFret = new Howl({
  src: ['~/Audio/lowE-String/7:2.mp3']
});
var secondStringEighthFret = new Howl({
  src: ['~/Audio/lowE-String/8:2.mp3']
});
var secondStringNinthFret = new Howl({
  src: ['~/Audio/lowE-String/9:2.mp3']
});
var secondStringTenthFret = new Howl({
  src: ['~/Audio/lowE-String/10:2.mp3']
});
var secondStringEleventhFret = new Howl({
  src: ['~/Audio/lowE-String/11:2.mp3']
});
var secondStringTwelfthFret = new Howl({
  src: ['~/Audio/lowE-String/12:2.mp3']
});
var secondStringThirtheethFret = new Howl({
  src: ['~/Audio/lowE-String/13:2.mp3']
});
var secondStringFourteenthFret = new Howl({
  src: ['~/Audio/lowE-String/14:2.mp3']
});
var secondStringFifteenthFret = new Howl({
  src: ['~/Audio/lowE-String/15:2.mp3']
});
var secondStringSixteenthFret = new Howl({
  src: ['~/Audio/lowE-String/16:2.mp3']
});
var secondStringSeventeenthFret = new Howl({
  src: ['~/Audio/lowE-String/17:2.mp3']
});
var secondStringEighteenthFret = new Howl({
  src: ['~/Audio/lowE-String/18:2.mp3']
});
var secondStringNineteenthFret = new Howl({
  src: ['~/Audio/lowE-String/19:2.mp3']
});
var secondStringTwentyithFret = new Howl({
  src: ['~/Audio/lowE-String/20:2.mp3']
});






var firstStringNoFret = new Howl({
  src: ['~/Audio/lowE-String/0:1.mp3']
});
var firstStringFirstFret = new Howl({
  src: ['~/Audio/lowE-String/1:1.mp3']
});
var firstStringSecondFret = new Howl({
  src: ['~/Audio/lowE-String/2:1.mp3']
});
var firstStringThirdFret = new Howl({
  src: ['~/Audio/lowE-String/3:1.mp3']
});
var firstStringFourthFret = new Howl({
  src: ['~/Audio/lowE-String/4:1.mp3']
});
var firstStringFifthFret = new Howl({
  src: ['~/Audio/lowE-String/5:1.mp3']
});
var firstStringSixthFret = new Howl({
  src: ['~/Audio/lowE-String/6:1.mp3']
});
var firstStringSeventhFret = new Howl({
  src: ['~/Audio/lowE-String/7:1.mp3']
});
var firstStringEighthFret = new Howl({
  src: ['~/Audio/lowE-String/8:1.mp3']
});
var firstStringNinthFret = new Howl({
  src: ['~/Audio/lowE-String/9:1.mp3']
});
var firstStringTenthFret = new Howl({
  src: ['~/Audio/lowE-String/10:1.mp3']
});
var firstStringEleventhFret = new Howl({
  src: ['~/Audio/lowE-String/11:1.mp3']
});
var firstStringTwelfthFret = new Howl({
  src: ['~/Audio/lowE-String/12:1.mp3']
});
var firstStringThirtheethFret = new Howl({
  src: ['~/Audio/lowE-String/13:1.mp3']
});
var firstStringFourteenthFret = new Howl({
  src: ['~/Audio/lowE-String/14:1.mp3']
});
var firstStringFifteenthFret = new Howl({
  src: ['~/Audio/lowE-String/15:1.mp3']
});
var firstStringSixteenthFret = new Howl({
  src: ['~/Audio/lowE-String/16:1.mp3']
});
var firstStringSeventeenthFret = new Howl({
  src: ['~/Audio/lowE-String/17:1.mp3']
});
var firstStringEighteenthFret = new Howl({
  src: ['~/Audio/lowE-String/18:1.mp3']
});
var firstStringNineteenthFret = new Howl({
  src: ['~/Audio/lowE-String/19:1.mp3']
});
var firstStringTwentyithFret = new Howl({
  src: ['~/Audio/lowE-String/20:1.mp3']
});

//plays sound
function PlayMusic() {
  songArr.forEach (function(element) {
    if (element == "0/6") {
      sixthStringNoFret.play();
    } else if (element == "1/6") {
      sixthStringFirstFret.play();
    } else if (element == "2/6") {
      sixthStringSecondFret.play();
    } else if (element == "3/6") {
      sixthStringThirdFret.play();
    } else if (element == "4/6") {
      sixthStringFourthFret.play();
    } else if (element == "5/6") {
      sixthStringFifthFret.play();
    } else if (element == "6/6") {
      sixthStringSixthFret.play();
    } else if (element == "7/6") {
      sixthStringSeventhFret.play();
    } else if (element == "8/6") {
      sixthStringEighthFret.play();
    } else if (element == "9/6") {
      sixthStringNinthFret.play();
    } else if (element == "10/6") {
      sixthStringTenthFret.play();
    } else if (element == "11/6") {
      sixthStringEleventhFret.play();
    } else if (element == "12/6") {
      sixthStringTwelfthFret.play();
    } else if (element == "13/6") {
      sixthStringThirtheethFret.play();
    } else if (element == "14/6") {
      sixthStringFourteenthFret.play();
    } else if (element == "15/6") {
      sixthStringFifteenthFret.play();
    } else if (element == "16/6") {
      sixthStringSixteenthFret.play();
    } else if (element == "17/6") {
      sixthStringSeventeenthFret.play();
    } else if (element == "18/6") {
      sixthStringEighteenthFret.play();
    } else if (element == "19/6") {
      sixthStringNineteenthFret.play();
    } else if (element == "20/6") {
      sixthStringTwentyithFret.play();

    } else if (element == "0/5") {
      fifthStringNoFret.play();
    } else if (element == "1/5") {
      fifthStringFirstFret.play();
    } else if (element == "2/5") {
      fifthStringSecondFret.play();
    } else if (element == "3/5") {
      fifthStringThirdFret.play();
    } else if (element == "4/5") {
      fifthStringFourthFret.play();
    } else if (element == "5/5") {
      fifthStringFifthFret.play();
    } else if (element == "6/5") {
      fifthStringSixthFret.play();
    } else if (element == "7/5") {
      fifthStringSeventhFret.play();
    } else if (element == "8/5") {
      fifthStringEighthFret.play();
    } else if (element == "9/5") {
      fifthStringNinthFret.play();
    } else if (element == "10/5") {
      fifthStringTenthFret.play();
    } else if (element == "11/5") {
      fifthStringEleventhFret.play();
    } else if (element == "12/5") {
      fifthStringTwelfthFret.play();
    } else if (element == "13/5") {
      fifthStringThirtheethFret.play();
    } else if (element == "14/5") {
      fifthStringFourteenthFret.play();
    } else if (element == "15/5") {
      fifthStringFifteenthFret.play();
    } else if (element == "16/5") {
      fifthStringSixteenthFret.play();
    } else if (element == "17/5") {
      fifthStringSeventeenthFret.play();
    } else if (element == "18/5") {
      fifthStringEighteenthFret.play();
    } else if (element == "19/5") {
      fifthStringNineteenthFret.play();
    } else if (element == "20/5") {
      fifthStringTwentyithFret.play();

    } else if (element == "0/4") {
      fourthStringNoFret.play();
    } else if (element == "1/4") {
      fourthStringFirstFret.play();
    } else if (element == "2/4") {
      fourthStringSecondFret.play();
    } else if (element == "3/4") {
      fourthStringThirdFret.play();
    } else if (element == "4/4") {
      fourthStringFourthFret.play();
    } else if (element == "5/4") {
      fourthStringFifthFret.play();
    } else if (element == "6/4") {
      fourthStringSixthFret.play();
    } else if (element == "7/4") {
      fourthStringSeventhFret.play();
    } else if (element == "8/4") {
      fourthStringEighthFret.play();
    } else if (element == "9/4") {
      fourthStringNinthFret.play();
    } else if (element == "10/4") {
      fourthStringTenthFret.play();
    } else if (element == "11/4") {
      fourthStringEleventhFret.play();
    } else if (element == "12/4") {
      fourthStringTwelfthFret.play();
    } else if (element == "13/4") {
      fourthStringThirtheethFret.play();
    } else if (element == "14/4") {
      fourthStringFourteenthFret.play();
    } else if (element == "15/4") {
      fourthStringFifteenthFret.play();
    } else if (element == "16/4") {
      fourthStringSixteenthFret.play();
    } else if (element == "17/4") {
      fourthStringSeventeenthFret.play();
    } else if (element == "18/4") {
      fourthStringEighteenthFret.play();
    } else if (element == "19/4") {
      fourthStringNineteenthFret.play();
    } else if (element == "20/4") {
      fourthStringTwentyithFret.play();

    } else if (element == "0/3") {
      thirdStringNoFret.play();
    } else if (element == "1/3") {
      thirdStringFirstFret.play();
    } else if (element == "2/3") {
      thirdStringSecondFret.play();
    } else if (element == "3/3") {
      thirdStringThirdFret.play();
    } else if (element == "4/3") {
      thirdStringFourthFret.play();
    } else if (element == "5/3") {
      thirdStringFifthFret.play();
    } else if (element == "6/3") {
      thirdStringSixthFret.play();
    } else if (element == "7/3") {
      thirdStringSeventhFret.play();
    } else if (element == "8/3") {
      thirdStringEighthFret.play();
    } else if (element == "9/3") {
      thirdStringNinthFret.play();
    } else if (element == "10/3") {
      thirdStringTenthFret.play();
    } else if (element == "11/3") {
      thirdStringEleventhFret.play();
    } else if (element == "12/3") {
      thirdStringTwelfthFret.play();
    } else if (element == "13/3") {
      thirdStringThirtheethFret.play();
    } else if (element == "14/3") {
      thirdStringFourteenthFret.play();
    } else if (element == "15/3") {
      thirdStringFifteenthFret.play();
    } else if (element == "16/3") {
      thirdStringSixteenthFret.play();
    } else if (element == "17/3") {
      thirdStringSeventeenthFret.play();
    } else if (element == "18/3") {
      thirdStringEighteenthFret.play();
    } else if (element == "19/3") {
      thirdStringNineteenthFret.play();
    } else if (element == "20/3") {
      thirdStringTwentyithFret.play();

    } else if (element == "0/2") {
      secondStringNoFret.play();
    } else if (element == "1/2") {
      secondStringFirstFret.play();
    } else if (element == "2/2") {
      secondStringSecondFret.play();
    } else if (element == "3/2") {
      secondStringThirdFret.play();
    } else if (element == "4/2") {
      secondStringFourthFret.play();
    } else if (element == "5/2") {
      secondStringFifthFret.play();
    } else if (element == "6/2") {
      secondStringSixthFret.play();
    } else if (element == "7/2") {
      secondStringSeventhFret.play();
    } else if (element == "8/2") {
      secondStringEighthFret.play();
    } else if (element == "9/2") {
      secondStringNinthFret.play();
    } else if (element == "10/2") {
      secondStringTenthFret.play();
    } else if (element == "11/2") {
      secondStringEleventhFret.play();
    } else if (element == "12/2") {
      secondStringTwelfthFret.play();
    } else if (element == "13/2") {
      secondStringThirtheethFret.play();
    } else if (element == "14/2") {
      secondStringFourteenthFret.play();
    } else if (element == "15/2") {
      secondStringFifteenthFret.play();
    } else if (element == "16/2") {
      secondStringSixteenthFret.play();
    } else if (element == "17/2") {
      secondStringSeventeenthFret.play();
    } else if (element == "18/2") {
      secondStringEighteenthFret.play();
    } else if (element == "19/2") {
      secondStringNineteenthFret.play();
    } else if (element == "20/2") {
      secondStringTwentyithFret.play();

    } else if (element == "0/1") {
      firstStringNoFret.play();
    } else if (element == "1/1") {
      firstStringFirstFret.play();
    } else if (element == "2/1") {
      firstStringSecondFret.play();
    } else if (element == "3/1") {
      firstStringThirdFret.play();
    } else if (element == "4/1") {
      firstStringFourthFret.play();
    } else if (element == "1/1") {
      firstStringFifthFret.play();
    } else if (element == "6/1") {
      firstStringSixthFret.play();
    } else if (element == "7/1") {
      firstStringSeventhFret.play();
    } else if (element == "8/1") {
      firstStringEighthFret.play();
    } else if (element == "9/1") {
      firstStringNinthFret.play();
    } else if (element == "10/1") {
      firstStringTenthFret.play();
    } else if (element == "11/1") {
      firstStringEleventhFret.play();
    } else if (element == "12/1") {
      firstStringTwelfthFret.play();
    } else if (element == "13/1") {
      firstStringThirtheethFret.play();
    } else if (element == "14/1") {
      firstStringFourteenthFret.play();
    } else if (element == "11/1") {
      firstStringFifteenthFret.play();
    } else if (element == "16/1") {
      firstStringSixteenthFret.play();
    } else if (element == "17/1") {
      firstStringSeventeenthFret.play();
    } else if (element == "18/1") {
      firstStringEighteenthFret.play();
    } else if (element == "19/1") {
      firstStringNineteenthFret.play();
    } else if (element == "20/1") {
      firstStringTwentyithFret.play();
    }
  });
}


$(document).ready(function(){
  // $("#note-form").submit(function(event) {
  // event.preventDefault();
  console.log($(".editor").val());

    $("button#whole-note").click(function(event) {
      currentNoteType = wholeNote;
      ChooseNoteType(currentNoteType);
      noteAmount = 1;
      });
    $("button#half-note").click(function(event) {
      currentNoteType = halfNote;
      ChooseNoteType(currentNoteType);
      noteAmount = (1/2);
      });
    $("button#quarter-note").click(function(event) {
      currentNoteType = quarterNote;
      ChooseNoteType(currentNoteType);
      noteAmount = (1/4);
      });
    $("button#eighth-note").click(function(event) {
      currentNoteType = eighthNote;
      ChooseNoteType(currentNoteType);
      noteAmount = (1/8);
      });
    $("button#sixteenth-note").click(function(event) {
      currentNoteType = sixteenthNote;
      ChooseNoteType(currentNoteType);
      noteAmount = (1/16);
      });
    $("button#thirty-second-note").click(function(event) {
      currentNoteType = thirtySecondNote;
      ChooseNoteType(currentNoteType);
      noteAmount = (1/32);
      });
    $("button#quarter-rest").click(function(event) {
      currentNoteType = quarterRest;
      ChooseNoteType(currentNoteType);
      noteAmount = (1/4);
      });
    $("button#eighth-rest").click(function(event) {
      currentNoteType = eighthRest;
      ChooseNoteType(currentNoteType);
      noteAmount = (1/8);
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

          $("button#play-music").click(function(event) {
              PlayMusic();
        });
});
