

class CommentsController {

  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  static render(commentObject) {
    $(`#comments-${commentObject.imageId}`).append(commentObject.commentEl())
  }

  static handleFormSubmit(event, commentText, imageId) {
    event.preventDefault()
    let commentObject = new Comment(commentText, imageId)
    CommentsController.render(commentObject)
  }

  addCommentFormListener() {
    this.$addCommentForm.each(function(id) {
      let imageId = id
      $(`#image-${id}`).submit(function(event) {
        let commentText = $(`#comment-description-${imageId}`).val()
        $(`#comment-description-${imageId}`).val("")
        CommentsController.handleFormSubmit(event, commentText, imageId)
      })
    })
  }

}

//
// CommentsController.prototype.addCommentFormListener()
  // iterates through each comment form and adds an eventlistener to trigger a function on form submit
  // function should grab the imageId + comment and create a new Comment with those arguments
  // execute the render function on that found image object to append the new comment
// CommentsController.prototype.render(commentObject)
  // selects the appropriate ul for this comment to be added to
  // appends the new comment element to this ul
  // Don't try to copy the ImagesController.render function because that is implemented differently
