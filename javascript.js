function onClickMenu(){
    let btn = document.getElementById('menu');
    let para = document.getElementById('toggle-main-nav');

    if(para.style.display != 'none')
    {
        para.style.display = 'none';
    }
    else{
        para.style.display='block';
    }
}