$(()=>{
  var audio = new Audio('img/dino.wav')
  
  $('div#surprise').click(()=>{
    $('body').addClass('dino')
    audio.play()

  })

})
