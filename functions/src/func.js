const getSum = (str1, str2) => {
  if (str1.length > str2.length)
    {
        let t = str1;
        str1 = str2;
        str2 = t;
    }
    let str = "";
    let n1 = str1.length, n2 = str2.length;   
    str1 = str1.split("").reverse().join("");
    str2 = str2.split("").reverse().join("");
    let carry = 0;
    for(let i = 0; i < n1; i++)
    {
        let sum = ((str1[i].charCodeAt(0) -
                        '0'.charCodeAt(0)) +
                   (str2[i].charCodeAt(0) -
                        '0'.charCodeAt(0)) + carry);
        str += String.fromCharCode(sum % 10 +
                        '0'.charCodeAt(0));
        carry = Math.floor(sum / 10);
    }
    for(let i = n1; i < n2; i++)
    {
        let sum = ((str2[i].charCodeAt(0) -
                        '0'.charCodeAt(0)) + carry);
        str += String.fromCharCode(sum % 10 +
                        '0'.charCodeAt(0));
        carry = Math.floor(sum / 10);
    }
    if (carry > 0)
        str += String.fromCharCode(carry +
                       '0'.charCodeAt(0));
    str = str.split("").reverse().join("");
    return str;
};

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
  var commentsNumber=0;
  var postsNumber = 0;
  listOfPosts.forEach(post => {
    if(post.author==authorName){
      postsNumber++;
    }
    var postsComments = post.comments
    if(postsComments!=undefined){
      postsComments.forEach(comment => {
        if(comment.author==authorName){
          commentsNumber++;
        }
      });
    }
  });
  return 'Post:'+postsNumber+',comments:'+commentsNumber;
};

const tickets=(people)=> {
  var cashbox = new Object();
  var flag=true;
  cashbox.first=0;
  cashbox.second=0;
  cashbox.third=0;
  people.forEach(element => {
    if(element==25){
      cashbox.first++
    }else if(element==50){
      if(cashbox.first>0){
        cashbox.first--;
        cashbox.second++;
      }
      else{
        flag=false;
      }
    }else if(element==100){
      if(cashbox.first>0&&cashbox.second>0){
        cashbox.first--;
        cashbox.second--;
        cashbox.third++;
      }else if(cashbox.first>2){
        cashbox.first-=3;
        cashbox.third++;
      }
      else{
        flag=false;
      }
    }
  });
  if(flag==false){
    return 'NO'
  }
  else{
    return 'YES'
  }
};


module.exports = {getSum, getQuantityPostsByAuthor, tickets};
