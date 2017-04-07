// create Comment class here
class Comment {
  constructor(comment, imageId) {
    this.id = this.constructor.all.length
    this.commentContent = comment
    this.image = this.findImage(imageId)
    this.save()
  }
  findImage(imageId) {
    let foundImage = Image.all.filter(function(image) {
      return image.id == imageId
    })[0]
    foundImage.comments.push(this)
    return foundImage
  }
  save() {
    allComments.push(this)
  }
  commentEl() {
    return `<li id=${this.id}>${this.commentContent}</li>`
  }
  static all() {
    return allComments
  }
}

var allComments = []
