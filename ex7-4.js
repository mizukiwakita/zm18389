function add2(){
    var x = document.getElementById('input3').value;
    var y = document.getElementById('input4').value;
    alert(Number(x)/(Number(y)*Number(y)));

    if(Number(x)/(Number(y)*Number(y)) < 18.5)
  {alert('低体重')}
  else if(Number(x)/(Number(y)*Number(y)) < 25 )
    {alert('普通')}
  else {alert('肥満')}

}