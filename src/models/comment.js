// create Comment class here
const comments = []

class Comment {
  constructor(comment, picId) {
    this.id = picId;
    this.image = this.findImage(picId)
    this.commentContent = comment
    comments.push(this)
  }

  static all(){
    return comments
  }

  findImage(id){
    let foundImage = Image.all.find((image) => {
      return image.id === id
    })
    foundImage.comments.push(this)
    return foundImage
  }

  commentEl(){
    return `
      <ul>
        <li id=comment-${this.id}>${this.commentContent}</li>
      </ul>
    `
  }
}
