let logo = document.querySelector('.logo')
logo.addEventListener('mouseenter',()=>{
    logo.title = '当前页面为首页';
})

let left = 0;
let timer;
let imglist = document.querySelector('.imglist');
run();
function run(){
    if(left<=-3780){
        left = 0;
    }
    imglist.style.marginLeft = left/100 + 'rem';
    let n = (left % 1260 == 0) ? 1500 : 10;
    left -= 10;
    timer = setTimeout(run,n)
}

// 悬浮效果
let banner = document.querySelector('.banner-right');
banner.onmouseover = function(){
    clearTimeout(timer);
}
banner.onmouseout = function(){
    run();
}