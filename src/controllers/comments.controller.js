class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
  }

  addCommentFormListener() {
    // create comment form listener code here
    document.getElementById("newComment.id").addEventListener("onSubmit")
  }
}

CommentsController.prototype.addCommentFormListener() = function() {
  var self = this
  this.$wrapper.on('click', '.add-comment', function() {
    var commentId = parseInt($(this).parents('ul').next('li').data('id'));

    Comment.all.splice(commentId, 1, null);

    self.$selectImageMenu.find('option[value="'+commentId+'"]').add();

    $(this).parents('.comment').add();
  })
}

CommentsController.prototype.render(commentObject) = function() {
  $('#comments').append(commentObject.commentEl())
}
