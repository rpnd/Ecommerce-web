/* === Slick Slider */
$(".main-slider").slick({
  autoplay: false,
  dots: true,
  arrows: true,
  fade: true,
});

/* === User Login Side Bar */
function sidebar() {
  let overlay = document.querySelector("#overlay");
  let enableSidebar = document.querySelectorAll(".user_account .dropdown-link");
  let openedSidebar = document.querySelector(".user-info");
  let closeSidebar = document.querySelectorAll(".user-info-close");
  enableSidebar.forEach((element) => {
    element.addEventListener("click", () => {
      openedSidebar.classList.add("active");
      overlay.classList.add("overlay");
    });
  });
  overlay.addEventListener("click", () => {
    openedSidebar.classList.remove("active");
    overlay.classList.remove("overlay");
  })
  closeSidebar.forEach((element) => {
    element.addEventListener("click", () => {
      openedSidebar.classList.remove("active");
      overlay.classList.remove("overlay");
    });
  });
}
sidebar();

/* Shopping-cart #Start*/
let closeShopCartMenu = document.querySelector(".shopping-cart .user-info-close");
let mobileNavOverlay = document.getElementById("mobile-nav-overlay");
const shopCartIcon = document.querySelector("#shopping-cart");
const shppingCartOpen = document.querySelector(".shopping-cart");
shopCartIcon.addEventListener("click", () => {
  shppingCartOpen.classList.add("active");
  mobileNavOverlay.classList.add("overlay");
})
mobileNavOverlay.addEventListener("click", () => {
  shppingCartOpen.classList.remove("active");
  mobileNavOverlay.classList.remove("overlay");
})
closeShopCartMenu.addEventListener("click", () => {
  shppingCartOpen.classList.remove("active");
  mobileNavOverlay.classList.remove("overlay");
})
/* Shopping-cart #End*/

/* === Search Box */
function search() {
  let searchBtn = document.querySelectorAll("#search-open");
  let searchBox = document.querySelector(".search-box");
  let searchInput = document.getElementById("serach-input");
  let searchIcon = document.getElementById("search-icon");
  let searchBoxClose = document.getElementById("search-box_close");
  searchBtn.forEach((element) => {
    element.addEventListener("click", () => {
      searchBox.classList.add("active");
      searchInput.focus();
    });
    searchBoxClose.addEventListener("click", () => {
      searchBox.classList.remove("active");
    });
  });
  searchInput.addEventListener("keyup", () => {
    searchIcon.classList.add("active");
    if (searchInput.value == "") {
      searchIcon.classList.remove("active");
    }
  });
}
search();

/* === Brands */
let brandsItems = document.querySelector(".brands__items").children;
for (let i = 0; i < brandsItems.length; i++) {
  brandsItems[i].addEventListener("mouseenter", function () {
    for (let x = 0; x < brandsItems.length; x++) {
      brandsItems[x].style.opacity = "0.3";
    }
    brandsItems[i].style.opacity = "1";
  });
  brandsItems[i].addEventListener("mouseleave", function () {
    for (let x = 0; x < brandsItems.length; x++) {
      brandsItems[x].style.opacity = "1";
    }
  });
}

/* === Products */
let productlinks = document.querySelectorAll(".product-links li");
let productItems = document.querySelectorAll(".product-items .product-cart");
for (let index = 0; index < productlinks.length; index++) {
  productlinks[index].onclick = function () {
    for (let rmvActive = 0; rmvActive < productlinks.length; rmvActive++) {
      productlinks[rmvActive].classList.remove("active");
    }
    this.classList.add("active");
    let showCategory = productlinks[index].getAttribute("data-filter");
    for (let getA = 0; getA < productItems.length; getA++) {
      productItems[getA].style.opacity = "0";
      setTimeout(() => {
        productItems[getA].style.display = "none";
      }, 500);
      if (
        productItems[getA].getAttribute("data-category") == showCategory ||
        showCategory == "all"
      ) {
        productItems[getA].style.opacity = "1";

        setTimeout(() => {
          productItems[getA].style.display = "block";
        }, 500);
      }
    }
  };
}

/* === Products Img List */
for (let i = 0; i < productItems.length; i++) {
  let imgList = productItems[i].querySelector(".img-list");
  let iconList = productItems[i].querySelector(".icon-list");
  productItems[i].addEventListener("mouseenter", () => {
    imgList.classList.add("active");
    iconList.classList.add("active");
  });
  productItems[i].addEventListener("mouseleave", () => {
    imgList.classList.remove("active");
    iconList.classList.remove("active");
  });
}

/* === Products small img = big img */
let smallImgs = document.querySelectorAll(".img-list img");
for (let x = 0; x < productItems.length; x++) {
  productItems[x].addEventListener("mouseenter", () => {
    let bigImg = productItems[x].querySelector(".product-cart img");
    let smallColors = productItems[x].querySelectorAll(".color-circle");
    for (let i = 0; i < smallImgs.length; i++) {
      smallImgs[i].onmouseenter = function () {
        for (let i = 0; i < smallImgs.length; i++) {
          smallImgs[i].parentElement.parentElement.classList.remove("active");
        }
        bigImg.src = smallImgs[i].src;
        smallImgs[i].parentElement.parentElement.classList.add("active");
      };
    }

    /* === Colors Change */
    for (let i = 0; i < smallColors.length; i++) {
      smallColors[i].onmouseenter = function () {
        let getColorAttribute = smallColors[i].getAttribute("data-color");
        bigImg.src = "img/fashion/products/" + getColorAttribute + ".jpg";
      }
    }
  });
}

/*=============== Open And Close Side Bar In Mobile Size ===============*/
let mobileMenuClose = document.querySelector(".mobile-nav .user-info-close");
let hamburgerIcon = document.querySelector(".hamburger-icon");
let mobileMenu = document.querySelector(".mobile-nav");
hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  mobileNavOverlay.classList.add("overlay");
})
mobileNavOverlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  mobileNavOverlay.classList.remove("overlay");
})
mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  mobileNavOverlay.classList.remove("overlay");
})

/*========================*/
let mobileNavLink = document.querySelectorAll(".dropdn-link");
for (let i = 0; i < mobileNavLink.length; i++) {
  mobileNavLink[i].addEventListener("click", () => {
    mobileNavLink[i].classList.toggle("active");
    mobileNavLink[i].nextElementSibling.classList.toggle("show");
  });
}