// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (count) => {return count;};

const createNotEnumerableProperty = (count) => {
                                                  Object.defineProperty(Object.prototype, count, {enumerable: false, value: 'value'});
                                                  return count;
                                               };

const createProtoMagicObject = () => { 
                                       let magicObj = new Function (); 
                                       magicObj.__proto__ = magicObj.prototype;
                                       return magicObj; 
                                     };

let countBracket = 0;
const incrementor = () => {
                            countBracket++; 
                            return incrementor;
                          };
incrementor.toString = incrementor.valueOf = () => countBracket;

let score = 0;
const asyncIncrementor = () => {
                                 return new Promise((resolve) => {
                                                       score++;
                                                       return resolve(score);
                                                    });
                               };

const createIncrementer = function createIncrementer() {
	                                                       let obj = {
		                                                       value: 0,
                                                           next: function() {
                                                                              this.value = this.value + 1;
                                                                              return this;
                                                                            },
		                                                       [Symbol.iterator]: function() {return this;}
	                                                       };
                                                         return obj;		
                                                       };
// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    });
};

const getDeepPropertiesCount = (obj) => {
  let newObj = JSON.stringify(obj);
  let count = newObj.split('}').length - 2;
  return count;
};

const createSerializedObject = () => {return null};

// const toBuffer = () => {};
const sortByProto = (array) => {
    function sort(first, second) {
      return first - second;
    }
    array.sort(sort);
    return (array);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
