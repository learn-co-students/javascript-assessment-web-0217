// create Comment class here
class Comment{
  constructor(imageid,comment){
    this.id = this.constructor.all.length
    this.imageid = imageid
    this.message = comment
    this.constructor.all.push(this);
  }

  findImage(imageId){
    let image=Image.all[imageId]
    image.comments.push(this)
  }

  commentEl(){
    return `<li id=${this.id}>${this.message}</li>`
  }
}
Comment.all=[]
