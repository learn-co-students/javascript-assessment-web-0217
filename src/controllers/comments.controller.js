class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    // create comment form listener code here
    $("form#add-comment").each( (index, element) =>{
      element.addEventListener("submit", (event)=>{
        event.preventDefault()
        let comment = new Comment(event.currentTarget[0].value, event.currentTarget.dataset.id)
        this.render(comment)
      })
    })
  }

  render(comment){
    document.findElementByID(comment.id).path[2].appendChild(comment.commentEl())
  }
}
