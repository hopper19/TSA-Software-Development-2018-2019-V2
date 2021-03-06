var nLButtons = [new Button(320,380,150,30,"hi",30),new Button(320,430,150,30,"there",30),new Button(320,480,150,30,"a",30)];
var nLAnswerButton = 0;

var nLNewQuestionButton = new Button(320,520,350,40,"Generate a new question",30);
var nLFeedback="";
var nLExplaination="";
var nLCode=-1;
var nLQuestion="";
var nLTempExplaination="";

var nLGenerateQuestion = true;

function newtonsLaws(){
  nLButtons[0].update();
  nLButtons[1].update();
  nLButtons[2].update();
  nLNewQuestionButton.update();

  if(nLGenerateQuestion){
    var rand = Math.floor(Math.random() * 100);
    if(rand<50){
      nLGeneratePulleyAcceleration();
      nLCode=0;
    }else{
      nLGeneratePulleyTension();
      nLCode=1;
    }
    nLGenerateQuestion=false;
  }

  if(nLNewQuestionButton.clicked){
    nLGenerateQuestion=true;
    nLExplaination="";
  }

  if(nLButtons[nLAnswerButton].clicked){
    nLFeedback="Correct!";
    nLExplaination=nLTempExplaination;
  }else if(nLButtons[0].clicked||nLButtons[1].clicked||nLButtons[2].clicked){
    nLFeedback="Try again";
    nLExplaination=nLTempExplaination;
  }

  if(nLCode==0||nLCode==1){
    nLDisplayPulley();
  }else if(nLCode==2){
    nLDisplaySlide();
  }

  line(700,150,700,595);
  textSize(20);
  text("Work/Explaination: "+nLExplaination,710,180);
  textSize(30);
  text("Feedback:" + nLFeedback,320,595);
}

var nLMass1 = 0;
var nLMass2 = 0;

function nLGeneratePulleyAcceleration(){
  nLMass1 = Math.round(((Math.random() * 25)+1)*100)/100;
  nLMass2 = Math.round(((Math.random() * 25)+1)*100)/100;
  var acceleration = (nLMass2*9.8)/(nLMass1+nLMass2);
  acceleration=Math.round(acceleration*100)/100;
  nLQuestion="Mass 1 is " + nLMass1 + "kg and Mass 2 is " + nLMass2 + "kg. They are connected by a string and pulley. \nWhat is the acceleration of the two masses? Ignore friction.";
  nLTempExplaination="\nStep 1- Use F=ma=sum of all forces\nStep 2- Forces on m2 are gravity and tension,so m2a=m2g-T\nStep 3- force on m1 is only tension, so m1a=T\nStep 4- Use substitution to get m2a=m2g-m1a\nStep 5-Solve for a to get: " + acceleration;

  nLAnswerButtonIndex = Math.floor(Math.random() * 3);
  for(var i=0;i<3;i++){
    if(i==nLAnswerButtonIndex){
      nLButtons[i].text=acceleration;
    }else{
      nLButtons[i].text=Math.round(((Math.random() * 25)+1)*100)/100;
    }
  }
}

function nLGeneratePulleyTension(){
  nLMass1 = Math.floor(Math.random() * 10)+1;
  nLMass2 = Math.floor(Math.random() * 10)+1;
  nLQuestion="Mass 1 is " + nLMass1 + "kg and Mass 2 is " + nLMass2 + "kg. They are connected by a string and pulley. \nWhat is the tension of the string? Use 9.8m/s^2 for gravity and ignore friction."
  var tension = 9.8*(nLMass1+nLMass2);
  tension=Math.round(tension*100)/100;

  nLTempExplaination="\nStep 1- Use F=ma=sum of all forces\nStep 2- Forces on m2 are gravity and tension,so m2a=m2g-T\nStep 3- force on m1 is only tension, so m1a=T\nStep 4- Solve for a from Step 3 to get a=T/m1 \nStep 5- Use substitution to get m2(T/m1)=m2g-T\nStep 6- Solve for T to get: " + tension;
  nLAnswerButton = Math.floor(Math.random() * 3);
  for(var i=0;i<3;i++){
    if(i==nLAnswerButton){
      nLButtons[i].text=tension;
    }else{
      nLButtons[i].text=Math.round(((Math.random() * 120)+1)*100)/100;
    }
  }
}

function nLGenerateSlide(){
  //In progress
}

function nLDisplayPulley(){
  fill(0);
  line(385,170,450,170);
  line(370,190,370,270);
  textSize(20);
  text(nLQuestion,320,110);
  textSize(30);
  text("M1",455,180);
  text("M2",345,300);
  rect(385,200,180,150);
  noFill();
  rect(450,150,50,50);
  rect(340,270,50,50);
  ellipse(385,185,30,30);
  fill(0);
}

function nLDisplaySlide(){
  //In progress
}
