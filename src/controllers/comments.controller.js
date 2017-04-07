'use strict';

class CommentsController extends ImageController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.$wrapper = $('#wrapper')
  }


  CommentsController.prototype.init = function() {
    this.addCommentFormListener()
    this.render()
  }

  CommentsController.prototype.addCommentFormListener() = function() {
    var self = this
    this.$wrapper.on('click', '.add-comment', function() {
      var commentId = ($(this).parent('h2').next('ul').data('id'))
      $(this).parent('.comment').add()
    })
  }

  CommentsController.prototype.render(commentObject) = function(ul) {
    $('ul#comments').append(comment.commentEl());
  }

}

// init() {
//   var CommentsController = function(comment, imageId) {
//     this.comment = comment;
//     this.imageId = imageId
//     this.init()
//   }
// }

// addCommentFormListener() {
//   // create comment form listener code here
//   document.getElementByID('add-comment').addEventListener("submit", function() {
//       for (var i = 0, j = this.Comment.all.length; i < j; i++) {
//         if (this.comment[i].value !== "" {
//           return(this.comment[i].id)
//         } else {
//           return alert('error')
//         }
//       }
//     }
//   }
