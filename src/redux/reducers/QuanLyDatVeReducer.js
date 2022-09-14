import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import { DAT_VE, SET_CHI_TIET_PHONG_VE } from "../actions/types/QuanLyDatVeType";



const stateDefault = {
//    chiTietPhongVe:{}
chiTietPhongVe: new ThongTinLichChieu(),
danhSachGheDangDat:[    ]
   

}
export const QuanLyDatVeReducer = (state=stateDefault,action)=>{
    switch (action.type) {

        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe;
            return {...state}
        }
        case DAT_VE :{
            // cập nhật danh sách ghế đang đặt
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]
           let index =danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe ===action.gheDuocChon.maGhe)         
              if(index!=-1){
                // nếu tìm thấy ghế được chọn  trong mảng có nghĩa  trước đó đã click vào rồi  ==> xóa đi
                danhSachGheCapNhat.splice(index,1)
              }else {
                danhSachGheCapNhat.push(action.gheDuocChon)
              }

            console.log(action)
            return {...state,danhSachGheDangDat:danhSachGheCapNhat}
        }







        default: return { ...state }
    }

}