define("sjplus/cms/stable/data/init",["./edit-tpl.tpl","./edit-excel.tpl","./edit-excel.css","template","./edit-excel","./save-data"],function(a){function b(a){var b=a.currentTarget;$(b).addClass("active").siblings("li").removeClass("active");var e=$(b).attr("data-group-trigger"),i=g.map(c(e),function(a){return{id:a.tab.id,title:a.tab.title,row:a.tab.row,defaultRow:a.tab.defaultRow,fieldsSum:g.keys(a.fields).join(","),fields:g.map(g.keys(a.fields),function(b){return{key:b,type:a.fields[b].type,tip:a.fields[b].tip}})}}),k=j.find("[data-group="+e+"]");k.data("is-build")!==!0&&(k.html(h.render(f,{fields:i})).data("is-build",!0),k.find("div.excel").each(function(a,b){var c=$(b),d=c.find(".J-input");c.data("allRow",c.find(".excel-container")[0].getElementsByTagName("div")),c.data("inputFieldWrapper",d),c.data("inputField",d.find("textarea")),c.data("excelFields",c.find("div.excel-field li.field")),c.data("inputField").on("blur",function(){l.updateData(c)})})),j.find("[data-group]").hide().filter("[data-group="+e+"]").show(),d(),l.alignment(),l.updateAll()}function c(a){var b=[];return g.each(cf.arr,function(c){c.tab.group===a&&b.push(c)}),b}function d(){var a=j.find(":visible[data-group] ul.field");a.each(function(a,b){var c=$(b).find("li");c.width(parseInt(b.offsetWidth/$(b).find("li").size(),10))})}var e=a("./edit-tpl.tpl"),f=a("./edit-excel.tpl");a("./edit-excel.css");var g=KISSY,h=a("template"),i=[],j=$("#editFormWrapper"),k=[];cf.arr=g.filter(cf.arr,function(a){return g.indexOf(a.tab.id,k)>-1?!1:(k.push(a.tab.id),g.indexOf(a.tab.group,i)<0&&i.push(a.tab.group),!0)}),j.html(h.render(e,{tabArr:i})),$(window).on("resize",d);var l=a("./edit-excel");a("./save-data");var m=$("#tab-area");m.on("click","li[data-group-trigger]",b),m.find("li[data-group-trigger]").eq(0).trigger("click",b)}),define("sjplus/cms/stable/data/edit-tpl.tpl",[],'<ul id="tab-area">\n    #each(group in tabArr)<li data-group-trigger="#{group}">#{group}</li>#end\n</ul>\n<div id="main-container">\n    #each(group in tabArr)\n    <div data-group="#{group}">\n\n    </div>\n    #end\n</div>'),define("sjplus/cms/stable/data/edit-excel.tpl",[],'#each(item in fields)\n<div class="unit">\n    <div class="title"><h2>#{item.title}</h2></div>\n    <div class="excel">\n        <div class="excel-field">\n            <ul class="field">\n                #each(field in item.fields)<li class="field" data-field="#{field.name}"><span>#{field.tip}</span><s></s></li>#end\n            </ul>\n        </div>\n        <div class="excel-wrapper">\n            <div class="J-input">\n                <textarea class="J-input-field"></textarea>\n\n                <p class="control" href="#"><a href="#" class="J-fill-excel-trigger">这是Excel数据</a></p>\n            </div>\n            <div class="J-add-delete-row"><span class="J-add">+</span><span class="J-delete">-</span></div>\n            <div class="excel-container" data-row="#{item.row}" data-field="#{item.fieldsSum}"\n                 data-cols="#{item.fields.length}" data-id="#{item.id}">\n                #if(cf[item.id] && window.cf[item.id].data)\n                    #each(val in window.cf[item.id].data)\n                        <div class="J-row">\n                            #each(_val,_index in val)\n                            #if(_index < item.fields.length )\n                            <textarea class="J-cell" data-col-index="#{_index}" readonly="">#{_val}</textarea>\n                            #end\n                            #end\n                        </div>\n                    #end\n                #else\n                    #js for(var __row=0;__row< item.defaultRow;__row++){ #end\n                    <div class="J-row"></div>\n                    #js } #end\n                #end\n            </div>\n            <div class="excel-trigger-area"></div>\n        </div>\n    </div>\n</div>\n#end\n'),define("sjplus/cms/stable/data/edit-excel.css",[],function(){seajs.importStyle("h2,ul,li,p{margin:0;padding:0}#tab-area li{display:inline-block;padding:12px 24px;font-size:28px}#tab-area li.active{background:#cfc}.unit{border:solid 1px #000;border-radius:3px;padding:12px;margin:12px}.unit h2{font-size:16px;background:#cfc;padding:12px;font-weight:700}ul.field{white-space:nowrap;height:100%;overflow:hidden}ul.field li span{display:inline-block;line-height:38px;height:38px;width:100%;padding:0 2px;background:#eee}ul.field li s{position:absolute;right:0;top:0;height:100%;border-right:solid 1px #ccc}ul.field li:last-child s{display:none}ul.field li{display:inline-block;text-align:center;position:relative;height:100%}.J-row{height:30px;border-bottom:solid 1px #ccc;overflow:hidden;position:relative}.excel{position:relative;padding-top:38px;border:solid 1px #ccc;border-bottom:0;font-family:simsun,sans-serif}.excel-field{position:absolute;left:0;top:0;width:100%;height:100%}.excel-wrapper{position:relative;border-bottom:0}.excel-trigger-area{position:absolute;left:0;top:0;width:100%;height:100%;z-index:3;background:url(http://img01.taobaocdn.com/tps/i1/T1FeW3XXNfXXXXXXXX-36-36.gif) -99999em -99999em no-repeat}.J-input{position:absolute;left:-999em;top:-999em;border:solid 2px green;margin-left:-2px;margin-top:-2px;box-shadow:inset 0 0 3px #050;z-index:10;background:#fff}.J-input p{position:absolute;right:0;bottom:-20px;background:rgba(255,255,255,.9);color:#00f;padding:12px;font-size:12px;border:solid 1px #aaa;box-shadow:0 0 5px rgba(0,0,0,.5)}.J-input p a{color:#00f}.J-input textarea{display:block;width:100%;background:#fff;border:0;margin:0;outline:0;box-shadow:0 0 5px green;height:100%;resize:none}.J-cell{position:absolute;height:100%;resize:none;border:0;padding:3px 0 0 3px;background:transparent;white-space:nowrap;overflow:hidden;z-index:0;outline:0}.J-add-remove{position:absolute;width:40px}.J-add-delete-row{position:absolute;left:-30px;top:-99999em;width:30px;background:#080;text-align:center;z-index:9;border-radius:3px;overflow:hidden;cursor:default}.J-add-delete-row span{display:block;color:#fff;height:49%}.J-add-delete-row span:hover{background:#050}")}),define("sjplus/cms/stable/data/edit-excel",[],function(a,b){var c=$("#main-container");c.on("select",function(a){a.preventDefault()}),c.on("mousemove","div.excel-trigger-area",function(a){for(var b=$(a.currentTarget),c=b.parents("div.excel"),d=c.data("allRow"),e=0,f=0;f<d.length;f++)if($(d[f]).position().top+d[f].offsetHeight>a.offsetY){e=f;break}var g=c.find("div.J-add-delete-row");$(g).css({top:$(d[e]).position().top}).data("rowIndex",e)}),c.on("click","div.J-add-delete-row",function(a){b.updateAll();var c=$(a.target),d=$(a.currentTarget),e=d.parents("div.excel");if(e.data("inputFieldWrapper").hide(),c.hasClass("J-add")&&$('<div class="J-row"></div>').insertBefore(e.data("allRow")[d.data("rowIndex")]),c.hasClass("J-delete")){if(1===e.data("allRow").length)return alert("最后一行不能删除"),void 0;$(e.data("allRow")[d.data("rowIndex")]).remove()}}),c.on("mousedown","div.excel-trigger-area",function(a){var c=$(a.currentTarget),d=c.parents("div.excel"),e=d.data("allRow"),f=(c.position(),d.data("excelFields")),g=[];f.each(function(a,b){g.push([$(b).position().left,$(b).position().left+b.offsetWidth])});for(var h=0,i=0;i<g.length;i++)if(g[i][1]>=a.offsetX){h=i;break}var j=0;for(i=0;i<e.length;i++)if($(e[i]).position().top+e[i].offsetHeight>a.offsetY){j=i;break}d.data("position")&&b.updateData(d),d.data("position",{fieldsPosition:g,colIndex:h,rowIndex:j}),b.alignment(),setTimeout(function(){d.data("inputField").focus()},100)}),b.setInputFieldPosition=function(a){var b=a.data("position");if(b){a.data("inputFieldWrapper").show(),a.data("inputFieldWrapper").css(a.data("inputFieldPosition"));var c=b.colIndex,d=$(a.data("allRow")[b.rowIndex]),e=d.find("textarea[data-col-index="+c+"]").val();e?a.data("inputField").val(e):a.data("inputField").val("")}},b.updateData=function(a){var b=a.data("position");if(b){var c=a.data("inputFieldPosition"),d=a.data("inputField").val(),e=b.colIndex,f=b.rowIndex,g=$(a.data("allRow")[f]);if(void 0!==e&&void 0!==g){var h=$('<textarea class="J-cell" data-col-index="'+e+'" readonly>'+d+"</textarea>");g.find("textarea[data-col-index="+e+"]").size()<1?(delete c.top,h.appendTo(a.data("allRow")[f]).css(c)):g.find("textarea[data-col-index="+e+"]").val(d)}}},b.updateAll=function(){$("div.excel-trigger-area").each(function(a,c){var d=$(c).parents("div.excel");d.data("inputFieldPosition")&&b.updateData(d),d.removeData("position")})},b.alignment=function(){$("div.excel-trigger-area:visible").each(function(a,c){var d=$(c).parents("div.excel"),e=[];d.data("excelFields").each(function(a,b){e.push([$(b).position().left,$(b).position().left+b.offsetWidth])});var f=d.data("allRow"),g=d.data("position");g&&d.data("inputFieldPosition",{left:e[g.colIndex][0],top:$(f[g.rowIndex]).position().top,width:void 0!==e[a]?e[a][1]-e[a][0]:c.offsetWidth,height:f[g.rowIndex].offsetHeight}),b.setInputFieldPosition(d),$(f).each(function(a,b){for(var c=0;c<e.length;c++)$(b).find("textarea.J-cell[data-col-index="+c+"]").css({left:e[c][0],width:e[c][1]})})})},$(window).on("resize",function(){b.alignment()}),c.on("click",".J-fill-excel-trigger",function(a){var c=$(a.currentTarget).parents("div.excel"),d=c.data("inputField"),e=d.val(),f=/[\n\t]"[^\t]*(\n+)[^\t]*"[\n\t]/g;e=e.replace(f,function(a){return a.replace(/["\n]/g,"")}),e=e.replace(/\r/g,""),e=e.replace(/'/g,"’");for(var g=e.split("\n"),h=[],i=0;i<g.length;i++){var j=g[i];$.trim(j).length<1||h.push(g[i].split("	"))}for(var k=c.data("position").colIndex,l=c.data("position").rowIndex,m="",i=0;i<h.length;i++)m+='<div class="J-row">'+KISSY.map(h[i],function(a,b){var d=b+k;return d>c.data("excelFields").size()?"":'<textarea class="J-cell" data-col-index="'+(b+k)+'">'+a+"</textarea>"}).join("")+"</div>";$(m).insertAfter(c.data("allRow")[l]),$(c.data("allRow")[l]).remove(),b.alignment()})}),define("sjplus/cms/stable/data/save-data",["sjplus/cms/stable/data/edit-excel"],function(a){var b=document.forms.excel;KISSY.use("json",function(){function c(){var a={};return $("div.excel-container").each(function(b,c){var d=$(c),e=d.data("cols"),f=d.find("div.J-row");a[d.attr("data-id")]={colNum:e,fields:d.attr("data-field"),data:[]},f.each(function(b,c){for(var f=$(c),g=[],h=0;e>h;h++){var i=f.find("textarea[data-col-index="+h+"]").val();g.push(i?i:"")}for(h=0;e>h;h++)if(""!==g[h]){a[d.attr("data-id")].data.push(g);break}})}),a}var d=a("sjplus/cms/stable/data/edit-excel");$(b).on("submit",function(a){d.updateAll(),$.post("/save-data",{data:JSON.stringify(c()),_csrf:window._csrf_token_},function(a){alert("保存完毕"+JSON.stringify(a))}),a.preventDefault()})})});
