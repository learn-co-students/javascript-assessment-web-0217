class Comment {

  constructor(comment, imageId) {
    this.comment = comment
    this.imageId = imageId
    //TODO this is not an image id, but the encapsulating UL (readme off?). should be changed
    this.image = $(`#image-${imageId}`)
    this.id = Comment.all.length
    Comment.all.push(this)
  }

  static findImage(id) {
    return Comment.all.find((element) => {
      if (element.imageId === id) {
        CommentsController.render(element)
        return true
      }
    })
  }

  commentEl() {
    return `<li id="${this.id}">${this.comment}</li>`
  }

}
Comment.all = []


//
// new Comment(comment, imageId)
  // should initialize with an id, image object (findImage) and commentContent (the actual text of the comment)
  // should save new comment to Comment.all property
// Comment.all
  // should return all of the comment objects in an array
  // a property of the Comment class
// Comment.prototype.findImage(imageId)
  // given an int for an image id, returns the image object with that id
  // before return - adds current comment to image's comments property
// Comment.prototype.commentEl()
  // returns a string of html
  // html has an li tag with an id field and shows the comment
