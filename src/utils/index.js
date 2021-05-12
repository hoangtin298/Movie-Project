import Swal from "sweetalert2";

export const swalSuccess = (title) => {
  return Swal.fire({
    position: "center",
    icon: "success",
    title,
    showConfirmButton: true,
    confirmButtonText: "Đóng",
    timer: 2000,
  });
};

export const swalFailed = (error) => {
  const title = error.response.data;
  return Swal.fire({
    position: "center",
    icon: "error",
    title,
    showDenyButton: true,
    denyButtonText: `Đóng`,
    showConfirmButton: false,
    timer: 3000,
  });
};
