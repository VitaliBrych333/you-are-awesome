// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (count) => {return count;};



const createNotEnumerableProperty = (count) => {Object.defineProperty(Object.prototype, count, {enumerable: false, value: 'value'}); return count;};




const createProtoMagicObject = () => { let magicObj = new Function (); 
                                       magicObj.__proto__=magicObj.prototype;
                                       return magicObj; 
                                     };




let n =0;
const incrementor = () => {n++;  return incrementor;};
incrementor.toString = incrementor.valueOf = () => n;




let score = 0;
const asyncIncrementor = () => {
                                 return new Promise((resolve) => {
                                 score++;
                                 return resolve(score);
                                 });
};





let count = 0;
const createIncrementer = () => {
    return {
        next : () => {
            return {value: ++count};
        },

        [Symbol.iterator]: function* () {
            yield ++count;
        }
    }
};






// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    });
};




const getDeepPropertiesCount = (r) => {
  let a = JSON.stringify(r);
  let count = a.split('}').length - 2;
  return count;
};




const createSerializedObject = () => {return null};




// const toBuffer = () => {};
const sortByProto = (massiv) => {
    function sort(first, second) {
        return  first-second;
    }
    massiv.sort(sort);
    return (massiv);
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