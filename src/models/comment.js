
const allComments = []
class Comment {
  constructor(comment, imageId) {
    this.imageId = imageId
    this.comment = comment
    allComments.push(this)
    this.findImage(imageId)
  }

  findImage(imageId) {
    let foundImg =  Image.all.find((img) => {
      if (img) {
        return img.id === imageId
      }
      else {
        return null
      }
    })
    foundImg.comments.push(this)
    return foundImg
  }

  commentEl() {
    return `<li>${this.comment}</li>`
  }

  static all() {
    return allComments
  }
}
