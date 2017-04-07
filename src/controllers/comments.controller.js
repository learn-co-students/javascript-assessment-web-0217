class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    return this.addCommentFormListener()
  }

  addCommentFormListener() {
    this.$addCommentForm.map((form) => {
      var i = 0
      $('input[type="submit"]').addEventListener("click", (e) => {
        e.preventDefault()
        let comment = Comment.init(Comment.all.length, $(`comment-description-${i}`).val(), i)
        $(`ul#comments${i}`).html(comment.commentEl())
      })
      i++
    })
  }
}
