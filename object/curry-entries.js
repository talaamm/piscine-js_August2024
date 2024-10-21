function defaultCurry(obj1) {
    return function (obj2) {
        let res = {};
        for (let key in obj1) {
            res[key] = obj1[key];
        }
        for (let key in obj2) {
            res[key] = obj2[key];
        }
        return res;
    };
}
function mapCurry(f){
    return function(obj) {
let objnew = {}
for (let [k,v] of Object.entries(obj)) {
let cl = f([k,v])
objnew[cl[0]] = cl[1]
}
return objnew
}
}

// function reduceCurry(f) {
//     return function(obj,n = Object.keys(obj)[0]){
//         let objnew = n
//         for (let [k,v] of Object.entries(obj)){
//             if (objnew == v){
//                 continue
//             }
//             objnew = f(objnew,obj[k])
//         }
//         return objnew
//     }

// }
function reduceCurry(obj1) {
    return function (obj2, obj3) {
        let res = obj3;
        for (let key in obj2) {
            res = obj1(res, [key, obj2[key]]);
        }
        return res;
    };
}
function filterCurry(f){
return function(obj) {
    let objnew = {}
for (let [k,v] of Object.entries(obj)) {
    if (f([k,v])) {
        objnew[k] = v 
    }
}
return objnew
}

}
function reduceScore(obj1, obj2) {
    return reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(obj1, obj2);
}

function filterForce(obj) {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj);
}

function mapAverage(obj) {
    let avgScores = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(obj);
    for (let key in avgScores) {
        obj[key].averageScore = avgScores[key];
    }
    return obj;
}
// function reduceScore(obj1, obj2) {
//     let totalScore = 0;
    
//     for (let key in obj1) {
//         let v = obj1[key];
//         if (v.isForceUser) {
//             totalScore += v.pilotingScore + v.shootingScore;
//         }
//     }
    

//     for (let key in obj2) {
//         let v = obj2[key];
//         if (v.isForceUser) {
//             totalScore += v.pilotingScore + v.shootingScore;
//         }
//     }

//     return totalScore;
// }

// function filterForce(obj) {
//     let filteredObj = {};

//     for (let key in obj) {
//         let v = obj[key];
//         if (v.isForceUser && v.shootingScore >= 80) {
//             filteredObj[key] = v;
//         }
//     }

//     return filteredObj;
// }

// function mapAverage(obj) {
//     for (let key in obj) {
//         let v = obj[key];
//         obj[key].averageScore = (v.pilotingScore + v.shootingScore) / 2;
//     }
    
//     return obj;
// }
