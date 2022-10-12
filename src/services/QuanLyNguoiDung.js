import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyNguoiDungService  extends baseService{

    constructor() {
        super();
    }

    dangNhap = (thongTinDangNhap) => { // {taiKhoan:'',matKhau:''}
        return this.post(`api/Account/Login`,thongTinDangNhap);
    }
    //  trả luôn thông tin cá nhân :)
    LayThongTinNguoiDung = ()=>{
         return this.post(`api/Account`)  

    }
    dangKyTaiKhoan = (thongTinDangKy) =>{
    return this.post(`api/Account/Register`,thongTinDangKy);
  }
//   capNhatThongTinProfile = (profile) =>{
//         return this.put(`/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,profile)
//     }


}




export const quanLyNguoiDungService = new QuanLyNguoiDungService();
