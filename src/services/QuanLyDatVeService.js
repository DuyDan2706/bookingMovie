import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyDatVeService  extends baseService{

    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => { // mã lịch chiu lay tu url
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    
  
}



export const quanLyDatVeService = new QuanLyDatVeService();