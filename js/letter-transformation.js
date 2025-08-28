  document.querySelectorAll("h1 a > span").forEach(span => {
    const start = (Math.random() * 40 - 20).toFixed(1) + "deg"; // -20 to 20
    const end   = (Math.random() * 40 - 20).toFixed(1) + "deg"; // another random angle
    const duration = (Math.random() * 3 + 2).toFixed(1) + "s"; // 2s – 5s

    span.style.setProperty("--start-angle", start);
    span.style.setProperty("--end-angle", end);
    span.style.animation = `wobble ${duration} ease-in-out infinite alternate`;
  });