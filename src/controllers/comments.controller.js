class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
    Comment.all = []
  }

  addCommentFormListener() {
    this.$addCommentForm.on('submit', (event) =>{
      event.preventDefault()
      let imageId = event.target.dataset.id
      let commentText = event.target.childNodes[3].value
      let comment = new Comment(commentText, imageId)
      event.target.childNodes[3].value = ''
      return this.render(comment)
    })
  }


  static deleteComment(event) {
    event.preventDefault()
    let $target = $(event.target.parentElement)
    return $target.remove()
  }

  render(comment) {
    let id = comment.imageId
    return comment.$postTarget.append(comment.commentEl())
  }
}
