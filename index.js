const main = () => {
$('.answer-icon').on('click',(event)=>{
     event.stopPropagation(); // Stop event propagation
    const srcAttr = $(event.currentTarget).attr("src");
    console.log(srcAttr);
    //closest() traverses up the dom tree to find the closest ancestor
    $(event.currentTarget).closest('.question').find('.answer').toggleClass('active'); 
    if(srcAttr === './assets/images/icon-plus.svg')
         $(event.currentTarget).attr("src", "./assets/images/icon-minus.svg");
    else
         $(event.currentTarget).attr("src", "./assets/images/icon-plus.svg");
})

$('.question-headliner').on('click',(event)=>{
     const srcAttr = $(event.currentTarget).find('.answer-icon').attr("src");
     console.log("The src>>>", srcAttr);
     $(event.currentTarget).next().toggleClass('active');
     if(srcAttr === './assets/images/icon-plus.svg')
         $(event.currentTarget).find('.answer-icon').attr("src", "./assets/images/icon-minus.svg");
    else
         $(event.currentTarget).find('.answer-icon').attr("src", "./assets/images/icon-plus.svg");
})

}

$(document).ready(main);