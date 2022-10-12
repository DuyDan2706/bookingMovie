import { baseService } from "./baseService";
export class QuanLyRapService  extends baseService{

    constructor() {
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`api/Cinema`);
    }
    layDanhSachPhimTrongRap = (CinemaId) =>{
        return this.get(`api/FilmInCinema/AllFilmInCinema?CinemaId=${CinemaId}`)
    }

    layThongTinLichChieuPhim = (id) => {
        return this.get(`api/Film/${id}`)
    }
   
   
}



export const quanLyRapService = new QuanLyRapService();
