import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
export class QuanLyDatVeService  extends baseService{

    constructor() {
        super();
    }

    layChiTietPhongVe = () => { // mã lịch chiu lay tu url
        return this.get(`api/Scheduling`)
    }
    
   //viêt api đặt vé
   
 /* thongTinDatVe =  {
        "maLichChieu": 0,
        "danhSachVe": [
          {
            "maGhe": 0,
            "giaVe": 0
          }
        ]
      }*/ 
     
      danhsachghe = () => { 
        return this.get(`api/Seat`);
    }
    //   datVe = (thongTinDatVe = new ThongTinDatVe()) => { 
    //     return this.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe);
    // }
  
}





export const quanLyDatVeService = new QuanLyDatVeService();
