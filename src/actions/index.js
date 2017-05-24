/**
 * Created by shiqian on 2017/4/25.
 */
import Utils from '../base/Utils';
import dataJson from '../json/data.json'
const receiveData = res => ({
  type: 'ALLRES',
  blogs: res
});
const findData = res =>({
  type: 'SEARCHBLOGS',
  searchBlogs: res
});

export const getAllData = ()=>dispatch=>{
  Utils.fetch('/all',{}).then((res)=>{
    dispatch(receiveData(res))
  },(error)=>{
    console.log(dataJson)
  })
};
export const searchData = (text)=>dispatch=>{
  Utils.fetch('/all',{searchAuthor:text,type:'search'}).then((res)=>{
    dispatch(findData(res))
  },(error)=>{
    console.log(dataJson)
  })
};
// export const deleteData = (search,deleted)=>{
//   for(let i=0; i<search.length; i++){
//     if(search[i]._id===deleted._id){
//       search.splice(i,1);
//       return findData(search)
//     }
//   }
// };
export const deleteData = (search,deleted)=>dispatch=>{
  Utils.fetch('/delete',{id:deleted._id}).then((res)=>{
    console.log(res)
    for(let i=0; i<search.length; i++){
      if(search[i]._id===deleted._id){
        search.splice(i,1);
        dispatch(findData(search))
        return
      }
    }
  },(error)=>{
  })
};
