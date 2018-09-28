var Calculadora ={};

Calculadora = (function () {



var operandoa;
var operandob;
var operacion;




	
var cero = document.getElementById("0");   
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var on = document.getElementById("on");
var sign = document.getElementById("sign");
var raiz = document.getElementById("raiz");
var dividido = document.getElementById("dividido");
var por = document.getElementById("por");
var igual = document.getElementById("igual");
var menos = document.getElementById("menos");
var punto = document.getElementById("punto");
var mas = document.getElementById("mas"); 
var display = document.getElementById("display"); 




   

var img = document.getElementsByTagName("img");

for (var i = 0; i < img.length; i++) {
   img[i].onmousedown=function(){
        this.style.transform="Scale(0.95, 0.95)";
    }

     img[i].onmouseup=function(){
       this.style.transform="Scale(1, 1)";
    
    }
}





display.textContent=0;




cero.onclick = function(e){
if(display.textContent==0){
    display.textContent=0;
    }else if (display.textContent.length<8){
    display.textContent=(display.textContent)+"0";
    }
}





uno.onclick = function(e){
if(display.textContent==0){
    display.textContent=1;
    }else if (display.textContent.length<8){
    display.textContent=(display.textContent)+"1";
    }
}





dos.onclick = function(e){
if(display.textContent==0){
    display.textContent=2;
    }else if (display.textContent.length<8){
    display.textContent=(display.textContent)+"2";
    }
}





tres.onclick = function(e){
if(display.textContent==0){
    display.textContent=3;
    }else if (display.textContent.length<8){
    display.textContent=(display.textContent)+"3";
    }
}






cuatro.onclick = function(e){
if(display.textContent==0){
    display.textContent=4;
    }else if (display.textContent.length<8){
    display.textContent=(display.textContent)+"4";
    }
}

    




cinco.onclick = function(e){
if(display.textContent==0){
    display.textContent=5;
    }else if (display.textContent.length<8){
    display.textContent=(display.textContent)+"5";
    }
}






seis.onclick = function(e){
if(display.textContent==0){
    display.textContent=6;
    }else if (display.textContent.length<8){
    display.textContent=(display.textContent)+"6";
    }
}





siete.onclick = function(e){
if(display.textContent==0){
    display.textContent=7;
    }else if (display.textContent.length<8){
    display.textContent=(display.textContent)+"7";
    }
}





ocho.onclick = function(e){
if(display.textContent==0){
    display.textContent=8;
    }else if (display.textContent.length<8){
    display.textContent=(display.textContent)+"8";
    }
}





nueve.onclick = function(e){
if(display.textContent==0){
     display.textContent = 9.toString().substring(0, 8);
  
}


 

 
punto.onclick = function(e){
var aux = display.textContent;
if(aux==0){
    display.textContent=".";
    }else if(aux>1){
        display.textContent=(display.textContent)+".";
    }
}

       
     
    


sign.onclick = function(e){
var num = display.textContent;
if(num!=0){
    num=parseFloat(num) *(-1);
    display.textContent = num;
    }
}






function resetear(){
    display.textContent = "0";
    operandoa=0;
    operandob=0;
    operacion="";
}





on.onclick = function(e){
   resetear();
}





mas.onclick = function(e){
    operandoa =display.textContent;
    operacion = "+";
    limpiar();
}





menos.onclick = function(e){
    operandoa =display.textContent;
    operacion = "-";
    limpiar();
}




dividido.onclick = function(e){
    operandoa =display.textContent;
    operacion = "/";
    limpiar();
}





por.onclick = function(e){
    operandoa =display.textContent;
    operacion = "*";
    limpiar();
}





function limpiar(){
    display.textContent = "";
}




igual.onclick = function(e){
    operandob = display.textContent;
    resolver();
}




function resolver(){
    var res=0;
    switch(operacion){
        case "+":
        res= parseFloat(operandoa) + parseFloat(operandob);
        break;

        case "-":
        res= parseFloat(operandoa) - parseFloat(operandob);
        break;

        case "*":
        res= parseFloat(operandoa) * parseFloat(operandob);
        break;

        case "/":
        res= parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    display.textContent = res.toString().substring(0, 8);
}


}());