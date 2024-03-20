function receivesAFunction(callback) {
    callback()
  }
  
  function returnsANamedFunction() {
    return function named() {
      console.log("The gazelle is Juba.")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('It has no name.')
    }
  }