class CommentsController {
  constructor() {
    this.$target=$('#images')
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    // create comment form listener code here
    this.$target.on('submit','.add-comment',(event)=>{
      event.preventDefault()
      let message=$(event.currentTarget).find("input[type=text]").val()
      let imageid=$(event.currentTarget).data("id")
      let comment= new Comment(imageid, message)
      comment.findImage(imageid)
      $(event.currentTarget).find("input[type=text]").val("")
      this.render(comment)
    })
  }

  render(comment){
    let $imageul = this.$target.find("ul#comments-" + comment["imageid"])
    $imageul.append(comment.commentEl())
  }

}
