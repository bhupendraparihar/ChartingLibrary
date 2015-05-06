function Chart(data){
	var xBar = data.data;
	var yBar = data.name;
	var chartWidth = data.data.length * 70;

	//Calculating ratio to create bar chart on a fixed size layout here 300px
	var ratio = 300/Math.max.apply( Math, xBar);

	var xLable = data.xLable || 'X Lable';
	var yLable = data.yLable || 'Y Lable';

	//Create a wrapper div for chart
	var $chartWrap = $($('#chartWrapTemplate').html())
					.css('width',chartWidth+100);					

	//Create chart div for placing bar on it				
	var $chartDiv = $('.chart',$chartWrap)
					.css('width',this.width);					

	this.setXLable = function(x){
		xLable = x;
	};
	
	this.setYLable = function(y){
		yLable = y;
	};

	this.getXLable = function(){
		return xLable;
	};

	this.getYLable = function(){
		return yLable;
	}

	
	this.render = function(idForDivToRender){
		
		$('.xLable',$chartWrap).html(xLable);
		$('.yLable',$chartWrap).html(yLable);
			

		var $yBarUnits = $('.yBarUnits', $chartDiv);	

		for(var i=0;i<xBar.length;i++){

			var $bar = $($('#barTemplate').html())
						.css('height',xBar[i]*ratio);

			$yBarUnits.append('<div>'+(xBar.length - i)*(Math.max.apply( Math, xBar)/xBar.length)+'</div>');			

			$barName = $('.barName',$bar).html(yBar[i]);

			$bar.append($barName);

			$chartDiv.append($bar);
		}

		$('div',$yBarUnits).css('height',ratio* Math.max.apply( Math, xBar)/xBar.length);

		$chartDiv.append($yBarUnits);
		
		$('#'+idForDivToRender).html($chartWrap);			
	}
}