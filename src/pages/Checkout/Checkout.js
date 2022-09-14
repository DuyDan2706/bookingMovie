import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import style from './Checkout.module.css'
import {QuanLyDatVeReducer} from '../../redux/reducers/QuanLyDatVeReducer'
import{CloseOutlined} from'@ant-design/icons'
import './Checkout.css'
import _ from 'lodash';
import {DAT_VE} from '../../redux/actions/types/QuanLyDatVeType'
export default function Checkout(props) {
  
    const {userLogin} = useSelector( state => state.QuanLyNguoiDungReducer)
    //lấy thông tin đặt vé 
    const {chiTietPhongVe,danhSachGheDangDat}= useSelector(state=>state.QuanLyDatVeReducer);
    console.log({chiTietPhongVe})

   const dispatch =useDispatch();

    useEffect(()=>{
        // gọi hàm tạo ra 1 asyn  function
      const action = layChiTietPhongVeAction(props.match.params.id)

         dispatch(action)
    },[])
   // bóc tách dữ liệu ra để 
     const{thongTinPhim,danhSachGhe}=chiTietPhongVe;



// render ra ghế viết vòng lặp map  
 const renderSeats = () => {
    return danhSachGhe?.map((ghe,index)=>{

        let ClassGhevip = ghe.loaiGhe === 'Vip' ?'gheVip':'';
        let classGheDaDat = ghe.daDat === true ? 'gheDaDat' :'';
        let classGheDangDat ='';
        // kiểm tra  từng ghế render xem có trong  mảng ghê đang đặt hay không 
    let indexGheDD =danhSachGheDangDat.findIndex(gheDD =>gheDD.maGhe ===ghe.maGhe);

      if(indexGheDD !=-1){
        classGheDaDat ='gheDangDat'
      }
  




         return <Fragment key= {index}>
             {/* <button className={`${style['ghe']}`} key={index}>{ghe.stt}</button> */}
             
             <button onClick={()=>{
                dispatch ({
                    type:'DAT_VE',
                    gheDuocChon:ghe
                })
             }} disabled={ ghe.daDat} className={`ghe ${ClassGhevip} ${classGheDaDat} ${classGheDangDat} text-center `} key={index}>
                
             {/* <button disabled={ ghe.daDat} className={`ghe  ${classGheDaDat} `} key={index}> */}
                
                
                {ghe.daDat ?<CloseOutlined style={{marginBottom:2}}/> :ghe.stt}
             
             </button>
             {/* {ghe.loaiGhe === 'Vip'?  <button className={`${style['ghe']} ${style['gheVip']}`} key={index}>{ghe.stt}</button>: <button className={`${style['ghe']}`} key={index}>{ghe.stt}</button>} */}
            {(index +1)%16 ===0 ? <br/> : ''}
         </Fragment>
         
     
    })
 }



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
                <div>
                    {renderSeats()}
                 </div>
                 </div>
                 
                </div>
                <div className="col-span-3">
                    {/* tổng tiền */}
                    <h3 className="text-green-400 text-center text-4xl">   {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                },0).toLocaleString()} đ </h3>
                    <hr />
                    <h3 className="text-xl mt-2">{thongTinPhim?.tenPhim}</h3>
                    <hr/>
                    <div className="flex flex-row my-5">
                        <div className="w-2/3">
                            <span className="text-red-400 text-lg">Ngày giờ chiếu</span>

                
                        </div>
                        <div className="text-center col-span-1">
                            <p className="text-green-800 text-lg">{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
                            </p>
                        </div>
                    
                    </div>
                    <hr/>  
                    <div className="flex flex-row my-5">
                        <div className="w-3/5">
                            <span className="text-red-400 text-lg">Cụm Rạp</span>

          
                        </div>
                        <div className="text-center col-span-1">
                            <p className="text-green-800 text-lg">{thongTinPhim?.tenCumRap}
                            </p>
                        </div>
                        
                    </div>  
                  <hr/>
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg">Tên Rạp</span>

                
                        </div>
                        <div className="text-center col-span-1">
                            <p className="text-green-800 text-lg">{thongTinPhim?.tenRap}
                            </p>
                        </div>
                        
                    </div>  
                  <hr/>


 
                    {/* <p>{thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap} </p> */}
                    {/* <p>{thongTinPhim?.diaChi}</p> có thể dùng ? nó vẫn chạy nha có 2 cách 1 cách khao báo 1 cách dùng ? */}
                    {/* <p>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p> */}
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg">Chọn Ghế </span>
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span className="text-green-500 text-xl"> {gheDD.stt}</span> 
                            })}

                        
                        </div>
                        <div className="text-right col-span-1">
                            <span className="text-green-800 text-lg">
                            {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                },0).toLocaleString()}
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
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg"> Chọn Combo</span>

                
                        </div>
                        <div className="text-right col-span-1">
                            <span className="text-green-800 text-lg">0đ
                            </span>
                        </div>
                        
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
                    <div className="my-5 " >
                    <p>Phương thức thanh toán</p> <br />
                     <div class="radio-selection">
                       
                   
                        {/* <div class ="radio__item flex pointẻ flex-start align-items-center">
                            <input class ="radio__item--input" type="radio" name="howtopay" id="visa" value="visa"></input>
                            <label class="radio__item--label label_visa flex justify-items-start items-center   " style={{marginBottom:10}} for="ATM">
                                <div class="pay__figure ">
                                   <img src ="https://kdq-react-movie-app.surge.sh/images/cash.png" className="rounded-full w-full " style={{width:50}} alt="visa"/>

                                </div>
                                <p class="pay__text text-center ml-2">Tiền mặt </p>
                            </label>
                        </div> */}
                        <div class ="radio__item flex pointẻ flex-start align-items-center" >
                            <input class ="radio__item--input" type="radio" name="howtopay" id="MOMO" value="MOMO"></input>
                            <label class="radio__item--label label_MOMO flex justify-items-start items-center" for="MOMO">
                                <div class="pay__figure">
                                   <img src ="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" className="rounded-full w-full" style={{width:50}}  alt="MOMO"/>
                                  
                                </div>
                                <p class="pay__text text-center ">momo </p>
                            </label>
                            </div>
                     </div>

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