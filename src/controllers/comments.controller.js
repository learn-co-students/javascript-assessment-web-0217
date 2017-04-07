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
    this.$wrapper.on('click', '.add-comment', function() {

    })
  }
}
