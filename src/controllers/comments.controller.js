class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    var formsCollection = this.$addCommentForm
    for(var i=0;i<formsCollection.length;i++){
      let data_id = $(formsCollection[i]).attr('data-id')
      $(`form[data-id = ${data_id}]`).submit(()=>{
        event.preventDefault()
        let comment = $(`#comment-description-${data_id}`).val()
        let imageId = data_id
        new Comment(imageId, comment)
        $(`#comments-${imageId}`).append(`${comment}`)
      })
    }
  }

}

CommentsController.prototype.render = (commentObject) => {
  $(`#comments-${commentObject.imageId} ul`).append(`${commentObject.comment}`)
}
