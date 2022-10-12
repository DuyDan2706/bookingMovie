import React, { Fragment } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { layDanhSachPhimTrongRapAction } from '../../../redux/actions/QuanLyRapActions';
import { useSelector, useDispatch } from 'react-redux'
const { TabPane } = Tabs;

export default function Demo (props) {

    const {heThongphimRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();
    
    const handleClickOpen = (data) => {
        dispatch(layDanhSachPhimTrongRapAction(1));
      };



   let renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((heThongRap, index) => {
            let { tabPosition } = this.state;
            return <TabPane onClick={() => handleClickOpen(heThongRap.id)} tab={ <div style={{ width: '300px', display: 'flex' }} >
            <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" /> <br />
            <div className="text-left ml-2">
                {heThongRap.name}
               {console.log("qua la ngu " , heThongphimRapChieu)}
                <p className="text-red-200">Chi tiết</p>
            </div>
            
        </div>
            } key={index}>
                <Tabs tabPosition={tabPosition}>


                    
                  
                        return <TabPane    
                            key={index}>
                            {/*Load phim tương ứng */}
                            {this.props.heThongphimRapChieu?.map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="my-5" >
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ height: 75, width: 75 }} src={phim.image} alt={phim.title} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                                            <div className="ml-2">
                                                <h1 className="text-2xl text-green-700" >{phim.title}</h1>
                                               
                                                <div className="grid grid-cols-6 gap-6">
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="text-2xl text-green-400" to="/" key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    <hr />
                                </Fragment>
                            })}


                        </TabPane>

                   
                </Tabs>
            </TabPane>
        })
    }



        const { tabPosition } = "left";
        return (
            <>

                <Tabs tabPosition={tabPosition}>
                   {renderHeThongRap}
                </Tabs>
            </>
        );
    
}

