function pantalla(x){


    document.calc.text.value += x ;

}


function igualResultado(num){
    
   const pan=document.getElementById("pantalla").value
    resultado=num + '=' + eval(num);
console.log(resultado);
localStorage.getItem(pan)
let random= Math.round(Math.random()*220);

if(pan!=""){
    
    if (localStorage.getItem(pan)) {
        console.error("")
    }else{ 
        document.getElementById("mensaje").innerHTML=`<p class="pantallita">su resultado es: ${resultado}</p>`
    }
    
    localStorage.setItem(JSON.stringify(random+"History ="),resultado);
}else{ 
    document.getElementById("mensaje").innerHTML =`<p class="pantallita">no as ingresado numeror</p>`;
    
}



}

 function eliminarHistorial(){
    document.getElementById("mensaje").innerHTML =`<p class="pantallita">Eliminaste el Historial</p>`;
    document.getElementById("datos").innerHTML = "";
    localStorage.clear();
}


  function mostrarHistorial(){
  
    const divDatos=document.getElementById("datos");
   divDatos.innerHTML=``;
    
    

    if (localStorage===0) {
        
        document.getElementById("mensaje").innerHTML =`<p>no tienes historial</p>`
    }else{
 
  
        let tabla = document.createElement("table");
        tabla.setAttribute("borde","9")
       
        let tr = document.createElement("tr"),
        th=document.createElement("th"),
        thTexto=document.createTextNode("history");
        
         th.appendChild(thTexto);
         tr.appendChild(th);  
         tabla.appendChild(tr);


         for (let index = 0; index < localStorage.length; index++) {

            const key = localStorage.key(index);

            let tr = document.createElement("tr");
            let td = document.createElement("td");
            let tdText = document.createTextNode(key);

            td.appendChild(tdText);
            tr.appendChild(td);

            td = document.createElement("td");
            tdText = document.createTextNode(localStorage.getItem(key));

            td.appendChild(tdText);
            tr.appendChild(td);

            tabla.appendChild(tr);

        }
        

        divDatos.appendChild(tabla)
    }

  }



function LimpiarPantalla(x=""){
    

    document.calc.text.value =x;
}


btnz.addEventListener("click",function(){
    pantalla(0)
})

btn1.addEventListener("click",function(){
    
    pantalla(1)
    
})

btn2.addEventListener("click",function(){
    pantalla(2)
})

btn3.addEventListener("click",function(){
    pantalla(3)
})

btn4.addEventListener("click",function(){
    pantalla(4)
})


btn5.addEventListener("click",function(){
    pantalla(5)
})

btn6.addEventListener("click",function(){
    pantalla(6)
})

btn7.addEventListener("click",function(){
    pantalla(7)
})

btn8.addEventListener("click",function(){
    pantalla(8)
})

btn9.addEventListener("click",function(){
    pantalla(9)
})

btndi.addEventListener("click",function(){
    
    pantalla("%");
})

btnX.addEventListener("click",function(){
    
    pantalla("*");
})

btnMe.addEventListener("click",function(){
    
    pantalla("-");
})

btnMax.addEventListener("click",function(){
    
    pantalla("+");
})

btnP.addEventListener("click",function(){
    
    pantalla(".");
})

Delete.addEventListener("click",function(){
    
    LimpiarPantalla();
    
})


btnig.addEventListener("click",function(){
    
    igualResultado(document.calc.text.value);
  
})

eliminar.addEventListener("click",function(){

    eliminarHistorial()
})

mostrar.addEventListener("click",function(){
    mostrarHistorial();
})

