'use strict';
// ImageModel

function Image(title, url) {
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
  this.title = title;
  this.url = url;
  this.comments = [];
}

Image.prototype.imageEl = function() {
  return '<div class="image"><h2><button class="destroy-image">x</button> '+this.title+'</h2><ul id="image-'+this.id+'" data-id="'+this.id+'"><img src="'+this.url+'"></img><ul id="comments-'+this.id+'"></ul><form id="add_comment" data-id='+this.id+' action="#" method="post"><label for="comment_description">Comment: </label><input type="text" id="comment_description-'+this.id+'" name="comment_description" placeholder="comment"><input type="submit" value="(+) add comment"></form></ul></div>';
};

Image.prototype.optionEl = function() {
  return '<option value="'+this.id+'">'+this.title+'</option>';
};

Image.prototype.build = function() {
   $('#images').append(this.imageEl());
};

Image.load = function() {
  Image.defaults.map(function(image){
    var newImage = new Image(image.title, image.url)
    newImage.build()
  })
}

Image.all = [];
Image.defaults = [
  {
    title: 'The Perfect Date',
    url: 'https://s3.amazonaws.com/learn-verified/perfectDate.png'
  },
  {
    title: 'Back-end v. Front-end',
    url: 'https://s3.amazonaws.com/learn-verified/backVFront.jpg'
  },
  {
    title: 'Good Programmer',
    url: 'https://s3.amazonaws.com/learn-verified/goodProgrammer.png'
  },
  {
    title: 'Need Snek',
    url: 'https://s3.amazonaws.com/learn-verified/needSnekToRun.jpeg'
  },
  {
    title: 'Risky Captcha',
    url: 'https://s3.amazonaws.com/learn-verified/hopeThisDoesntDoDmg.jpg'
  },
  {
    title: 'Amazon Sync Loader',
    url: 'https://s3.amazonaws.com/learn-verified/syncingByAmazon.gif'
  },
  {
    title: 'Just Kidding',
    url: 'https://s3.amazonaws.com/learn-verified/woopsNevermind.png'
  },
  {
    title: 'Assembly v. The World',
    url: 'https://s3.amazonaws.com/learn-verified/divideBy10.png'
  },
  {
    title: 'WaffleBoard',
    url: 'https://s3.amazonaws.com/learn-verified/waffleBoard.png'
  },
  {
    title: 'The Bat Strikes Again',
    url: 'https://s3.amazonaws.com/learn-verified/NaNx10Batman.png'
  }
];
