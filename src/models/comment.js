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
  var imageObject = Image.all.find((object)=>{
    if(object.id === id){
      return object
    }
  })
  imageObject.comments.push(this.comment)
  return imageObject
}
