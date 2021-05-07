Vue.createApp({
    data(){
        return {
            title:'RWD DESIGN 123',
            isOpen: false

        }
    }
}).mount('#app');

$(function(){
    $('.collapse').find('a').click(function(){
        let scroll = $(this).data('scroll');
        let offset;
        if(scroll === '#top'){
            offset = 0;
        }else{
            offset = $(scroll).offset().top;
        }
        $('html,body').animate({
            scrollTop: offset
        })
    })
})