// tài khoản     id - tknv
// họ và tên     id = name
// email         id = email
// matKhau       id = password
// ngayLam       id = datepicker
// Lương cơ bàn  id = luongCB
// chức vụ       id = chucvu
// gioLam        id = gioLam

// bảng nhân viên                id = tableDanhSach


var mangNhanVien = [];
document.querySelector('#btnThemNV').onclick = function () {
    var nv = new NhanVien();
    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoVaTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;

    var ngaySinh = new Date(document.querySelector('#datepicker').value);
    nv.ngaySinh = ngaySinh.toLocaleDateString();

    nv.luong = document.querySelector('#luongCB').value;
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLam = document.querySelector('#gioLam').value;
    console.log(nv);

    // thêm kiểm tra các input tại đây


    mangNhanVien.push(nv);
    console.log(mangNhanVien);
    renderTableNhanVien(mangNhanVien);
}

function renderTableNhanVien(arrNhanVien) {
    var htmlcontent ='';

    for (var index = 0 ; index < arrNhanVien.length; index++){
        var nv = arrNhanVien[index];
        
        var tr = `
            <tr>
                <td>${nv.taiKhoan})</td>
                <td>${nv.hoVaTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngaySinh}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tinhTienLuong()}</td>
                <td>${nv.xepLoaiNhanVien()}</td>
                <td>
                    <button class="btn btn-success" id="btnxoaNV" onclick ="xoaNhanVien('${index}')">X</button>
                    <button class="btn btn-success" id="btncapNhatNV" onclick = "capNhatNV('${nv.taiKhoan}')"
                    data-toggle="modal" data-target="#myModal" >CN</button>
                </td>
            </tr>
            `;
        htmlcontent += tr;
    }
    document.querySelector('#tableDanhSach').innerHTML = htmlcontent;
}

function xoaNhanVien(index) {
    mangNhanVien.splice(index,1);
    renderTableNhanVien(mangNhanVien);
}

function capNhatNV(taiKhoanNV){

    for( index = 0 ; index < mangNhanVien.length; index++){
        var nhanVien = mangNhanVien[index];
        if (taiKhoanNV == nhanVien.taiKhoan){
            document.querySelector('#tknv').value = nhanVien.taiKhoan;
            document.querySelector('#name').value = nhanVien.hoVaTen;
            document.querySelector('#email').value = nhanVien.email;
            document.querySelector('#password').value = nhanVien.matKhau;
            
            var value = moment(nhanVien.ngaySinh).format('YYYY-MM-DD')
            document.querySelector('#datepicker').value = value;
            document.querySelector('#chucvu').value = nhanVien.chucVu;
            document.querySelector('#gioLam').value = nhanVien.gioLam;
            document.querySelector('#luongCB').value = nhanVien.luong;
            break;
        }
    }
}