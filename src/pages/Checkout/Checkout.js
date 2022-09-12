import React from 'react'
import { useSelector } from 'react-redux'

export default function Checkout(props) {
  
    const {userLogin} = useSelector( state => state.QuanLyNguoiDungReducer)



    return (
        <div className=" min-h-screen mt-5" >
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                </div>
                <div className="col-span-3">
                    <h3 className="text-green-400 text-center text-4xl"> </h3>
                    <hr />
                    <h3 className="text-xl mt-2">thông tin phim</h3>
                    <p>Địa điểm:</p>
                    <p>Ngày chiếu</p>
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg">Ghế</span>

                        
                        </div>
                        <div className="text-right col-span-1">
                            <span className="text-green-800 text-lg">
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
                        <i>mã giảm giá</i> 
                        <br/>
                        <hr />
                    </div>
                    <div className="my-5">
                        <i>hình thức thanh toán
                            </i> <br/>
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