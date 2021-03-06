var derivativesTextBox = new TextBox(320,230,350,40,30);
var derivativesCheckButton = new Button(320,270,350,40,"Check",30);
var derivativesNewQuestionButton = new Button(320,310,350,40,"Generate a new question",30);
var derivativesGenerateQuestion = true;
var derivativesQuestion = "";
var derivativesAnswer = "";
var derivativesFeedback="";
var derivativesExplaination="";
var derivatiesShowExplaination = false;

function derivatives(){
  derivativesTextBox.update();
  derivativesCheckButton.update();
  derivativesNewQuestionButton.update();

  if(derivativesGenerateQuestion == true){
    var rand = Math.floor(Math.random() * 100);
    if(rand<50){
      var temp1 = derivativesPowerRule();
      derivativesQuestion=temp1[0];
      derivativesAnswer=temp1[1];
      derivativesExplaination=temp1[2];
    }else{
      var pr = derivativesPowerRule();
      var temp2 = derivativesChainRule(pr[0],pr[1]);
      derivativesQuestion=temp2[0];
      derivativesAnswer=temp2[1];
      derivativesExplaination=temp2[2];
    }
    derivativesGenerateQuestion = false;
  }

  if(derivativesNewQuestionButton.clicked==true){
    derivativesQuestion="";
    derivativesAnswer="";
    derivativesGenerateQuestion = true;
    derivatiesShowExplaination=false;
  }
  if(derivativesCheckButton.clicked==true){
    derivatiesShowExplaination=true;
    if(derivativesTextBox.data==derivativesAnswer){
      derivativesFeedback="Correct!";
    }else{
      derivativesFeedback="Try again"
    }
  }

  text("Find the derivative:",320,120);
  text(" d\n"+"dx",320,160);
  text("---",320,180);
  text("("+derivativesQuestion+") = ?",355,175);
  text("Feedback: " + derivativesFeedback,320,385);
  text("Work/Explaination:",780,180);
  if(derivatiesShowExplaination){
    text(derivativesExplaination,780,220);
  }
}

function derivativesPowerRule(){
  var question = "";
  var answer = "";

  var n = Math.floor(Math.random() * 3+1)

  for(var i = 0;i<n;i++){
    var rand = Math.floor(Math.random() * 8+3)
    question+="x^" + rand;
    answer += ""+rand + "x^" + (rand-1);
    if(i != (n-1)){
      question+="+";
      answer+="+";
    }
  }
  var explaination = "Step 1-Power & Addition Rules:\n"+answer;
  return [question,answer,explaination];
}

function derivativesChainRule(insideQuestion,insideAnswer){
  var question = "";
  var answer = "";
  var explaination = "";
  var rand = Math.floor(Math.random() * 100);
  if(rand<=33){
    question="sin("+insideQuestion+")";
    answer="cos("+insideQuestion+")("+insideAnswer+")"
    explaination = "Step 1-Chain Rule:\ncos("+insideQuestion+")*d/dx("+insideQuestion+")"+
                    "\nStep 2-Power & Addition Rules:\n"+answer;
  }else{
    question="ln("+insideQuestion+")";
    answer="("+insideAnswer+")"+"/("+insideQuestion+")";
    explaination = "Step 1-Chain Rule:\n1/("+insideQuestion+")*d/dx("+insideQuestion+")"+
                    "\nStep 2-Power & Addition Rules:\n"+answer;
  }
  return [question,answer,explaination];
}
