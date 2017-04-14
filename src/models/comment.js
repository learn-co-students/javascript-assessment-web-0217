class Comment{
  constructor(comment, imageId){
    this.image = this.findImage(imageId)
    this.comment = comment
    Comment.all.push(this)
  }


   findImage(imageId){
    let img = Image.all.find((image) => {
      return image.id === imageId
    })
    img.comments.push(this)
    return img
  }

  commentEl(){
    return `<li id=${this.id}>${this.comment}</li>`
  }
}



Comment.all = []
