//push(elemento);
//definimos el array
const fruta =["manzana", "pera"];

//llamamos a la funcion fruta

fruta.push("naranja");
document.writeln(fruta);// resultado["manzana","pera","naranja"]

document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<br>");

//pop()
const fruta1 =["manzana" , "pera" , "naranja"];
const ultimafruta =fruta1.pop();
document.writeln(ultimafruta);// resultado naranja
document.writeln("<br>");
document.writeln(fruta1);//resultado [manzana , pera]
document.writeln("<br>");

//unshift(elemento);
const fruta2 =["manzana" , "pera"];
fruta2.unshift("fresa");
document.writeln(fruta2);// resultado fresa
document.writeln("<br>");

//shift
const fruta3 =["fresa","manzana","pera"];
const primerafruta =fruta3.shift("fresa");
document.writeln(primerafruta);//fresa
document.writeln("<br>");
document.writeln(fruta3);//reusltad manzana, pera
document.writeln("<br>");

//concat(arr2......arrn)
const fruta4 =["manzana","pera"];
const fruta5 =["fresa","uva"];
const frutasconcatedanas = fruta4.concat(fruta5);
document.writeln(frutasconcatedanas);
document.writeln("<br>");

//slice(inicio,fin)
const fruta6 = ["manzana","pera","fresa","uva"];
const frutasSlice = fruta6.slice(1,3);
document.writeln(frutasSlice);//resultado ["pera","fresa"]
document.writeln("<br>");

//splice(incio, cantidad,elemento1,elemento2.......elementoN)
const fruta7 = ["manzana","pera","fresa","uva"];
fruta7.splice(1,2,"kiwi","mango");
document.writeln(fruta7);//resultado manzana,kiwi,mango,uva
document.writeln("<br>");

//indexOf(elemento) devuelve la pocicion pedida
const fruta8 =["manzana","kiwu","mango","uva"];
const indiceMango = fruta8.indexOf("mango");
document.writeln(indiceMango); //resultado 2
document.writeln("<br>");

//includes(elemento)
const fruta9 =["manzana","kiwu","mango","uva"];
const tieneMango = fruta9.includes("mango");
document.writeln(tieneMango);//resultado true
document.writeln("<br>");
document.writeln("<br>");
document.writeln("<h1>"+" Siguiente ejercicio");

/* 1 hacer una fucncion que tome como parametro un array y y devuelva su primer elemento */
 const numero = ["uno","dos","tres","cuatro","cinco"];

 function datos(coco){

    return(coco[0]);

 }
 document.writeln( "<h2>" + datos(numero)+"</h2>");

 document.writeln("<br>");
 document.writeln("<h1>"+" Siguiente ejercicio");

 /* 2 hacer una fucncion que tome como parametro un array y devuelva su ultimo elemento*/ 

 const nombre = ["Jose","Pepe","Luis","Manuel","Ana"];
 function datos2(d){
    let loco = d.length;
    return(d[loco-1])
 }
 document.writeln( "<h2>" + datos2(nombre)+"</h2>");

 document.writeln("<br>");
 document.writeln("<h1>"+" Siguiente ejercicio");
 document.writeln("<br>");
 document.writeln("<br>");
 
 /* 3 crea una funcion que tome como parametro una array y con numero, retornar
 un numero nuevo array con todos los elementos y el numero agregado al final del array*/

 const color =["azul","verde","negro"];

 function agregar(x){

    var i = prompt("dame un numero");

    x.push(i);//añadimos un elememto o mas a la array

    return(x);

 }
 //saccamos la array mas el elemento añadido que en teste caso es un numero
 document.writeln( "<h1 style = color:red;>" + agregar(color) +"</h1>");
 document.writeln("<br>");
 document.writeln("<h1 style= color:blue;>"+" Siguiente ejercicio"+"</h1>");
 document.writeln("<br>");
 
 /* 4 crea una funcion que tome como parametro en array de numero, retornado de todos´
  los elementos del array */

const numer0 = [0,1,2,3,4,5,6,7,8,9]

function mostrar(x){

   return(x);
}
 document.writeln("<h1 style = color:red;>" + mostrar(numer0)+ "</h1>");
 document.writeln("<br>");
 document.writeln("<h1 style= color:blue;>"+" Siguiente ejercicio"+"</h1>");
 document.writeln("<br>");

  /* 5 crea una funcion que reciba como parametro un array de string y devuelva todos los elementod del 
  array en una string separado por espacio */
  const text0=["hola","adios","buenas","astaluego"];

  function mostrar0(x){

   return(x);

  }
  document.writeln("<h1 style = color:red;>" + mostrar0(text0.join(" "))+"</h1>");
  document.writeln("<br>");
  document.writeln("<h1 style= color:blue;>"+" Siguiente ejercicio"+"</h1>");
  document.writeln("<br>");

  /* 6 crea una funcion que reciba como parametro una array de numero y de vuelva la suma de todos los
   numeros pares  */
   const numer1 = [0,1,2,3,4,5,6,7,8,9]
   function suma(x){

      var resultado =0;
      //recorremo la array
      for(var j =0; j< numer1.length; j++){

         if(numer1[j]%2==0){//me va verificando si son pares 

            resultado=resultado+numer1[j];//esta es la suma de los numer para
            document.writeln("numero par: " + numer1[j] + "<br>")
            
         }else  {
            document.writeln("numero no par " + numer1[j] + "<br>");
         }

      }

      return (resultado);//de volvenos con resultado

   }
   document.writeln("la suma de los numero es: "+suma(numer1));//imprimmos por consola
   document.writeln("<br>");
   document.writeln("<h1 style= color:blue;>"+" Siguiente ejercicio"+"</h1>");
   document.writeln("<br>");
 

 