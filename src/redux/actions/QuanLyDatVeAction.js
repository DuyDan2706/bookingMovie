import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { SET_CHI_TIET_PHONG_VE,DAT_VE_HOAN_TAT, CHUYEN_TAB, DANH_SACH_GHE } from "./types/QuanLyDatVeType";



export const layChiTietPhongVeAction =() =>{

    return async (dispatch) => {

       
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe();

            console.log('result', result);
            if (result.data.statusCode === 200) {
                dispatch({
                   
                    type:SET_CHI_TIET_PHONG_VE,
                    danhsachve:result.data.data
                })
            }
            // chuyển hương đăng nhập về trang trước đso
            
        
 
           

        } catch (error) {
            console.log('error',error)
            console.log('error', error.response?.data);
        }

    }

}
export const layChiTietgheAction =() =>{
   
    return async (dispatch) => {

       
        try {
            const result = await quanLyDatVeService.danhsachghe();

      
            if (result.data.statusCode === 200) {
                console.log('danh sach ghe dan', result);
                dispatch({
                   
                    type:DANH_SACH_GHE,
                    chiTietPhongVe:result.data.data
               
                })
               
            }
            // chuyển hương đăng nhập về trang trước đso
        
 
           

        } catch (error) {
            console.log('error',error)
            console.log('error', error.response?.data);
        }

    }

}

// export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {


//     return async dispatch => {
//         try {
//                dispatch(displayLoadingAction)

//             const result = await quanLyDatVeService.datVe(thongTinDatVe);
//             console.log(result.data.content);
//             //đặt vé thành công gọi Api load  lại phòng vé
//             await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))
//             await dispatch ({type:DAT_VE_HOAN_TAT})
//             dispatch(hideLoadingAction)
//             dispatch({type:CHUYEN_TAB})
//             alert("đặt vé  thành công!")
//         } catch (error) {
//             dispatch(hideLoadingAction)

//             console.log(error.response.data);
//         }
//     }

// }