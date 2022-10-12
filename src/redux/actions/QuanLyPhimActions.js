import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "./types/QuanLyPhimType";
import { history } from "../../App";



export const layDanhSachPhimAction = () => {
    

    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layDanhSachPhim();

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
             dispatch({
                 type:SET_DANH_SACH_PHIM,
                 arrFilm:result.data.data
             })
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}



