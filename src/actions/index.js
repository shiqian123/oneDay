/**
 * Created by shiqian on 2017/4/25.
 */
import Utils from '../base/Utils';
import dataJson from '../json/data.json'

const receiveData = res => ({
  type: 'ALLRES',
  blogs: res
})
console.log(dataJson)
export const getAllData = ()=>dispatch=>{
  Utils.fetch('/all',{}).then((res)=>{
    dispatch(receiveData(res))
  },(error)=>{
    console.log(dataJson)
  })
};
function a() {
  return function (dispatch) {
    console.log(dispatch)
    Utils.fetch('/all',{}).then((res)=>{
      console.log(res)
      dispatch(receiveData(res))
    },(error)=>{
      console.log(dataJson)
    })
  }
}
