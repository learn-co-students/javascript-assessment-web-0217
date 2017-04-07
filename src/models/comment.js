// create Comment class here
class Comment {
  constructor(comment, imageId){
    this.id = this.constructor.all.length
    this.image = this.findImage(imageId)
    this.comment = comment.text
    Comment.all.push(this)
  }

  findImage(imageId){
    Image.all.forEach((image)=>{
      if(image.id==imageId){
        image.comments.push(this.comment)
        return image
      }
    })
  }

  commentEl(){
    return (`<li id=this.id> this.comment </li>`)
  }

  static all(){
    return constructor.all
  }
}
Comment.all = []
