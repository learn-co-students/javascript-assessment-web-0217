$(()=>{
  $('div#surprise').click(()=>{
    $('body').addClass('dino')

  })
  var audio = new Audio('img/dino.wav')
  audio.play()
})
