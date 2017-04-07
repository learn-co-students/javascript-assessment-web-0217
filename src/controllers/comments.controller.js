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
    this.$addCommentForm.submit((event) => {
      event.preventDefault();
      console.log($(event.currentTarget).data("id"))
    })
  }
}
