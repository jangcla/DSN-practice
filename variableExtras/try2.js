function uncompress(str) {
    let bear = []
    let chars = str.split("") 
    
    for(let i = 1; i < chars.length; i += 2) {
      let number = Number(chars[i])
      let letter = chars[i - 1];
      bear.push(number)
    }
    return bear;
  } 
  
  
  
  
  
  console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
  console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
  console.log(uncompress('b1o2t1')); // 'boot'