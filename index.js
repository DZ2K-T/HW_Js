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
const tinhChuVi = (a, b) => {
  const total = (a + b) / 2;
  return total;
};

const DiemTong = 0;
const diemCongthemkhuvuc = (Khuvuc) => {
  if (Khuvuc === "A") {
    return 2;
  } else if (Khuvuc === "B") {
    return 1;
  } else if (Khuvuc === "C") {
    return 0.5;
  } else {
    return 0;
  }
  // let diem = 0;
  // switch (Khuvuc) {
  //   case "A":
  //     diem = 2;
  //     break;
  //   case "B":
  //     diem = 1;
  //     break;
  //   case "C":
  //     diem = 0.5;
  //     break;
  //   default:
  //     diem = 0;
  //     break;
  // }
  // return diem;
};
const diemCongthemdoituong = (e) => {
  const diemDoituong = e;
  if (diemDoituong === 1) {
    return 2.5;
  } else if (diemDoituong === 2) {
    return 1.5;
  } else if (diemDoituong === 3) {
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

  const diemVungmien = diemCongthemkhuvuc(Khuvuc);
  const diemDoituong = diemCongthemdoituong(Doituong);
  const tong = diemMon1 + diemMon2 + diemMon3 + diemVungmien + diemDoituong;
  console.log(diemchuan);
  // const diemCOCC = diemCongthemdoituong(Doituong);
};

// const diemKhuvuc = (khuvuc) => {
//   if (khuvuc() === "A") {
//     return 2;
//   } else if (khuvuc() === "B") {
//     return 1;
//   } else if (khuvuc() === "C") {
//     return 0.5;
//   } else {
//     return 0;
//   }
//   console.log(`123`);
// };
// diemKhuvuc();

// const diemDoituong = (doituong) => {
//   if (doituong() === "1") {
//     return 2.5;
//   } else if (doituong() === "2") {
//     return 1.5;
//   } else if (doituong() === "3") {
//     return 1;
//   } else {
//     return 0;
//   }
// };

// const kiemTraketqua = (diemchuan + diemMon1 + diemMon2 + diemMon3 + diemKhuvuc + diemDoituong)  => {
//     const diemUutienkhuvuc = diemKhuvuc(khuvuc)

// }
