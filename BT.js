function change() {
   let money= +document.getElementById("a").value;
   let curr1= +document.getElementById("curr1").value;
   let curr2= +document.getElementById("curr2").value;
   let result= money * curr2 /curr1;
   document.getElementById("result").innerHTML= "Result: "+ result
}