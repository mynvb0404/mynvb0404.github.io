function updateTime() {
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const date = now.toLocaleDateString("en-GB", options);
  const time = now.toLocaleTimeString("en-GB");

  document.getElementById("datetime").textContent =
    `${date} · ${time}`;
}

// chạy lần đầu
updateTime();

// cập nhật mỗi giây
setInterval(updateTime, 1000);