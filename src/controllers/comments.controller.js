'use strict';
// Comments Controller

class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.$wrapper = $('#wrapper')
  }

  init() {
    this.addCommentFormListener()
  }

  render(commentObject) {
    let $commentUl = $(`#comments-${commentObject.image.id}`)
    $commentUl.append(commentObject.commentEl())
  }

  addCommentFormListener() {
    var self = this
    this.$wrapper.on('submit', '.add-comment', function(e) {
      e.preventDefault()
      let content = this.children["comment-description"].value
      let imageId = $(e.target).parents('ul').data('id')
      var comment = new Comment(content, imageId)
      self.render(comment)
    })
  }
}
