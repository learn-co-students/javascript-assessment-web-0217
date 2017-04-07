const allComments = []

class Comment {
  constructor(comment, imageId) {
    this.id = allComments.length,
    this.comment = comment
    this.imageId = imageId
    allComments.push(this)
  }

  static all() {
    return allComments
  }

  findImage(int) {
    let allImages = Image.all()
    let obj = allImages.filter(function ( obj ) {
      return obj.id === int;
      })[0];
    return obj
  }

  commentEl() {
    return `<li id=${this.id}>${this.comment}</li>`
  }

}
