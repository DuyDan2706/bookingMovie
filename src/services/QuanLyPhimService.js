import { baseService } from "./baseService";
import { GROUPID} from '../util/settings/config'
export class QuanLyPhimService  extends baseService{

    constructor() {
        super();
    }

    // layDanhSachBanner = () => {
    //     return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    // }
    
    layDanhSachPhim = () => {
      
        return this.get(`api/Film `)
    }
  
}




export const quanLyPhimService = new QuanLyPhimService();
