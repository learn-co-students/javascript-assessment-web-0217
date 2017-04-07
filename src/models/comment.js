// create Comment class here
class Comment {
  constructor(comment, imageId){
    this.imageId = imageId
    this.constructor.all.push(this)
    this.findImage()
    this.commentContent = comment
  }

    findImage(imageId){
      let images = Image.all
      if (imageId === Image.id) {
        this.comments.forEach(comment => {
          comments.push(comment)
      })
    }
    return image 
  }


    commentEl(){
      return `<li id="comment-${this.id}"> </li>`
    }

    Comment.all = []
}
