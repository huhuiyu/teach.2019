console.log('执行js003.js');

var divColor = document.getElementById('divColor');
var btnColor1 = document.getElementById('btnColor1');
var btnColor2 = document.getElementById('btnColor2');

var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var color = document.getElementById('color');

//获取input元素的输入值
console.log(red.value, green.value, blue.value, color.value);

btnColor1.addEventListener('click', function() {
  console.log(red.value, green.value, blue.value);
  //修改style的属性值
  divColor.style.background = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
});

btnColor2.addEventListener('click', function() {
  console.log(color.value);
  //修改style的属性值
  divColor.style.background = '#' + color.value;
});
