function Tap(el, callback){
	var startTime;
	var maxTime = 150;
	var [startX,startY,endX,endY] = [0,0,0,0];
	el.addEventListener('touchstart',function(e){
		console.log('滑动开始~~~');
		 startTime = Date.now();
		 startX = e.touches[0].clientX;
		 startY = e.touches[0].clientY;
		 endX = e.touches[0].clientX;
		 endY = e.touches[0].clientY;
		 console.log(startX,startY);
	})
	el.addEventListener('touchmove',function(e){
		console.log('滑动中~~~');
		 endX = e.touches[0].clientX;
		 endY = e.touches[0].clientY;
		 console.log(endX,endY);
	})
	el.addEventListener('touchend',function(e){
		 if(Date.now() - startTime > maxTime){
			 console.log('滑动超时~~~');
			 return ;
		 }
		 if(Math.abs( endX- startX) > 30 || Math.abs( endY- startY) > 30){
			 console.log('滑动超长~~~');
			 return ;
		 }
		 callback();
	})
}
