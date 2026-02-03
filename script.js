function searchContent() {
  const key = document.getElementById("searchInput").value.toLowerCase().trim();

  if (key === "") {
    alert("Bạn chưa nhập từ khóa ❗");
    return;
  }

  if (key.includes("phở") || key.includes("pho")) {
    document.getElementById("pho").scrollIntoView({ behavior: "smooth" });
  }
  else if (key.includes("bún") || key.includes("bun")) {
    document.getElementById("bun").scrollIntoView({ behavior: "smooth" });
  }
  else if (key.includes("món")) {
    document.getElementById("monan").scrollIntoView({ behavior: "smooth" });
  }
  else if (key.includes("giới thiệu") || key.includes("gioi")) {
    document.getElementById("gioithieu").scrollIntoView({ behavior: "smooth" });
  }
  else {
    alert("Không tìm thấy món bạn cần 😅");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("searchInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchContent();
    }
  });
});
