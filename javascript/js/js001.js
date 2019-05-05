//是单行注释
//请注意！！！！js是严格区分大小写的
//console.log是在浏览器控制输出信息
console.log('执行js001.js');
//document.getElementById===>获取页面上id是btnWelcome的元素并定义为常量，名称也是btnWelcome
const btnWelcome = document.getElementById('btnWelcome');

/*
多行注释
页面元素.addEventListener===>给指定的页面元素添加事件响应
第一个参数是事件的名称(click表示点击元素事件)，第二个是事件触发后要执行的function代码
*/
btnWelcome.addEventListener('click', function() {
  console.log('点击id为btnWelcome的页面元素');
  //prompt是弹出输入框，通过let name=获取到弹出框中输入的内容
  let name = prompt('请输入您的姓名：');
  //页面元素.textContent表示获取或者设置页面元素的文本内容
  btnWelcome.textContent = '欢迎：' + name;
});

console.log('js001.js代码结尾');
