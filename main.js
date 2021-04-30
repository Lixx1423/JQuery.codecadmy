$(document).ready(() =>{

    $('.hint-box').on('click', () => {
      $('.hint').slideToggle(500);
    })
    
    $('.wrong-answer-one').on('click', () => {
      $('.wrong-text-one').fadeOut(500);
      $('.frown').show();
    })
    
    $('.wrong-answer-two').on('click', () => {
      $('.wrong-text-two').fadeOut(500);
      $('.frown').show();
    })
    
    $('.wrong-answer-three').on('click', () => {
      $('.wrong-text-three').fadeOut(500);
      $('.frown').show();
    })
    
    $('.correct-answer').on('click', () => {
       $('.wrong-text-one').fadeOut(500);
       $('.wrong-text-two').fadeOut(500);
       $('.wrong-text-three').fadeOut(500);
      $('.frown').hide();
      $('.smiley').show();
    
    })
    
    
    });