
// this function is to move the slider automatically 
const slideArr = document.querySelectorAll(".radio");
counter = 1;
setInterval(()=>{
    document.getElementById("radio"+counter).checked = true;
    counter++;
    if(counter > 3) counter =1;
},10000)


AOS.init({
    offset: 200,
    duration: 1000,
  });
