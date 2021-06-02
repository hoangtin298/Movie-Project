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

export const swalFailedWithTitle = (title) => {
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

export const stringToSlug = (str) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from =
    "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ·/_,:;";
  var to =
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
};
