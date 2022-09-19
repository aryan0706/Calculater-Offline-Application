var dotChecker = 0;
var expression = "";

function changeFontSize(){
    if(expression.length > 14){
        document.getElementsByClassName("content").style.fontSize = "42px";
    }
    else{
        document.getElementsByClassName("content").style.fontSize = "48px";
    }
}

function scroll() {
    var objDiv = document.getElementsByClassName("content");
    objDiv.scrollLeft = objDiv.scrollwidth;   
}

function numClick(num) {
		expression += num;
    	document.getElementsByClassName("content").innerHTML = expression;
        scroll();
        changeFontSize();
}

function operatorClick(char) {
	var len = expression.length;
    if (expression[len-1]!='+' && expression[len-1]!='-' && expression[len-1]!='*' && expression[len-1]!='/' && expression[len-1]!='%' && expression[len-1]!='.'){
        expression += char;
        document.getElementsByClassName("content").innerHTML = expression;
        scroll();
        changeFontSize();
    }
}

function allClear() {
    expression = "";
    document.getElementsByClassName("content").innerHTML = 0;
    changeFontSize();
}

function toClear() {
    if (expression.length != 1) {
        expression = expression.substring(0, expression.length - 1);
        document.getElementsByClassName("content").innerHTML = expression;
        changeFontSize();   
    }
    else {
        expression = "";
        document.getElementsByClassName("content").innerHTML = 0;
    }
}

var sum;
function equalsClick(){
    sum = eval(expression);
    document.getElementsByClassName("content").innerHTML = sum;
    expression = "";
    expression += sum;
    changeFontSize();
    scroll();
}