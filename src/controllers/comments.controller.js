class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
    let $target = $(`ul.image-${comment.id}`)
    Comment.prototype.commentEl($target, store.comments)
  }

  addCommentFormListener() {
    $('form').each(function(element, index) {
      element.on('submit', function (){
        event.preventDefault()
        createComment(comment, imageId)
      })
    })
  }
