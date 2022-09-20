import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung"
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";
import { history } from "../../App";



export const dangNhapAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);


            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
            }
            // chuyển hương đăng nhập về trang trước đso
            
            history.goBack();
 
            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}
export const dangKiTaiKhoanAction = (thongTinDangKi) =>{
    return async (dispatch) =>{
        try {
            const result = await quanLyNguoiDungService.dangKyTaiKhoan(thongTinDangKi)
            if(result.data.statusCode === 200){
                alert("Đăng kí tài khoản thành công!!!")
                history.push('/home')
            }
        } catch (error) {
            console.log("Error" , error)
        }
    }
}






export const layThongTinNguoiDungAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.LayThongTinNguoiDung();


            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                })
            }
            
 
            console.log('result', result);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}

