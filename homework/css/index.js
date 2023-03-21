
// bài 1: tính tiền lương của nhanh6 viên



document.getElementById('ketQuaBai1').onclick = function()
{ 
    var luong1Ngay = Number(100000);
    var soNgayLam = Number(document.getElementById('soNgay').value);
    var tienLuong = luong1Ngay * soNgayLam;
     document.write(tienLuong + ' dong');
}

function nhapSo(id) {
    var q =document.getElementById(id).value;
    return q;
}

document.getElementById('ketQuaBai2').onclick = function()
{
    var so1 = Number(nhapSo('soThu1'));
    var so2 = Number(nhapSo('soThu2'));
    var so3 = Number(nhapSo('soThu3'));
    var so4 = Number(nhapSo('soThu4'));
    var so5 = Number(nhapSo('soThu5'));
    var trungBinhCong = (so1+so2+so3+so4+so5)/5;
    document.writeln('trung bình cộng  ' +trungBinhCong);
}
document.getElementById('ketQuaBai3').onclick = function()
{
    var tienUSD = Number(nhapSo('usd'));
    var tienVND = tienUSD * 23500;
    document.writeln('tiền VND:  '+tienVND);
}

document.getElementById('ketQuaBai4').onclick = function()
{
    var cDai = Number(nhapSo('cDai'));
    var cRong = Number(nhapSo('cRong'));
    if(cDai == cRong){
        var chuVi = cDai*4;
        var dienTich = cDai*cDai;
        document.writeln('Hình vuông');
        document.writeln('chu vi: '+chuVi);
        document.writeln('dien tich: '+dienTich);
    }else{
        var chuVi = (cDai+cRong)*2;
        var dienTich = cDai*cRong;
        document.writeln('chu vi: '+ chuVi);
        document.writeln('dien tich: '+ dienTich);
    }
}

document.getElementById('ketQuaBai5').onclick = function()
{
    var inSo = Number(nhapSo('nhapSo'));
    var soI = Math.floor(inSo/10);
    var soII = inSo % 10;
    var tong = soI + soII;
    document.getElementById('ketQua5').innerHTML = 'tổng 2 số = ' + tong;
}