console.log('执行js002.js');

// 变量申明的两种方式，var为旧版本，let是新版本（建议）
// 变量名称最好是字母开头的驼峰表达式，字符类型的信息要用单引号或者双引号套用
// =号后面是变量的赋值，代码都是以;分号作为结尾
var myName = '黑暗骑士';
let myAge = 25;
//变量也可以是页面元素
let spVar = document.getElementById('spVar');
spVar.textContent = myName + ':' + myAge;

let btnVarModify = document.getElementById('btnVarModify');
btnVarModify.addEventListener('click', function() {
  //变量的值可以在代码中根据需求修改
  myName = '张三';
  myAge = 18;
  spVar.textContent = myName + ':' + myAge;
});
