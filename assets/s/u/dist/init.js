define("sjplus/u/0.0.1/init",["./user-panel","./user-panel.tpl","template"],function(a){a("./user-panel"),KISSY.use("event",function(b,c){function d(){$("#J-navigation-trigger a").removeClass("active");var b=location.hash.substring(1);switch(location.hash){case"#design-works":a.async("sjplus/u/0.0.1/design-works",function(a){a.init(),$("#J-navigation-trigger a."+b).addClass("active")});break;case"#article":a.async("sjplus/u/0.0.1/article",function(a){a.init(),$("#J-navigation-trigger a."+b).addClass("active")});break;default:"#design-works"!==location.hash&&"#article"!==location.hash&&a.async("sjplus/u/0.0.1/design-works",function(a){a.init(),$("#J-navigation-trigger a.design-works").addClass("active")})}}c.on(window,"hashchange",d),d()})}),define("sjplus/u/0.0.1/user-panel",["template"],function(a){var b=a("sjplus/u/0.0.1/user-panel.tpl"),c=a("template"),d=location.href.match(/\/u\/([0-9a-z]{24})/g),e=RegExp.$1;d&&$.ajax({url:"/u/json/user-info",data:{id_arr:e},dataType:"jsonp"}).done(function(a){a[e]&&$("#user-panel").html(c.render(b,a[e]))})}),define("sjplus/u/0.0.1/user-panel.tpl",[],'<a href="/u/#{_id}" class="avatar J-user-card" data-user-id="#{_id}">\n    <img src="/avatar/#{_id}_80x80">\n</a>\n<div class="info">\n    <h2>#{user}</h2>\n    #if(typeof privacy_information!==\'undefined\')\n    #run var privacy = privacy_information\n    #if(typeof privacy.address!==\'undefined\')<p class="address">#{privacy.address.value}</p>#end\n    #if(typeof privacy.job!==\'undefined\')<p class="job">#{privacy.job.value}</p>#end\n    #end\n</div>\n<div class="count" id="J-navigation-trigger">\n    <a class="design-works" href="#design-works">\n        <span class="num">#if(index["design-works"])#{index["design-works"]}#else0#end</span>\n        <span class="title">作品</span>\n        <s></s>\n    </a>\n    <a class="article" href="#article">\n        <span class="num">#if(index["article"])#{index["article"]}#else0#end</span>\n        <span class="title">文章</span>\n        <s></s>\n    </a>\n</div>');
