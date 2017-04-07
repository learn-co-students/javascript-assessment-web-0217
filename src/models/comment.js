// create Comment class here

let store = {comments: [], images: []}
let store = new Store()

const Comment = class {
  constructor(comment, imageId) {
    this.id = imageId
    this.findImage = this.findImage(imageId)
    this.comment = comment
    store.comments.push(this)
  }
  //not sure how to best connect the image object to the comment

  static all () {
    return store.comments
  }

  findImage(imageId) {
    return store().images.filter((image) => {
      image.id === imageId
    }
  }
  
  static commentEl($target, comments) {
    let commentItems = comments.map((comment) => {
      return this.commentListTemplate(comment)
    })
    $target.append(commentItems)
  }

  static commentListTemplate(comment) {
    return `<p><li class= "commentDetails" data-id="${comment.id}">
        Comment: ${comment.comment}`
  }

}
