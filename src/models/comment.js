// create Comment class here
class Comment {
  constructor(commentContent, imageId) {
    Comment.saveComment(this)
    this.id = Comment.all.length - 1
    this.image = this.findImage(imageId)
    this.commentContent = commentContent
  }

  static saveComment(comment) {
    this.all ? this.all.push(comment) : this.all = [comment]
  }

  findImage(int) {
    let image = Image.all[int]
    image.comments.push(this)
    return image
  }

  commentEl() {
    return `<li id=comment-${this.id}>${this.commentContent}</li>`
  }
}
