var recipes = { };

function updateObjectWithKeyAndValue(object, key, value){
 recipes [key]=value;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

}


function deleteFromObjectsByKey(object, key){
  delete object[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}