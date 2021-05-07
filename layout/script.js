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
    $('#gotop').click( e => {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        })
    })
    $(window).scroll(function(){
        let h = $(window).scrollTop();
        let _in = 'fadeInUp';
        let _out = 'fadeOutDown'
        if(h > 600){
            $('#gotop').show().removeClass(_out).addClass(`animated ${_in}`);
        }else{
            $('#gotop').removeClass(_in).addClass(`animated ${_out}`)
        }
    });
})