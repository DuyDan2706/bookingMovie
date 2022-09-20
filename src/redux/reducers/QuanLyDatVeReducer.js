import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import { CHUYEN_TAB, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../actions/types/QuanLyDatVeType";



const stateDefault = {
//    chiTietPhongVe:{}
chiTietPhongVe: new ThongTinLichChieu(),
danhSachGheDangDat:[ ], //danh sách ghế đã đặt
danhSachGheKhachDat:  [{maGhe:48350},{maGhe:48351}],  // cái này để dùng cho realtime nha
   tabActive:'1'

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


         //clear đs ghê đang đặt 

         case DAT_VE_HOAN_TAT : {
              state.danhSachGheDangDat = [];
              return{...state}
         }

        case CHUYEN_TAB :{
          state.tabActive ='2';
          return{...state}
        }
         // quay laij 
         case 'CHANGE_TAB_ACTIVE': {
          state.tabActive =action.number;
          return{...state}
         }


        default: return { ...state }
    }

}