class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  static render(commentObject) {
    return $(`#comments-${commentObject.imageId}`).append(commentObject.commentEl())
  }

  addCommentFormListener() {
    $('.add-comment').each(function() {
      $(this).on('submit', function(e) {
        e.preventDefault()
        let imageId = this.dataset.id
        let content = $(`#comment-description-${imageId}`).val()
        var newComment = new Comment(content, imageId)
        CommentsController.render(newComment)
      })
    })
  }



}
