function showit(var1){
// Hide the one div that is shown
document.getElementById('divvy1').style.display = 'none';
document.getElementById('divvy2').style.display = 'none';
document.getElementById('divvy3').style.display = 'none';
document.getElementById('divvy4').style.display = 'none';
document.getElementById('divvy5').style.display = 'none';
document.getElementById('divvy6').style.display = 'none';
// show the one div that you sent to the function 
document.getElementById(var1).style.display = 'block';
}
