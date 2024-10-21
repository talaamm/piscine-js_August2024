function get (src , path){
    let keys = path.split('.')
    if (keys.length==1){
        for (let x in src){
            if (x === keys[0]){
                return src[x]
            }
        }
    }else if (keys.length == 2){
        for (let x in src){
            if (x === keys[0]){
               for (let y in src[x]){
                if (y=== keys[1]){
                    return src[x][y]
                }
               }
            }
        }
    }else { //(keys.length == 3)
        for (let i in src){
            if (i === keys[0]){
                for (let z in src[i]){
                    if (z === keys[1]){
                        for (let u in src[i][z]){
                            if (u === keys[2]){
                                // if (keys.length !== 3){
                                //     let value = src[i][z][u]
                                //     if (typeof value[keys[3]] === 'function') {
                                //         return value[keys[3]]();
                                //       }
                                let value = src[i][z][u];
                                if (keys.length > 3) {
                                  // Check if the next key is a method name
                                  if (typeof value[keys[3]] === 'function') {
                                    if (keys.length === 4) {
                                      // Return a reference to the method itself
                                      return value[keys[3]];
                                    } else {
                                      // Handle deeper paths or invoke the method if needed
                                      return value[keys[3]]();
                                    }
                                  }
                                }else{return src[i][z][u] }
                            }
                        }
                    }
                }
            }
        }
    }
    }