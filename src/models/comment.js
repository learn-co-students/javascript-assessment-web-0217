'use strict';
// CommentModel

function Comment(comment, imageId) {
  this.id = this.constructor.all.length
  this.commentContent = comment
  this.image = this.findImage(imageId)
  this.constructor.all.push(this)
}

Comment.all = []

Comment.prototype.findImage(id) {
  let image = Image.all[id]
  if (image) {
    image.comments.push(this)
    return image
  }
  return
}

Comment.prototype.commentEl() {
  return `<li class="image-comment image-${this.image.id}-comment" id="image-${this.image.id}-comment-${this.id}">
            <p>${this.commentContent}</p>
          </li>`
}
