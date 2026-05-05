let logo = document.querySelector('.logo')
logo.addEventListener('mouseenter',()=>{
    logo.title = '当前页面为python网课页';
})

let love = document.querySelector('.iconfont.icon-shoucang');

love.addEventListener('click',() => {
    
    let text = love.nextElementSibling;

    love.classList.toggle('active');

    if(love.classList.contains('active')){
        text.textContent = '已收藏';
        love.style.color = 'orange';
    }else{
        text.textContent = '收藏';
        love.style.color = '';
    }
});

// 课程下拉效果
let more = document.querySelector("#more-td a")
let hiddenTr = document.querySelectorAll(".hidden-tr")
let isShow = false;
const originalHTML = more.innerHTML;
const expandedText = "已全部展开";
more.addEventListener('click',function(){
    if(!isShow){
        hiddenTr.forEach(function(tr){
            tr.style.display = "flex";
        });
        more.innerHTML = `<i class="iconfont icon-arrow-up-bold"></i>${expandedText}`;
        isShow = true;
    }else{
        hiddenTr.forEach(function(tr){
            tr.style.display = "none";
        });
        more.innerHTML = originalHTML;
        isShow = false;
    }
});

// 翻页
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let page01 = document.querySelector('.page-nav div:nth-child(2)');
let page02 = document.querySelector('.page-nav div:nth-child(3)');
let page03 = document.querySelector('.page-nav div:nth-child(4)');
let page04 = document.querySelector('.page-nav div:nth-child(5)');
let page05 = document.querySelector('.page-nav div:nth-child(6)');
let currentPage = 1;
let disabled = true;

function updatePage(){
    page01.removeAttribute('id');
    page02.removeAttribute('id');
    page03.removeAttribute('id');
    page04.removeAttribute('id');
    page05.removeAttribute('id');
    if(currentPage == 1){
        page01.id = 'active';
        prev.disabled = true;
        next.disabled = false;
    }
    if(currentPage == 2){
        page02.id = 'active';
        prev.disabled = false;
        next.disabled = false;
    }
    if(currentPage == 3){
        page03.id = 'active';
        prev.disabled = false;
        next.disabled = false;
    }
    if(currentPage == 4){
        page04.id = 'active';
        prev.disabled = false;
        next.disabled = false;
    }
    if(currentPage == 5){
        page05.id = 'active';
        prev.disabled = false;
        next.disabled = true;
    }
}

prev.onclick = function(){
    if(currentPage>1){
        currentPage = currentPage - 1;
        updatePage();
    }
}
next.onclick = function(){
    if(currentPage<5){
        currentPage = currentPage + 1;
        updatePage();
    }
}

page01.onclick = function(){
    currentPage = 1;
    updatePage()
}
page02.onclick = function(){
    currentPage = 2;
    updatePage()
}
page03.onclick = function(){
    currentPage = 3;
    updatePage()
}
page04.onclick = function(){
    currentPage = 4;
    updatePage()
}
page05.onclick = function(){
    currentPage = 5;
    updatePage()
}
updatePage()
