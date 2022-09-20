import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction';
import style from './Checkout.module.css'
import { QuanLyDatVeReducer } from '../../redux/reducers/QuanLyDatVeReducer'
import { CloseOutlined, UserOutlined, CheckOutlined,SmileOutlined } from '@ant-design/icons'
import './Checkout.css'
import _ from 'lodash';
import { CHUYEN_TAB, DAT_VE } from '../../redux/actions/types/QuanLyDatVeType'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import { Tabs } from 'antd';
import moment from 'moment';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction';
import Timer from './Timer';
function Checkout(props) {

    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);
    //lấy thông tin đặt vé 
    const { chiTietPhongVe, danhSachGheDangDat,danhSachGheKhachDat } = useSelector(state => state.QuanLyDatVeReducer);
    console.log({ chiTietPhongVe })
    console.log('danhSachGheDangDat', danhSachGheDangDat)

    const dispatch = useDispatch();

    useEffect(() => {
        // gọi hàm tạo ra 1 asyn  function
        const action = layChiTietPhongVeAction(props.match.params.id)

        dispatch(action)
    }, [])
    // bóc tách dữ liệu ra để 
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;



    // render ra ghế viết vòng lặp map  
    const renderSeats = () => {
        return danhSachGhe?.map((ghe, index) => {

            let ClassGhevip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = '';
            // kiểm tra  từng ghế render xem có trong  mảng ghê đang đặt hay không 
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

            //check hinhf dda dat
            let classGheKhachDat = '';
            let indexGheKD = danhSachGheKhachDat.findIndex(gheKD => gheKD.maGhe === ghe.maGhe);
            if(indexGheKD !== -1){
                classGheKhachDat = 'gheKhachDat';
            }
            let classgheDaDuocDat = '';
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classgheDaDuocDat = 'gheDaDuocDat';
            }

            if (indexGheDD != -1) {
                classGheDaDat = 'gheDangDat'
            }





            return <Fragment key={index}>
                {/* <button className={`${style['ghe']}`} key={index}>{ghe.stt}</button> */}

                <button onClick={() => {
                    dispatch({
                        type: 'DAT_VE',
                        gheDuocChon: ghe
                    })
                }} disabled={ghe.daDat || classGheKhachDat !==''} className={`ghe ${ClassGhevip} ${classGheDaDat} ${classGheDangDat} ${classgheDaDuocDat} ${classGheKhachDat} text-center `} key={index}>

                    {/* <button disabled={ ghe.daDat} className={`ghe  ${classGheDaDat} `} key={index}> */}


                    {ghe.daDat  ? classgheDaDuocDat != '' ? <UserOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : <CloseOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> : classGheKhachDat !=='' ? <SmileOutlined  style={{ marginBottom: 7.5, fontWeight: 'bold' }} />  :  ghe.stt}

                </button>
                {/* {ghe.loaiGhe === 'Vip'?  <button className={`${style['ghe']} ${style['gheVip']}`} key={index}>{ghe.stt}</button>: <button className={`${style['ghe']}`} key={index}>{ghe.stt}</button>} */}
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>


        })
    }



    return (
        
        <div className=" min-h-screen mt-5" >
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                <div className="col-span-4 text-center my-auto">
          <div className="mt-2">
            <h3>Thời gian giữ vé</h3>
            <h1 className="text-red-600 font-black text-3xl mr-2">
              <Timer />
            </h1>
          </div>
        </div>
                    <div className="flex flex-col items-center mt-5">

                        <div className="bg-black " style={{ width: '80%', height: 15 }}>

                        </div>
                        <div className={`${style['trapezoid']} text-center `}>
                            <h3 className="mt-3 text-black"> màn hình</h3>
                        </div>
                        <div>
                            {renderSeats()}
                        </div>
                        
                    </div>
                    <div className="mt-5 flex justify-center">
                        <table class=" divide-y divide-gray-200 w-2/3">
                            <thead class="bg-gray-50 p-5">
                                <tr>
                                    <th>Ghế chưa đặt</th>
                                    <th>Ghế đang  đặt</th>
                                    <th>Ghế Vip</th>
                                    <th>Ghế đã được đặt</th>
                                    <th>Ghế mình mình đặt</th>
                                    <th>Ghế khách đang đặt</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td><button className="ghe text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheDangDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                                    <td><button className="ghe gheVip text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                                    <td><button className="ghe gheDaDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheDaDuocDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheKhachDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>

                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
                <div className="col-span-3">
                    {/* tổng tiền */}
                    <h3 className="text-green-400 text-center text-4xl">   {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                        return tongTien += ghe.giaVe;
                    }, 0).toLocaleString()} đ </h3>
                    <hr />
                    <h3 className="text-xl mt-2">{thongTinPhim?.tenPhim}</h3>
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-2/3">
                            <span className="text-red-400 text-lg">Ngày giờ chiếu</span>


                        </div>
                        <div className="text-center col-span-1">
                            <p className="text-green-800 text-lg">{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
                            </p>
                        </div>

                    </div>
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-3/5">
                            <span className="text-red-400 text-lg">Cụm Rạp</span>


                        </div>
                        <div className="text-center col-span-1">
                            <p className="text-green-800 text-lg">{thongTinPhim?.tenCumRap}
                            </p>
                        </div>

                    </div>
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg">Tên Rạp</span>


                        </div>
                        <div className="text-center col-span-1">
                            <p className="text-green-800 text-lg">{thongTinPhim?.tenRap}
                            </p>
                        </div>

                    </div>
                    <hr />



                    {/* <p>{thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap} </p> */}
                    {/* <p>{thongTinPhim?.diaChi}</p> có thể dùng ? nó vẫn chạy nha có 2 cách 1 cách khao báo 1 cách dùng ? */}
                    {/* <p>{thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}</p> */}
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg">Chọn Ghế </span>
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, index) => {
                                return <span key={index} className="text-green-500 text-xl"> {gheDD.stt}</span>
                            })}


                        </div>
                        <div className="text-right col-span-1">
                            <span className="text-green-800 text-lg">
                                {danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                }, 0).toLocaleString()}
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
                    <hr />
                    <div className="flex flex-row my-5">
                        <div className="w-4/5">
                            <span className="text-red-400 text-lg"> Chọn Combo</span>


                        </div>
                        <div className="text-right col-span-1">
                            <span className="text-green-800 text-lg">0đ
                            </span>
                        </div>

                    </div>
                    <hr />
                    <div className="my-5">
                        <div>
                            <label htmlFor="ma_giam_gia" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mã giảm giá</label>
                            <input type="text" id="ma_giam_gia" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mã giảm giá" required />
                        </div>
                        <br />
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
                            <div class="radio__item flex pointẻ flex-start align-items-center" >
                                <input class="radio__item--input" type="radio" name="howtopay" id="MOMO" value="MOMO"></input>
                                <label class="radio__item--label label_MOMO flex justify-items-start items-center" for="MOMO">
                                    <div class="pay__figure">
                                        <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" className="rounded-full w-full" style={{ width: 50 }} alt="MOMO" />

                                    </div>
                                    <p class="pay__text text-center ">momo </p>
                                </label>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className="mb-0 h-full flex flex-col items-center" style={{ marginBottom: 0 }}>
                        <div onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe();
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat;

                            console.log(thongTinDatVe);

                            dispatch(datVeAction(thongTinDatVe));

                        }} className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl cursor-pointer">
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


const { TabPane } = Tabs
// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {

    const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
    const dispatch = useDispatch();
    console.log('tabActive', tabActive)
    return <div className="p-5">
        <Tabs defaultActiveKey={'1'} activeKey={tabActive} onChange={(key) => {
            dispatch({
                type: 'CHANGE_TAB_ACTIVE',
                number: key
            })
        }}>
            <Tabs.TabPane tab=" 01 CHỌN GHẾ & THANH TOÁN" key="1" >
                <Checkout {...props} />
            </Tabs.TabPane>
            <Tabs.TabPane tab=" 02 KẾT QUẢ ĐẶT VÉ" key="2">
                <KetQuaDatVe {...props} />
            </Tabs.TabPane>

        </Tabs>

    </div>

}
function KetQuaDatVe(props) {
    const dispatch = useDispatch();
    const { thongTinNguoiDung } = useSelector(state => state.QuanLyNguoiDungReducer);
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer);

    useEffect(() => {
        const action = layThongTinNguoiDungAction()
        dispatch(action)
    }, [])

    console.log('thongTinNguoiDung', thongTinNguoiDung)

    const renderTickeTItem = function () {

        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket.danhSachGhe);
            return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh} />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">{ticket.tenPhim}</h2>
                        <p className="text-gray-500">{ticket.tenHeThongRap} </p>
                        <p className="text-gray-500">Ngày Chiếu :{moment(ticket.ngayDat).format('hh:mm A')}- Giờ chiếu{moment(ticket.ngayDat).format('DD-MM-YYY')} </p>
                        <p>địa điểm: {seats.tenHeThongRap} </p>
                        <p>
                            <span className="font-bold">Tên rạp:</span>  {seats.tenCumRap} - <span className="font-bold">Ghế:</span>  {ticket.danhSachGhe.map((ghe, index) => { return <span className="text-green-500 text-xl" key={index}> [ {ghe.tenGhe} ] </span> })}
                        </p>
                    </div>
                </div>
            </div>
        })
    }

    return <div className="mt-5">
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4  text-purple-700 ">Lịch sử đặt vé khách hàng</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin,địa điểm , thời gian để có 1 buổi xem phim tuyệt vời. Duy Đan :)</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    {renderTickeTItem()}
                    {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="http://picsum.photos/200/200" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Lật mặt 48h</h2>
                                <p className="text-gray-500">10:20 Rạp 5, hệ thống cgv </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    </div>
}