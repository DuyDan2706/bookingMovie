import React, { Fragment } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import imgLoading from "../../assets/images/wait.gif";
export default function Loading() {

const {isLoading} = useSelector(state=>state.LoadingReducer)

  return (
    <Fragment>
   {isLoading ?

<div className="fixed flex items-center justify-center h-full w-screen bg-black z-999">
<img src={imgLoading} alt="" />
</div>
                 : ''
   }
   {/*  dùng phương thức 3 ngôi isloading true ? thì ra  ko thì ra rỗng : ' */}
        </Fragment>
  )
}
