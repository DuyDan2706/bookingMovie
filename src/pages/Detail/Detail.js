import React, { useEffect } from 'react'
import { Button, CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import '../../assets/styles/circle.scss'
import { Tabs, Radio, Space, Rate } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { SET_CHI_TIET_PHIM } from '../../redux/actions/types/QuanLyRapType';
import { layDanhSachPhimTrongRapAction, layThongTinChiTietPhim } from '../../redux/actions/QuanLyRapActions';
import moment from 'moment'; //npm i moment
import { StarFilled, StarOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;




export default function Detail(props) {

    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);

    console.log({ filmDetail })

    const dispatch = useDispatch();

    useEffect(() => {
        //Lấy thông tin param từ url
        let { id } = props.match.params;

        dispatch(layThongTinChiTietPhim(id))
      
       
    }, [])
    useEffect(() => {
        //Lấy thông tin param từ url
        dispatch(layDanhSachPhimTrongRapAction())
       
    }, [])

    
    return (
        <div style={{ backgroundImage: `url(${filmDetail.image})`, backgroundSize: '100%', backgroundPosition: 'center', minHeight: '100vh' }}>
            <CustomCard
                style={{ paddingTop: 150, minHeight: '100vh' }}
                effectColor="#fff" // required
                color="#fff" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <div className="grid grid-cols-12">
                    <div className="col-span-5 col-start-3">
                        <div className="grid grid-cols-3">
                            <img className="col-span-1" src={filmDetail.image} style={{ width: '100%', height: 300 }} alt="123" />
                            <div className="col-span-2 ml-5" style={{ marginTop: '25%' }}>
                                <p className="text-sm text-blue-500">Ngày chiếu: {moment(filmDetail.startime).format('DD.MM.YYYY')}</p>
                                <p className="text-xl leading-9 text-blue-500">Title: {filmDetail.title}</p>
                                <p className="text-xl leading-9 text-blue-500">Director: {filmDetail.director}</p>
                   

                                {/* <p>{filmDetail.moTa}</p> */}
                            </div>
                        </div>

                    </div>

                    {/* <div className="col-span-4">
                        <h1 style={{ marginLeft: '15%', color: 'yellow', fontWeight: 'bold', fontSize: 15 }}>Đánh giá</h1>
                        <h1 style={{ marginLeft: '5%' }} className="text-green-400 text-2xl"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#78ed78', fontSize: 30 }} /></h1>
                        <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                            <span className="text-white">

                                {filmDetail.danhGia * 10}%
                            </span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>

                            </div>

                        </div>
                        <br />

                    </div> */}
                </div>

                <div className="mt-10 ml-72 w-2/3 container bg-white px-5 py-5" >
                    <Tabs defaultActiveKey="1" centered >
                        <TabPane tab="Lịch chiếu" key="1" style={{minHeight:300}}>
                            <div >
                                <Tabs tabPosition={'left'} >
                                    {filmDetail.heThongRapChieu?.map((htr, index) => {
                                        return <TabPane
                                            tab={<div className="flex flex-row items-center justify-center">
                                                <img src={htr.name} className="rounded-full w-full" style={{width:50}} />
                                                <div className="text-center ml-2">
                                                {htr.name}
                                                </div>
                                            </div>}
                                            key={index}>
                                                {htr.cumRapChieu?.map((filmInCinemas,index)=>{ 
                                                    return <div className="mt-5" key={index}>
                                                        <div className="flex flex-row">
                                                            <img style={{width:60,height:60}} src={filmInCinemas.image} />
                                                            <div className="ml-2">
                                                                <p style={{fontSize:20,fontWeight:'bold',lineHeight:1}} >{filmInCinemas.cinemaId}</p>
                                                                <p className="text-gray-400" style={{marginTop:0}}>{filmInCinemas.diaChi}</p>
                                                            </div>
                                                        </div>
                                                        <div className="thong-tin-lich-chieu grid grid-cols-4">
                                                            {filmInCinemas.lichChieuPhim?.slice(0,12).map((lichChieu,index) => {
                                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-800 font-bold">
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                </NavLink>
                                                            })}
                                                        </div>
                                                    </div>
                                                })}



                                    </TabPane>
                                    })}


                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab="Thông tin" key="2" style={{minHeight:300}}>
                           <section class="movie__info pt-4">
                            <div class ="myContainer row ">
                                <div class="col-12 col-md-6  " style={{maxWidth:'50%'}} >
                                    <div class="rowInfo mb-4" style={{display:'flex'}}>
                                        <div class="titleInfo">Ngày công chiếu</div>
                                        <div class="contentInfo">17/05/2022</div>
                                    </div>
                                    <div class="rowInfo mb-4" style={{display:'flex'}}>
                                        <div class="titleInfo">Đạo diễn</div>
                                        <div class="contentInfo">Đan</div>
                                    </div>
                                    <div class="rowInfo mb-4" style={{display:'flex'}}>
                                        <div class="titleInfo">Thể Loại </div>
                                        <div class="contentInfo">Thích Hóng Dramma</div>
                                    </div>
                                    <div class="rowInfo mb-4" style={{display:'flex'}}>
                                        <div class="titleInfo">Định Dạng </div>
                                        <div class="contentInfo">2D</div>
                                    </div>
                                    <div class="rowInfo mb-4" style={{display:'flex'}}>
                                        <div class="titleInfo">Ngôn ngữ </div>
                                        <div class="contentInfo">Việt</div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6  "style={{maxWidth:'50%'}} >
                                    <div class="rowInfo mb-4" style={{display:'flex'}}>
                                        <div class="titleInfo">Nội dung</div>
                                        <p class ="destion contentInfo">
                                        Một biệt đội được phái vào rừng sâu để tìm tài liệu tuyệt mật và những người đồng đội mất tích. Phim đang chiếu
Phim sắp chiếu

                                        </p>
                                    </div>
                                    </div>
                            </div>

                           </section>
                    </TabPane>
                        <TabPane tab="Đánh giá" key="3" style={{minHeight:300}}>
                            Đánh giá
                    </TabPane>
                    </Tabs>
                </div>

            </CustomCard>

        </div>
    )
}






