const filters = document.querySelectorAll("#filters div");

document.addEventListener("click", (e) => {
  const clickX = e.clientX;
  const clickY = e.clientY;
    const rem = 10;

  let closestFilter = null;
  let closestDist = Infinity;

  filters.forEach(filter => {
    const rect = filter.getBoundingClientRect();
    // clamp click point to rectangle edges
    const cx = Math.max(rect.left, Math.min(clickX, rect.right));
    const cy = Math.max(rect.top, Math.min(clickY, rect.bottom));
    const dx = clickX - cx;
    const dy = clickY - cy;
    const dist = Math.sqrt(dx*dx + dy*dy);

    if (dist < closestDist) {
      closestDist = dist;
      closestFilter = filter;
    }
  });

  if (closestFilter && closestDist <= rem) {
    e.stopPropagation();
    e.preventDefault();

    if (closestFilter.classList.contains("actief")) {
      // toggle off
      closestFilter.classList.remove("actief");
    } else {
      // remove from others, set this one
      filters.forEach(f => f.classList.remove("actief"));
      closestFilter.classList.add("actief");
    }
  }
});