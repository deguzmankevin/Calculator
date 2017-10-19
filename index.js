var num = "";
var reset = false;
var stored = false;
var expr = "";
function solver(expression){
  return eval(expression);
}
function reply_click(clicked_id){
    
    if(clicked_id.id === "AC"){
      $('p').text("0");
      $('button').css("border", "1px solid black");
      num = "";
      expr = "";
    }
  else if (clicked_id.id === "C"){
      $('p').text("0");
      $('#C').text("AC");
      $('#C').attr("id", "AC");
      
    //check last item of expr and if it is an operator then highlight it
      num = "";
    }
  else if (clicked_id.id === "equals"){
    expr += num;
    var toobig = solver(expr).toString();
    if (toobig.length > 9) {
       $('p').text("NaN");
      expr = "";
      stored = true;
    }
    else {
    var result = solver(expr).toString().substring(0, 9);
    $('p').text(result);
    num = result;
    expr = "";
    stored = true;
    }
    
  }
  else if (clicked_id.id === "add"){ 
    if (expr.slice(-1) === "+") {
      null;
    }
    else {
      expr += num;
     $('button').css("border", "1px solid black");
      $('#add').css("border", "3px solid black");
    expr += "+";
    num = "";
    }
    
    }
  else if (clicked_id.id === "subtract"){ 
    if (expr.slice(-1) === "-") {
      null;
    }
    else {
      expr += num;
     $('button').css("border", "1px solid black");
      $('#subtract').css("border", "3px solid black");
    expr += "-";
    num = "";
    }
    
    }
  else if (clicked_id.id === "multiply"){
    if (expr.slice(-1) === "*") {
      null;
    }
    else {
      expr += num;
     $('button').css("border", "1px solid black");
      $('#multiply').css("border", "3px solid black");
    expr += "*";
    num = "";
    }
    
    }
  else if (clicked_id.id === "divide"){ 
    if (expr.slice(-1) === "/") {
      null;
    }
    else {
      expr += num;
     $('button').css("border", "1px solid black");
      $('#divide').css("border", "3px solid black");
    expr += "/";
    num = "";
    }
    
    }
   else if (clicked_id.id === "decimal"){
      if (num.includes(".")) {
        null;
      }
      else {
         $('p').append(".");
      num += "."
      }
  } 
  else if (clicked_id.id === "percent"){
    expr += num;
    expr += "/100";
    $('button').css("border", "1px solid black");
    var result = solver(expr).toString().substring(0, 9);
    $('p').text(result);
    num = result;
    expr = "";
    stored = true;
  }
  else if (clicked_id.id === "plusmin"){
    expr += num;
    expr += "*-1";
    var result = solver(expr).toString().substring(0, 9);
    $('p').text(result);
    num = result;
    expr = "";   
  }
  else if (stored) {
    num = clicked_id.id;
    $('p').text(num);
      $('#C').text("AC");
      $('#C').attr("id", "AC")
      $('#AC').text("C");
      $('#AC').attr("id", "C");
      $('button').css("border", "1px solid black");
    stored = false;
  }
    else{
      if (num.length === 9) {
        null;
      }
      else {
        num += clicked_id.id;
        $('p').text(num);
        $('#C').text("AC");
        $('#C').attr("id", "AC")
        $('#AC').text("C");
        $('#AC').attr("id", "C");
        $('button').css("border", "1px solid black");
      }
      
    }
    
  }
