//Algebra Code; use this as an example if you're new:

//Textbox parameters: (x,y,width,height,text size)
//Button parameters: (x,y,width,height,text,text size)
var algebraTextBox = new TextBox(320,150,350,40,30);
var algebraCheckButton = new Button(320,190,350,40,"Check",30);
var algebraNewQuestionButton = new Button(320,230,350,40,"Generate a new question",30);
var algebraGenerateQuestion = true;
var algebraRandomNumberOne = 0;
var algebraRandomNumberTwo = 0;
var algebraAnswer = 0;
var algebraFeedback="";
var algebraExplaination = "";

function algebra(){
  algebraTextBox.update();
  algebraCheckButton.update();
  algebraNewQuestionButton.update();

  /*If a question has not been generated yet,make 2 numbers
  between 0 and 50 and make the answer. Then set generatedQuestion
  to true at the end so it does not generate a new one
  before the current one is answered
  */
  if(algebraGenerateQuestion == true){
    algebraRandomNumberOne = Math.floor(Math.random() * 50);
    algebraRandomNumberTwo = Math.floor(Math.random() * 50);
    algebraAnswer=algebraRandomNumberTwo-algebraRandomNumberOne;
    algebraGenerateQuestion = false;
  }

  /*If the algebraNewQuestionButon is clicked, set algebraGenerateQuestion
  to true, so it generates a new question in the next frame
  */
  if(algebraNewQuestionButton.clicked==true){
    algebraGenerateQuestion = true;
  }

  /*check if the user's answer is right or not when the
  algebraCheckButton is clicked
  */
  if(algebraCheckButton.clicked==true){
    /*The parseInt() function turns algebraTextBox.data, which is a string (or text)
    data type into an int datatype so they can be compared
    */
    if(parseInt(algebraTextBox.data)==algebraAnswer){
      algebraFeedback="Correct!";
    }else{
      algebraFeedback="Try again"
    }

    algebraExplaination="Step 1-Subtract: " + algebraRandomNumberTwo+" - "+algebraRandomNumberOne+" = "+algebraAnswer;
  }

  //Display the output, feedback, and work
  text(algebraRandomNumberOne + " + x = " + algebraRandomNumberTwo,320,120);
  text("Feedback: " + algebraFeedback,320,310);

  text("Work/Explaination:",800,120);
  text(algebraExplaination,800,170);
}
