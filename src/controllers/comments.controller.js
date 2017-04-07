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
    this.$addCommentForm.each((index, comment) =>{
      comment.addEventListener('submit', (event) => {
        event.preventDefault()
        let comment = document.getElementById(`comment-description-${index}`).value
        this.render(new Comment(comment, index))
      })
    })
  }

  render(comment) {
    $(`#image-${comment.id}`).append(comment.commentEl())
  }
}
