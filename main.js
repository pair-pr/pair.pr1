var myIndex = 0;


function carousel() {
  var i;
  var x = document.getElementsByClassName("imgslide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000);    
}
carousel();


function CreateEngine(src,type,desc){
  var engine={}
   engine.src=src
   engine.type=type
   engine.desc=desc
   return engine
 }

var engine1=CreateEngine("content/img/engines/eng1.jpg","Inline-Engine","The straight or inline engine is an internal combustion engine with all cylinders aligned in one row and having no offset")
var engine2=CreateEngine("content/img/engines/eng2.jpg","V-Engine","V-type engines have cylinders placed in a V-like shape, or to put it the other way, in two equal rows")
var engine3=CreateEngine("content/img/engines/eng3.jpg","Rotary-Engine","rotary engine, internal-combustion engine in which the combustion chambers and cylinders rotate with the driven shaft around a fixed control shaft to which pistons are affixed")
var engine5=CreateEngine("content/img/engines/eng4.jpg","Natural Aspirated","naturally 'breathing' engines, defines those that take in air under normal means at normal atmospheric pressures.")
var engine4=CreateEngine("content/img/engines/eng5.jpg","Turbo-Charged-Engine","In an internal combustion engine, a turbocharger (often called a turbo) is a forced induction device that is powered by the flow of exhaust gases")  
var engine6=CreateEngine("content/img/engines/eng6.jpg","Super-Charged-Engine","In an internal combustion engine, a supercharger compresses the intake gas, forcing more air into the engine in order to produce more power for a given displacement")  

var myEngines=[engine1,engine2,engine3,engine4,engine5,engine6]

function create(){
myEngines.map(function(x, i){
var div=$("<div class='engine'></div>")
var img=$(`<img src=${x.src} />`)
var p1=$(`<p class="engType">${x.type}</p>`)
var p2=$(`<p class="desc">about: ${x.desc}</p>`)

$(div).append(img,p1,p2)

$("#engine").append(div)
})
}
create()
$("#engine").hide()


function Createbody(src,type){
  var body={}
   body.src=src
   body.type=type
   return body
 }

var body1=Createbody("content/img/kits/kit1.jpg","Front&Rear Bumpers")
var body2=Createbody("content/img/kits/kit2.jpg","Rear Diffuser")
var body3=Createbody("content/img/kits/kit3.jpg","Spoiler")

var mybodys=[body1,body2,body3]

function create1(){
mybodys.map(function(x, i){
var div=$("<div class='body-img'></div>")
var img=$(`<img src=${x.src} />`)
var p1=$(`<p class="body-Type">${x.type}</p>`)

$(div).append(img,p1)

$("#body-kit").append(div)
})
}
create1()

$("#body-kit").hide()


function Createwheel(src,type){
  var wheel={}
   wheel.src=src
   wheel.type=type
   return wheel
 }

var wheel1=Createwheel("content/img/wheels/whl1.jpg","OZ")
var wheel2=Createwheel("content/img/wheels/whl2.jpg","BBS")
var wheel3=Createwheel("content/img/wheels/whl3.jpg","LEXANI")
var wheel4=Createwheel("content/img/wheels/tr1.jpg","Regular Tire")
var wheel5=Createwheel("content/img/wheels/tr2.jpg","Racing Tire")
var wheel6=Createwheel("content/img/wheels/tr3.jpg","Off-Road Tire")

var mywheels=[wheel1,wheel2,wheel3,wheel4,wheel5,wheel6]

function create2(){
mywheels.map(function(x, i){
var div=$("<div class='wheel-img'></div>")
var img=$(`<img src=${x.src} />`)
var p1=$(`<p class="wheel-Type">${x.type}</p>`)

$(div).append(img,p1)

$("#wheels").append(div)
})
}
create2()
$("#wheels").hide()

var home=$("#button1").click(function(){
$("#engine").hide(500)
$("#body-kit").hide(500)
$("#wheels").hide(500)
$("#accessories").hide(500)
$("#interior").hide(500)
$("#paint-job").hide(500)
})

var engine=$("#button2").click(function(){
$("#engine").show(500)
$("#body-kit").hide(500)
$("#wheels").hide(500)
$("#accessories").hide(500)
$("#interior").hide(500)
$("#paint-job").hide(500)
})

var bodyKit=$("#button3").click(function(){
$("#engine").hide(500)
$("#body-kit").show(500)
$("#wheels").hide(500)
$("#accessories").hide(500)
$("#interior").hide(500)
$("#paint-job").hide(500)
})

var wheels=$("#button4").click(function(){
$("#engine").hide(500)
$("#body-kit").hide(500)
$("#wheels").show(500)
$("#accessories").hide(500)
$("#interior").hide(500)
$("#paint-job").hide(500)
})

var accessories=$("#button5").click(function(){
$("#engine").hide(500)
$("#body-kit").hide(500)
$("#wheels").hide(500)
$("#accessories").show(500)
$("#interior").hide(500)
$("#paint-job").hide(500)
})

var interior=$("#button6").click(function(){
$("#engine").hide(500)
$("#body-kit").hide(500)
$("#wheels").hide(500)
$("#accessories").hide(500)
$("#interior").show(500)
$("#paint-job").hide(500)
})

var paintJob=$("#button7").click(function(){
$("#engine").hide(500)
$("#body-kit").hide(500)
$("#wheels").hide(500)
$("#accessories").hide(500)
$("#interior").hide(500)
$("#paint-job").show(500)
})

$("#home-button").click(function(){
  document.documentElement.scrollTop = 0
})