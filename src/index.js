// Initialize

$(function() { // on document ready
  imagesController = new ImagesController();
  imagesController.init();
  commentsController = new CommentsController();
  commentsController.init();
  comments = new Comments();
});
