'use strict';

// create Comment class here
class Comment extends Image
  constructor(comment, imageID) {
    super()
    this.id = this.constructor.all.length,
    this.comments = comments,
    this.imageID = imageID,
    this.findImage = findImage,
    this.commentContent = commentContent
  }

Comment.all = []


Comment.prototype.findImage(imageId) = function() {
  imageId = document.getElementById("image")
  imageId.innerHTML = image.map("image#id")
}

Comment.prototype.commentEl = function() {
  return (`<div class="comment">
    <h2> <button class="add-image">Add</button>${this.comment} </h2>
    <ul id="comments-${this.id}"></ul>
      <form id="add-comment" class="add-comment" data-id=${this.id} action="#" method="post">
        <label for="comment-description">Comment: </label>
        <li><input type="text" id="comment-description-${this.id}" class="user-text" name="comment-description" placeholder="comment"></li>
        <input type="submit" value="(+) add comment">
      </form>
    </ul>
  </div>`);
}
