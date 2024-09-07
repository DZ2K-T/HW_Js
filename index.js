// / Nhập dữ liệu đầu vào:

// Điểm chuẩn (diemChuan).
// Điểm của 3 môn thi (diemMon1, diemMon2, diemMon3).
// Khu vực của thí sinh (khuVuc).
// Đối tượng của thí sinh (doiTuong).
// Xác định điểm ưu tiên:

// Điểm ưu tiên theo khu vực:
// Khu vực A: 2 điểm.
// Khu vực B: 1 điểm.
// Khu vực C: 0.5 điểm.
// Khu vực X (không thuộc khu vực ưu tiên): 0 điểm.
// Điểm ưu tiên theo đối tượng:
// Đối tượng 1: 2.5 điểm.
// Đối tượng 2: 1.5 điểm.
// Đối tượng 3: 1 điểm.
// Đối tượng 0 (không thuộc đối tượng ưu tiên): 0 điểm.
// Tính tổng điểm:

// Tổng điểm = điểm 3 môn thi + điểm ưu tiên khu vực + điểm ưu tiên đối tượng.
// Kiểm tra điều kiện đậu/rớt:

// Thí sinh đậu nếu tổng điểm >= điểm chuẩn và không có môn nào bị 0 điểm.

// Xuất kết quả:

// Thông báo thí sinh đậu hoặc rớt và tổng điểm đạt được.

const tinhDiemtong = (a, b, c, diemKhuvuc, diemDoituong) => {
  const total = a + b + c + diemKhuvuc + diemDoituong;
  return total;
};

const diemKhuvuc = (Khuvuc) => {
  if (Khuvuc === "A") {
    return 2;
  } else if (Khuvuc === "B") {
    return 1;
  } else if (Khuvuc === "C") {
    return 0.5;
  } else {
    return 0;
  }
};

const diemDoituong = (Doituong) => {
  if (Doituong === 1) {
    return 2.5;
  } else if (Doituong === 2) {
    return 1.5;
  } else if (Doituong === 3) {
    return 1;
  } else {
    return 0;
  }
};

const ketQuathisinh = () => {
  const diemchuan = document.getElementById("diemchuan").value * 1;
  const diemMon1 = document.getElementById("diemMon1").value * 1;
  const diemMon2 = document.getElementById("diemMon2").value * 1;
  const diemMon3 = document.getElementById("diemMon3").value * 1;
  const Khuvuc = document.getElementById("Khuvuc").value;
  const Doituong = document.getElementById("Doituong").value * 1;

  const diemKV = diemKhuvuc(Khuvuc);
  const diemDT = diemDoituong(Doituong);
  const tong = tinhDiemtong(diemMon1, diemMon2, diemMon3, diemKV, diemDT);
  if (tong >= diemchuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
    ketqua = `DAU`;
  } else {
    ketqua = `ROT`;
  }
  const pThongBaoKetqua = document.getElementById("pThongBaoKetqua");
  pThongBaoKetqua.innerHTML = `ket qua thi sinh: ${ketqua} tong diem la: ${tong}`;
};
//

/**
 * tinh va xua tien tra theo qui tac:
 *
 * 50kw dau : 500d/kw
 * 50kw ke : 650d/kw
 * 100kw ke : 850d/kw
 * 150kw ke : 1100/kw
 * con lai : 1300kw
 */

const tiendiensudung = () => {
  const khachhang = document.getElementById("khachhang").value;
  const soKw = document.getElementById("soKw").value * 1;
  let tongtien = 0;
  if (soKw <= 50) {
    tongtien = soKw * 500;
  } else if (soKw <= 100) {
    tongtien = soKw * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tongtien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tongtien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 150) * 1100;
  } else {
    tongtien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1000 + (soKw - 350) * 1300;
  }
  const pThongBaoTienDien = document.getElementById("pThongBaoTienDien");
  pThongBaoTienDien.innerHTML = `Họ tên: ${khachhang} <br>
  Tiền điện: ${tongtien} đồng`;
};
//

/**
 * dau vao
 * Người dùng nhập họ tên, tổng thu nhập năm (triệu đồng), và số người phụ thuộc.
 *
 * xu ly
 *
 * -Lấy giá trị của các trường nhập liệu.
 * Tính thu nhập chịu thuế theo công thức
 * thu nhập chịu thuế = tổng thu nhập - 4tr -(số người phụ thuộc * 1.6tr)
 *
 * đầu ra
 * Sau khi tính toán, kết quả sẽ được hiển thị phía dưới form, bao gồm họ tên, thu nhập chịu thuế, và số tiền thuế phải nộp.
 */
// const thuNhapchiuthue = () => {
//   const total = thuNhap - 4 - soNguoiphuthuoc * 1.6;
//   return total;
// };

const tinhThuethunhap = () => {
  const hoten = document.getElementById("hoten").value;
  const thuNhap = document.getElementById("thunhap").value * 1;
  const soNguoiphuthuoc = document.getElementById("soNguoiphuthuoc").value * 1;

  let thuNhapchiuthue = thuNhap - 4 - soNguoiphuthuoc * 1.6;
  if (thuNhapchiuthue < 0) {
    thuNhapchiuthue = 0;
  }

  let thueSuat = 0;
  if (thuNhapchiuthue <= 60) {
    thueSuat = 5;
  } else if (thuNhapchiuthue <= 120) {
    thueSuat = 10;
  } else if (thuNhapchiuthue <= 210) {
    thueSuat = 15;
  } else if (thuNhapchiuthue <= 384) {
    thueSuat = 20;
  } else if (thuNhapchiuthue <= 624) {
    thueSuat = 25;
  } else if (thuNhapchiuthue <= 960) {
    thueSuat = 30;
  } else {
    thueSuat = 35;
  }

  const thuePhainop = (thuNhapchiuthue * thueSuat) / 100;
  const pThongbaotienthue = document.getElementById("pThongbaotienthue");
  pThongbaotienthue.innerHTML = `Họ tên: ${hoten} <br> 
  Thu nhập chịu thuế: ${thuNhapchiuthue}(triệu đồng) <br>
  Thuế suất: ${thueSuat}% <br> 
  Số tiền thuế phải nộp: ${thuePhainop}(triệu đồng)`;
};

/**
 * đầu vào 
 * Người dùng nhập mã khách hàng, loại khách hàng (nhà dân hoặc doanh nghiệp), số kênh cao cấp, và số kết nối (chỉ cho doanh nghiệp).
Khi chọn loại khách hàng là Doanh nghiệp, trường nhập số kết nối sẽ hiển thị. Nếu chọn Nhà dân, trường này sẽ ẩn đi.

xử lý 

Lấy giá trị của các trường nhập liệu.
Tính toán phí xử lý hóa đơn, phí dịch vụ cơ bản, và thuế kênh cao cấp dựa trên loại khách hàng và số liệu được nhập.
Tính tổng số tiền hóa đơn.
Nhà dân:

Phí xử lý hóa đơn: 4.5$
Phí dịch vụ cơ bản: 20.5$
Thuế kênh cao cấp: 7.5$ / kênh

Doanh nghiệp:

Phí xử lý hóa đơn: 15$
Phí dịch vụ cơ bản: 75$ cho 10 kết nối đầu, mỗi kết nối thêm 5$/kết nối
Thuế kênh cao cấp: 50$ / kênh

đầu ra 
-Người dùng nhập mã khách hàng, chọn loại khách hàng (nhà dân hoặc doanh nghiệp).
-Nhập số kênh cao cấp và số kết nối (nếu là doanh nghiệp).
-Nhấn nút Tính Hóa Đơn để xem kết quả.
*/
// const form_tien_cap = document.getElementById('tien-cap');
const onchange_loaikhachhang = (t) => {
  const loaikhachhang = t.value;
  const soketnoi = document.getElementById("soketnoi");
  if (loaikhachhang == "danthuong") {
    soketnoi.style.display = 'none';
  } else if (loaikhachhang == "doanhnghiep") {
    soketnoi.style.display = 'block';
  }
};

const tinhThueCap = () => {
  const makhachhang = document.getElementById("makhachhang").value;
  const loaikhachhang = document.getElementById("loaikhachhang").value;
  const soketnoi = document.getElementById("soketnoi").value * 1;
  const sokenhcaocap = document.getElementById("sokenhcaocap").value * 1;
  var tong_tien = 0;
  if (loaikhachhang == "danthuong") {
    tong_tien = 4.5 + 20.5 + (7.5 * sokenhcaocap);
  } else if (loaikhachhang == "doanhnghiep") {
    if (soketnoi <= 10) {
      tong_tien = 15 + (soketnoi * 7.5) + (50 * sokenhcaocap);
    } else {
      tong_tien = 15 + (75 + ((soketnoi - 10) * 5)) + (50 * sokenhcaocap);
    }
  }
  document.getElementById("pThongbaotiencap").innerHTML = `Hóa đơn của KH ${makhachhang} là:  ${tong_tien}$`;
};

