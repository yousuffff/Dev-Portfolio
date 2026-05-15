export const injectFonts = () => {
  if (document.getElementById("pf-fonts")) return;
  const l = document.createElement("link");
  l.id = "pf-fonts";
  l.rel = "stylesheet";
  l.href =
    "https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;500;700;800&family=JetBrains+Mono:wght@300;400&display=swap";
  document.head.appendChild(l);
};
