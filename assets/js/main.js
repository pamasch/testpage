// Ergänzt hier eure Booking-E-Mail-Adresse.
const bandConfig = {
  bookingEmail: "booking@example.com"
};

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  siteNav.classList.toggle("is-open", open);
});
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Menü öffnen");
  siteNav.classList.remove("is-open");
}));

const bookingForm = document.querySelector("#booking-form");
const formNote = document.querySelector("#form-note");
bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bandConfig.bookingEmail) {
    formNote.textContent = "Bitte ergänzt zuerst eure Booking-E-Mail-Adresse in assets/js/main.js.";
    formNote.setAttribute("role", "status");
    return;
  }
  const data = new FormData(bookingForm);
  const subject = encodeURIComponent(`Booking-Anfrage von ${data.get("name")}`);
  const body = encodeURIComponent(`Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\nWunschtermin: ${data.get("date") || "Noch offen"}\nArt der Veranstaltung: ${data.get("eventType") || "Nicht angegeben"}\nOrt / Location: ${data.get("location") || "Noch offen"}\nGästezahl: ${data.get("guests") || "Nicht angegeben"}\n\nWeitere Infos:\n${data.get("details") || "Keine weiteren Angaben"}`);
  window.location.href = `mailto:${bandConfig.bookingEmail}?subject=${subject}&body=${body}`;
});

