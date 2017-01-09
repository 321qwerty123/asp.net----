

function startTimer () {
				var today =new Date();
				var h =today.getHours();
				var m =today.getMinutes();
				var s =today.getSeconds();
				m=checkTime(m);
				s=checkTime(s);
				document.getElementById("timer").innerHTML=h+":"+m+":"+s;
				//设置被选中id 的文本
				setTimeout("startTimer()",1000);				
				//每隔1s设置一次时间
				setdate();
				
				
				
			}
			
			function checkTime (i) {
				if(i<10)
				{
					i="0"+i;
				}
				return i ;
			}
			
			function setdate() {
	            //设置日期
				var today,prompt;
				today=new Date();
				prompt=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();
				document.getElementById("date").innerHTML=prompt;
				//设置被选中id 的文本
				setTimeout("setdate()",86400000);
				//每隔86400s设置一次时间
				
}
			

