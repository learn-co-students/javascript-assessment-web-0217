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
  Comment.all.push(comment)

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

// things I'm not sure of:
// comment.all is thrown into image.js like I have on like 34.
// But it's not really returning anything if I just call it as is.
// I think it would  return an empty array even though I do push things into it upon creation of an instance of Comment class (line 12)
