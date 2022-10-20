import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import { CHUYEN_TAB, DANH_SACH_GHE, DAT_VE, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "../actions/types/QuanLyDatVeType";



const stateDefault = {
  chiTietPhongVe:[{}],
// chiTietPhongVe: new ThongTinLichChieu(),
danhsachve:{},
danhSachGheDangDat:[ ], //danh sách ghế đã đặt
danhSachGheKhachDat:  [{title:1},{title:1}],  // cái này để dùng cho realtime nha
   tabActive:'1'

}
export const QuanLyDatVeReducer = (state=stateDefault,action)=>{
    switch (action.type) {
case DANH_SACH_GHE:{
  state.chiTietPhongVe = action.chiTietPhongVe;
   return {...state}
}
        // case SET_CHI_TIET_PHONG_VE: {
        //     state.danhsachve = action.danhsachve;
        //     return {...state}
        // }
        case DAT_VE :{
            // cập nhật danh sách ghế đang đặt
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]
           let index =danhSachGheCapNhat.findIndex(gheDD => gheDD.title ===action.gheDuocChon.title)         
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

        // case CHUYEN_TAB :{
        //   state.tabActive ='2';
        //   return{...state}
        // }
        //  // quay laij 
        //  case 'CHANGE_TAB_ACTIVE': {
        //   state.tabActive =action.number;
        //   return{...state}
        //  }


        default: return { ...state }
    }

}