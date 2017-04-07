class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
  }

  addCommentFormListener() {
    $(".add-comment").submit(function(){
      new Comment(comment, imageId)
  })
}

  render(commentObject){
    $(`commentObject.parent`).append(commentObject)
  }
}
