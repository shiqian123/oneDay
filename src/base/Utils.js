
import $ from 'jquery';

const Utils = {
  URL:'http://localhost:3011',
  toFormData(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
    for (name in obj) {
      value = obj[name];
      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += this.toFormData(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += this.toFormData(innerObj) + '&';
        }
      } else if (value !== undefined){
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }
    }
    return query.length ? query.substr(0, query.length - 1) : query;
  },
  fetch :function (url,params,type){
    return new Promise((resolve,reject)=>{
      let options ={
        method:'POST',
         mode:'cors',
         headers: { 'Content-Type': true ? 'application/json' : 'application/x-www-form-urlencoded'},
        body:JSON.stringify(params)
      };
      if(type){
         options.method = type
      }else{
        options.method = 'POST'
      }
      fetch(this.URL+url,options).then(response=>{
        return response.json()
      }).then(res=>{
        resolve(res)
      }).catch(err=>{
        console.log(err)
      })
    })
   // return $.ajax({
   //    type:'POST',
   //    url:this.URL+url,
   //    data:params,
   //    dataType:'json'
   //  })
  }
};
export default Utils