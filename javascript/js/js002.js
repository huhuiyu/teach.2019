console.log('执行js002.js');

//第一个英雄信息
var yx01xm = '蝙蝠侠'; //姓名
var yx01sm = 1000; //生命值
var yx01zxgj = 15; //最小攻击
var yx01zdgj = 50; //最大攻击

//第二个英雄信息
var yx02xm = '小丑'; //姓名
var yx02sm = 500; //生命值
var yx02zxgj = 30; //最小攻击
var yx02zdgj = 100; //最大攻击

//初始化英雄信息
var yx01 = document.getElementById('yx01');
var yx02 = document.getElementById('yx02');
yx01.innerHTML = yx01xm + '<br>生命值：' + yx01sm + '<br>最小攻击：' + yx01zxgj + '<br>最大攻击：' + yx01zdgj;
yx02.innerHTML = yx02xm + '<br>生命值：' + yx02sm + '<br>最小攻击：' + yx02zxgj + '<br>最大攻击：' + yx02zdgj;

//攻击信息
var huihe = 0; //回合数
var sh = 0; //伤害值

var info = document.getElementById('info');

var btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', function() {
  //回合数加一
  huihe = huihe + 1;
  info.innerHTML = info.innerHTML + ('第' + huihe + '轮攻击<br>');
  //计算英雄一伤害值
  sh = parseInt(Math.random() * (yx01zdgj - yx01zxgj + 1) + yx01zxgj);
  yx02sm = yx02sm - sh;
  info.innerHTML = info.innerHTML + yx02xm + '受到' + sh + '点攻击，生命值变成：' + yx02sm + '<br>';

  //计算英雄二伤害值
  sh = parseInt(Math.random() * (yx02zdgj - yx02zxgj + 1) + yx02zxgj);
  yx01sm = yx01sm - sh;
  info.innerHTML = info.innerHTML + yx01xm + '受到' + sh + '点攻击，生命值变成：' + yx01sm + '<br>';

  //更新英雄信息
  yx01.innerHTML = yx01xm + '<br>生命值：' + yx01sm + '<br>最小攻击：' + yx01zxgj + '<br>最大攻击：' + yx01zdgj;
  yx02.innerHTML = yx02xm + '<br>生命值：' + yx02sm + '<br>最小攻击：' + yx02zxgj + '<br>最大攻击：' + yx02zdgj;
});
