import { quanLyRapService } from "../../services/QuanLyRapService"
import { SET_CHI_TIET_PHIM, SET_DANH_SACH_TRONG_RAP_CHIEU, SET_HE_THONG_PHIM_TRONG_RAP_CHIEU, SET_HE_THONG_RAP_CHIEU } from "./types/QuanLyRapType";



export const layDanhSachHeThongRapAction = () => {
    console.log('abc')
    return async dispatch => {
        try{
            const result = await quanLyRapService.layDanhSachHeThongRap();

            console.log('result',result.data.data);
            if(result.status === 200) {
                dispatch({
                    type:SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu:result.data.data
                })
            }


        }catch(errors) {
            console.log('errors',errors.response?.data)
        }

    }
} 

export const layDanhSachPhimTrongRapAction = (id) => {
    console.log('dan n')
    return async dispatch => {
        try{
            const result = await quanLyRapService.layDanhSachPhimTrongRap(id);

            console.log('dan ne',result.data.data);
            if(result.status === 200) {
                dispatch({
                    type:SET_HE_THONG_PHIM_TRONG_RAP_CHIEU,
                    heThongphimRapChieu:result.data.data
                })
            }


        }catch(errors) {
            console.log('errors',errors.response?.data)
        }

    }
} 



export const layThongTinChiTietPhim = (id) => {
    return async dispatch => {
        try{
            const result = await quanLyRapService.layThongTinLichChieuPhim(id);

            console.log('dan ne',result.data.data);
            //Lấy được dữ liệu từ api về  => reducer

            dispatch({
                type:SET_CHI_TIET_PHIM,
                filmDetail: result.data.data
            })


        }
        catch(errors) {
            console.log('errors',errors.response?.data)

        }
    }


}