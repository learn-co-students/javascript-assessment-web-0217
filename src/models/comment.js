// create Comment class here
var id = 0
var allComments = []
class Comment {
  constructor (commentValue, imageId) {
    debugger
    this.comment = commentValue
    this.image = this.findImage(imageId)
    this.id = id
    id++
    allComments.push(this)

  }

  static all(){
    return allComments
  }

  findImage(imageId) {
    return Image.prototype.findImage(parseInt(imageId))
  }

  commentEl() {
    return `<li id=${this.id}>${this.comment}</li>`
  }

}
