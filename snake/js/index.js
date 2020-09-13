var sw = 20,// 宽
  sh = 20, // 高
  tr = 30, // 行数 
  td = 30; // 高数
// 构造函数生成方块
var snake = null,//蛇的实例
  food = null, //食物实例
  game = null; //游戏实例
  //控制速度
  var $speedOn = document.querySelector( '.content .speedOn ');
  var $speedDown = document.querySelector( '.content .speedDown ');
  var $speed = document.getElementById('difficulty');
  var $speedControl = document.querySelector('.speedControl');
  $speed.innerHTML = 1;
  $speedOn.onclick = function(){
    if ($speed.innerHTML != 9){
       $speed.innerHTML ++;  
     }
   }
  $speedDown.onclick = function(){
    if ($speed.innerHTML != 1){
      $speed.innerHTML --;
    }
  }
//定义方块
  function Square(x, y, className) {

  //0,0    0,0
  //20,0   1,0
  //40,0   2,0
  this.x = x * sw;
  this.y = y * sh;
  this.class = className;
  //在snakeWrap下创建class名为className的div
  this.viewContent = document.createElement('div');
  this.viewContent.className = this.class;
  this.parent = document.getElementById('snakeWrap');
};

// 创建方块DOM,并添加到页面里
Square.prototype.create = function () {
  // 定义方块的位置及大小
  this.viewContent.style.position = 'absolute';
  this.viewContent.style.width = sw + 'px';
  this.viewContent.style.height = sh + 'px';
  this.viewContent.style.left = this.x + 'px';
  this.viewContent.style.top = this.y + 'px';
  // 添加方块
  this.parent.appendChild(this.viewContent);
};
// 删除方块DOM
Square.prototype.remove = function () {
  this.parent.removeChild(this.viewContent);
};
// 蛇
function Snake() {
  this.head = null;//蛇头
  this.tail = null;//蛇尾
  this.pos = [];//蛇身
  this.directionNum = {
    // 定义方向
    left: {
      x: -1,
      y: 0,
      // 保留蛇头旋转参数
      rotate: 180
    },
    right: {
      x: 1,
      y: 0,
      rotate: 0
    },
    up: {
      x: 0,
      y: -1,
      rotate: -90
    },
    down: {
      x: 0,
      y: 1,
      rotate: 90
    }
    //蛇走的方向
  }
}
// 蛇的初始化
Snake.prototype.init = function () {
  //创建蛇头
  var snakeHead = new Square(2, 0, 'snakeHead');
  snakeHead.create();
  this.head = snakeHead;//存储蛇头信息
  this.pos.push([2, 0]); // 存储蛇头位置

  //创建蛇身1
  var snakeBody1 = new Square(1, 0, 'snakeBody');
  snakeBody1.create();
  this.pos.push([1, 0]); //存储蛇身位置

  //创建蛇身2
  var snakeBody2 = new Square(0, 0, 'snakeBody');
  snakeBody2.create();
  this.tail = snakeBody2;//存储蛇尾信息
  this.pos.push([0, 0]); //存储蛇身2位置

  //形成链表关系
  snakeHead.last = null;
  snakeHead.next = snakeBody1;

  snakeBody1.last = snakeHead;
  snakeBody1.next = snakeBody2;

  snakeBody2.last = snakeBody1;
  snakeBody2.next = null;

  //给蛇添加一条属性，用来表示蛇走的方向
  this.direction = this.directionNum.right;
}

//用来获取蛇头下一个位置的元素，来做不同事情
Snake.prototype.getNextPos = function () {
  var nextPos = [//蛇头走的下一个点的坐标
    this.head.x / sw + this.direction.x,
    this.head.y / sh + this.direction.y
  ]
  //下个点是自己，游戏结束、
  var selfCollied = false;//代表是否撞到自己
  this.pos.forEach(function (value) {
    if (value[0] == nextPos[0] && value[1] == nextPos[1]) {

      //都相等，代表撞到自己
      selfCollied = true;
    }
  });
  if (selfCollied) {
    this.strategies.die.call(this);
    return;
  }


  //下个点是墙，游戏结束
  if (nextPos[0] < 0 || nextPos[1] < 0 || nextPos[0] > td - 1 || nextPos[1] > tr - 1) {
    this.strategies.die.call(this);
    return;
  }


  //下一个点是苹果，吃
  if (food && food.pos[0] == nextPos[0] && food.pos[1] == nextPos[1]) {
    //条件成立，蛇头即将吃到食物
    this.strategies.eat.call(this);
    return;
  }


  //啥都没有，走
  this.strategies.move.call(this);
}

//处理碰撞后的事情

Snake.prototype.strategies = {
  move: function (format) {//format决定要不要删除蛇尾，传参后表示吃，
    //创建新身体,在旧蛇头位置
    var newBody = new Square(this.head.x / sw, this.head.y / sh, 'snakeBody');
    // 更新链表
    newBody.next = this.head.next;
    newBody.next.last = newBody;
    newBody.last = null;
    this.head.remove();//删除旧蛇头
    newBody.create();//创建新身体
    //创建新蛇头 下一个点
    var newHead = new Square(this.head.x / sw + this.direction.x, this.head.y / sh + this.direction.y, 'snakeHead')
    //更新链表关系
    newHead.next = newBody;
    newHead.last = null;
    newBody.last = newHead;
    newHead.viewContent.style.transform = 'rotate(' + this.direction.rotate + 'deg)'
    newHead.create();//创建新蛇头
    //更新蛇身位置
    this.pos.splice(0, 0, [this.head.x / sw + this.direction.x, this.head.y / sh + this.direction.y])
    this.head = newHead //更新this.head
    if (!format) {
      this.tail.remove();
      this.tail = this.tail.last;
      this.pos.pop();
    }
  },
  eat: function () {
    this.strategies.move.call(this, true);
    createFood();
    game.score++;
    // console.log('eat');
  },
  die: function () {
    game.over();
  }
}

function createFood() {
  var x = null,
    y = null;
  var include = true; //循环跳出的条件，true表示食物在蛇身上，继续循环
  while (include) {
    x = Math.round(Math.random() * (td - 1));
    y = Math.round(Math.random() * (tr - 1));
    snake.pos.forEach(function (value) {
      if (x != value[0] && y != value[1]) {
        //表示随机出的坐标不在蛇身上
        include = false;
      }
    });
  }
  //生成食物
  food = new Square(x, y, 'food');
  food.pos = [x, y];//存储食物坐标，判断食物是否碰撞蛇头
  var foodDom = document.querySelector('.food');
  if (foodDom) {
    foodDom.style.left = x * sw + 'px';
    foodDom.style.top = y * sh + 'px';
  }
  else {
    food.create();
  }
}

//控制游戏逻辑
snake = new Snake();
function Game() {
  this.timer = null;
  this.score = 0;
}
//游戏初始化
Game.prototype.init = function () {
  snake.init();
  createFood();
  document.onkeydown = function (ev) {
    if (ev.which == 37 && snake.direction != snake.directionNum.right) { //往左走时不能向右走
      snake.direction = snake.directionNum.left;
    }
    else if (ev.which == 38 && snake.direction != snake.directionNum.down) { //往上走时不能向下走
      snake.direction = snake.directionNum.up;
    }
    else if (ev.which == 39 && snake.direction != snake.directionNum.left) { //往右走时不能向左走
      snake.direction = snake.directionNum.right;
    }
    else if (ev.which == 40 && snake.direction != snake.directionNum.up) { //往下走时不能向上走
      snake.direction = snake.directionNum.down;
    }
  }
  this.start();
}
Game.prototype.start = function () {
  //开始游戏
  this.timer = setInterval(function () {
    snake.getNextPos();
  }, (10 - $speed.innerHTML )* 20);
}
Game.prototype.pause = function () {
  clearInterval(this.timer);
}
Game.prototype.over = function () {
  clearInterval(this.timer);
  alert('game over！！你的得分为' + this.score);
  //游戏初始化
  var snakeWrap = document.getElementById('snakeWrap');
  snakeWrap.innerHTML = '';
  snake = new Snake();
  game = new Game();
  var startBtnWrap = document.querySelector('.startBtn');
  startBtnWrap.style.display = 'block';
  $speedControl.style.display = 'block';
}

//开始游戏
game = new Game();
var startBtn = document.querySelector('.startBtn button');
startBtn.onclick = function () {
  startBtn.parentNode.style.display = 'none';
  $speedControl.style.display = 'none';
  game.init();
};

//暂停
var snakeWrap = document.getElementById('snakeWrap');
var pauseBtn = document.querySelector('.pauseBtn button');
snakeWrap.onclick = function () {
  game.pause();
  pauseBtn.parentNode.style.display = 'block';

}
pauseBtn.onclick = function () {
  pauseBtn.parentNode.style.display = 'none';
  game.start();
}