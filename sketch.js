//Para definir un objeto, primero declaramos un nombre devariable y lo asignamos a corchetes vacíos.
//      var Student = { }; 
//Posteriormente le vamos agregar datos s como nombre, clase, número de lista, materia favorita y calificaciones de cada asignatura.
//  Se almacena en un par de valores clave; clave es el nombre que define el valor
//El valor se asigna a una tecla usando dos puntos (:) a diferencia del símbolo igual.

var Students = {  //nombre del objeto    **** EJEMPLO rect(200,200,100,100);  *****
//Caracteristicas de nuestros estudiantes
  name: "Lauro",
  class: 15,
  roll_no : 14, 
  favorite_subject: "español",   // *** "TEXTO" cadenas de textos
  marks: [35,30,50,40] //Agregar mas cosas , si es el final  solo 
};


var Student = {
  name: "Sammy",
  class: 7,
  roll_no:21,
  favorite_subject: "programación",
  marks : [30,35,40,50]
  
};

//Para acceder a los datos de un objeto, usamos el nombre del object .(punto) y el nombre de la clave cuyo valor desea.
// Si queremos ver el nombre del alumno podemos decir Student.name.

function setup() {
  
  createCanvas(400, 400);
  //cambiar número de lista
  console.log(Student.roll_no);
  Student.roll_no = 45;
  console.log(Student.roll_no);  
  
  //PARA LAURO 
  
  console.log(Students.roll_no);
  Students.roll_no = 45;
  console.log(Students.roll_no); 
  
}


function draw() {
  background(220);
  
}

//ACTIVIDAD: ALUMNO
