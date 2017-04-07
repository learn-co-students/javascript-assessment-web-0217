'use strict';
// CommentModel
class Comment {
  constructor(commentText, imageId) {
      this.text = commentText
      this.imageId = parseInt(imageId)
      this.image = this.findImage()
      Comment.all.push(this)
    }

  static all() {

  }

  commentEl() {
      return CommentsView.newCommentView(this)
    }

  findImage() {
        let imageSelected = Image.all.find((image) => {
          return image.id === this.imageId
        })
        imageSelected.comments.push(this)
        this.id = imageSelected.comments.length
        return imageSelected
      }

}

Comment.all = []

// ES5
// function Comment(commentText, immageId) {
//     this.text = commentText
//     this.imageId = parseInt(imageId)
//     this.image = this.findImage()
//     this.constructor.all.push(this)
//   }
//
//   Comment.all = []
//
//   Comment.prototype.commentEl = function(text) {
//     return `<li id=comment-${this.id}><h2> comment: </h2></br><h3> ${this.text} </h3></li>`
//   }
//
//   Comment.prototype.findImage = function() {
//     let imageSelected = Image.all.find((image) => {
//       return image.id === this.imageId
//     })
//     imageSelected.comments.push(this)
//     this.id = imageSelected.comments.length
//     return imageSelected
//   }
