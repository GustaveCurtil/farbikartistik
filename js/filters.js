  const filters = document.querySelectorAll("#filters div");

  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      if (filter.classList.contains("actief")) {
        // If clicked filter is already active → remove it
        filter.classList.remove("actief");
      } else {
        // Otherwise → clear others and set this one active
        filters.forEach(f => f.classList.remove("actief"));
        filter.classList.add("actief");
      }
    });
  });