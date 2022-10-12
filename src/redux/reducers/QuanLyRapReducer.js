import { SET_HE_THONG_PHIM_TRONG_RAP_CHIEU, SET_HE_THONG_RAP_CHIEU } from "../actions/types/QuanLyRapType";

const stateDefault = {
    heThongRapChieu: [],
    heThongphimRapChieu:[]
}



export const QuanLyRapReducer = (state=stateDefault,action) =>{

    switch (action.type) {
      
        case SET_HE_THONG_RAP_CHIEU  : {
            state.heThongRapChieu = action.heThongRapChieu;
            return {...state};
        }
        case SET_HE_THONG_PHIM_TRONG_RAP_CHIEU :{
            state.heThongphimRapChieu = action.heThongphimRapChieu;
            return {...state};
        }


        default: return {...state}
            break;
    }
}