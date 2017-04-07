'use strict';
// CommentModel

function Comment(content, imageId) {
  this.id = this.constructor.all.length
  this.commentContent = content
  this.image = this.findImage(imageId)
  this.constructor.all.push(this)
}

Comment.all = []

Comment.prototype.findImage = function(id) {
  let image = Image.all[id]
  if (image) {
    image.comments.push(this)
    return image
  }
  return
}

Comment.prototype.commentEl = function() {
  return `<li class="image-comment" id="image-${this.image.id}-comment-${this.id}">
            <p>${this.commentContent}    <button class="destroy-comment" data-id=${this.id}>x</button></p>
          </li>`
}
