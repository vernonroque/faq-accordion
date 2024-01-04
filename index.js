const main = () => {
$('.plus-icon').on('click',(event)=>{
    console.log("I got clicked baus",event.currentTarget);
    //closest() traverses up the dom tree to find the closest ancestor
    $(event.currentTarget).closest('.question').find('.answer').toggleClass('active'); 
    

})

}

$(document).ready(main);