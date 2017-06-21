window.onload=function(){
	$("#index_publicity .publicity_nav li a").css("color","#fff")
	$("a").mouseover(function(){
		$(this).css("color","#008FD7")
		$("#categorys .mt a").css("color","#fff")
		$("#index_publicity .publicity_nav li a").css("color","#fff")
		$(".mall .mt .mall-nav li a").css("color","#999")
		$(".project .mc_right .db .title .box a").css("color","#089BE9")
	})
	$("a").mouseleave(function(){
		$("a").css("color","#666")
		$("#categorys .mt a").css("color","#fff")
		$("#index_publicity .publicity_nav li a").css("color","#fff")
		$(".mall .mt .mall-nav li a").css("color","#999")
		$(".project .mc_right .db .title .box a").css("color","#089BE9")
	})
	
	
	$("#nofollow").mouseover(function(){
		$("#lwx_sub_content").stop().slideDown()
		$("#top .sub").css("background","#fff")
		$(".w_new>.right>.sub>dt>b").css("background","url(img/shortcut.png) no-repeat 0 -25px")
	})
	$(".w_new>.right>.sub").mouseleave(function(){
		$("#lwx_sub_content").stop().slideUp()
		$("#top .sub").css("background","")
		$(".w_new>.right>.sub>dt>b").css("background","url(img/shortcut.png) no-repeat 0 -18px")
	})
	$(".w_new>.right>.sub>dt>b").mouseover(function(){
		$(this).css("display","block");
	})
	
	$("#header .search .form .fl .choose").mouseover(function(){
		$("#header .search .form .fl").css("overflow","")
		$("#header .search .form .fl .hide").stop().show()
		$("#header .search .form .related").css("display","block");
		$("#header .search .form .fl .choose b").css("background","url(img/header_icon.png) no-repeat -1px -28px")
	})
	$("#header .search .form .fl div").mouseleave(function(){
		$("#header .search .form .fl .hide").stop().hide()
		$("#header .search .form .fl .choose b").css("background","url(img/header_icon.png) no-repeat -12px -28px")
	})
	$("#header .search .form .fl .hide").mouseover(function(){
		$("#header .search .form .fl .hide").css("display","block");
	})
	$("#header .search .form .fl ul a").click(function(){
		var txt =$(this).html();
		$("#header .search .form .fl .choose em").html(txt);
		$("#header .search .form .fl .hide").stop().hide()
	})

	$("#categorys .item").mouseover(function(){
//		console.log($(this).index())
		$(this).css("background","#CCCCCC")
		$(".item-box").eq($(this).index()).stop().show()
	})
	$("#categorys .item").mouseleave(function(){
//		console.log($(this).index())
		$(this).css("background","")
		$(".item-box").eq($(this).index()).stop().hide()
	})
	
	$("#navitems li").eq(2).mouseover(function(){
//		console.log($("#navitems .fl li dd"))
		$("#navitems .fl li dd").eq(0).show();
	})
	$("#navitems li").eq(2).mouseleave(function(){
//		console.log($("#navitems .fl li dd"))
		$("#navitems .fl li dd").eq(0).hide();
	})
	$("#navitems .fl li .dd1 div").mouseover(function(){
		$(this).css("background","#008FD7")
		$("#navitems .fl li .dd1 div a").eq($(this).index()).css("color","#fff")
	})
	$("#navitems .fl li .dd1 div").mouseleave(function(){
		$(this).css("background","#fff")
		$("#navitems .fl li .dd1 div a").eq($(this).index()).css("color","#666")
	})
	$("#navitems .fl li .dd2 div").mouseover(function(){
		$(this).css("background","#008FD7")
		$("#navitems .fl li .dd2 div a").eq($(this).index()).css("color","#fff")
	})
	$("#navitems .fl li .dd2 div").mouseleave(function(){
		$(this).css("background","#fff")
		$("#navitems .fl li .dd2 div a").eq($(this).index()).css("color","#666")
	})
	
	
	$("#navitems li").eq(3).mouseover(function(){
//		console.log($("#navitems .fl li dd"))
		$("#navitems .fl li dd").eq(1).show();
	})
	$("#navitems li").eq(3).mouseleave(function(){
//		console.log($("#navitems .fl li dd"))
		$("#navitems .fl li dd").eq(1).hide();
	})
	
	
	var timer =null;
	var num =0;
	var a =0;
	timer = setInterval(function(){
		$("#index_new .slide_stage .slide_handdler a").removeClass("current");
		a++;
		num++;
		if(num==6){
			a=0;
		}
		if(num==7){
			$("#index_new .slide_stage ul").css("left","0px");
			num=1;
		}
		$("#index_new .slide_stage ul").animate({
			left:(num*-100)+"%"
		},500)
		$("#index_new .slide_stage .slide_handdler a").eq(a).addClass("current");
	},5000);
	
	$("#index_new .slide_stage .slide_handdler a").mouseover(function(){
		clearInterval(timer);
		$("#index_new .slide_stage .slide_handdler a").removeClass("current");
		$(this).addClass("current");
		$("#index_new .slide_stage ul").stop().animate({
			left:($(this).index()*-100)+"%"
		},500)
	})
	$("#index_new .slide_stage .slide_handdler a").mouseleave(function(){
		$("#index_new .slide_stage .slide_handdler a").removeClass("current");
		clearInterval(timer);
		num = $(this).index();
		a= $(this).index();
		$(this).addClass("current");
		timer = setInterval(function(){
			$("#index_new .slide_stage .slide_handdler a").removeClass("current");
			num++;
			a++;
			if(num==6){
				a=0;
			}
			if(num==7){
				$("#index_new .slide_stage ul").css("left","0px");
				num=1;
			}
			$("#index_new .slide_stage ul").animate({
				left:(num*-100)+"%"
			},500)
			$("#index_new .slide_stage .slide_handdler a").eq(a).addClass("current");
		},5000);
	})
	
	var num2=0;
	$(".project .mc_right .hd .next").click(function(){
			num2++;
			if(num2>=4){
				num2=3;
			}else{
				console.log(num2)
				$(".project .mc_right .db").animate({
					left:num2*(-920)+"px"
				},100)
			}
	})
	$(".project .mc_right .hd .prev").click(function(){
			num2--;
			if(num2<=-1){
				num2=0;
			}else{
				$(".project .mc_right .db").animate({
					left:num2*(-920)+"px"
				},100)
			}
	})
	
	
	
	$(".mall .mt .mall-nav li").click(function(){
		$(".mall .mt .mall-nav li a").css("color","#999")
		$(".mall .mt .mall-nav li a").eq($(this).index()).css("color","#fff")
		$(".mall .mt .mall-nav li").removeClass("on");
		$(this).addClass("on");
		$(".mall .tempWrap .db .lwx_block_table").css("display","none");
		$(".mall .tempWrap .db .lwx_block_table").eq($(this).index()).css("display","block");
	})
	
	
	
	$(".quick ul li").mouseover(function(){
		if($(this).index()==0){
			$(".quick .bot_border div").stop().animate({
				left:0+"px",
				width:190+"px"
			},200)
		}else if($(this).index()==4){
			$(".quick .bot_border div").stop().animate({
				left:1015+"px",
				width:180+"px"
			},200)
		}else{
			$(".quick .bot_border div").stop().animate({
				left:235+($(this).index()-1)*260+"px",
				width:220+"px"
			},200)
		}
	})
	
	
	
	var timer7 =null;
	var num7 =0;
	var a7 =0;
	timer7 = setInterval(function(){
		$("#JS_pro_nav7 a").eq(a7).removeClass("current");
		a7++;
		num7++;
		if(num7==3){
			a7=0;
		}
		if(num7==4){
			$("#lwx_img_slider7").css("left","0px");
			num7=1;
		}
		$("#lwx_img_slider7").animate({
			left:num7*(-718)+"px"
		},500)
		$("#JS_pro_nav7 a").eq(a7).addClass("current");
	},5000);
	
	$("#JS_pro_nav7 a").mouseover(function(){
		clearInterval(timer7);
		$("#JS_pro_nav7 a").removeClass("current");
		$(this).addClass("current");
		$("#lwx_img_slider7").stop().animate({
			left:$(this).index()*(-718)+"px"
		},500)
	})
	$("#JS_pro_nav7 a").mouseleave(function(){
		$("JS_pro_nav7 a").removeClass("current");
		clearInterval(timer7);
		num7 = $(this).index();
		a7= $(this).index();
		$(this).addClass("current");
		timer7 = setInterval(function(){
			$("#JS_pro_nav7 a").eq(a7).removeClass("current");
			a7++;
			num7++;
			if(num7==3){
				a7=0;
			}
			if(num7==4){
				$("#lwx_img_slider7").css("left","0px");
				num7=1;
			}
			$("#lwx_img_slider7").animate({
				left:num7*(-718)+"px"
			},500)
			$("#JS_pro_nav7 a").eq(a7).addClass("current");
		},5000);
	})
	
	
	
	var timer8 =null;
	var num8 =0;
	var a8 =0;
	timer8 = setInterval(function(){
		$("#JS_pro_nav8 a").eq(a8).removeClass("current");
		a8++;
		num8++;
		if(num8==2){
			a8=0;
		}
		if(num8==3){
			$("#lwx_img_slider8").css("left","0px");
			num8=1;
		}
		$("#lwx_img_slider8").animate({
			left:num8*(-718)+"px"
		},500)
		$("#JS_pro_nav8 a").eq(a8).addClass("current");
	},5000);
	
	$("#JS_pro_nav8 a").mouseover(function(){
		clearInterval(timer8);
		$("#JS_pro_nav8 a").removeClass("current");
		$(this).addClass("current");
		$("#lwx_img_slider8").stop().animate({
			left:$(this).index()*(-718)+"px"
		},500)
	})
	$("#JS_pro_nav8 a").mouseleave(function(){
		$("JS_pro_nav8 a").removeClass("current");
		clearInterval(timer8);
		num8 = $(this).index();
		a8= $(this).index();
		$(this).addClass("current");
		timer8 = setInterval(function(){
			$("#JS_pro_nav8 a").eq(a8).removeClass("current");
			a8++;
			num8++;
			if(num8==2){
				a8=0;
			}
			if(num8==3){
				$("#lwx_img_slider8").css("left","0px");
				num8=1;
			}
			$("#lwx_img_slider8").animate({
				left:num8*(-718)+"px"
			},500)
			$("#JS_pro_nav8 a").eq(a8).addClass("current");
		},5000);
	})
	
	
	var timer9 =null;
	var num9 =0;
	var a9 =0;
	timer9 = setInterval(function(){
		$("#JS_pro_nav9 a").eq(a9).removeClass("current");
		a9++;
		num9++;
		if(num9==2){
			a9=0;
		}
		if(num9==3){
			$("#lwx_img_slider9").css("left","0px");
			num9=1;
		}
		$("#lwx_img_slider9").animate({
			left:num9*(-718)+"px"
		},500)
		$("#JS_pro_nav9 a").eq(a9).addClass("current");
	},5000);
	
	$("#JS_pro_nav9 a").mouseover(function(){
		clearInterval(timer9);
		$("#JS_pro_nav9 a").removeClass("current");
		$(this).addClass("current");
		$("#lwx_img_slider9").animate({
			left:$(this).index()*(-718)+"px"
		},500)
	})
	$("#JS_pro_nav9 a").mouseleave(function(){
		$("JS_pro_nav9 a").removeClass("current");
		clearInterval(timer9);
		num9 = $(this).index();
		a9= $(this).index();
		$(this).addClass("current");
		timer9 = setInterval(function(){
			$("#JS_pro_nav9 a").eq(a9).removeClass("current");
			a9++;
			num9++;
			if(num9==2){
				a9=0;
			}
			if(num9==3){
				$("#lwx_img_slider9").css("left","0px");
				num9=1;
			}
			$("#lwx_img_slider9").animate({
				left:num9*(-718)+"px"
			},500)
			$("#JS_pro_nav9 a").eq(a9).addClass("current");
		},5000);
	})
	
	
	
	$(".service .mc .cover_contairn .err-product").mouseover(function(){
		$(".service .mc .cover-box").eq($(this).index(".service .mc .cover_contairn .err-product")).addClass("curr");
	})
	$(".service .mc .cover_contairn li").mouseleave(function(){
		$(".service .mc .cover-box").eq($(this).index()).removeClass("curr");
	})
	
	
	
	$(".lwx_online_service .lwx_spread_hide").click(function(){
		$(".lwx_online_service .lwx_spread").css("display","none");
		$(".lwx_online_service .lwx_retract").css("display","block");
		$(".lwx_online_service").css("top","40%")
	})
	$(".lwx_online_service .lwx_retract_hide").click(function(){
		$(".lwx_online_service .lwx_spread").css("display","block");
		$(".lwx_online_service .lwx_retract").css("display","none");
		$(".lwx_online_service").css("top","10%")
	})
	
	
	$(".bottom_pic").click(function(){
		$(this).animate({
			left:"-147px"
		},300,function(){
			$(".bottom_pic").css("display","none");
			$(".footer").css("display","block");
			$(".footer").animate({
				left:0
			},500)
		})
	})
	
	$(".footer .pic2").click(function(){
		$(".footer").animate({
			left:"-100%"
		},500,function(){
			$(".footer").css("display","none");
			$(".bottom_pic").css("display","block");
			$(".bottom_pic").animate({
				left:0
			},300)
		})
	})
	
	
	$(".dz .dz-content .dz-bottom-content li .send-ad").click(function(ev){
		var x = ($(window).width()-$("#lwx_send_address").width())/2;
		var y =$("body").scrollTop()+($(window).height()-$("#lwx_send_address").height())/2;
		$(".design_overlay").css("display","block");
		$("#lwx_send_address").css({
			display:"block",
			position:"absolute",
			left:x,
			top:y,
			"z-index":999
		});
	})
	
	$("#lwx_send_address .b-close").click(function(){
		$(".design_overlay").css("display","none");
		$("#lwx_send_address").css("display","none");
		$("#lwx_send_address .lwx_error_tips").css("display","none");
	})
	
	$(document).scroll(function(){
		var x = ($(window).width()-$("#lwx_send_address").width())/2;
		var y =$("body").scrollTop()+($(window).height()-$("#lwx_send_address").height())/2;
		$("#lwx_send_address").stop().animate({
			position:"absolute",
			left:x,
			top:y,
		},300);
		
		if($("body").scrollTop()>100){
			$(".bottom_pic").css("display","block")
		}else{
			$(".bottom_pic").css("display","none")
		}
	})
	
	$("#lwx_send_address .lwx_send_btn").click(function(){
		var value =$("#providersmsform-mobile").val();
		var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
		if(value==""){
			$("#lwx_send_address .lwx_error_tips").css("display","block");
			$("#lwx_send_address .lwx_error_tips").html("手机号码不能为空。");
		}else if(!mobile.test(value)){
			$("#lwx_send_address .lwx_error_tips").css("display","block");
		 	$("#lwx_send_address .lwx_error_tips").html("手机号码格式不正确");
		}else{
			alert("发送成功!");
			$(".design_overlay").css("display","none");
			$("#lwx_send_address").css("display","none");
			$("#providersmsform-mobile").val("");
		}
	})
	
	
	$("#friendly_link .fl_title a").click(function(){
		$("#friendly_link .fl_title a").removeClass("curr");
		$(this).addClass("curr");
		$("#friendly_link .fl_content div").css("display","none");
		$("#friendly_link .fl_content div").eq($(this).index()).css("display","block");
	})
	
	// 百度地图API功能
	navigator.geolocation.getCurrentPosition(function(pos){
		var y =113.259607;
		var x =23.211047;
		var map = new BMap.Map("gg_img");   
		map.centerAndZoom(new BMap.Point(y,x), 66);
		map.addControl(new BMap.MapTypeControl());
		map.setCurrentCity("广州");         
		map.enableScrollWheelZoom(true); 
		var point = new BMap.Point(y,x);
		var marker = new BMap.Marker(point);  // 创建标注
		map.addOverlay(marker);               // 将标注添加到地图中
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	})
	
}

