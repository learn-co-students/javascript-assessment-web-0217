// create Comment class here
const commentArray = []

class Comment {
  constructor(comment, image){
    this.commentContent = comment
    this.image = this.findImage(image)
    commentArray.push(this)
  }

  static all() {
    return commentArray
  }

  findImage(image) {
    let foundImage = Image.all.find(function(img) {
      return img.url === image.src
    })
    foundImage.comments.push(this.commentContent)
    return foundImage
  }

  commentEl() {
    let allComments = this.image.comments.slice(-1)
    
    return allComments.map(function(comment) {
      return `<li> ${comment} </li>`
    })
  }
}
