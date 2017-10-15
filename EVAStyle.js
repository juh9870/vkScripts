// ==UserScript==
// @name         EVE vk style
// @include     *://vk.com/*
// @include     *://*.vk.com/*
// @include     *://*.vk.me/*
// @include     *://*.vk.cc/*
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Стилизирует сайдбар вк под еву.
// @author       juh9870
// @match        http://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/juh9870/vkScripts/master/EVAStyle.js
// ==/UserScript==

var color1="rgba(33, 33, 31, 0.6)";
(function() {
    'use strict';
    upd();
    styleGlobal();
})();
function styleGlobal(){
    styleElem(document.getElementsByClassName("back"),"background-color","black");
    styleElem(document.getElementsByClassName("page_header_wrap"),"background-color","black");
    styleElem(document.getElementsByClassName("scroll_fix"),"background-color","black");
    styleElem(document.getElementsByClassName("scroll_fix"),"background-image","url('https://i.imgur.com/FjXZjK5.jpg')");
    styleElem(document.getElementsByClassName("scroll_fix"),"background-attachment","fixed");
    styleElem(document.getElementsByClassName("scroll_fix"),"background-position","center");
    styleElem(document.getElementsByClassName("scroll_fix"),"background-repeat","no-repeat");
    styleElem(document.getElementsByClassName("scroll_fix"),"background-size","cover");
    styleElem(document.getElementsByClassName("left_fixer"),"border-style","solid");
    styleElem(document.getElementsByClassName("left_fixer"),"border-color","#282828");
    styleElem(document.getElementsByClassName("left_fixer"),"border-width","2px");
    styleElem(document.getElementsByClassName("left_fixer"),"border-top-width","1px");
    styleElem(document.getElementsByClassName("left_fixer"),"border-bottom-width","1px");

    styleElem(document.getElementsByClassName("left_fixer"),"background","linear-gradient(to right, #21211f 0%, #161616 20%, #21211f 100%)");
    styleElem(document.getElementsByClassName("left_fixer"),"color","#ffffff");

    styleElem(document.getElementsByClassName("left_icon"),"background","none");
    document.getElementsByClassName("left_icon")[0].innerHTML='<img src="https://i.imgur.com/UuUtOrN.png" style="width:32px;heigth:32px"/>';
    document.getElementsByClassName("left_icon")[1].innerHTML='<img src="https://i.imgur.com/afGNPYX.png" style="width:32px;heigth:32px"/>';
    document.getElementsByClassName("left_icon")[2].innerHTML='<img src="https://i.imgur.com/ndOVmhg.png" style="width:32px;heigth:32px"/>';
    document.getElementsByClassName("left_icon")[3].innerHTML='<img src="https://i.imgur.com/1PH6lZ3.png" style="width:32px;heigth:32px"/>';
    document.getElementsByClassName("left_icon")[4].innerHTML='<img src="https://i.imgur.com/V55MxKC.png" style="width:32px;heigth:32px"/>';
    document.getElementsByClassName("left_icon")[5].innerHTML='<img src="https://i.imgur.com/oXlaHZl.png" style="width:32px;heigth:32px"/>';
    document.getElementsByClassName("left_icon")[6].innerHTML='<img src="https://i.imgur.com/LXst0lq.png" style="width:32px;heigth:32px"/>';
    document.getElementsByClassName("left_icon")[7].innerHTML='<img src="https://i.imgur.com/TIxceRu.png" style="width:32px;heigth:32px"/>';
    document.getElementsByClassName("left_icon")[8].innerHTML='<img src="https://i.imgur.com/ch6sJd2.png" style="width:32px;heigth:32px"/>';
    document.getElementsByClassName("left_icon")[9].innerHTML='<img src="https://i.imgur.com/lnYNdgY.png" style="width:32px;heigth:32px"/>';
    for(let i = 10; i<document.getElementsByClassName("left_icon").length;i++){
        document.getElementsByClassName("left_icon")[i].innerHTML='<img src="https://i.imgur.com/V55MxKC.png" style="width:32px;heigth:32px"/>';
    }
}

function styleElem(elemArr,style,style2){
    for(let i = 0; i< elemArr.length;i++){
        try{
        elemArr[i].style[style]=style2;
        } catch(e){}
    }
}
function styleElems(elemArrArr,style,style2){
    for(let i = 0; i< elemArrArr.length;i++){
        try{
        styleElem(elemArrArr[i],style,style2);
        } catch(e){}
    }
}
function upd(){
    try{
    let myPass = document.getElementById("l_pr").getElementsByClassName("left_label inl_bl")[0];
    let myPass2 = document.getElementById("top_myprofile_link");
    //myPass.innerHTML="Character Sheet";
    myPass.innerHTML="Biography";
    myPass2.innerHTML=myPass.innerHTML;
    let news = document.getElementById("l_nwsf").getElementsByClassName("left_label inl_bl")[0];
    news.innerHTML = "News";
    let msg = document.getElementById("l_msg").getElementsByClassName("left_label inl_bl")[0];
    msg.innerHTML="Channels";
    let friends = document.getElementById("l_fr").getElementsByClassName("left_label inl_bl")[0];
    friends.innerHTML="Buddies";
    let groups = document.getElementById("l_gr").getElementsByClassName("left_label inl_bl")[0];
    groups.innerHTML="Corps";
    let photos = document.getElementById("l_ph").getElementsByClassName("left_label inl_bl")[0];
    photos.innerHTML="Gallery";
    let music = document.getElementById("l_aud").getElementsByClassName("left_label inl_bl")[0];
    music.innerHTML="Jukebox";
    let video = document.getElementById("l_vid").getElementsByClassName("left_label inl_bl")[0];
    video.innerHTML="Videos";
    let apps = document.getElementById("l_ap").getElementsByClassName("left_label inl_bl")[0];
    apps.innerHTML="Applications";
    let docs = document.getElementById("l_doc").getElementsByClassName("left_label inl_bl")[0];
    docs.innerHTML="Cargohold";
    } catch(e){
        console.log(e);
    }
}
