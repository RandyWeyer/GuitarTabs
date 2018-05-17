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
var finalNote;

var TabOutput = "";


function ChooseNoteType(currentNoteType){
  noteType = currentNoteType;
  console.log(noteType);
}
function ChooseNoteFret(){
  noteFret = document.getElementById("guitar-fret-selection-0").value;
  console.log(noteFret);
}
function ChooseNoteString(){
  noteString = document.getElementById("guitar-string-selection-0").value;
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

  // songArr.push(finalNote);  moved this down after the if statement in the add note button
  // timeCount -= noteAmount;
  //
  // if (timeCount < 0){
  //
  //   CreateNewMeasure();
  //   measureCount -= 1;
  //   timeCount=timeSignature;
  // }
  // if (measureCount < 0){
  //   CreateNewStaff();
  //   measureCount=2;
  //   timeCount=timeSignature;
  // }
  //
  // console.log(finalNote);
}

function ConstructMultipleNotes() {
  console.log(noteType);
  finalNote = (noteType + "(");
  // var multArray = [];
  for(var i = 0; i<=$("#guitar-notes-selection").val(); i++) {
    noteFreti = $("#guitar-fret-selection-"+i).val();
    noteStri = $("#guitar-string-selection-"+i).val();
    // multArray.push(noteStri + "/" + noteFreti);
    finalNote += noteFreti + "/" + noteStri;
    console.log(finalNote);
    if (i == $("#guitar-notes-selection").val()) {
      finalNote += ") ";
    } else {
      finalNote += ".";
    }
  }

  //JOHNS kinda weird suggestion to work from
  // var noteToStore = noteType + ": " + noteFreti + "/" + noteStri
  // if (i = finalNoteNum) {
  //   noteToStore += ")";
  // } else {
  //   noteToStore += ".";
  // }
  // tempArr.push(noteToStore);

  // tempString = tempArr.toString();
  // splitString = tempString.split("");
  // removePeriod = splitString.pop();
  // addParens = splitString.push(")");
  // backToString = addParens.toString();
  // finalNote = backToString.replace(/,/g,"");
};

function test()
{

  return false;
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
            console.log($("#guitar-fret-selection-1").val());
            console.log(noteType);
            console.log(noteFret);
            console.log();
            if ($("#guitar-notes-selection").val()>0) {
              ConstructMultipleNotes();
            } else {
              ConstructNote();
            }
            console.log(finalNote);
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


            update(songArr);



            $("#tab-output").text(songArr.join());
            console.log(songArr);
            $("#final-tab-output").text("1");

          });

          $("button#add-multiple-notes").click(function() {
            $("button#add-multiple-notes").hide();
            $("#single-notes").append("<div id='many-notes'>" +
                                        "<label>Number of Additional Notes:</label>" +
                                        "<select id='guitar-notes-selection' name='guitar-notes-selection' type='text'>" +
                                           "<option value=1>1</option>" +
                                           "<option value=2>2</option>" +
                                           "<option value=3>3</option>" +
                                           "<option value=4>4</option>" +
                                           "<option value=5>5</option>" +
                                        "</select>" +
                                        "<button type='button' class='btn btn-primary' id='select-number-of-strings'>Go</button>" +
                                      "</div>");
          function multipleNotes(num) {
            for(var x = 0; x<num; x++) {
              $("#single-notes").prepend("<label>#" + (x+1) + ". Fret:</label>" +
                                          "<select onchange='ChooseNoteFret()' id='guitar-fret-selection-" + (x+1) + "' name='guitar-fret-selection-" + (x+1) + "' type='text'>" +
                                            "<option value=0>0</option>" +
                                            "<option value=1>1</option>" +
                                            "<option value=2>2</option>" +
                                            "<option value=3>3</option>" +
                                            "<option value=4>4</option>" +
                                            "<option value=5>5</option>" +
                                            "<option value=6>6</option>" +
                                            "<option value=7>7</option>" +
                                            "<option value=8>8</option>" +
                                            "<option value=9>9</option>" +
                                            "<option value=10>10</option>" +
                                            "<option value=11>11</option>" +
                                            "<option value=12>12</option>" +
                                            "<option value=13>13</option>" +
                                            "<option value=14>14</option>" +
                                            "<option value=15>15</option>" +
                                            "<option value=16>16</option>" +
                                            "<option value=17>17</option>" +
                                            "<option value=18>18</option>" +
                                            "<option value=19>19</option>" +
                                            "<option value=20>20</option>" +
                                            "<option value=21>21</option>" +
                                            "<option value=22>22</option>" +
                                            "<option value=23>23</option>" +
                                            "<option value=24>24</option>" +
                                          "</select>" +
                                        "<label>String:</label>" +
                                          "<select onchange='ChooseNoteString()' id='guitar-string-selection-" + (x+1) + "' name='guitar-string-selection-" + (x+1) + "' type='text'>" +
                                             "<option value=1>1</option>" +
                                             "<option value=2>2</option>" +
                                             "<option value=3>3</option>" +
                                             "<option value=4>4</option>" +
                                             "<option value=5>5</option>" +
                                             "<option value=6>6</option>" +
                                          "</select>" +
                                          "<br>");
            }
          };

          $("button#select-number-of-strings").click(function() {
            $("#many-notes").hide();
            multipleNotes($("#guitar-notes-selection").val());
          });
        });

});
