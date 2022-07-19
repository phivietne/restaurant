let menu_sec=document.getElementById('menu_sec')
let left_arrow=document.getElementById('left_arrow')
let right_arrow=document.getElementById('right_arrow')
right_arrow.addEventListener('click',()=>{
    menu_sec.scrollLeft +=120;
    console.log(1)
})
left_arrow.addEventListener('click',()=>{
    
    menu_sec.scrollLeft -=120;
})


//
let videos= document.getElementsByTagName('video')[0];
let plays=document.getElementById('video-play');
let pauses=document.getElementById('video-pause');
let screns=document.getElementsByClassName('screen')[0];
plays.addEventListener('click',()=>{
    videos.play();
    plays.style.display='none';
    screns.style.display='none';
    pauses.style.display='flex';
})
pauses.addEventListener('click',()=>{
    videos.pause();
    pauses.style.display='none';
    // screns.style.display='flex';
    plays.style.display='flex';
})
videos.addEventListener('ended',()=>{
    pauses.style.display='none';
    screns.style.display='flex';
    plays.style.display='flex';
})
//
const dataload=()=>{
    const sec_title= document.getElementById('sec_title');
    const h6_dot=document.getElementsByTagName('h6');
    setTimeout(()=>{
        sec_title.innerHTML="BARGAIN <BR> BUCKET MENU <br> CAMPAIGN";
        h6_dot[1].classList.add("head_dots_main");
        h6_dot[2].classList.remove("head_dots_main");
        h6_dot[3].classList.remove("head_dots_main");
        h6_dot[4].classList.remove("head_dots_main");
    },000);
    setTimeout(()=>{
        sec_title.innerHTML="BARGAIN <BR>FRIES MENU <br> CAMPAIGN";
        h6_dot[1].classList.remove("head_dots_main");
        h6_dot[2].classList.add("head_dots_main");
        h6_dot[3].classList.remove("head_dots_main");
        h6_dot[4].classList.remove("head_dots_main");
    },3000);
    setTimeout(()=>{
        sec_title.innerHTML="BARGAIN <BR> BURGER MENU <br> CAMPAIGN";
        h6_dot[1].classList.remove("head_dots_main");
        h6_dot[2].classList.remove("head_dots_main");
        h6_dot[3].classList.add("head_dots_main");
        h6_dot[4].classList.remove("head_dots_main");
    },6000);
    setTimeout(()=>{
        sec_title.innerHTML="BARGAIN <BR>CHICKEN MENU <br> CAMPAIGN";
        h6_dot[1].classList.remove("head_dots_main");
        h6_dot[2].classList.remove("head_dots_main");
        h6_dot[3].classList.remove("head_dots_main");
        h6_dot[4].classList.add("head_dots_main");
    },9000)
}

setInterval(dataload,12000)



dataload();