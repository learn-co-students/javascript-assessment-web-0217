class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    var _this = this //couldn't get arrow functions to behave, had to do it old school
    this.$addCommentForm.each(function(index) {
      $(this).on('submit', function(e){
        e.preventDefault()
        let $imageId = $(`#image-${index}`).data('id')
        let $comment = $(`#comment-description-${index}`).val()
        if ($comment !== '') {
          let newComment = new Comment($comment, $imageId)
          _this.render(newComment)
        }
      })
    })
  }

  render(comment) {
    $(`ul#comments-${comment.imageId}`).append(comment.commentEl())
  }
}
