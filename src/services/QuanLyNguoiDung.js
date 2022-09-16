import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyNguoiDungService  extends baseService{

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap);
    }
    //  trả luôn thông tin cá nhân :)
    LayThongTinNguoiDung = ()=>{
         return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)  

    }
  
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
