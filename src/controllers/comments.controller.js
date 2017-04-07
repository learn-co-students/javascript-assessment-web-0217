class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    // create comment form listener code here
    var self = this
    $('form').each((i, el) => {
      $(el).submit((event)=> {
        event.preventDefault()
        let imageId = $(el).attr('data-id')
        let input = $(`#comment-description-${imageId}`)
        let commentContent = input.val()
        var comment = new Comment(commentContent, imageId)
        self.render(comment)
        input.val('')
      })
    })
  }

  render(comment) {
    $(`#comments-${comment.image.id}`).append(comment.commentEl())
  }
}
