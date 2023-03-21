function NhanVien () {
    this.taiKhoan ='';
    this.hoVaTen = '';
    this.email = '';
    this.matKhau='';
    this.ngaySinh='';
    this.luong = 0;
    this.chucVu = '';
    this.gioLam = 0;
   
    this.tinhTienLuong = function () {
        switch(this.chucVu){
            case 'Sếp' :
                var tongTien = this.luong * 3;
                break;
            case 'Trưởng phòng':
                var tongTien = this.luong * 2;
                break;
            case 'Nhân viên':
                var tongTien = this.luong;
                break;
        }
        return tongTien;
    }

    this.xepLoaiNhanVien = function () {
        if (this.gioLam >= 192 ){
            var loaiNhanVien = 'Nhân viên xuất sắc';
        }
        else if (this.gioLam >=176 && this.gioLam <=192){
            var loaiNhanVien = 'Nhân viên giỏi';
        }
        else if (this.gioLam >=160 && this.gioLam <= 176){
            var loaiNhanVien = 'Nhân viên khá';
        }else{
            var loaiNhanVien = 'Nhân viên trung bình';
        }
        return loaiNhanVien;
    }
}