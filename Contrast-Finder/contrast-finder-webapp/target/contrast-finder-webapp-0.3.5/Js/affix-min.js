$(function(){$("#old-contrast, #contrast-solution thead").affix({offset:{top:function(){var c=$("#header").height(),a=$("#set-up-form").height(),b=c+a+68;return(this.top=c+a+68)}}});$(window).on("resize scroll",function(){var d=$("#header").height(),c=$("#old-contrast").height(),a=$("#set-up-form").height(),b=d+a+68;if($(this).scrollTop()>b&&$(this).width()>=768){$("body").css("margin-top","160px");$("#contrast-solution thead").css("top",c)}else{$("body").css("margin-top","inherit");$("#contrast-solution thead").css("top",0)}})});