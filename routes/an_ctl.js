const router = require('express').Router;

function test(a,b){
  return a+b;
}

router.get('/angulartest',function(req, res){
  test(a, b);
});