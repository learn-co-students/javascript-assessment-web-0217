// create Comment class here

class Comment {
  constructor(comment, imageId) {
  this.comment= comment
  this.imageId= imageId
  this.commentContent =""
}
  var comments= [];

  all(){
    this.comments.push(this.comment);
    return comments
    }

}

    findImage(imageId){
      var images = document.getElementsByTagName('img');
      var srcList = [];
      for(var i = 0; i < images.length; i++) {
          srcList.push(images[i].src);
    }
    }

}
