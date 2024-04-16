const mobileMenuBtn = document.querySelector(".menu-button"), mobileMenu = document.querySelector(".mobile-menu-wrapper"), mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn"), mobileNavigation = document.querySelectorAll(".mobile-menu-link"), mobileOrderBtn = document.querySelector(".mobile-order-button"), tabletAndDesktopMenu = document.querySelector(".tablet-and-desktop-menu-navigation-wrapper"), tabletAndDesktopMenuLink = document.querySelector(".menu-link"); mobileMenuBtn.addEventListener("click", (() => { mobileMenu.classList.add("is-open"), document.body.style.overflow = "hidden" })), mobileMenuCloseBtn.addEventListener("click", (() => { mobileMenu.classList.remove("is-open"), document.body.style.overflow = "auto" })), mobileNavigation.forEach((e => { e.addEventListener("click", (() => { mobileMenu.classList.remove("is-open"), document.body.style.overflow = "auto" })) })), mobileOrderBtn.addEventListener("click", (() => { mobileMenu.classList.remove("is-open"), document.body.style.overflow = "auto" })), tabletAndDesktopMenuLink.addEventListener("click", (e => { e.preventDefault(), "none" === getComputedStyle(tabletAndDesktopMenu).display ? tabletAndDesktopMenu.style.display = "block" : tabletAndDesktopMenu.style.display = "none" }));