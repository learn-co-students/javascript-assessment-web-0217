'use strict';
// Comments Controller

class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.$wrapper = $('#wrapper')
  }

  init() {
    // kick off controller from here
  }

  addCommentFormListener() {
    this.$wrapper.on('click', '.add-comment', function(e) {
      e.preventDefault()
      var imageId = parseInt($(this).parents('h2').next('ul').data('id'))
      console.log(Image.all.splice(imageId, 1, null))
    })
  }
}
