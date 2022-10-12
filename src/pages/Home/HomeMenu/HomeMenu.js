import React, { Fragment,useState } from 'react';
import { Tabs, Radio, Space } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { layDanhSachPhimTrongRapAction } from '../../../redux/actions/QuanLyRapActions';
import { useSelector, useDispatch } from 'react-redux'
const { TabPane } = Tabs;

export default function Demo ({heThongRapChieu}) {
    const [state, setState] = useState({ tabPosition: "left" });
    const {heThongphimRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const dispatch = useDispatch();
    
    const handleClickOpen = (data) => {
        dispatch(layDanhSachPhimTrongRapAction(1));
      };



   let renderHeThongRap = () => {
        return heThongRapChieu?.map((heThongRap, index) => {
            let { tabPosition } = state;
            return <TabPane onClick={() => handleClickOpen(heThongRap.id)} tab={ <div style={{ width: '300px', display: 'flex' }} >
            <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" /> <br />
            <div className="text-left ml-2"  onChange={console.log("da bam1")}>
                {heThongRap.name}
               {console.log("qua la ngu " , heThongphimRapChieu)}
                <p className="text-red-200">Chi tiết</p>
            </div>
            
        </div>
            } key={index}>
                <Tabs onChange={console.log("oc cho")} tabPosition={tabPosition}>

                        return <TabPane   key={index}   >
                            {/*Load phim tương ứng */}
                            {heThongphimRapChieu?.map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="my-5" >
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ height: 75, width: 75 }} src={phim.image} alt={phim.title} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                                            <div className="ml-2">
                                                <h1 className="text-2xl text-green-700" >{phim.title}</h1>
                                               
                                                <div className="grid grid-cols-6 gap-6">
                                                    {phim.filmInCinemas?.slice(0, 12).map((lichChieu, index) => {
                                                        if(heThongRap.id === lichChieu.cinemaId){
                                                            return <NavLink to={`/checkout/${lichChieu.cinemaId}`} key={index}  className="text-2xl text-green-400" >
                                                            {moment(lichChieu.startime).format('hh:mm A')} 
                                                            {moment(lichChieu.endtime).format('hh:mm A')}
                                                        </NavLink>
                                                        }
                                                      
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
                   {renderHeThongRap(heThongphimRapChieu)}
                </Tabs>
            </>
        );
    
}