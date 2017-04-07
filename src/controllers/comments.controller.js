class Comment {

  constructor(comment, imageId) {
    this.comment = comment
    this.imageId = imageId
    //TODO this is not an image id, but the encapsulating UL (readme off?). should be changed
    this.image = $(`#image-${imageId}`)
    this.id = Comment.all.length
    Comment.all.push(this)
  }

  static findImage(id) {
    return Comment.all.find((element) => {
      if (element.imageId === id) {
        CommentsController.render(element)
        return true
      }
    })
  }

  commentEl() {
    return `<li id="${this.id}">${this.comment}</li>`
  }

}
Comment.all = []


class CommentsController {

  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  static render(commentObject) {
    $(`#comments-${commentObject.imageId}`).append(commentObject.commentEl())
  }

  static handleFormSubmit(event, commentText, imageId) {
    event.preventDefault()
    let commentObject = new Comment(commentText, imageId)
    CommentsController.render(commentObject)
  }

  addCommentFormListener() {
    this.$addCommentForm.each(function(id) {
      let imageId = id
      $(`#image-${id}`).submit(function(event) {
        let commentText = $(`#comment-description-${imageId}`).val()
        $(`#comment-description-${imageId}`).val("")
        CommentsController.handleFormSubmit(event, commentText, imageId)
      })
    })
  }

}

'use strict';
// Images Controller
function ImagesController() {
  this.$addImage = $('#add_image');
  this.$imageTitleInput = $('#image_title');
  this.$imageUrlInput = $('#image_url');
  this.$selectImageMenu = $('#select_image');
  this.$addCommentForm = $('#add-comment');
  this.$wrapper = $('#wrapper');
}

ImagesController.prototype.hideCommentForm = function(){
  this.$addCommentForm.hide(); // initially hide add comment form
};

ImagesController.prototype.destroyImageLiveEventListener = function(){
  var self = this;
  this.$wrapper.on('click', '.destroy-image', function(){ //live event imageener
    var imageId = parseInt($(this).parents('h2').next('ul').data('id'));
    Image.all.splice(imageId, 1, null);
    self.$selectImageMenu.find('option[value="'+imageId+'"]').remove();
    $(this).parents('.image').remove();
  });
};

ImagesController.render = function(image) {
  $('#images').append(image.imageEl());
}

ImagesController.prototype.init = function() {
  this.hideCommentForm();
  this.destroyImageLiveEventListener();
  Image.load()
};
