define("sjplus/register/0.0.1/init",["sjplus/global/0.0.1/crypto/sha3"],function(a){function b(){m.find("img")[0].src="/captcha?t="+(new Date).getTime()}var c=document.forms.register,d=KISSY,e=a("sjplus/global/0.0.1/crypto/sha3"),f=$(c),g=c.elements,h=/(?:[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,i=/^[\u4e00-\u9fa5a-z][\u4e00-\u9fa5a-z0-9]{2,}$/,j=$("#tips-wrapper"),k=j.find(".tips-content"),l={"163.com":"http://mail.163.com/","10086.cn":"http://mail.10086.cn/","sohu.com":"http://mail.sohu.com/","qq.com":"http://mail.qq.com/","189.cn":"http://mail.189.cn/","126.com":"http://www.126.com/","gmail.com":"https://mail.google.com/","sina.com":"http://mail.sina.com.cn/","outlook.com":"http://www.outlook.com/","aliyun.com":"http://mail.aliyun.com/","tom.com":"http://mail.tom.com/","sogou.com":"http://mail.sogou.com/","2980.com":"http://www.2980.com/","21cn.com":"http://mail.21cn.com/","188.com":"http://www.188.com/","yeah.net":"http://www.yeah.net/","foxmail.com":"http://www.foxmail.com/","wo.com.cn":"http://mail.wo.com.cn/","263.net":"http://www.263.net/"};f.on("submit",function(a){a.preventDefault();var f=$.trim(g._.value),j=$.trim(g.__.value),m=g.___.value,n=g.captcha.value,o=g["read-rule"],p=0;return i.test(f)||(console.log("user name fail"),$(g._).addClass("error"),p++),h.test(j)||(console.log("email fail"),$(g.__).addClass("error"),p++),/^[^\s]{3,}$/.test(m)||(console.log("password fail"),$(g.___).addClass("error"),p++),/^[^\s]{4}$/.test(n)||(console.log("captcha fail"),$(g.___).addClass("error"),p++),o.checked&&"yes"===o.value||(console.log("rule fail"),$(g.___).addClass("error"),p++),p>0?(console.log("register abort"),void 0):($.ajax({url:c.action,type:"post",data:{_:f,__:j,___:e(m).toString(),captcha:c.elements.captcha.value,readRule:o.checked&&o.value,_csrf:window._csrf_token_},dataType:"json"}).done(function(a){var c=j.substring(j.indexOf("@")+1);if(1===a.status)return $("#submit-wrapper").slideUp(100,function(){$("#submit-wrapper").remove()}),$(".require-field").slideUp(100),l[c]?k.html('视界+发送了一封邮件到您的邮箱中， <a href="'+l[c]+'" style="text-decoration:underline;">现在就去验证!</a> '):k.html("视界+发送了一封邮件到您的邮箱中，请点击里面的链接完成注册。"),void 0;switch(b(),a.status){case-1:var e=[];d.each(a.err,function(a){d.each(d.keys(a),function(b){e.push(a[b])})}),k.html(e.join(","));break;case-2:k.html("Fail: on insert register-list");break;case-4:k.html("create user fail");break;case-5:k.html("send mail fail");break;case-10:k.html("captcha fail")}}).error(function(){b(),k.html("Server Error")}),void 0)});var m=$("#captchaTrigger");m.on("click",b)});