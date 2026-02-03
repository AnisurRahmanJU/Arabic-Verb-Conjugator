function showFields() {
  var option3 = document.getElementById("option3");
  var option4 = document.getElementById("option4");
  var inputField3 = document.getElementById("lamkalima");
  var inputField4 = document.getElementById("lam2kalima");

  if (option3.checked) {
      inputField3.style.display = "block";
      inputField4.style.display = "none";
  } else {
      inputField4.style.display = "block";
     
  }
  
}




function addNumbers() {
  // Get the values from the input fields
  var fakalima = document.getElementById("fakalima");
  var number1 = fakalima.options[fakalima.selectedIndex].value;
  var aynkalima = document.getElementById("aynkalima");
  var number2 = aynkalima.options[aynkalima.selectedIndex].value;
  var lamkalima = document.getElementById("lamkalima");
  var number3 = lamkalima.options[lamkalima.selectedIndex].value;
  var lam2kalima = document.getElementById("lam2kalima");
  var number4 = lam2kalima.options[lam2kalima.selectedIndex].value;
  
  var dropdown = document.getElementById("dropdown");
  var bab = dropdown.options[dropdown.selectedIndex].value;

  // try code
  
 

  console.log(number2);

  // bab nasara salim
  if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "au") && (number2!= number3 ))
 
  {
    // Perform the addition
    let past1 = ["ٹَپَڑَ",	"ٹَاپِڑٌ",	"مَٹْپُوڑٌ",	"",	"ٹَپَڑَ",	"ٹَپَڑَا",	"ٹَپَڑُوا",	"ٹَپَڑَتْ",	"ٹَپَڑَتَا",	"ٹَپَڑْنَ",	"ٹَپَڑْتَ",	"ٹَپَڑْتُمَا",	"ٹَپَڑْتُمْ",	"ٹَپَڑْتِ",	"ٹَپَڑْتُمَا",	"ٹَپَڑْتُنَّ",	"ٹَپَڑْتُ",	"ٹَپَڑْنَا",	"ٹُپِڑَ",	"ٹُپِڑَا",	"ٹُپِڑُوا",	"ٹُپِڑَتْ",	"ٹُپِڑَتَا",	"ٹُپِڑْنَ",	"ٹُپِڑْتَ",	"ٹُپِڑْتُمَا",	"ٹُپِڑْتُمْ",	"ٹُپِڑْتِ",	"ٹُپِڑْتُمَا",	"ٹُپِڑْتُنَّ",	"ٹُپِڑْتُ",	"ٹُپِڑْنَا",	"يَٹْپُڑُ",	"يَٹْپُڑَانِ",	"يَٹْپُڑُونَ",	"تَٹْپُڑُ",	"تَٹْپُڑَانِ",	"يَٹْپُڑْنَ",	"تَٹْپُڑُ",	"تَٹْپُڑَانِ",	"تَٹْپُڑُونَ",	"تَٹْپُڑِيْنَ",	"تَٹْپُڑَانِ",	"تَٹْپُڑْنَ",	"أَٹْپُڑُ",	"نَٹْپُڑُ",	"يُٹْپَڑُ",	"يُٹْپَڑَانِ",	"يُٹْپَڑُونَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"يُٹْپَڑْنَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"تُٹْپَڑُونَ",	"تُٹْپَڑِيْنَ",	"تُٹْپَڑَانِ",	"تُٹْپَڑْنَ",	"أُٹْپَڑُ",	"نُٹْپَڑُ",	"اُٹْپُڑْ",	"اُٹْپُڑَا",	"اُٹْپُڑُوا",	"اُٹْپُڑِي",	"اُٹْپُڑَا",	"اُٹْپُڑْنَ",	"[ٹ پ ڑ]",	"مِٹْپَڑٌ، مِٹْپَڑَةٌ، مِٹْپَاڑٌ",	"مَٹْپَڑٌ" ];
    let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
    let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
    let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));
    let newpast02 = newpast01.map(item=>item.replace(/ژ/g, number4));
    
  
  
    document.getElementById("fa-1").innerText =  newpast01[4];
    document.getElementById("fa-2").innerText =  newpast01[5];
    document.getElementById("fa-3").innerText =  newpast01[6];
    document.getElementById("fa-4").innerText =  newpast01[7];
    document.getElementById("fa-5").innerText =  newpast01[8];
    document.getElementById("fa-6").innerText =  newpast01[9];
    document.getElementById("fa-7").innerText =  newpast01[10];
    document.getElementById("fa-8").innerText =  newpast01[11];
    document.getElementById("fa-9").innerText =  newpast01[12];
    document.getElementById("fa-10").innerText =  newpast01[13];
    document.getElementById("fa-11").innerText =  newpast01[14];
    document.getElementById("fa-12").innerText =  newpast01[15];
    document.getElementById("fa-13").innerText =  newpast01[16];
    document.getElementById("fa-14").innerText =  newpast01[17];
    document.getElementById("fa-15").innerText =  newpast01[18];
    document.getElementById("fa-16").innerText =  newpast01[19];
    document.getElementById("fa-17").innerText =  newpast01[20];
    document.getElementById("fa-18").innerText =  newpast01[21];
    document.getElementById("fa-19").innerText =  newpast01[22];
    document.getElementById("fa-20").innerText =  newpast01[23];
    document.getElementById("fa-21").innerText =  newpast01[24];
    document.getElementById("fa-22").innerText =  newpast01[25];
    document.getElementById("fa-23").innerText =  newpast01[26];
    document.getElementById("fa-24").innerText =  newpast01[27];
    document.getElementById("fa-25").innerText =  newpast01[28];
    document.getElementById("fa-26").innerText =  newpast01[29];
    document.getElementById("fa-27").innerText =  newpast01[30];
    document.getElementById("fa-28").innerText =  newpast01[31];
    document.getElementById("fa-29").innerText =  newpast01[32];
    document.getElementById("fa-30").innerText =  newpast01[33];
    document.getElementById("fa-31").innerText =  newpast01[34];
    document.getElementById("fa-32").innerText =  newpast01[35];
    document.getElementById("fa-33").innerText =  newpast01[36];
    document.getElementById("fa-34").innerText =  newpast01[37];
    document.getElementById("fa-35").innerText =  newpast01[38];
    document.getElementById("fa-36").innerText =  newpast01[39];
    document.getElementById("fa-37").innerText =  newpast01[40];
    document.getElementById("fa-38").innerText =  newpast01[41];
    document.getElementById("fa-39").innerText =  newpast01[42];
    document.getElementById("fa-40").innerText =  newpast01[43];
    document.getElementById("fa-41").innerText =  newpast01[44];
    document.getElementById("fa-42").innerText =  newpast01[45];
    document.getElementById("fa-43").innerText =  newpast01[46];
    document.getElementById("fa-44").innerText =  newpast01[47];
    document.getElementById("fa-45").innerText =  newpast01[48];
    document.getElementById("fa-46").innerText =  newpast01[49];
    document.getElementById("fa-47").innerText =  newpast01[50];
    document.getElementById("fa-48").innerText =  newpast01[51];
    document.getElementById("fa-49").innerText =  newpast01[52];
    document.getElementById("fa-50").innerText =  newpast01[53];
    document.getElementById("fa-51").innerText =  newpast01[54];
    document.getElementById("fa-52").innerText =  newpast01[55];
    document.getElementById("fa-53").innerText =  newpast01[56];
    document.getElementById("fa-54").innerText =  newpast01[57];
    document.getElementById("fa-55").innerText =  newpast01[58];
    document.getElementById("fa-56").innerText =  newpast01[59];
    document.getElementById("fa-63").innerText =  newpast01[60];
    document.getElementById("fa-64").innerText =  newpast01[61];
    document.getElementById("fa-65").innerText =  newpast01[62];
    document.getElementById("fa-66").innerText =  newpast01[63];
    document.getElementById("fa-67").innerText =  newpast01[64];
    document.getElementById("fa-68").innerText =  newpast01[65];
   
   
    document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
    document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
    document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
    document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
    document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
    document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
    document.getElementById("main-fial").innerText =  newpast01[0];
    document.getElementById("result").innerText = "";
  } 
 

// bab daraba salim
else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "ai") && (number2!= number3 ))


{
  // Perform the addition
  // Perform the addition
  let past1 = ["ٹَپَڑَ",	"ٹَاپِڑٌ",	"مَٹْپُوڑٌ",	"",	"ٹَپَڑَ",	"ٹَپَڑَا",	"ٹَپَڑُوا",	"ٹَپَڑَتْ",	"ٹَپَڑَتَا",	"ٹَپَڑْنَ",	"ٹَپَڑْتَ",	"ٹَپَڑْتُمَا",	"ٹَپَڑْتُمْ",	"ٹَپَڑْتِ",	"ٹَپَڑْتُمَا",	"ٹَپَڑْتُنَّ",	"ٹَپَڑْتُ",	"ٹَپَڑْنَا",	"ٹُپِڑَ",	"ٹُپِڑَا",	"ٹُپِڑُوا",	"ٹُپِڑَتْ",	"ٹُپِڑَتَا",	"ٹُپِڑْنَ",	"ٹُپِڑْتَ",	"ٹُپِڑْتُمَا",	"ٹُپِڑْتُمْ",	"ٹُپِڑْتِ",	"ٹُپِڑْتُمَا",	"ٹُپِڑْتُنَّ",	"ٹُپِڑْتُ",	"ٹُپِڑْنَا",	"يَٹْپِڑُ",	"يَٹْپِڑَانِ",	"يَٹْپِڑُونَ",	"تَٹْپِڑُ",	"تَٹْپِڑَانِ",	"يَٹْپِڑْنَ",	"تَٹْپِڑُ",	"تَٹْپِڑَانِ",	"تَٹْپِڑُونَ",	"تَٹْپِڑِيْنَ",	"تَٹْپِڑَانِ",	"تَٹْپِڑْنَ",	"أَٹْپِڑُ",	"نَٹْپِڑُ",	"يُٹْپَڑُ",	"يُٹْپَڑَانِ",	"يُٹْپَڑُونَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"يُٹْپَڑْنَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"تُٹْپَڑُونَ",	"تُٹْپَڑِيْنَ",	"تُٹْپَڑَانِ",	"تُٹْپَڑْنَ",	"أُٹْپَڑُ",	"نُٹْپَڑُ",	"اِٹْپِڑْ",	"اِٹْپِڑَا",	"اِٹْپِڑُوا",	"اِٹْپِڑِي",	"اِٹْپِڑَا",	"اِٹْپِڑْنَ",	"[ٹ پ ڑ]",	"مِٹْپَڑٌ، مِٹْپَڑَةٌ، مِٹْپَاڑٌ",	"مَٹْپِڑٌ" ];
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));
 

  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

//bab fatha salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "aa") && (number2!= number3 ))


{
  // Perform the addition
  // Perform the addition
  let past1 = ["ٹَپَڑَ",	"ٹَاپِڑٌ",	"مَٹْپُوڑٌ",	"",	"ٹَپَڑَ",	"ٹَپَڑَا",	"ٹَپَڑُوا",	"ٹَپَڑَتْ",	"ٹَپَڑَتَا",	"ٹَپَڑْنَ",	"ٹَپَڑْتَ",	"ٹَپَڑْتُمَا",	"ٹَپَڑْتُمْ",	"ٹَپَڑْتِ",	"ٹَپَڑْتُمَا",	"ٹَپَڑْتُنَّ",	"ٹَپَڑْتُ",	"ٹَپَڑْنَا",	"ٹُپِڑَ",	"ٹُپِڑَا",	"ٹُپِڑُوا",	"ٹُپِڑَتْ",	"ٹُپِڑَتَا",	"ٹُپِڑْنَ",	"ٹُپِڑْتَ",	"ٹُپِڑْتُمَا",	"ٹُپِڑْتُمْ",	"ٹُپِڑْتِ",	"ٹُپِڑْتُمَا",	"ٹُپِڑْتُنَّ",	"ٹُپِڑْتُ",	"ٹُپِڑْنَا",	"يَٹْپَڑُ",	"يَٹْپَڑَانِ",	"يَٹْپَڑُونَ",	"تَٹْپَڑُ",	"تَٹْپَڑَانِ",	"يَٹْپَڑْنَ",	"تَٹْپَڑُ",	"تَٹْپَڑَانِ",	"تَٹْپَڑُونَ",	"تَٹْپَڑِيْنَ",	"تَٹْپَڑَانِ",	"تَٹْپَڑْنَ",	"أَٹْپَڑُ",	"نَٹْپَڑُ",	"يُٹْپَڑُ",	"يُٹْپَڑَانِ",	"يُٹْپَڑُونَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"يُٹْپَڑْنَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"تُٹْپَڑُونَ",	"تُٹْپَڑِيْنَ",	"تُٹْپَڑَانِ",	"تُٹْپَڑْنَ",	"أُٹْپَڑُ",	"نُٹْپَڑُ",	"اِٹْپَڑْ",	"اِٹْپَڑَا",	"اِٹْپَڑُوا",	"اِٹْپَڑِي",	"اِٹْپَڑَا",	"اِٹْپَڑْنَ",	"[ٹ پ ڑ]",	"مِٹْپَڑٌ، مِٹْپَڑَةٌ، مِٹْپَاڑٌ",	"مَٹْپَڑٌ" ];
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));
 

  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 
// bab samia salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "ia") && (number2!= number3 ))


{
  // Perform the addition
  // Perform the addition
  let past1 = ["ٹَپِڑَ",	"ٹَاپِڑٌ",	"مَٹْپُوڑٌ",	"",	"ٹَپِڑَ",	"ٹَپِڑَا",	"ٹَپِڑُوا",	"ٹَپِڑَتْ",	"ٹَپِڑَتَا",	"ٹَپِڑْنَ",	"ٹَپِڑْتَ",	"ٹَپِڑْتُمَا",	"ٹَپِڑْتُمْ",	"ٹَپِڑْتِ",	"ٹَپِڑْتُمَا",	"ٹَپِڑْتُنَّ",	"ٹَپِڑْتُ",	"ٹَپِڑْنَا",	"ٹُپِڑَ",	"ٹُپِڑَا",	"ٹُپِڑُوا",	"ٹُپِڑَتْ",	"ٹُپِڑَتَا",	"ٹُپِڑْنَ",	"ٹُپِڑْتَ",	"ٹُپِڑْتُمَا",	"ٹُپِڑْتُمْ",	"ٹُپِڑْتِ",	"ٹُپِڑْتُمَا",	"ٹُپِڑْتُنَّ",	"ٹُپِڑْتُ",	"ٹُپِڑْنَا",	"يَٹْپَڑُ",	"يَٹْپَڑَانِ",	"يَٹْپَڑُونَ",	"تَٹْپَڑُ",	"تَٹْپَڑَانِ",	"يَٹْپَڑْنَ",	"تَٹْپَڑُ",	"تَٹْپَڑَانِ",	"تَٹْپَڑُونَ",	"تَٹْپَڑِيْنَ",	"تَٹْپَڑَانِ",	"تَٹْپَڑْنَ",	"أَٹْپَڑُ",	"نَٹْپَڑُ",	"يُٹْپَڑُ",	"يُٹْپَڑَانِ",	"يُٹْپَڑُونَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"يُٹْپَڑْنَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"تُٹْپَڑُونَ",	"تُٹْپَڑِيْنَ",	"تُٹْپَڑَانِ",	"تُٹْپَڑْنَ",	"أُٹْپَڑُ",	"نُٹْپَڑُ",	"اِٹْپَڑْ",	"اِٹْپَڑَا",	"اِٹْپَڑُوا",	"اِٹْپَڑِي",	"اِٹْپَڑَا",	"اِٹْپَڑْنَ",	"[ٹ پ ڑ]",	"مِٹْپَڑٌ، مِٹْپَڑَةٌ، مِٹْپَاڑٌ",	"مَٹْپَڑٌ" ];
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab karuma salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "uu") && (number2!= number3 ))


{
  // Perform the addition
  // Perform the addition
  let past1 = ["ٹَپُڑَ",	"ٹَپِيڑٌ",	"مَٹْپُوڑٌ صِلة",	"",	"ٹَپُڑَ",	"ٹَپُڑَا",	"ٹَپُڑُوا",	"ٹَپُڑَتْ",	"ٹَپُڑَتَا",	"ٹَپُڑْنَ",	"ٹَپُڑْتَ",	"ٹَپُڑْتُمَا",	"ٹَپُڑْتُمْ",	"ٹَپُڑْتِ",	"ٹَپُڑْتُمَا",	"ٹَپُڑْتُنَّ",	"ٹَپُڑْتُ",	"ٹَپُڑْنَا",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"ٹُپِڑَ صِلَة",	"يَٹْپُڑُ",	"يَٹْپُڑَانِ",	"يَٹْپُڑُونَ",	"تَٹْپُڑُ",	"تَٹْپُڑَانِ",	"يَٹْپُڑْنَ",	"تَٹْپُڑُ",	"تَٹْپُڑَانِ",	"تَٹْپُڑُونَ",	"تَٹْپُڑِيْنَ",	"تَٹْپُڑَانِ",	"تَٹْپُڑْنَ",	"أَٹْپُڑُ",	"نَٹْپُڑُ",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"يُٹْپَڑُ صِلَة",	"اُٹْپُڑْ",	"اُٹْپُڑَا",	"اُٹْپُڑُوا",	"اُٹْپُڑِي",	"اُٹْپُڑَا",	"اُٹْپُڑْنَ",	"[ٹ پ ڑ]",	"مِٹْپَڑٌ، مِٹْپَڑَةٌ، مِٹْپَاڑٌ",	"مَٹْپَڑٌ" ];
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "صِفة مُشبة: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 


// bab hasiba salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "ii") && (number2!= number3 ))


{
  
  let past1 = ["ٹَپِڑَ",	"ٹَاپِڑٌ",	"مَٹْپُوڑٌ",	"",	"ٹَپِڑَ",	"ٹَپِڑَا",	"ٹَپِڑُوا",	"ٹَپِڑَتْ",	"ٹَپِڑَتَا",	"ٹَپِڑْنَ",	"ٹَپِڑْتَ",	"ٹَپِڑْتُمَا",	"ٹَپِڑْتُمْ",	"ٹَپِڑْتِ",	"ٹَپِڑْتُمَا",	"ٹَپِڑْتُنَّ",	"ٹَپِڑْتُ",	"ٹَپِڑْنَا",	"ٹُپِڑَ",	"ٹُپِڑَا",	"ٹُپِڑُوا",	"ٹُپِڑَتْ",	"ٹُپِڑَتَا",	"ٹُپِڑْنَ",	"ٹُپِڑْتَ",	"ٹُپِڑْتُمَا",	"ٹُپِڑْتُمْ",	"ٹُپِڑْتِ",	"ٹُپِڑْتُمَا",	"ٹُپِڑْتُنَّ",	"ٹُپِڑْتُ",	"ٹُپِڑْنَا",	"يَٹْپِڑُ",	"يَٹْپِڑَانِ",	"يَٹْپِڑُونَ",	"تَٹْپِڑُ",	"تَٹْپِڑَانِ",	"يَٹْپِڑْنَ",	"تَٹْپِڑُ",	"تَٹْپِڑَانِ",	"تَٹْپِڑُونَ",	"تَٹْپِڑِيْنَ",	"تَٹْپِڑَانِ",	"تَٹْپِڑْنَ",	"أَٹْپِڑُ",	"نَٹْپِڑُ",	"يُٹْپَڑُ",	"يُٹْپَڑَانِ",	"يُٹْپَڑُونَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"يُٹْپَڑْنَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"تُٹْپَڑُونَ",	"تُٹْپَڑِيْنَ",	"تُٹْپَڑَانِ",	"تُٹْپَڑْنَ",	"أُٹْپَڑُ",	"نُٹْپَڑُ",	"اِٹْپِڑْ",	"اِٹْپِڑَا",	"اِٹْپِڑُوا",	"اِٹْپِڑِي",	"اِٹْپِڑَا",	"اِٹْپِڑْنَ",	"[ٹ پ ڑ]",	"مِٹْپَڑٌ، مِٹْپَڑَةٌ، مِٹْپَاڑٌ",	"مَٹْپِڑٌ" ];
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab ifal salim 

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xa") && (number2!= number3 ))


{
  
  let past1 = ["أَٹْپَڑَ",	"مُٹْپِڑٌ",	"مُٹْپَڑٌ",	"إِٹْپَاڑٌ",	"أَٹْپَڑَ",	"أَٹْپَڑَا",	"أَٹْپَڑُوا",	"أَٹْپَڑَتْ",	"أَٹْپَڑَتَا",	"أَٹْپَڑْنَ",	"أَٹْپَڑْتَ",	"أَٹْپَڑْتُمَا",	"أَٹْپَڑْتُمْ",	"أَٹْپَڑْتِ",	"أَٹْپَڑْتُمَا",	"أَٹْپَڑْتُنَّ",	"أَٹْپَڑْتُ",	"أَٹْپَڑْنَا",	"أُٹْپِڑَ",	"أُٹْپِڑَا",	"أُٹْپِڑُوا",	"أُٹْپِڑَتْ",	"أُٹْپِڑَتَا",	"أُٹْپِڑْنَ",	"أُٹْپِڑْتَ",	"أُٹْپِڑْتُمَا",	"أُٹْپِڑْتُمْ",	"أُٹْپِڑْتِ",	"أُٹْپِڑْتُمَا",	"أُٹْپِڑْتُنَّ",	"أُٹْپِڑْتُ",	"أُٹْپِڑْنَا",	"يُٹْپِڑُ",	"يُٹْپِڑَانِ",	"يُٹْپِڑُونَ",	"تُٹْپِڑُ",	"تُٹْپِڑَانِ",	"يُٹْپِڑْنَ",	"تُٹْپِڑُ",	"تُٹْپِڑَانِ",	"تُٹْپِڑُونَ",	"تُٹْپِڑِيْنَ",	"تُٹْپِڑَانِ",	"تُٹْپِڑْنَ",	"أُٹْپِڑُ",	"نُٹْپِڑُ",	"يُٹْپَڑُ",	"يُٹْپَڑَانِ",	"يُٹْپَڑُونَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"يُٹْپَڑْنَ",	"تُٹْپَڑُ",	"تُٹْپَڑَانِ",	"تُٹْپَڑُونَ",	"تُٹْپَڑِيْنَ",	"تُٹْپَڑَانِ",	"تُٹْپَڑْنَ",	"أُٹْپَڑُ",	"نُٹْپَڑُ",	"أَٹْپِڑْ",	"أَٹْپِڑَا",	"أَٹْپِڑُوا",	"أَٹْپِڑِي",	"أَٹْپِڑَا",	"أَٹْپِڑْنَ",	"[ٹ پ ڑ]",	"",	"مُٹْپَڑٌ" ];
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab tafill salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xb") && (number2!= number3 ))


{
  
  let past1 = ["ٹَپَّڑَ",	"مُٹَپِّڑٌ",	"مُٹَپَّڑٌ",	"تَٹْپِيڑٌ",	"ٹَپَّڑَ",	"ٹَپَّڑَا",	"ٹَپَّڑُوا",	"ٹَپَّڑَتْ",	"ٹَپَّڑَتَا",	"ٹَپَّڑْنَ",	"ٹَپَّڑْتَ",	"ٹَپَّڑْتُمَا",	"ٹَپَّڑْتُمْ",	"ٹَپَّڑْتِ",	"ٹَپَّڑْتُمَا",	"ٹَپَّڑْتُنَّ",	"ٹَپَّڑْتُ",	"ٹَپَّڑْنَا",	"ٹُپِّڑَ",	"ٹُپِّڑَا",	"ٹُپِّڑُوا",	"ٹُپِّڑَتْ",	"ٹُپِّڑَتَا",	"ٹُپِّڑْنَ",	"ٹُپِّڑْتَ",	"ٹُپِّڑْتُمَا",	"ٹُپِّڑْتُمْ",	"ٹُپِّڑْتِ",	"ٹُپِّڑْتُمَا",	"ٹُپِّڑْتُنَّ",	"ٹُپِّڑْتُ",	"ٹُپِّڑْنَا",	"يُٹَپِّڑُ",	"يُٹَپِّڑَانِ",	"يُٹَپِّڑُونَ",	"تُٹَپِّڑُ",	"تُٹَپِّڑَانِ",	"يُٹَپِّڑْنَ",	"تُٹَپِّڑُ",	"تُٹَپِّڑَانِ",	"تُٹَپِّڑُونَ",	"تُٹَپِّڑِيْنَ",	"تُٹَپِّڑَانِ",	"تُٹَپِّڑْنَ",	"أُٹَپِّڑُ",	"نُٹَپِّڑُ",	"يُٹَپَّڑُ",	"يُٹَپَّڑَانِ",	"يُٹَپَّڑُونَ",	"تُٹَپَّڑُ",	"تُٹَپَّڑَانِ",	"يُٹَپَّڑْنَ",	"تُٹَپَّڑُ",	"تُٹَپَّڑَانِ",	"تُٹَپَّڑُونَ",	"تُٹَپَّڑِيْنَ",	"تُٹَپَّڑَانِ",	"تُٹَپَّڑْنَ",	"أُٹَپَّڑُ",	"نُٹَپَّڑُ",	"ٹَپِّڑْ",	"ٹَپِّڑَا",	"ٹَپِّڑُوا",	"ٹَپِّڑِي",	"ٹَپِّڑَا",	"ٹَپِّڑْنَ",	"[ٹ پ ڑ]",	"",	"مُٹَپَّڑٌ" ];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab مفاعلة shahi salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xc") && (number2!= number3 ))


{
  
  let past1 = ["ٹَاپَڑَ",	"مُٹَاپِڑٌ",	"مُٹَاپَڑٌ",	"مُٹَاپَڑَةٌ، ٹِپَاڑٌ",	"ٹَاپَڑَ",	"ٹَاپَڑَا",	"ٹَاپَڑُوا",	"ٹَاپَڑَتْ",	"ٹَاپَڑَتَا",	"ٹَاپَڑْنَ",	"ٹَاپَڑْتَ",	"ٹَاپَڑْتُمَا",	"ٹَاپَڑْتُمْ",	"ٹَاپَڑْتِ",	"ٹَاپَڑْتُمَا",	"ٹَاپَڑْتُنَّ",	"ٹَاپَڑْتُ",	"ٹَاپَڑْنَا",	"ٹُوپِڑَ",	"ٹُوپِڑَا",	"ٹُوپِڑُوا",	"ٹُوپِڑَتْ",	"ٹُوپِڑَتَا",	"ٹُوپِڑْنَ",	"ٹُوپِڑْتَ",	"ٹُوپِڑْتُمَا",	"ٹُوپِڑْتُمْ",	"ٹُوپِڑْتِ",	"ٹُوپِڑْتُمَا",	"ٹُوپِڑْتُنَّ",	"ٹُوپِڑْتُ",	"ٹُوپِڑْنَا",	"يُٹَاپِڑُ",	"يُٹَاپِڑَانِ",	"يُٹَاپِڑُونَ",	"تُٹَاپِڑُ",	"تُٹَاپِڑَانِ",	"يُٹَاپِڑْنَ",	"تُٹَاپِڑُ",	"تُٹَاپِڑَانِ",	"تُٹَاپِڑُونَ",	"تُٹَاپِڑِيْنَ",	"تُٹَاپِڑَانِ",	"تُٹَاپِڑْنَ",	"أُٹَاپِڑُ",	"نُٹَاپِڑُ",	"يُٹَاپَڑُ",	"يُٹَاپَڑَانِ",	"يُٹَاپَڑُونَ",	"تُٹَاپَڑُ",	"تُٹَاپَڑَانِ",	"يُٹَاپَڑْنَ",	"تُٹَاپَڑُ",	"تُٹَاپَڑَانِ",	"تُٹَاپَڑُونَ",	"تُٹَاپَڑِيْنَ",	"تُٹَاپَڑَانِ",	"تُٹَاپَڑْنَ",	"أُٹَاپَڑُ",	"نُٹَاپَڑُ",	"ٹَاپِڑْ",	"ٹَاپِڑَا",	"ٹَاپِڑُوا",	"ٹَاپِڑِي",	"ٹَاپِڑَا",	"ٹَاپِڑْنَ",	"[ٹ پ ڑ]",	"",	"مُٹَاپَڑٌ" ];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab تَفَعَّلَ shahi salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xd") && (number2!= number3 ))


{
  
  let past1 = ["تَٹَپَّڑَ",	"مُتَٹَپِّڑٌ",	"مُتَٹَپَّڑٌ",	"تَٹَپُّڑٌ",	"تَٹَپَّڑَ",	"تَٹَپَّڑَا",	"تَٹَپَّڑُوا",	"تَٹَپَّڑَتْ",	"تَٹَپَّڑَتَا",	"تَٹَپَّڑْنَ",	"تَٹَپَّڑْتَ",	"تَٹَپَّڑْتُمَا",	"تَٹَپَّڑْتُمْ",	"تَٹَپَّڑْتِ",	"تَٹَپَّڑْتُمَا",	"تَٹَپَّڑْتُنَّ",	"تَٹَپَّڑْتُ",	"تَٹَپَّڑْنَا",	"تُٹُپِّڑَ",	"تُٹُپِّڑَا",	"تُٹُپِّڑُوا",	"تُٹُپِّڑَتْ",	"تُٹُپِّڑَتَا",	"تُٹُپِّڑْنَ",	"تُٹُپِّڑْتَ",	"تُٹُپِّڑْتُمَا",	"تُٹُپِّڑْتُمْ",	"تُٹُپِّڑْتِ",	"تُٹُپِّڑْتُمَا",	"تُٹُپِّڑْتُنَّ",	"تُٹُپِّڑْتُ",	"تُٹُپِّڑْنَا",	"يَتَٹَپَّڑُ",	"يَتَٹَپَّڑَانِ",	"يَتَٹَپَّڑُونَ",	"تَتَٹَپَّڑُ",	"تَتَٹَپَّڑَانِ",	"يَتَٹَپَّڑْنَ",	"تَتَٹَپَّڑُ",	"تَتَٹَپَّڑَانِ",	"تَتَٹَپَّڑُونَ",	"تَتَٹَپَّڑِيْنَ",	"تَتَٹَپَّڑَانِ",	"تَتَٹَپَّڑْنَ",	"أَتَٹَپَّڑُ",	"نَتَٹَپَّڑُ",	"يُتَٹَپَّڑُ",	"يُتَٹَپَّڑَانِ",	"يُتَٹَپَّڑُونَ",	"تُتَٹَپَّڑُ",	"تُتَٹَپَّڑَانِ",	"يُتَٹَپَّڑْنَ",	"تُتَٹَپَّڑُ",	"تُتَٹَپَّڑَانِ",	"تُتَٹَپَّڑُونَ",	"تُتَٹَپَّڑِيْنَ",	"تُتَٹَپَّڑَانِ",	"تُتَٹَپَّڑْنَ",	"أُتَٹَپَّڑُ",	"نُتَٹَپَّڑُ",	"تَٹَپَّڑْ",	"تَٹَپَّڑَا",	"تَٹَپَّڑُوا",	"تَٹَپَّڑِي",	"تَٹَپَّڑَا",	"تَٹَپَّڑْنَ",	"[ٹ پ ڑ]",	"",	"مُتَٹَپَّڑٌ"	];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab تفاعل shahi salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xe") && (number2!= number3 ))


{
  
  let past1 = ["تَٹَاپَڑَ",	"مُتَٹَاپِڑٌ",	"مُتَٹَاپَڑٌ",	"تَٹَاپُڑٌ",	"تَٹَاپَڑَ",	"تَٹَاپَڑَا",	"تَٹَاپَڑُوا",	"تَٹَاپَڑَتْ",	"تَٹَاپَڑَتَا",	"تَٹَاپَڑْنَ",	"تَٹَاپَڑْتَ",	"تَٹَاپَڑْتُمَا",	"تَٹَاپَڑْتُمْ",	"تَٹَاپَڑْتِ",	"تَٹَاپَڑْتُمَا",	"تَٹَاپَڑْتُنَّ",	"تَٹَاپَڑْتُ",	"تَٹَاپَڑْنَا",	"تُٹُوپِڑَ",	"تُٹُوپِڑَا",	"تُٹُوپِڑُوا",	"تُٹُوپِڑَتْ",	"تُٹُوپِڑَتَا",	"تُٹُوپِڑْنَ",	"تُٹُوپِڑْتَ",	"تُٹُوپِڑْتُمَا",	"تُٹُوپِڑْتُمْ",	"تُٹُوپِڑْتِ",	"تُٹُوپِڑْتُمَا",	"تُٹُوپِڑْتُنَّ",	"تُٹُوپِڑْتُ",	"تُٹُوپِڑْنَا",	"يَتَٹَاپَڑُ",	"يَتَٹَاپَڑَانِ",	"يَتَٹَاپَڑُونَ",	"تَتَٹَاپَڑُ",	"تَتَٹَاپَڑَانِ",	"يَتَٹَاپَڑْنَ",	"تَتَٹَاپَڑُ",	"تَتَٹَاپَڑَانِ",	"تَتَٹَاپَڑُونَ",	"تَتَٹَاپَڑِيْنَ",	"تَتَٹَاپَڑَانِ",	"تَتَٹَاپَڑْنَ",	"أَتَٹَاپَڑُ",	"نَتَٹَاپَڑُ",	"يُتَٹَاپَڑُ",	"يُتَٹَاپَڑَانِ",	"يُتَٹَاپَڑُونَ",	"تُتَٹَاپَڑُ",	"تُتَٹَاپَڑَانِ",	"يُتَٹَاپَڑْنَ",	"تُتَٹَاپَڑُ",	"تُتَٹَاپَڑَانِ",	"تُتَٹَاپَڑُونَ",	"تُتَٹَاپَڑِيْنَ",	"تُتَٹَاپَڑَانِ",	"تُتَٹَاپَڑْنَ",	"أُتَٹَاپَڑُ",	"نُتَٹَاپَڑُ",	"تَٹَاپَڑْ",	"تَٹَاپَڑَا",	"تَٹَاپَڑُوا",	"تَٹَاپَڑِي",	"تَٹَاپَڑَا",	"تَٹَاپَڑْنَ",	"[ٹ پ ڑ]",	"",	"مُتَٹَاپَڑٌ"	];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab افتعل shahi salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xf") && (number2!= number3 ))


{
  
  let past1 = ["اِٹْتَپَڑَ",	"مُٹْتَپِڑٌ",	"مُٹْتَپَڑٌ",	"اِٹْتِپَاڑٌ",	"اِٹْتَپَڑَ",	"اِٹْتَپَڑَا",	"اِٹْتَپَڑُوا",	"اِٹْتَپَڑَتْ",	"اِٹْتَپَڑَتَا",	"اِٹْتَپَڑْنَ",	"اِٹْتَپَڑْتَ",	"اِٹْتَپَڑْتُمَا",	"اِٹْتَپَڑْتُمْ",	"اِٹْتَپَڑْتِ",	"اِٹْتَپَڑْتُمَا",	"اِٹْتَپَڑْتُنَّ",	"اِٹْتَپَڑْتُ",	"اِٹْتَپَڑْنَا",	"اُٹْتُپِڑَ",	"اُٹْتُپِڑَا",	"اُٹْتُپِڑُوا",	"اُٹْتُپِڑَتْ",	"اُٹْتُپِڑَتَا",	"اُٹْتُپِڑْنَ",	"اُٹْتُپِڑْتَ",	"اُٹْتُپِڑْتُمَا",	"اُٹْتُپِڑْتُمْ",	"اُٹْتُپِڑْتِ",	"اُٹْتُپِڑْتُمَا",	"اُٹْتُپِڑْتُنَّ",	"اُٹْتُپِڑْتُ",	"اُٹْتُپِڑْنَا",	"يَٹْتَپِڑُ",	"يَٹْتَپِڑَانِ",	"يَٹْتَپِڑُونَ",	"تَٹْتَپِڑُ",	"تَٹْتَپِڑَانِ",	"يَٹْتَپِڑْنَ",	"تَٹْتَپِڑُ",	"تَٹْتَپِڑَانِ",	"تَٹْتَپِڑُونَ",	"تَٹْتَپِڑِيْنَ",	"تَٹْتَپِڑَانِ",	"تَٹْتَپِڑْنَ",	"أَٹْتَپِڑُ",	"نَٹْتَپِڑُ",	"يُٹْتَپَڑُ",	"يُٹْتَپَڑَانِ",	"يُٹْتَپَڑُونَ",	"تُٹْتَپَڑُ",	"تُٹْتَپَڑَانِ",	"يُٹْتَپَڑْنَ",	"تُٹْتَپَڑُ",	"تُٹْتَپَڑَانِ",	"تُٹْتَپَڑُونَ",	"تُٹْتَپَڑِيْنَ",	"تُٹْتَپَڑَانِ",	"تُٹْتَپَڑْنَ",	"أُٹْتَپَڑُ",	"نُٹْتَپَڑُ",	"اِٹْتَپِڑْ",	"اِٹْتَپِڑَا",	"اِٹْتَپِڑُوا",	"اِٹْتَپِڑِي",	"اِٹْتَپِڑَا",	"اِٹْتَپِڑْنَ",	"[ٹ پ ڑ]",	"",	"مُٹْتَپَڑٌ"	];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab انفعال shahi salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xg") && (number2!= number3 ))


{
  
  let past1 = ["اِنْٹَپَڑَ",	"مُنْٹَپِڑٌ",	"مُنْٹَپَڑٌ صِلَة",	"اِنْٹِپَاڑٌ",	"اِنْٹَپَڑَ",	"اِنْٹَپَڑَا",	"اِنْٹَپَڑُوا",	"اِنْٹَپَڑَتْ",	"اِنْٹَپَڑَتَا",	"اِنْٹَپَڑْنَ",	"اِنْٹَپَڑْتَ",	"اِنْٹَپَڑْتُمَا",	"اِنْٹَپَڑْتُمْ",	"اِنْٹَپَڑْتِ",	"اِنْٹَپَڑْتُمَا",	"اِنْٹَپَڑْتُنَّ",	"اِنْٹَپَڑْتُ",	"اِنْٹَپَڑْنَا",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"اُنْٹُپِڑَ صِلَة",	"يَنْٹَپِڑُ",	"يَنْٹَپِڑَانِ",	"يَنْٹَپِڑُونَ",	"تَنْٹَپِڑُ",	"تَنْٹَپِڑَانِ",	"يَنْٹَپِڑْنَ",	"تَنْٹَپِڑُ",	"تَنْٹَپِڑَانِ",	"تَنْٹَپِڑُونَ",	"تَنْٹَپِڑِيْنَ",	"تَنْٹَپِڑَانِ",	"تَنْٹَپِڑْنَ",	"أَنْٹَپِڑُ",	"نَنْٹَپِڑُ",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"يُنْٹَپَڑُ صِلَة",	"اِنْٹَپِڑْ",	"اِنْٹَپِڑَا",	"اِنْٹَپِڑُوا",	"اِنْٹَپِڑِي",	"اِنْٹَپِڑَا",	"اِنْٹَپِڑْنَ",	"[ٹ پ ڑ]",	"",	"مُنْٹَپَڑٌ"];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab افعلال shahi salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xh") && (number2!= number3 ))


{
  
  let past1 = ["اِٹْپَڑَّ",	"مُٹْپَڑٌّ",	"مُٹْپَڑٌّ صِلَة",	"اِٹْپِڑَاڑٌ",	"اِٹْپَڑَّ",	"اِٹْپَڑَّا",	"اِٹْپَڑُّوا",	"اِٹْپَڑَّتْ",	"اِٹْپَڑَّتَا",	"اِٹْپَڑَڑْنَ",	"اِٹْپَڑَڑْتَ",	"اِٹْپَڑَڑْتُمَا",	"اِٹْپَڑَڑْتُمْ",	"اِٹْپَڑَڑْتِ",	"اِٹْپَڑَڑْتُمَا",	"اِٹْپَڑَڑْتُنَّ",	"اِٹْپَڑَڑْتُ",	"اِٹْپَڑَڑْنَا",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"اُٹْپُڑَّ صِلَة",	"يَٹْپَڑُّ",	"يَٹْپَڑَّانِ",	"يَٹْپَڑُّونَ",	"تَٹْپَڑُّ",	"تَٹْپَڑَّانِ",	"يَٹْپَڑِڑْنَ",	"تَٹْپَڑُّ",	"تَٹْپَڑَّانِ",	"تَٹْپَڑُّونَ",	"تَٹْپَڑِّينَ",	"تَٹْپَڑَّانِ",	"تَٹْپَڑِڑْنَ",	"أَٹْپَڑُّ",	"نَٹْپَڑُّ",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"يُٹْپَڑُّ صِلَة",	"اِٹْپَڑِّ، اِٹْپَڑَّ، اِٹْپَڑِڑْ",	"اِٹْپَڑَّا",	"اِٹْپَڑُّوا",	"اِٹْپَڑِّي",	"اِٹْپَڑَّا",	"اِٹْپَڑِڑْنَ",	"[ٹ پ ڑ]",	"",	"مُٹْپَڑٌّ"];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab افعيلال shahi salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xi") && (number2!= number3 ))


{
  
  let past1 = ["اِٹْپَاڑَّ",	"مُٹْپَاڑٌّ",	"مُٹْپَاڑٌّ صِلَة",	"اِٹْپِيڑَاڑٌ",	"اِٹْپَاڑَّ",	"اِٹْپَاڑَّا",	"اِٹْپَاڑُّوا",	"اِٹْپَاڑَّتْ",	"اِٹْپَاڑَّتَا",	"اِٹْپَاڑَڑْنَ",	"اِٹْپَاڑَڑْتَ",	"اِٹْپَاڑَڑْتُمَا",	"اِٹْپَاڑَڑْتُمْ",	"اِٹْپَاڑَڑْتِ",	"اِٹْپَاڑَڑْتُمَا",	"اِٹْپَاڑَڑْتُنَّ",	"اِٹْپَاڑَڑْتُ",	"اِٹْپَاڑَڑْنَا",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"اُٹْپُوڑَّ صِلَة",	"يَٹْپَاڑُّ",	"يَٹْپَاڑَّانِ",	"يَٹْپَاڑُّونَ",	"تَٹْپَاڑُّ",	"تَٹْپَاڑَّانِ",	"يَٹْپَاڑِڑْنَ",	"تَٹْپَاڑُّ",	"تَٹْپَاڑَّانِ",	"تَٹْپَاڑُّونَ",	"تَٹْپَاڑِّينَ",	"تَٹْپَاڑَّانِ",	"تَٹْپَاڑِڑْنَ",	"أَٹْپَاڑُّ",	"نَٹْپَاڑُّ",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"يُٹْپَاڑُّ صِلَة",	"اِٹْپَاڑِّ، اِٹْپَاڑَّ، اِٹْپَاڑِڑْ",	"اِٹْپَاڑَّا",	"اِٹْپَاڑُّوا",	"اِٹْپَاڑِّي",	"اِٹْپَاڑَّا",	"اِٹْپَاڑِڑْنَ",	"[ٹ پ ڑ]",	"",	"مُٹْپَاڑٌّ"];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab استفعل shahi salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xj") && (number2!= number3 ))


{
  
  let past1 = ["اِسْتَٹْپَڑَ",	"مُسْتَٹْپِڑٌ",	"مُسْتَٹْپَڑٌ",	"اِسْتِٹْپَاڑٌ",	"اِسْتَٹْپَڑَ",	"اِسْتَٹْپَڑَا",	"اِسْتَٹْپَڑُوا",	"اِسْتَٹْپَڑَتْ",	"اِسْتَٹْپَڑَتَا",	"اِسْتَٹْپَڑْنَ",	"اِسْتَٹْپَڑْتَ",	"اِسْتَٹْپَڑْتُمَا",	"اِسْتَٹْپَڑْتُمْ",	"اِسْتَٹْپَڑْتِ",	"اِسْتَٹْپَڑْتُمَا",	"اِسْتَٹْپَڑْتُنَّ",	"اِسْتَٹْپَڑْتُ",	"اِسْتَٹْپَڑْنَا",	"اُسْتُٹْپِڑَ",	"اُسْتُٹْپِڑَا",	"اُسْتُٹْپِڑُوا",	"اُسْتُٹْپِڑَتْ",	"اُسْتُٹْپِڑَتَا",	"اُسْتُٹْپِڑْنَ",	"اُسْتُٹْپِڑْتَ",	"اُسْتُٹْپِڑْتُمَا",	"اُسْتُٹْپِڑْتُمْ",	"اُسْتُٹْپِڑْتِ",	"اُسْتُٹْپِڑْتُمَا",	"اُسْتُٹْپِڑْتُنَّ",	"اُسْتُٹْپِڑْتُ",	"اُسْتُٹْپِڑْنَا",	"يَسْتَٹْپِڑُ",	"يَسْتَٹْپِڑَانِ",	"يَسْتَٹْپِڑُونَ",	"تَسْتَٹْپِڑُ",	"تَسْتَٹْپِڑَانِ",	"يَسْتَٹْپِڑْنَ",	"تَسْتَٹْپِڑُ",	"تَسْتَٹْپِڑَانِ",	"تَسْتَٹْپِڑُونَ",	"تَسْتَٹْپِڑِيْنَ",	"تَسْتَٹْپِڑَانِ",	"تَسْتَٹْپِڑْنَ",	"أَسْتَٹْپِڑُ",	"نَسْتَٹْپِڑُ",	"يُسْتَٹْپَڑُ",	"يُسْتَٹْپَڑَانِ",	"يُسْتَٹْپَڑُونَ",	"تُسْتَٹْپَڑُ",	"تُسْتَٹْپَڑَانِ",	"يُسْتَٹْپَڑْنَ",	"تُسْتَٹْپَڑُ",	"تُسْتَٹْپَڑَانِ",	"تُسْتَٹْپَڑُونَ",	"تُسْتَٹْپَڑِيْنَ",	"تُسْتَٹْپَڑَانِ",	"تُسْتَٹْپَڑْنَ",	"أُسْتَٹْپَڑُ",	"نُسْتَٹْپَڑُ",	"اِسْتَٹْپِڑْ",	"اِسْتَٹْپِڑَا",	"اِسْتَٹْپِڑُوا",	"اِسْتَٹْپِڑِي",	"اِسْتَٹْپِڑَا",	"اِسْتَٹْپِڑْنَ",	"[ٹ پ ڑ]",	"",	"مُسْتَٹْپَڑٌ"];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab افعيعال shahi salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xk") && (number2!= number3 ))


{
  
  let past1 = ["اِٹْپَوْپَڑَ",	"مُٹْپَوْپِڑٌ",	"مُٹْپَوْپَڑٌ",	"اِٹْپِيپَاڑٌ",	"اِٹْپَوْپَڑَ",	"اِٹْپَوْپَڑَا",	"اِٹْپَوْپَڑُوا",	"اِٹْپَوْپَڑَتْ",	"اِٹْپَوْپَڑَتَا",	"اِٹْپَوْپَڑْنَ",	"اِٹْپَوْپَڑْتَ",	"اِٹْپَوْپَڑْتُمَا",	"اِٹْپَوْپَڑْتُمْ",	"اِٹْپَوْپَڑْتِ",	"اِٹْپَوْپَڑْتُمَا",	"اِٹْپَوْپَڑْتُنَّ",	"اِٹْپَوْپَڑْتُ",	"اِٹْپَوْپَڑْنَا",	"اُٹْپُوپِڑَ",	"اُٹْپُوپِڑَا",	"اُٹْپُوپِڑُوا",	"اُٹْپُوپِڑَتْ",	"اُٹْپُوپِڑَتَا",	"اُٹْپُوپِڑْنَ",	"اُٹْپُوپِڑْتَ",	"اُٹْپُوپِڑْتُمَا",	"اُٹْپُوپِڑْتُمْ",	"اُٹْپُوپِڑْتِ",	"اُٹْپُوپِڑْتُمَا",	"اُٹْپُوپِڑْتُنَّ",	"اُٹْپُوپِڑْتُ",	"اُٹْپُوپِڑْنَا",	"يَٹْپَوْپِڑُ",	"يَٹْپَوْپِڑَانِ",	"يَٹْپَوْپِڑُونَ",	"تَٹْپَوْپِڑُ",	"تَٹْپَوْپِڑَانِ",	"يَٹْپَوْپِڑْنَ",	"تَٹْپَوْپِڑُ",	"تَٹْپَوْپِڑَانِ",	"تَٹْپَوْپِڑُونَ",	"تَٹْپَوْپِڑِيْنَ",	"تَٹْپَوْپِڑَانِ",	"تَٹْپَوْپِڑْنَ",	"أَٹْپَوْپِڑُ",	"نَٹْپَوْپِڑُ",	"يُٹْپَوْپَڑُ",	"يُٹْپَوْپَڑَانِ",	"يُٹْپَوْپَڑُونَ",	"تُٹْپَوْپَڑُ",	"تُٹْپَوْپَڑَانِ",	"يُٹْپَوْپَڑْنَ",	"تُٹْپَوْپَڑُ",	"تُٹْپَوْپَڑَانِ",	"تُٹْپَوْپَڑُونَ",	"تُٹْپَوْپَڑِيْنَ",	"تُٹْپَوْپَڑَانِ",	"تُٹْپَوْپَڑْنَ",	"أُٹْپَوْپَڑُ",	"نُٹْپَوْپَڑُ",	"اِٹْپَوْپِڑْ",	"اِٹْپَوْپِڑَا",	"اِٹْپَوْپِڑُوا",	"اِٹْپَوْپِڑِي",	"اِٹْپَوْپِڑَا",	"اِٹْپَوْپِڑْنَ",	"[ٹ پ ڑ]",	"",	"مُٹْپَوْپَڑٌ"];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab افعوَّال shahi salim

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (bab== "xl") && (number2!= number3 ))


{
  
  let past1 = ["اِٹْپَوَّڑَ",	"مُٹْپَوِّڑٌ",	"مُٹْپَوَّڑٌ",	"اِٹْپِوَّاڑٌ",	"اِٹْپَوَّڑَ",	"اِٹْپَوَّڑَا",	"اِٹْپَوَّڑُوا",	"اِٹْپَوَّڑَتْ",	"اِٹْپَوَّڑَتَا",	"اِٹْپَوَّڑْنَ",	"اِٹْپَوَّڑْتَ",	"اِٹْپَوَّڑْتُمَا",	"اِٹْپَوَّڑْتُمْ",	"اِٹْپَوَّڑْتِ",	"اِٹْپَوَّڑْتُمَا",	"اِٹْپَوَّڑْتُنَّ",	"اِٹْپَوَّڑْتُ",	"اِٹْپَوَّڑْنَا",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"اُٹْپُوِّڑَ صِلَة",	"يَٹْپَوِّڑُ",	"يَٹْپَوِّڑَانِ",	"يَٹْپَوِّڑُونَ",	"تَٹْپَوِّڑُ",	"تَٹْپَوِّڑَانِ",	"يَٹْپَوِّڑْنَ",	"تَٹْپَوِّڑُ",	"تَٹْپَوِّڑَانِ",	"تَٹْپَوِّڑُونَ",	"تَٹْپَوِّڑِيْنَ",	"تَٹْپَوِّڑَانِ",	"تَٹْپَوِّڑْنَ",	"أَٹْپَوِّڑُ",	"نَٹْپَوِّڑُ",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"يُٹْپَوَّڑُ صِلَة",	"اِٹْپَوِّڑْ",	"اِٹْپَوِّڑَا",	"اِٹْپَوِّڑُوا",	"اِٹْپَوِّڑِي",	"اِٹْپَوِّڑَا",	"اِٹْپَوِّڑْنَ",	"[ٹ پ ڑ]",	"",	"مُٹْپَوَّڑٌ"	];
  
  
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));


  document.getElementById("fa-1").innerText =  newpast01[4];
  document.getElementById("fa-2").innerText =  newpast01[5];
  document.getElementById("fa-3").innerText =  newpast01[6];
  document.getElementById("fa-4").innerText =  newpast01[7];
  document.getElementById("fa-5").innerText =  newpast01[8];
  document.getElementById("fa-6").innerText =  newpast01[9];
  document.getElementById("fa-7").innerText =  newpast01[10];
  document.getElementById("fa-8").innerText =  newpast01[11];
  document.getElementById("fa-9").innerText =  newpast01[12];
  document.getElementById("fa-10").innerText =  newpast01[13];
  document.getElementById("fa-11").innerText =  newpast01[14];
  document.getElementById("fa-12").innerText =  newpast01[15];
  document.getElementById("fa-13").innerText =  newpast01[16];
  document.getElementById("fa-14").innerText =  newpast01[17];
  document.getElementById("fa-15").innerText =  newpast01[18];
  document.getElementById("fa-16").innerText =  newpast01[19];
  document.getElementById("fa-17").innerText =  newpast01[20];
  document.getElementById("fa-18").innerText =  newpast01[21];
  document.getElementById("fa-19").innerText =  newpast01[22];
  document.getElementById("fa-20").innerText =  newpast01[23];
  document.getElementById("fa-21").innerText =  newpast01[24];
  document.getElementById("fa-22").innerText =  newpast01[25];
  document.getElementById("fa-23").innerText =  newpast01[26];
  document.getElementById("fa-24").innerText =  newpast01[27];
  document.getElementById("fa-25").innerText =  newpast01[28];
  document.getElementById("fa-26").innerText =  newpast01[29];
  document.getElementById("fa-27").innerText =  newpast01[30];
  document.getElementById("fa-28").innerText =  newpast01[31];
  document.getElementById("fa-29").innerText =  newpast01[32];
  document.getElementById("fa-30").innerText =  newpast01[33];
  document.getElementById("fa-31").innerText =  newpast01[34];
  document.getElementById("fa-32").innerText =  newpast01[35];
  document.getElementById("fa-33").innerText =  newpast01[36];
  document.getElementById("fa-34").innerText =  newpast01[37];
  document.getElementById("fa-35").innerText =  newpast01[38];
  document.getElementById("fa-36").innerText =  newpast01[39];
  document.getElementById("fa-37").innerText =  newpast01[40];
  document.getElementById("fa-38").innerText =  newpast01[41];
  document.getElementById("fa-39").innerText =  newpast01[42];
  document.getElementById("fa-40").innerText =  newpast01[43];
  document.getElementById("fa-41").innerText =  newpast01[44];
  document.getElementById("fa-42").innerText =  newpast01[45];
  document.getElementById("fa-43").innerText =  newpast01[46];
  document.getElementById("fa-44").innerText =  newpast01[47];
  document.getElementById("fa-45").innerText =  newpast01[48];
  document.getElementById("fa-46").innerText =  newpast01[49];
  document.getElementById("fa-47").innerText =  newpast01[50];
  document.getElementById("fa-48").innerText =  newpast01[51];
  document.getElementById("fa-49").innerText =  newpast01[52];
  document.getElementById("fa-50").innerText =  newpast01[53];
  document.getElementById("fa-51").innerText =  newpast01[54];
  document.getElementById("fa-52").innerText =  newpast01[55];
  document.getElementById("fa-53").innerText =  newpast01[56];
  document.getElementById("fa-54").innerText =  newpast01[57];
  document.getElementById("fa-55").innerText =  newpast01[58];
  document.getElementById("fa-56").innerText =  newpast01[59];
  document.getElementById("fa-63").innerText =  newpast01[60];
  document.getElementById("fa-64").innerText =  newpast01[61];
  document.getElementById("fa-65").innerText =  newpast01[62];
  document.getElementById("fa-66").innerText =  newpast01[63];
  document.getElementById("fa-67").innerText =  newpast01[64];
  document.getElementById("fa-68").innerText =  newpast01[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast01[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast01[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast01[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast01[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast01[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast01[68];
  document.getElementById("main-fial").innerText =  newpast01[0];
  document.getElementById("result").innerText = "";
} 

// bab rubie salim 444444444444444 

else if ((number1 !== "أ" && number1 !=="و" && number1 !=="ي") && (number2 !== "أ" && number2 !=="و" && number2 !=="ي")  && (number3 !== "أ" && number3 !=="و" && number3 !=="ي") && (number4 !== "أ" && number4 !=="و" && number4 !=="ي") && (bab== "va") && (number1!== number2 ))


{
  // Perform the addition
  let past1 = ["ٹَپْڑَژَ",	"مُٹَپْڑِژٌ",	"مُٹَپْڑَژٌ",	"ٹَپْڑَژَةٌ",	"ٹَپْڑَژَ",	"ٹَپْڑَژَا",	"ٹَپْڑَژُوا",	"ٹَپْڑَژَتْ",	"ٹَپْڑَژَتَا",	"ٹَپْڑَژْنَ",	"ٹَپْڑَژْتَ",	"ٹَپْڑَژْتُمَا",	"ٹَپْڑَژْتُمْ",	"ٹَپْڑَژْتِ",	"ٹَپْڑَژْتُمَا",	"ٹَپْڑَژْتُنَّ",	"ٹَپْڑَژْتُ",	"ٹَپْڑَژْنَا",	"ٹُپْڑِژَ",	"ٹُپْڑِژَا",	"ٹُپْڑِژُوا",	"ٹُپْڑِژَتْ",	"ٹُپْڑِژَتَا",	"ٹُپْڑِژْنَ",	"ٹُپْڑِژْتَ",	"ٹُپْڑِژْتُمَا",	"ٹُپْڑِژْتُمْ",	"ٹُپْڑِژْتِ",	"ٹُپْڑِژْتُمَا",	"ٹُپْڑِژْتُنَّ",	"ٹُپْڑِژْتُ",	"ٹُپْڑِژْنَا",	"يُٹَپْڑِژُ",	"يُٹَپْڑِژَانِ",	"يُٹَپْڑِژُونَ",	"تُٹَپْڑِژُ",	"تُٹَپْڑِژَانِ",	"يُٹَپْڑِژْنَ",	"تُٹَپْڑِژُ",	"تُٹَپْڑِژَانِ",	"تُٹَپْڑِژُونَ",	"تُٹَپْڑِژِيْنَ",	"تُٹَپْڑِژَانِ",	"تُٹَپْڑِژْنَ",	"أُٹَپْڑِژُ",	"نُٹَپْڑِژُ",	"يُٹَپْڑَژُ",	"يُٹَپْڑَژَانِ",	"يُٹَپْڑَژُونَ",	"تُٹَپْڑَژُ",	"تُٹَپْڑَژَانِ",	"يُٹَپْڑَژْنَ",	"تُٹَپْڑَژُ",	"تُٹَپْڑَژَانِ",	"تُٹَپْڑَژُونَ",	"تُٹَپْڑَژِيْنَ",	"تُٹَپْڑَژَانِ",	"تُٹَپْڑَژْنَ",	"أُٹَپْڑَژُ",	"نُٹَپْڑَژُ",	"ٹَپْڑِژْ",	"ٹَپْڑِژَا",	"ٹَپْڑِژُوا",	"ٹَپْڑِژِي",	"ٹَپْڑِژَا",	"ٹَپْڑِژْنَ",	"[ٹ پ ڑ ژ]",	"",	"مُٹَپْڑَژٌ" ];
  let newpast1 = past1.map(item=>item.replace(/ٹ/g, number1));
  let newpast_1 = newpast1.map(item=>item.replace(/پ/g, number2));
  let newpast01 = newpast_1.map(item=>item.replace(/ڑ/g, number3));
  let newpast02 = newpast01.map(item=>item.replace(/ژ/g, number4));
  


  document.getElementById("fa-1").innerText =  newpast02[4];
  document.getElementById("fa-2").innerText =  newpast02[5];
  document.getElementById("fa-3").innerText =  newpast02[6];
  document.getElementById("fa-4").innerText =  newpast02[7];
  document.getElementById("fa-5").innerText =  newpast02[8];
  document.getElementById("fa-6").innerText =  newpast02[9];
  document.getElementById("fa-7").innerText =  newpast02[10];
  document.getElementById("fa-8").innerText =  newpast02[11];
  document.getElementById("fa-9").innerText =  newpast02[12];
  document.getElementById("fa-10").innerText =  newpast02[13];
  document.getElementById("fa-11").innerText =  newpast02[14];
  document.getElementById("fa-12").innerText =  newpast02[15];
  document.getElementById("fa-13").innerText =  newpast02[16];
  document.getElementById("fa-14").innerText =  newpast02[17];
  document.getElementById("fa-15").innerText =  newpast02[18];
  document.getElementById("fa-16").innerText =  newpast02[19];
  document.getElementById("fa-17").innerText =  newpast02[20];
  document.getElementById("fa-18").innerText =  newpast02[21];
  document.getElementById("fa-19").innerText =  newpast02[22];
  document.getElementById("fa-20").innerText =  newpast02[23];
  document.getElementById("fa-21").innerText =  newpast02[24];
  document.getElementById("fa-22").innerText =  newpast02[25];
  document.getElementById("fa-23").innerText =  newpast02[26];
  document.getElementById("fa-24").innerText =  newpast02[27];
  document.getElementById("fa-25").innerText =  newpast02[28];
  document.getElementById("fa-26").innerText =  newpast02[29];
  document.getElementById("fa-27").innerText =  newpast02[30];
  document.getElementById("fa-28").innerText =  newpast02[31];
  document.getElementById("fa-29").innerText =  newpast02[32];
  document.getElementById("fa-30").innerText =  newpast02[33];
  document.getElementById("fa-31").innerText =  newpast02[34];
  document.getElementById("fa-32").innerText =  newpast02[35];
  document.getElementById("fa-33").innerText =  newpast02[36];
  document.getElementById("fa-34").innerText =  newpast02[37];
  document.getElementById("fa-35").innerText =  newpast02[38];
  document.getElementById("fa-36").innerText =  newpast02[39];
  document.getElementById("fa-37").innerText =  newpast02[40];
  document.getElementById("fa-38").innerText =  newpast02[41];
  document.getElementById("fa-39").innerText =  newpast02[42];
  document.getElementById("fa-40").innerText =  newpast02[43];
  document.getElementById("fa-41").innerText =  newpast02[44];
  document.getElementById("fa-42").innerText =  newpast02[45];
  document.getElementById("fa-43").innerText =  newpast02[46];
  document.getElementById("fa-44").innerText =  newpast02[47];
  document.getElementById("fa-45").innerText =  newpast02[48];
  document.getElementById("fa-46").innerText =  newpast02[49];
  document.getElementById("fa-47").innerText =  newpast02[50];
  document.getElementById("fa-48").innerText =  newpast02[51];
  document.getElementById("fa-49").innerText =  newpast02[52];
  document.getElementById("fa-50").innerText =  newpast02[53];
  document.getElementById("fa-51").innerText =  newpast02[54];
  document.getElementById("fa-52").innerText =  newpast02[55];
  document.getElementById("fa-53").innerText =  newpast02[56];
  document.getElementById("fa-54").innerText =  newpast02[57];
  document.getElementById("fa-55").innerText =  newpast02[58];
  document.getElementById("fa-56").innerText =  newpast02[59];
  document.getElementById("fa-63").innerText =  newpast02[60];
  document.getElementById("fa-64").innerText =  newpast02[61];
  document.getElementById("fa-65").innerText =  newpast02[62];
  document.getElementById("fa-66").innerText =  newpast02[63];
  document.getElementById("fa-67").innerText =  newpast02[64];
  document.getElementById("fa-68").innerText =  newpast02[65];
 
 
  document.getElementById("file").innerText =  "اسم فاعل: " + newpast02[1];
  document.getElementById("maful").innerText =  "اسم مَفعول: " + newpast02[2];
  document.getElementById("masdar").innerText =  " مصدر: " + newpast02[3];
  document.getElementById("mada").innerText =  " مَادة: " + newpast02[66];
  document.getElementById("ismala").innerText =  "اسم آلة: " + newpast02[67];
  document.getElementById("ismjarf").innerText =  "اسم ظرف: " + newpast02[68];
  document.getElementById("main-fial").innerText =  newpast02[0];
  document.getElementById("result").innerText = " ";
} 
  
  
  
  else {
  document.getElementById("result").innerHTML =
    'Weak roots - أ ي و or Double letters are not contained in web. ' +
    'Our Arabic Verb Conjugator can conjugate all Arabic verbs with 100% accuracy.<br><br>' +
    'Do you want to know about advanced Arabic Verb Conjugation? <br>' + 'So you can download ' +
    '<a href="https://play.google.com/store/apps/details?id=com.arbiotechbd.arabicverbconjugator" target="_blank">' +
    'Arabic Verb Conjugator</a> App from Google Play.';
  }

}





