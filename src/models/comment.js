// create Comment class here
'use strict';

function Comment(comment, imageId) {
  this.id = imageId
  // this.findImage = function() {
  //   return document.getElementById(this.id)
  // }
  this.image = findImage()
  this.commentContent = function() {
    return this.comment.toString()
  this.all.push(this)
  }
}

Comment.prototype.findImage(imageId) {
  let image = document.getElementById(imageId)
  let comment = image.comments[imageId]
  Comment.all.append(comment)

  return image
}

Comment.prototype.commentEl = function() {
  return `
    <div class="comment">
      <ul>
        <li id="${this.id}">${this.commment}</li>
      </ul>
    </div>
  `
}

Comment.all = []
