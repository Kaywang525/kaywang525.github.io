var startdate = 20200128;
var input;
var entry_count = 0;
var entry_limit = 1;
var out_of_startdate = false;

while(startdate!=input && !out_of_startdate){
    entry_count++;
    if(entry_count<=entry_limit){
        input=prompt ("请输入我们认识的日子")
    }
    else{
            out_of_startdate=true;
    }
}

if(out_of_startdate){
        alert("哼，这都忘了，你死定了💩")
}    

else{
        alert("答对啦，这种问题还能答错嘛？不可能！")
}

var date = 20200328;
var input;
var entry_count = 0;
var entry_limit = 1;
var out_of_date = false;

while(date!=input && !out_of_date){
    entry_count++;
    if(entry_count<=entry_limit){
        input=prompt ("请输入我们在一起的日子")
    }
    else{
            out_of_date=true;
    }
}

if(out_of_date){
        alert("哼，这都能答错，你吃粑粑吧💩")
}    

else{
        alert("你答对啦，宝宝真棒，亲亲😗不许忘记噢")
}
var loveday = 999;
var entry_count = 0;
var entry_limit = 1;
var out_of_loveday = false;

while(loveday!=input && !out_of_loveday){
    entry_count++;
    if(entry_count<=entry_limit){
        input=prompt ("今天是我们在一起第多少天")
    }
    else{
            out_of_loveday=true;
    }
}

if(out_of_loveday){
        alert("哼，这么重要的日子你都忘啦🤯")
}    

else{
        alert("Bingo!今天是超级重要的一天噢😘")
}

var questions = [
    {
        prompt:"你现在想我吗？\n(a)想\n(b)很想\n(c)宇宙超级无敌霹雳旋转爆炸想",
        answer:"c"
    },
    {
        prompt:"你爱我吗？\n(a)爱\n(b)很爱\n(c)宇宙超级无敌霹雳旋转爆炸爱",
        answer:"c"
    },
    {
        prompt:"我最喜欢的事情？\n(a)吃\n(b)睡\n(c)打游戏\n(d)和你在一起做的任何事情",
        answer:"d"
    },
    {
        prompt:"我心里谁最好看？\n(a)郑秀晶\n(b)郑秀妍\n(c)迪丽热巴\n(d)隆园辉",
        answer:"d"
    },
    {
        prompt:"我们还能在一起？\n(a)一年\n(b)十年\n(c)一百年\n(d)永远",
        answer:"d"
    },
    {
        prompt:"我们第一次见面是在哪里？\n(a)南通\n(b)深圳\n(c)成都",
        answer:"a"
    },
    {
        prompt:"我最喜欢你叫我什么？\n(a)老公\n(b)妹妹\n(c)老婆\n(d)王可爱",
        answer:"a"
    },
    {
        prompt:"我最喜欢吃什么？\n(a)炸鸡\n(b)烤串\n(c)火锅\n(d)隆园辉",
        answer:"d"
    },
    {
        prompt:"我们的故事形象是？\n(a)猫猫和小鸭子\n(b)小兔子和小狐狸\n(c)猫猫和小鱼",
        answer:"a"
    },
    {        
        prompt:"我们第一次约定好什么时候去上海迪士尼？\n(a)2025年9月9日晚上9点\n(b)2029年9月9日晚上9点\n(c)2025年5月20日下午5点20\n(d)没约过",
        answer:"a"
    }
    

]
var score = 0
for(var i=0; i<questions.length;i++){
    var input=prompt(questions[i].prompt);
    if(input==questions[i].answer){
        score++;
        alert("答对了！很不错嘛~")
    }    
        else{
            alert("答错了，你个小蠢货！")
        }
    
}
alert("总共答对了"+score+"题")

if(score>=10){
    score++;
    alert("真棒！全部答对啦！奖励一个大大的亲亲")
}
    else{
        alert("还需努力啊！这些可都是送分题噢")
    }