'use strict';

app.factory('Post', function($resource){
  return $resource('https://ming-zhe.firebaseio.com/posts/:id.json');
})