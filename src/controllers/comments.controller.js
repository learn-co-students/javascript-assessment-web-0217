class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    $('.add-comment').toArray().forEach((child) => {
      child.addEventListener("submit", (event) => {
        event.preventDefault()
        let commentText = event.target.children[1].value
        let imageId = parseInt(event.target.dataset.id)
        let comment = new Comment(commentText, imageId)
        this.render(comment)
        event.target.children[1].value = ""
      })
    })
  }

  render(commentObject) {
    $(`#image-${commentObject.image.id}`).append(commentObject.commentEl())
  }

}
