/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {

  const results = [];



  // Execute all functions in parallel and store the promises in an array

  const promises = functions.map(func => func());



  // Wait for all promises to resolve

  await Promise.all(promises).then(values => {

    results.push(...values);

  });



  return results;

};


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */