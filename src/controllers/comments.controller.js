class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
 	//1) iterates through each comment form and adds an eventlistener to trigger a function on form submit
 	//2) function should grab the imageId + comment and create a new Comment with those arguments
 	//3) execute the render function on that found image object to append the new comment
  	this.$addCommentForm.each(function(){      
        
        let id = $(this).data("id").toString()
        
        $(this).submit(function (e) {
            e.preventDefault();

            //issue: 'this' changes context from the class instance we are in bcuz we are
            //inside submit event action...
            //for now I'm going to call a new instance of the CC class right here.. 
            //this seems silly, but appears to work..
            //so this should get the desired outcome, although its wrong. Will fix if time doesnt run out 

	        let cc = new CommentsController;
            cc.render(id)
          	
          	//make input blank after comment submits
            $("#comment-description-"+id).val("");
            
            //just in case anything goes wrong with our preventDefault, throwing in
            // an extra 'return false'
            return false;
        })
    });      
  }

  render(id){
    //1) selects the appropriate ul for this comment to be added to
    //2) appends the new comment element to this ul
  	
  	var comment = $("#comment-description-"+id).val();
    var finalComment = "<li data-id='" + id + "'>"+comment+"</li>";

    let targetUl = $("#comments-"+id);

    $(targetUl).append(finalComment);
  }
}
