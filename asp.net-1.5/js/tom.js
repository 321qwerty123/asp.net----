//获取2个需要修改的标签
var player = document.getElementById("player");
var img = document.getElementById("tom");

//声明一个变量 记录动画的播放状态
var isPlay = false;

//获取html文档的可视窗口的宽度和高度
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
//监听屏幕变化 当窗口的大小改变时，执行后面的方法
window.onresize = function() {
        //屏幕变化时，重新获取html文档的可视窗口的宽度和高度
         w = document.documentElement.clientWidth;
         h = document.documentElement.clientHeight;
        console.log("屏幕宽度和高度变化了");
}
//声明一个方法，用于播放音乐
//name播放那个图册 total播放图片的总数 startAt在那个地方播放音乐
function play(name, total, startAt) {
    //播放时要判断，记录播放的值，若正在播放，则执行下面的方法
    //若没有播放，则让其播放
    if (isPlay == true) {        
        //return后不再执行，直接结束函数
        return;
    } else {
        isPlay = true;
    }

    //console.log("123456执行一次动画");
    //声明i变量是为了切换图片，数量增加的变量
    var i = 0;
    //刚开始时先执行一次动画
    animate();
    //声明一个函数，实现这个动画 用于播放图册
    function animate() {
        //angry/angry_00.jpg  拼接图片路径
        img.src = name + "/" + name + "_" + (i < 10 ? +"0" : "") + i + ".jpg";
        if (i < total) {
            //如果i<总数，则执行完之后，要让i+1，继续向下执行
            setTimeout(animate, 100)
            if (i == startAt) {
                //当i增加到要播放的下标时，让其播放音乐
                player.src = "sounds/" + name + ".m4a";
                //让播放标签开始播放
                player.play();

            }
            //drink需要2个音频
            if (name == "drink" && i == 10) {
                player.src = "sounds/pour.m4a";
                player.play();
            }
            //倒地需要2个音频
            if (name == "knockout" && i == 0) {
                player.src = "sounds/fall.m4a";
                player.play();
            }
            i++;
        } else {
        	//当动画执行完后，修改isPlay的值
            isPlay = false;
        }

    }
}
//点击之后来调用
function action(event) {
    //在任意一个屏幕上点击的，都可以转换到360*640这个屏幕上
    var x = event.pageX * 360 / w;
    var y = event.pageY * 640 / h;
    //进行位置判断 
    
    //播放生气
    if (x > 140 && x < 225 && y > 400 && y < 450) {
        //调用函数，把实际参数传递到play函数中
        play("angry", 25, 0);
        console.log("执行-点胸口-播放生气");
    }
    //点肚子
    if (x > 119 && x < 245 && y > 465 && y < 565) {
        play("stomach", 33, 0);
        console.log("执行-点肚子");
    }
    //晕倒
    if (x > 155 && x < 210 && y > 190 && y < 230) {
        play("knockout", 80, 20);
        console.log("执行-鼻子-晕倒");
    }
    //吃东西
    if (x > 137 && x < 235 && y > 250 && y < 280) {
        if (x < 185) {
            play("eat", 39, 11);
            console.log("执行-右嘴--吃东西");
        } else {
            //在右边 喝牛奶
            play("drink", 80, 30);
            console.log("执行-左嘴--喝牛奶");
        }
    }
    //敲锣
    if (x > 124 && x < 240 && y > 160 && y < 190) {
        play("cymbal", 12, 0);
        console.log("执行-眼睛-敲锣");
    }
    //放屁
    if (x > 246 && x < 280 && y > 490 && y < 580) {
        play("fart", 27, 0);
        console.log("执行-尾巴-放屁");
    }
    //刮屏幕
    if (x > 80 && x < 120 && y > 110 && y < 195) {
        play("scratch", 55, 15);
        console.log("执行-右耳朵-刮屏幕");
    }
    //砸墙
    if (x > 240 && x < 290 && y > 110 && y < 195) {
        play("pie", 23, 12);
        console.log("执行-左耳朵-砸墙");
    }
    //左脚
    if (x > 180 && x < 230 && y > 570 && y < 620) {
        play("foot_left", 29, 0);
        console.log("执行-左脚");
    }
    //右脚
    if (x > 125 && x < 175 && y > 570 && y < 620) {
        play("foot_right", 29, 0);
        console.log("执行-右脚");
    }
    

}