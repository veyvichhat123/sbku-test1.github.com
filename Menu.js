<script>
  // Toggle submenu (unchanged)
  function toggleMenu(el) {
    el.classList.toggle("active");
  }

  // Mobile sidebar toggle
  const sidebar = document.querySelector(".sidebar");
  const menuToggle = document.querySelector(".menu-toggle");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });
</script>
