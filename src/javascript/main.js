let Menu = () => {
  let hambergr = document.querySelector(".hambergear");
  let menu = document.querySelector(".menu");
  let closse = document.querySelector(".closse");
  hambergr.addEventListener("click", () => {
    menu.style.right = "0";
    closse.addEventListener("click", () => {
      menu.style.right = "-100%";
    });
  });

  document.querySelectorAll(".ocardemo").forEach((item) => {
    item.addEventListener("click", () => {
      let sub_menu = item.nextElementSibling;
      sub_menu.style.display =
        sub_menu.style.display === "flex" ? "none" : "flex";
    });
  });
  document.querySelectorAll(".drowdon").forEach((bottom) => {
    bottom.addEventListener("click", () => {
      let sub_item = bottom.nextElementSibling;
      sub_item.style.display =
        sub_item.style.display === "flex" ? "none" : "flex";
    });
  });
};
Menu();

// sloider baner site 
let Slider = () => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
Slider();

let times = () => {
  let t = 86598;

  let interval = setInterval(() => {
    if (t < 0) {
      clearInterval(interval);
      return;
    }

    let h = Math.floor(t / 3600);
    let m = Math.floor((t % 3600) / 60);
    let s = t % 60;

    h = h.toString().padStart(2, "0");
    m = m.toString().padStart(2, "0");
    s = s.toString().padStart(2, "0");

    document.querySelector(".h").textContent = h;
    document.querySelector(".m").textContent = m;
    document.querySelector(".s").textContent = s;

    t--;
  }, 1000);
};

times();



let slider_1=()=>{
  let swiperInstance; // برای نگه داشتن نمونه Swiper

function initSwiper() {
  // اگه عرض صفحه بزرگ‌تر از 640px بود → Swiper فعال بشه
  if (window.innerWidth > 640) {
    if (!swiperInstance) {
      swiperInstance = new Swiper(".slides_1", {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });
    }
  } else {
    // اگه عرض کمتر از 640px بود → Swiper غیرفعال و گرید دو‌تایی
    if (swiperInstance) {
      swiperInstance.destroy(true, true); // حذف کامل Swiper
      swiperInstance = null;
    }

    // به جای سوییپر، ظاهر گریدی بدیم
    const wrapper = document.querySelector(".slides_1 .swiper-wrapper");
    wrapper.style.display = "grid";
    wrapper.style.gridTemplateColumns = "repeat(2, 1fr)";
    wrapper.style.gap = "12px";

    // دکمه‌ها رو پنهان کنیم چون دیگه نیازی نیست
    document
      .querySelectorAll(".swiper-button-next, .swiper-button-prev")
      .forEach((btn) => {
        btn.style.display = "none";
      });
  }
}

// اجرا در بار اول
initSwiper();

// اجرا در زمان تغییر اندازه صفحه (ریسپانسیو زنده)
window.addEventListener("resize", () => {
  // قبل از بازسازی، نمایش اولیه flex رو برگردونیم برای دسکتاپ
  const wrapper = document.querySelector(".slides_1 .swiper-wrapper");
  if (window.innerWidth > 640) {
    wrapper.style.display = "";
    wrapper.style.gridTemplateColumns = "";
    wrapper.style.gap = "";
    document
      .querySelectorAll(".swiper-button-next, .swiper-button-prev")
      .forEach((btn) => {
        btn.style.display = "";
      });
  }
  initSwiper();
});
}
slider_1()


let slider_2 = () => {
  let swiperInstance;

  function initSwiper() {
    // اگر قبلاً نمونه‌ای ساخته شده بود، حذفش کن
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    // ایجاد Swiper با responsive
    swiperInstance = new Swiper(".slides_2", {
      slidesPerView: 4, // دسکتاپ پیشفرض
      spaceBetween: 8,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,

      // تنظیمات responsive
      breakpoints: {
        0: {        // موبایل
          slidesPerView: 2,
        },
        640: {      // تبلت کوچک
          slidesPerView: 2,
        },
        1024: {     // دسکتاپ
          slidesPerView: 4,
        },
      },
    });

    // دکمه‌ها مطمئن شو همیشه نمایش داده شوند
    document
      .querySelectorAll(".slides2-next, .slides2-prev")
      .forEach((btn) => {
        btn.style.display = "";
      });
  }

  // اجرا در بار اول
  initSwiper();

  // اجرا هنگام تغییر اندازه صفحه
  window.addEventListener("resize", () => {
    initSwiper();
  });
};

slider_2();



let slider_3 = () => {
  let swiperInstance;

  function initSwiper() {
    // اگر قبلاً نمونه‌ای ساخته شده بود، حذفش کن
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    // ایجاد Swiper با responsive
    swiperInstance = new Swiper(".slides_3", {
      slidesPerView: 4, // دسکتاپ پیشفرض
      spaceBetween: 8,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,

      // تنظیمات responsive
      breakpoints: {
        0: {        // موبایل
          slidesPerView: 2,
        },
        640: {      // تبلت کوچک
          slidesPerView: 2,
        },
        1024: {     // دسکتاپ
          slidesPerView: 4,
        },
      },
    });

    // دکمه‌ها مطمئن شو همیشه نمایش داده شوند
    document
      .querySelectorAll(".slides2-next, .slides2-prev")
      .forEach((btn) => {
        btn.style.display = "";
      });
  }

  // اجرا در بار اول
  initSwiper();

  // اجرا هنگام تغییر اندازه صفحه
  window.addEventListener("resize", () => {
    initSwiper();
  });
};

slider_3();


let slider_4 = () => {
  const container = document.querySelector(".myslides_3");
  if (!container) return;

  const wrapper = container.querySelector(".swiper-wrapper");
  const slides = wrapper.querySelectorAll(".myslides_3");
  let slidesCount = slides.length;

  // بیشترین slidesPerView در breakpoints
  const maxSlidesPerView = 8;

  // محاسبه loopedSlides محافظه‌کارانه
  const loopedSlides = Math.max(slidesCount, 3) + maxSlidesPerView;

  const myswiper_3 = new Swiper(container, {
    slidesPerView: 3,
    spaceBetween: 32,
    roundLengths: false, // fractional width را حذف می‌کند
    loop: true,
    // loopedSlides: loopedSlides,
    // loopAdditionalSlides: loopedSlides,
    autoplay: { delay: 3000, disableOnInteraction: false },
    navigation: {
      nextEl: ".slides3-next",
      prevEl: ".slides3-prev",
    },
    breakpoints: {
      640: { slidesPerView: 5, spaceBetween: 55 },
      1024: { slidesPerView: 6, spaceBetween: 14 },
    },
    observer: true,
    observeParents: true,
    updateOnWindowResize: true,
  });
};
slider_4()


let slider_5 = () => {
  let swiperInstance;

  function initSwiper() {
    // اگر قبلاً نمونه‌ای ساخته شده بود، حذفش کن
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    // ایجاد Swiper با responsive
    swiperInstance = new Swiper(".mySwiper_5", {
      slidesPerView: 4, // دسکتاپ پیشفرض
      spaceBetween: 8,
      // loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      // mousewheel: true,
      // keyboard: true,

      // تنظیمات responsive
      breakpoints: {
        0: {        // موبایل
          slidesPerView: 1,
          spaceBetween: 50,
        },
        640: {      // تبلت کوچک
          slidesPerView: 2,
        },
        1024: {     // دسکتاپ
          slidesPerView: 4,
        },
      },
    });

    // دکمه‌ها مطمئن شو همیشه نمایش داده شوند
    document
      .querySelectorAll(".swiper-slides5-next, .swiper-slides5-prev")
      .forEach((btn) => {
        btn.style.display = "";
      });
  }

  // اجرا در بار اول
  initSwiper();

  // اجرا هنگام تغییر اندازه صفحه
  window.addEventListener("resize", () => {
    initSwiper();
  });
};

slider_5();




let menu_api = async () => {
  try {
    let data = await fetch("https://sina-housh.github.io/json/db.json");
    let res = await data.json();

    let menuHtml = res.menu.map(item => {

      // اگر آیتم dropdown نداشت → آیتم ساده
      if (!item.dropdown || item.dropdown.length === 0) {
        return `
          <a href="${item.link}" class="lg:w-fit lg:h-[54px] lg:py-[16px] flex justify-center items-center gap-2.5 cursor-pointer">
            <span class="Shabnam lg:text-[#00000099] lg:text-[14px]">${item.tittel}</span>
          </a>
        `;
      }

      // اگر dropdown داشت → آیتم پیچیده
      return `
        <div class="lg:relative group/test1">

          <!-- اصلی -->
          <a href="${item.link}"
            class="lg:w-fit lg:h-[54px] lg:py-[16px] flex justify-center items-center gap-2.5 pl-[12px] cursor-pointer z-50">
            <span class="Shabnam lg:text-[#00000099] lg:text-[14px] group-hover/test1:text-[#FE5F55]">
              ${item.tittel}
            </span>
            <svg class="w-[12px] h-[12px] group-hover/test1:fill-[#FE5F55]" fill="#00000099" viewBox="0 0 386.257 386.257">
              <polygon points="0,96.879 193.129,289.379 386.257,96.879" />
            </svg>
          </a>

          <!-- dropdown -->
          <div class="lg:w-[330px] bg-white lg:absolute lg:top-[100%] lg:right-0 lg:hidden group-hover/test1:flex lg:flex-wrap border border-[#e2e8f0]">

            ${item.dropdown.map(sub => {

              // اگر زیرمنو خودش drface داشت → زیرزیرمنو
              if (sub.drface && sub.drface.length > 0) {
                return `
                  <div class="lg:relative group/test2 lg:hover:bg-[#F5F5F5]">

                    <!-- عنوان اصلی sub -->
                    <a href="${sub.link}"
                      class="lg:flex lg:justify-between lg:items-center lg:p-[10px] lg:w-[330px] lg:h-[42px] lg:hover:bg-[#F5F5F5] group-hover/test2:text-[#118ED8]">
                      <span class="lg:text-[12px] Shabnam text-[#00000099] group-hover/test2:text-[#118ED8]">
                        ${sub.name}
                      </span>
                      <svg class="group-hover/test2:fill-[#118ED8] w-[20px] h-[20px]" viewBox="-75.8 -75.8 227.40 227.40"
                        fill="#00000099">
                        <path d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z"/>
                      </svg>
                    </a>

                    <!-- زیرزیرمنو -->
                    <div class="lg:w-[330px]  bg-white lg:absolute right-[99.5%] top-0 hidden group-hover/test2:flex flex-col ">
                      ${sub.drface
                        .map(df => `
                          <a href="${df.link}" class="lg:flex lg:items-center lg:p-[10px] lg:w-full lg:h-[42px] lg:hover:bg-[#F5F5F5] group/test3">
                            <span class="lg:text-[12px] Shabnam text-[#00000099] group-hover/test3:text-[#118ED8]">
                              ${df.name}
                            </span>
                          </a>
                        `).join("")}
                    </div>

                  </div>
                `;
              }

              // اگر زیرمنو معمولی بود
              return `
                <a href="${sub.link}"
                  class="lg:flex lg:items-center lg:p-[10px] lg:w-full lg:h-[42px] lg:hover:bg-[#F5F5F5] group/test2">
                  <span class="lg:text-[12px] Shabnam lg:text-[#00000099] group-hover/test2:text-[#118ED8]">
                    ${sub.name}
                  </span>
                </a>
              `;
            }).join("")}

          </div>

          <!-- underline -->
          <span class="lg:w-full lg:h-[3px] bg-[#FE5F55] lg:absolute bottom-0 lg:hidden group-hover/test1:flex"></span>

        </div>
      `;
    }).join("");

    document.querySelector(".nav").innerHTML = menuHtml;

  } catch (error) {
    console.log(error.message);
  }
};

menu_api();

