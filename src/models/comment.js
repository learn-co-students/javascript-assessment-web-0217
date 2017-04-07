// create Comment class here
function Comment(comment, imageId) {
  this.id = this.constructor.all.length;
  this.imageId = imageId;
  this.commentContent = comment;
  this.constructor.all.push(comment);
}

Comment.all = [];

Comment.prototype.findImage = function(imageId) {
  return
}

Comment.prototype.imageEl = function() {
  return `<li id="">${this.comment.id}</li>`
}
// ^this.comment.id probably wrong
