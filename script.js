(() => {
  const encoded = document.documentElement.dataset.contact || "";
  const fallback = "https://wa.me/";
  const url = encoded ? atob(encoded) : fallback;
  const text = "مرحباً، أريد صفحة هبوط خلال 24 ساعة بسعر 299 ريال. هذه فكرة مشروعي: ";
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const separator = url.includes("?") ? "&" : "?";
    link.href = `${url}${separator}text=${encodeURIComponent(text)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
})();
