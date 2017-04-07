class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
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

  render(comment) {
    let id = comment.imageId
    return $(`ul #comments-${id}`).append(comment.commentEl())
  }


}
