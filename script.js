(() => {
  const url = "https://wa.me/96170821770";
  const text = "مرحباً، أريد صفحة هبوط خلال 24 ساعة بسعر 299 ريال. هذه فكرة مشروعي: ";
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = `${url}?text=${encodeURIComponent(text)}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
})();
