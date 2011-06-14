$(document).ready(function(){
	var i=0;
	var ii=0;
	$.ajax({
		type: "GET",
		url: "source.xml",
		dataType: "xml",
		success: function(xml) {
			for(i=1;i<=12;i++){								
				var title = $(xml).find('bookmark-'+i).find('title').text();
				var url = $(xml).find('bookmark-'+i).find('url').text();
				var thumb = $(xml).find('bookmark-'+i).find('thumb').text();
				$('#thumb'+i).html('<a href="'+url+'"><img src="thumbs/'+thumb+'" /></a>');
			};
		}
	});
});