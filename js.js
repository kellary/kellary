$(document).ready(function(){
    var banner = $(".banner");
    var imgs = $(".img");
    function showAllOject (object) {
        object.fadeIn(900);
    }
    function moving (object, speed) {
        banner.on('mousemove', function(event){
            var X = Math.floor((event.pageX)/speed-20) + "px";
            var Y = Math.floor((event.pageY)/speed) + "px";
            object.css('transform', 'translate('+X+' , '+Y+')');
        });
    }
    function moveAll (object) {
        moving($(object[0]),10);
        moving($(object[1]),15);
        moving($(object[2]),13);
        moving($(object[3]),17);
        moving($(object[4]),12);
        moving($(object[5]),9);
    }
    showAllOject(imgs);
    moveAll(imgs);
})


var colors = new Array(
    [10,35,255],
    [30,255,20],
    [255,35,98],
    [255,128,0]
    );
  var step = 0;
  var colorIndices = [0,1,2,3];
  var gradientSpeed = 0.002;
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);


  window.addEventListener('scroll', reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++){
    var win_height = window.innerHeight;
    var reveal_top = reveals[i].getBoundingClientRect().top;
    var reveal_point = 150;
    if (reveal_top < win_height - reveal_point) {
      reveals[i].classList.add('active');
    } //else {
      //reveals[i].classList.remove('active');
    //}
  }
}