class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  static render(commentObject){
    let appropriateUl = $(`#comments-${commentObject.image.id}`)
    appropriateUl.append(commentObject.commentEl())
  }

  static handleCommentFormSubmit(e, imgId, commentText){
    e.preventDefault()
    let newComment = new Comment(commentText, imgId)
    CommentsController.render(newComment)
  }

  addCommentFormListener() {
    $('.add-comment').each(function(id){
      const persId = id
      $(`#image-${id}`).submit(() => {
        let commentText = $(`#comment-description-${persId}`).val()
        CommentsController.handleCommentFormSubmit(event, persId, commentText)
      })
    })
  }


}
