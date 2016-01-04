angular.module('CommentModule').controller('CommentController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){
  $scope.allComments = [];
  $scope.articleid = 0;
  $scope.submitComment = function(articleId){
    $http.post('/comment/add', {
      articleId: articleId,
      content: $scope.commentText
    })
    .then(function updatedComments(newComment){
      $scope.allComments.push(newComment['data'].newComment);
    });
  };
  $scope.upvoteComment = function(comment){
    $http.post('/comment/upvote',{
      commentId: comment.id
    }).then(function updateCommentVotes(){
      comment.upvotes++;
    });
  };
  $scope.downvoteComment = function(comment){
    $http.post('/comment/downvote',{
      commentId: comment.id
    }).then(function updateCommentVotes(){
      comment.downvotes++;
    });
  };

  $scope.initialiseComments = function(articleId){
    $http.get('/comment/getAllForArticle?articleId='+articleId)
    .then(function updatedComments(newComments){
      if(newComments['data'].articleComments.length)
      {
        $scope.allComments = $scope.allComments.concat(newComments['data'].articleComments);
      }
    });
  };
}]);
