import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung"
import { DANG_KI_ACTION, DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/QuanLyNguoiDungType";
import { history } from "../../App";
import { result } from "lodash";



export const dangNhapAction = (thongTinDangNhap) => {



    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);


            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.data
                })
            }
            // chuyển hương đăng nhập về trang trước đso
            alert("Đăng nhập thành công!!!")
            history.goBack();
 
            console.log('result', result);

        } catch (error) {
            console.log('error', error);
            alert("Đăng nhập  thất bại vui lòng đăng nhập lại!!!")
        }

    }

}
export const dangKiTaiKhoanAction = (thongTinDangKi) =>{
    return async (dispatch) =>{
        try {
            const result = await quanLyNguoiDungService.dangKyTaiKhoan(thongTinDangKi)
            if(result.data.statusCode === 200){
                dispatch({
                    type: DANG_KI_ACTION,
                    thongTinDangKi: result.data.data
                })
                alert("Đăng kí tài khoản thành công!!!")
                
                history.push('/home')
                console.log('dan ne alo alo', result);
            }
        } catch (error) {
            console.log("Error" , error)
        }
    }
}
export const capNhatThongTinProfileAction = (profile) =>{
    return async dispatch =>{
        try {
            const result = await quanLyNguoiDungService.capNhatThongTinProfile(profile)
            if(result.data.statusCode === 200){
                alert("Cập nhật thành công!")
                dispatch(layThongTinNguoiDungAction())
            }
        } catch (error) {
            console.log("error",error)
           
        }
    }
}





export const layThongTinNguoiDungAction = () => {


    return async (dispatch) => {

        try {
            const result = await quanLyNguoiDungService.LayThongTinNguoiDung();


            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.data
                })
            }
            
 
            console.log('thongtinnguoidung', result.data.data);

        } catch (error) {
            console.log('error', error.response.data);
        }

    }

}

