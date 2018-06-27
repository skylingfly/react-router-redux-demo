/**
 * Create by Skyling0408 on 2018/6/27.
 */

//初始state
const initstate = {
    username:'',
    islogin:false
}

//定义actionType
const LOGINSUCESS = 'LOGINSUCESS'


//派发action
export function Startlogin(name) {
  return{
      type:LOGINSUCESS,
      name
  }
}


//定义reducer
export  function User(state = initstate,action) {
    switch (action.type){
        case LOGINSUCESS:
            return {...state,islogin:true,username:action.name}
        default:
            return state
    }
}

