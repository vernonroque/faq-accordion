const main = () => {
$('.answer-icon').on('click',(event)=>{
    const srcAttr = $(event.currentTarget).attr("src");
    console.log(srcAttr);
    //closest() traverses up the dom tree to find the closest ancestor
    $(event.currentTarget).closest('.question').find('.answer').toggleClass('active'); 
    if(srcAttr === './assets/images/icon-plus.svg')
         $(event.currentTarget).attr("src", "./assets/images/icon-minus.svg");
    else
         $(event.currentTarget).attr("src", "./assets/images/icon-plus.svg");
    
})

}

$(document).ready(main);