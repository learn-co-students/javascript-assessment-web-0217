'use strict';

class Comment {
  constructor(commentText, imageId) {
      this.text = commentText
      this.imageId = parseInt(imageId)
      this.image = this.findImage()
      this.$postTarget = $(`ul #comments-${this.imageId}`)
      Comment.all.push(this)
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

  static deleteComment(event) {
    console.log(event)
  }
}
