class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')

  }

  init() {
    // kick off controller from here
    this.addCommentFormListener()
  }

  render(newComment) {
    $("ul").append(this.commentEl())
  }

  addCommentFormListener() {
    // create comment form listener code here
    this.$addCommentForm.on("submit", function(e){
      e.preventDefault()
      let formEl = this
      let commentVal = formEl.children[1].value
      let imageEl = formEl.parentElement.children[0]
      let newComment = new Comment(commentVal, imageEl)
      let correctUlEl = `ul#comments-${newComment.image.id}`
      $(correctUlEl)[0].append(newComment.commentEl())
    })
  }


}
