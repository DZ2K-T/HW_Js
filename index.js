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

// tinh diem uu tien
const diemKhuvuc = (khuvuc) => {
  if (khuvuc() === "A") {
    return 2;
  } else if (khuvuc() === "B") {
    return 1;
  } else if (khuvuc() === "C") {
    return 0.5;
  } else {
    return 0;
  }
};

const diemDoituong = (doituong) => {
  if (doituong() === "1") {
    return 2.5;
  } else if (doituong() === "2") {
    return 1.5;
  } else if (doituong() === "3") {
    return 1;
  } else {
    return 0;
  }
};

// const kiemTraketqua = (diemchuan + diemMon1 + diemMon2 + diemMon3 + diemKhuvuc + diemDoituong)  => {
//     const diemUutienkhuvuc = diemKhuvuc(khuvuc)

// }
