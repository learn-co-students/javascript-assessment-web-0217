// create Comment class here
class Comment {
  constructor (imageId, comment){
    this.id = this.constructor.all.length
    this.commentContent = comment
    this.imageObject = this.findImage(imageId)
    this.comment = comment
    this.constructor.all.push(this)
  }
}

Comment.prototype.commentEl = () => {
  return `<div class="comment">
  <li id=comment-${this.id}>
  ${this.comment}
  </li>`
}

Comment.all = []

Comment.prototype.findImage = (imageID) => {
  let id = parseInt(imageID)
  let imageObject = Image.all.find(id)
  imageObject.comments.push(this.comment)
  return Image.all.find(id)
}
