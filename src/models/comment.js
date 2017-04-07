// create Comment class here

var allComments = []

class Comment {
  constructor(comment, imageId){
    Comment.all().push(this)
    this.id = Comment.all().length
    this.image = this.findImage(imageId)
    this.commentContent = comment
  }

  static all(){
    return allComments
  }

  findImage(imageId){
     return Image.all.find((image) => {
       return image.id === imageId
     })
   }

   commentEl(){
     return `<li id='comment-${this.id}'>${this.commentContent}</li>`
   }

}
