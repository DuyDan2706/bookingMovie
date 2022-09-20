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
    dangKyTaiKhoan = (thongTinDangKy) =>{
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  }
}



export const quanLyNguoiDungService = new QuanLyNguoiDungService();
