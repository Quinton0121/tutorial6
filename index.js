var redRange = document.getElementById("redRange"),
	blueRange = document.getElementById("blueRange"),
	greenRange = document.getElementById("greenRange"),
	preview = document.getElementById('previewBox'),
	disp = document.getElementById('display'),
	addColor = document.getElementById('addColor'),
	popColor = document.getElementById("pop"),
	shiftColor = document.getElementById('shift'),
	splice = document.getElementById('splice'),
	index = document.getElementById('index'),
	colorsArr = [];
	/*
	redArr = [],
	greenArr = [],
	blueArr = [];*/
	

function changeColor(){
	var red = redRange.value,
		blue = blueRange.value,
		green = greenRange.value;
	preview.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
}

function pushColor(){
	/*
	redArr.push(parseInt(redRange.value));
	greenArr.push(parseInt(greenRange.value));
	blueArr.push(parseInt(blueRange.value));
	console.log(redArr,greenArr,blueArr);*/
	var obj = {
		red:parseInt(redRange.value),
		green:parseInt(greenRange.value),
		blue:parseInt(blueRange.value)
	}
	colorsArr.push(obj);
	console.log(colorsArr);
}

function addBox(){
	disp.innerHTML = '';
	/*
	for(var i = 0 ; i<redArr.length;i++){
		var box = document.createElement('div');
		box.className = 'newBox';
		box.style.backgroundColor = 'rgb('+redArr[i]+','+greenArr[i]+','+blueArr[i]+')';
		disp.appendChild(box);*/
	
	for(var i = 0 ; i<colorsArr.length;i++){
		var box = document.createElement('div');
		box.className = 'newBox';
		box.style.backgroundColor = 'rgb('+colorsArr[i].red+','+colorsArr[i].green+','+colorsArr[i].blue+')';
		disp.appendChild(box);
	};
}

function getAvg(){
	var redTotal = 0,
		greenTotal = 0,
		blueTotal = 0,
		redAvg = 0,
		greenAvg = 0,
		blueAvg = 0;
	/*
	for(var i=0;i<redArr.length;i++){
		redTotal += redArr[i];
		greenTotal += greenArr[i];
		blueTotal += blueArr[i];
	};
	
	redAvg = Math.round(redTotal/redArr.length);
	greenAvg = Math.round(greenTotal/greenArr.length);
	blueAvg = Math.round(blueTotal/blueArr.length);*/
	
	for(var i=0;i<colorsArr.length;i++){
		redTotal += colorsArr[i].red;
		greenTotal += colorsArr[i].green;
		blueTotal +=colorsArr[i].blue;
	};
	
	redAvg = Math.round(redTotal/colorsArr.length);
	greenAvg = Math.round(greenTotal/colorsArr.length);
	blueAvg = Math.round(blueTotal/colorsArr.length);

	
	
	document.getElementById('averageBox').style.backgroundColor = 'rgb('+redAvg+','+greenAvg+','+blueAvg+')';
	
}

function getTotal(){
	var redTotal = 0,
		greenTotal = 0,
		blueTotal = 0;
	
	for(var i=0;i<colorsArr.length;i++){
		redTotal += colorsArr[i].red;
		greenTotal += colorsArr[i].green;
		blueTotal += colorsArr[i].blue;
	};
	
	
	if(redTotal > 255){
		redTotal = 255;
	};
	
	if(greenTotal > 255){
		greenTotal = 255;
	};
	
	if(blueTotal > 255){
		blueTotal = 255;
	};
	
	
	document.getElementById('mixBox').style.backgroundColor = 'rgb('+redTotal+','+greenTotal+','+blueTotal+')';
	
}

function popColorF(){
	/*
	redArr.pop();
	greenArr.pop();
	blueArr.pop();*/
	colorsArr.pop();
}

function shiftColorF(){
	/*
	redArr.shift();
	greenArr.shift();
	blueArr.shift();*/
	colorsArr.shift();
}

function spliceColorF(){
	var i = index.value;
	/*
	redArr.splice(i,1);
	greenArr.splice(i,1);
	blueArr.splice(i,1);*/
	colorsArr.splice(i,1);
	
}


redRange.addEventListener('change',function(){
	changeColor();
})

greenRange.addEventListener('change',function(){
	changeColor();
})

blueRange.addEventListener('change',function(){
	changeColor();
})

addColor.addEventListener('click',function(){
	pushColor();	
	addBox();
	getAvg();
	getTotal();
})

popColor.addEventListener('click',function(){
	popColorF();
	addBox();
})

shiftColor.addEventListener('click',function(){
	shiftColorF();
	addBox();
})

splice.addEventListener("click",function(){
	spliceColorF();
	addBox();
})
	