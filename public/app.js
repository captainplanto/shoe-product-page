let thumbNailOpacity = document.querySelectorAll(".rounded");
let productImage = document.querySelector(".product-main");
let cartThumbImage = document.querySelector(".cart-thumbnail");
let cartPriceQtyTotal = document.querySelector(".cart-price-qty-total");
let emptyCartMessage = document.querySelector(".empty-cart-message");
let cartItemAppend = document.querySelector(".cart-items");
productImagesCarousal = {
  indexOne: "../images/image-product-1.jpg",
  indexTwo: "../images/image-product-2.jpg",
  indexThree: "../images/image-product-3.jpg",
  indexFour: "../images/image-product-4.jpg",
};
const thumbNailProductImage = () => {
  for (let i = 0; i < thumbNailOpacity.length; i++) {
    thumbNailOpacity[i].addEventListener("mouseover", () => {
      thumbNailOpacity[i].style.cursor = "pointer";
      thumbNailOpacity[i].style.opacity = 0.5;
    });
    thumbNailOpacity[i].addEventListener("mouseout", () => {
      thumbNailOpacity[i].style.cursor = "pointer";
      thumbNailOpacity[i].style.opacity = 1;
    });

    thumbNailOpacity[0].addEventListener("mouseover", () => {
      productImage.src = productImagesCarousal.indexOne;
    });
    thumbNailOpacity[1].addEventListener("mouseover", () => {
      productImage.src = productImagesCarousal.indexTwo;
    });
    thumbNailOpacity[2].addEventListener("mouseover", () => {
      productImage.src = productImagesCarousal.indexThree;
    });

    thumbNailOpacity[3].addEventListener("mouseover", () => {
      productImage.src = productImagesCarousal.indexFour;
    });
  }

  productImage.addEventListener("click", () => {
    if ((document.querySelector(".modal-bg").style.display = "none")) {
      document.querySelector(".modal-bg").style.display = "block";
    }
    document.querySelector(".container-main").style.opacity = 0.3;
  });
};
thumbNailProductImage();

//MODAL BOX SECTION
const modalProductBox = () => {
  let modalbackground = document.querySelector(".modal-bg");
  let modalMainProduct = document.querySelector(".product-image-modal");
  let modalCloseBtn = document.querySelector(".modal-btn-close");
  let modalThumbOne = document.querySelectorAll(".thumnnail-product-modal");
  modalMainProduct.src = productImage.src;
  modalThumbOne[0].src = thumbNailOpacity[0].src;
  modalThumbOne[1].src = thumbNailOpacity[1].src;
  modalThumbOne[2].src = thumbNailOpacity[2].src;
  modalThumbOne[3].src = thumbNailOpacity[3].src;

  modalThumbOne[0].addEventListener("mouseover", () => {
    modalMainProduct.src = productImagesCarousal.indexOne;
  });
  modalThumbOne[1].addEventListener("mouseover", () => {
    modalMainProduct.src = productImagesCarousal.indexTwo;
  });
  modalThumbOne[2].addEventListener("mouseover", () => {
    modalMainProduct.src = productImagesCarousal.indexThree;
  });
  modalThumbOne[3].addEventListener("mouseover", () => {
    modalMainProduct.src = productImagesCarousal.indexFour;
  });
  modalCloseBtn.addEventListener("click", () => {
    document.querySelector(".container-main").style.opacity = 1;
    modalbackground.remove();
  });
};

modalProductBox();
//MODAL BOX SECTION ENDS
let nextBtn = document.querySelector(".next-modal-btn");
let prevBtn = document.querySelector(".previous-modal-btn");
let slideIndex = 0;
let slideImages = [];
slideImages[0] = "../images/image-product-1.jpg";
slideImages[1] = "../images/image-product-2.jpg";
slideImages[2] = "../images/image-product-3.jpg";
slideImages[3] = "../images/image-product-4.jpg";

const nextSliderImage = () => {
  nextBtn.addEventListener("click", () => {
    if (slideIndex < slideImages.length - 1) {
      slideIndex++;
    } else if (slideIndex > slideImages.length) {
      slideIndex - 1;
    }
    document.slide.src = slideImages[slideIndex];
  });
};

nextSliderImage();

const prevSliderImage = () => {
  prevBtn.addEventListener("click", () => {
    console.log("here now");
    if (slideIndex) {
      slideIndex--;
    }
    document.slide.src = slideImages[slideIndex];
  });
};

prevSliderImage();

const minus = document.querySelector(".subtract");
const add = document.querySelector(".addition");
let quantityValue = document.querySelector(".qtyunit");
let productPrice = document.querySelector("#price");
let pricingData = {
  price: 125.0,
  discount: 50,
};
let counter = 1;
const CounterCart = () => {
  minus.addEventListener("click", () => {
    counter--;
    quantityValue.textContent = counter;
    if (counter < 1) {
      quantityValue.textContent = 1;
    }
    PriceChange();
  });

  add.addEventListener("click", () => {
    counter++;
    quantityValue.textContent = counter;
    PriceChange();
  });
};
CounterCart();

const PriceChange = () => {
  let totalPrice = pricingData.price * quantityValue.textContent;
  productPrice.textContent = `$${totalPrice}.00`;
};

const addToCart = () => {
  document.querySelector(".add-to-cart-btn").addEventListener("click", () => {
    document.querySelector(".bg-danger").textContent =
      quantityValue.textContent;
  });
  minus.addEventListener("click", () => {
    document.querySelector(".bg-danger").textContent =
      quantityValue.textContent;
  });
};
addToCart();

const openCart = () => {
  let cartBtn = document.querySelector(".cart");
  let emptyCartContainer = document.querySelector(".empty-cart-modal");

  cartBtn.addEventListener("click", () => {
    if (emptyCartContainer.style.display === "none") {
      emptyCartContainer.style.display = "block";
    } else {
      emptyCartContainer.style.display = "none";
    }
    if (quantityValue.textContent == 0) {
      emptyCartContainer.removeChild(cartItemAppend);
      emptyCartMessage.textContent = "Your cart is empty";
    } else if (quantityValue.textContent > 0) {
      emptyCartContainer.appendChild(cartItemAppend);
    }
  });
};
openCart();

const itemsInCart = () => {
  let sneakerTitle = document.querySelector(".title-Product");
  let cartProductTitle = document.querySelector(".cart-item-title");
  let emptyCartContainer = document.querySelector(".empty-cart-modal");
  emptyCartContainer.appendChild(cartItemAppend);
  document.querySelector(".cart").addEventListener("click", () => {
    cartPriceQtyTotal.textContent = `${pricingData.price} x ${
      quantityValue.textContent
    } = $${pricingData.price * quantityValue.textContent}`;
    cartProductTitle.textContent = sneakerTitle.textContent;
    cartThumbImage.src = productImage.src;
    emptyCartMessage.remove();
  });
};
itemsInCart();

const deleteCartItem = () => {
  document.querySelector(".delete-icon").addEventListener("click", () => {
    cartItemAppend.remove();
    document.querySelector(".bg-danger").textContent = 0;
    document.querySelector(".empty-cart-modal").appendChild(emptyCartMessage);
    emptyCartMessage.textContent = "Your Cart is empty";
  });
};
deleteCartItem();





















const canvasOpen = () => {
  let openBtn = document.querySelector(".navbar-toggler");
  let canvasShow = document.querySelector(".show");
  let offBody = document.querySelector(".offcanvas");
  let btnClose = document.querySelector(".btn-close");
  let myDiv = document.createElement("div");

  openBtn.addEventListener("click", () => {
    offBody.classList.add(".show");
    canvasShow.style.visibility = "visible";
    myDiv.classList.add("offcanvas-backdrop", "fade", "show");
    document.querySelector(".icon-avater").appendChild(myDiv);
  });
  btnClose.addEventListener("click", () => {
    offBody.classList.remove(".show");
    canvasShow.style.visibility = "hidden";
    myDiv.classList.remove("offcanvas-backdrop", "fade", "show");
  });
};
canvasOpen();

const container = document.querySelector(".p_container");
const paraAnima = () => {
  anime({
    targets: container,
    keyframes: [{ translateX: 300 }, { translateX: 0 }],
    duration: 1000,
    opacity: 1,
    easing: "easeOutElastic(1, .8)",
    loop: false,
  });
};
paraAnima();
/*function win() {
  if (window.scrollY = 1) {
    document.body.style.backgroundColor = "black";
    console.log("Yes");
    paraAnima();
  } else {
    document.body.style.backgroundColor = "red";
    console.log("Nooo");
  }
}
win();
*/
