define("sjplus/global/0.0.1/card/init",["position","template","./card.tpl","./card.css"],function(a){function b(a,b){c(b,function(c){i.html(e.render(f,c[b])).fadeIn(200),clearTimeout(h);var g,k=a.offset();k.left-j.scrollLeft()-i.width()/2<0?(g=a.width()/2,console.log("超出左边界")):k.left+i.width()>j.width()+j.scrollLeft()?(console.log("超出右边界"),g="100%"):(console.log("剧中显示"),g="50%"),k.top-i.height()>j.scrollTop()?d.pin({element:i,x:g,y:"100%"},{element:a,x:a.width()/2,y:"0"}):d.pin({element:i,x:g,y:"0"},{element:a,x:a.width()/2,y:"100%"})})}function c(a,b){$.ajax({url:"/u/json/user-info",data:{id_arr:a},dataType:"jsonp"}).done(function(c){c[a]&&b&&b(c)})}var d=a("position"),e=a("template"),f=e.compile(a("./card.tpl"));a("./card.css"),$('<div id="global-user-card"></div>').appendTo(document.body);var g,h,i=$("#global-user-card");$(document).on("mouseenter mouseleave",".J-user-card",function(a){if(clearTimeout(g),"mouseenter"===a.type){var c=$(a.currentTarget);g=setTimeout(function(){b(c,c.data("user-id"))},300)}else clearTimeout(g),clearTimeout(h),h=setTimeout(function(){console.log("card hide"),i.fadeOut(200)},1e3)}),i.on("mouseenter mouseleave",function(a){"mouseenter"===a.type?clearTimeout(h):h=setTimeout(function(){i.fadeOut(100)},400)});var j=$(window)}),define("sjplus/global/0.0.1/card/card.tpl",[],'<a id="global-user-card-avatar" style="background-image:url(/avatar/#{_id}_80x80)"></a>\n    <p class="user">#{user}</p>\n#if(typeof privacy_information!==\'undefined\')\n#run var user=privacy_information\n    <p class="address">#if(user.address)<span class="icon-untitled-3"></span>#{user.address.value}#end</p>\n#if(user.qq || user.zone_url)\n<div id="global-user-card-type">\n    #if(user.qq)\n    <a class="qq icon-untitled-2" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=#{user.qq.value}&site=qq&menu=yes"></a>\n    #end\n    #if(user.zone_url)\n    <a href="#{user.zone_url.value}" class="sina-weibo icon-untitled-28"></a>\n    #end\n</div>\n#end\n#end'),define("sjplus/global/0.0.1/card/card.css",[],function(){seajs.importStyle('#global-user-card{width:150px;background:#fff url(http://img.sjplus.cn/read/52ae7698f551edc839000191.png);position:absolute;left:-999px;top:-999px;z-index:99999;box-shadow:0 0 12px rgba(0,0,0,.5)}#global-user-card-avatar{width:80px;height:80px;margin:28px auto 0;display:block}#global-user-card p.user{text-align:center;font-size:18px;font-family:"Microsoft Yahei",sans-serif;padding:14px 0 12px}#global-user-card p.address{text-align:center;color:#a1a1a1;margin:0 auto 12px}#global-user-card-type{padding:5px 0;background:#bebfb3;font-size:18px;text-align:center}#global-user-card-type a{margin:0 2px}')});
