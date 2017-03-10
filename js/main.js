//Paginador para cambiar la pantalla

$(document).ready(init);

var currentSection = null;

function init() {
    currentSection = $("#welcome");
    $("#btn-welcome").click(onClickBtnSaludo);
    
    //TweenMax.to('#btn-welcome', 2, {marginTop:'60px', ease:Bounce.easeOut});
    TweenMax.from($('#welcome h1'), 2, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickBtnSaludo() {
    gotoSection("players");
}

function gotoSection(_id) {
    currentSection.removeClass("visible");
    var nextSection = $('#'+_id);
    nextSection.addClass("visible");
    
    TweenMax.from(nextSection,2,{scale:0.5,opacity:0,ease:Elastic.easeOut});
    
    currentSection = nextSection;
}