class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    this.on('submit', this.$addCommentForm.map(function(comment){
      var newComment = new Comment(comment.imageId, comment.commentContent)
      CommentsController.render(newComment)
    }))
  }

    render(commentObject){
      $('ul').append(commentObject.commentEl())
     }

}
