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

