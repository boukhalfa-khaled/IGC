const faqs = document.querySelectorAll(".faq .content .hunk");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
