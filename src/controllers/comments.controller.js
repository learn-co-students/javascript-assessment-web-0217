class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.addCommentFormListener()
  }

  init() {
    console.log('Hi Steven/Jess/Niky :)')
  }

  addCommentFormListener() {
    this.$addCommentForm.on('submit', '', (e) => {
      e.preventDefault()
      let imageId = e.target.id
      let text = $(`#comment-description-${imageId}`).val()
      let comment = new Comment(text, imageId)
      this.render(comment)
    })
  }
  render(comment) {
    let html = comment.commentEl()
    let image = comment.image
    let $target = $(`#comments-${image.id}`)
    $target.append(html)
  }
}
