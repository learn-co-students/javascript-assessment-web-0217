// create Comment class here
'use strict';

function Comment(comment, imageId) {
  this.id = imageId
  this.findImage = function() {
    return document.getElementById(this.id)
  }
  this.commentContent = function() {
    return this.comment.toString()
  }
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
