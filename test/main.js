document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.getElementById("burgerBtn");
    const closeBtn = document.getElementById("closeBtn");
    const menu = document.getElementById("menu");
  
    // Открытие меню
    burgerBtn.addEventListener("click", () => {
      menu.classList.add("active");
    });
  
    // Закрытие меню
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  
    // Выпадающие элементы для каждого menu-item
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
      });
    });
  });
  