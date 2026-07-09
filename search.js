function searchPage(){

let q = document
.getElementById("searchBox")
.value
.toLowerCase()
.trim();



let pages = [

{
words:[
"كباس",
"كمبروسر",
"compressor"
],
page:"compressor.html"
},


{
words:[
"مكثف",
"كوندنسر",
"condenser"
],
page:"condenser.html"
},


{
words:[
"ماسورة",
"كابلري",
"capillary"
],
page:"capillary.html"
},


{
words:[
"مبخر",
"evaporator",
"كويل"
],
page:"evaporator.html"
},


{
words:[
"دورة التبريد",
"cycle"
],
page:"cycle.html"
},


{
words:[
"انفرتر",
"inverter"
],
page:"inverter.html"
},


{
words:[
"اعطال",
"عطل",
"تشخيص"
],
page:"faults.html"
},


{
words:[
"اكواد",
"كود",
"رموز"
],
page:"error-codes.html"
},


{
words:[
"كهرباء",
"كابستور",
"كونتاكتور",
"فيوز"
],
page:"electric-faults.html"
},


{
words:[
"فريون",
"شحن",
"ضغط"
],
page:"freon-calculator.html"
},


{
words:[
"شارب",
"sharp"
],
page:"sharp-codes.html"
},


{
words:[
"كاريير",
"carrier"
],
page:"carrier-codes.html"
},


{
words:[
"يونيون",
"union",
"unionair"
],
page:"union-codes.html"
},


{
words:[
"فريش",
"fresh"
],
page:"fresh-codes.html"
},


{
words:[
"ميديا",
"media"
],
page:"media-codes.html"
},


{
words:[
"lg",
"ال جي"
],
page:"lg-codes.html"
},


{
words:[
"سامسونج",
"samsung"
],
page:"samsung-codes.html"
},


{
words:[
"جري",
"gree"
],
page:"gree-codes.html"
},


{
words:[
"هايسنس",
"hisense"
],
page:"hisense-codes.html"
},


{
words:[
"تورنيدو",
"tornado"
],
page:"tornado-codes.html"
}

];



for(let item of pages){


for(let word of item.words){


if(q.includes(word)){


window.location.href = item.page;

return;


}


}


}



alert("لم يتم العثور على نتيجة في الموسوعة");


}
