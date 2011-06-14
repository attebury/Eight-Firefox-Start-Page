var m = 18; //how much should the elements move (they expand 2x this)

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
    
    $("#wrapper").children('div').mouseover(function() {
        var el = $(this);
        el.css({padding:m, top:el.data('top')-m, left:el.data('left')-m, zIndex:999999});
    }).mouseout(function() {
        var el = $(this);
        el.css({padding:0, top:el.data('top'), left:el.data('left'), zIndex: 1});
    }).each(function(i, el) {
        el = $(this);
        el.data('top', el.position().top);
        el.data('left', el.position().left);
    });
});