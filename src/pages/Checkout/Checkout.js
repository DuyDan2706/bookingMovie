import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import style from './Checkout.module.css'
export default function Checkout(props) {
  
    const {userLogin} = useSelector( state => state.QuanLyNguoiDungReducer)
    //lấy thông tin đặt vé 
    const {chiTietPhongVe}= useSelector(state=>state.QuanLyDatVeReducer);
    console.log({chiTietPhongVe})

   const dispatch =useDispatch();

    useEffect(()=>{
        // gọi hàm tạo ra 1 asyn  function
      const action = layChiTietPhongVeAction(props.match.params.id)

         dispatch(action)
    },[])


    return (
        <div className=" min-h-screen mt-5" >
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <div className="flex flex-col items-center mt-5">
                        
              <div className="bg-black " style={{width:'80%', height:15}}>       
              
              </div>
                 <div  className={`${style['trapezoid']} text-center `}>
                   <h3 className="mt-3 text-black"> màn hình</h3>
                 </div>
                 </div>
                </div>
                <div className="col-span-3">
                    <h3 className="text-green-400 text-center text-4xl"> </h3>
                    <hr />
                    <h3 className="text-xl mt-2">Lật mặt 48h</h3>
                    <p>Địa điểm: CGV: vincom:3/2</p>
                    <p>Ngày chiếu:13/9/2022 -12:30 RẠP 5</p>
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg">Ghế</span>

                        
                        </div>
                        <div className="text-right col-span-1">
                            <span className="text-green-800 text-lg">0đ
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="my-5">
                        <i>Email</i> <br />
                        {userLogin.email}
                    </div>
                    <hr />
                    <div className="my-5">
                        <i>Phone</i> <br />
                        {userLogin.soDT}
                    </div>
                    <hr/>
                    <div className="my-5">
                    <div>
  <label htmlFor="ma_giam_gia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mã giảm giá</label>
  <input type="text" id="ma_giam_gia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mã giảm giá" required />
</div>
                        <br/>
                        <hr />
                    </div>
                    <div className="my-5">
                    <i>Phương thức thanh toán</i> <br />
                    

                    </div>
                    <hr/>
                    <div className="mb-0 h-full flex flex-col items-center" style={{ marginBottom: 0 }}>
                        <div  className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer">
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}