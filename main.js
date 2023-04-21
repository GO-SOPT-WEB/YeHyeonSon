const products = [
  {
    name: "아이스 아메리카노",
    category: "커피",
    hashtag: ["고소해", "쓰리샷 가능", "풍미"],
    imgSrc: "asset/americano.jpg",
  },
  {
    name: "돌체 콜드브루",
    category: "커피",
    hashtag: ["달콤쌉싸름", "집중력 향상", "국룰"],
    imgSrc: "asset/dolche_coldbrew.jpg",
  },
  {
    name: "돌체 라떼",
    category: "커피",
    hashtag: ["달다구리", "소화에최고", "스테디셀러"],
    imgSrc: "asset/dolche_latte.jpg",
  },
  {
    name: "캐모마일 블렌드 티",
    category: "티",
    hashtag: ["오묘쌉싸름", "진정", "건강한"],
    imgSrc: "asset/camomile_blend_tea.jpg",
  },
  {
    name: "블루베리 크림치즈 케이크",
    category: "디저트",
    hashtag: ["환상적", "시그니처", "블루베리"],
    imgSrc: "asset/blueberry_cheese_cake_dessert.jpg",
  },
  {
    name: "크루와상",
    category: "디저트",
    hashtag: ["달콤바삭", "겉바속촉", "행복한맛"],
    imgSrc: "asset/croassanx_dessert.jpg",
  },
  {
    name: "잉글리쉬 브렉퍼스트 티",
    category: "티",
    hashtag: ["홍차", "벌꿀향가득", "블랙티"],
    imgSrc: "asset/english_breakfast_tea.jpg",
  },
  {
    name: "잠봉 베이글 샌드위치",
    category: "디저트",
    hashtag: ["가벼운", "강한매니아층", "건강한맛"],
    imgSrc: "asset/jambongbagle_dessert.jpg",
  },
  {
    name: "자몽허니블랙티",
    category: "티",
    hashtag: ["달콤쌉싸름", "커스텀", "시그니처"],
    imgSrc: "asset/jamonghoney_blacktea.jpg",
  },
  {
    name: "쑥크림라떼",
    category: "커피",
    hashtag: ["진한쑥향", "할미입맛저격", "매니아층존재"],
    imgSrc: "asset/ssukcream_latte.jpg",
  },
  {
    name: "고구마케이크",
    category: "디저트",
    hashtag: ["달달한", "구황작물모여라", "할미입맛"],
    imgSrc: "asset/sweetpotatocake_dessert.jpg",
  },
];

let checkboxes = document.querySelectorAll('#nav_category input[type="checkbox"]');

const cardSection = document.getElementById("card_section");
// console.log(cardSection);
function renderCards(products) {
  // 기존 카드 삭제
  checkboxes = document.querySelectorAll('#nav_category input[type="checkbox"]');
  console.log(products);
  console.log(checkboxes);
  cardSection.innerHTML = "";

  // 새로운 카드 추가
  products.forEach(product => {
    // 카드 생성
    const card = document.createElement("div");
    card.classList.add("card");

    // 카드 이름 추가
    const cardName = document.createElement("div");
    cardName.classList.add("card_name");
    cardName.textContent = product.name;
    card.appendChild(cardName);

    // 해시태그 추가
    const hashtagLine = document.createElement("div");
    hashtagLine.classList.add("hashtag-line");
    const hashtagContainer = document.createElement("span");
    hashtagContainer.classList.add("hashtag");
    product.hashtag.forEach(tag => {
      const hashtagTag = document.createElement("span");
      hashtagTag.classList.add("hashtag-tag");
      hashtagTag.textContent = tag;
      hashtagContainer.appendChild(hashtagTag);
    });
    hashtagLine.appendChild(hashtagContainer);
    const plusIcon = document.createElement("img");
    plusIcon.classList.add("plus_icon");
    plusIcon.src = "asset/plus_icon.svg";
    plusIcon.alt = "더보기";
    hashtagLine.appendChild(plusIcon);
    let modalTags = [];
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "&times;";
    modal.appendChild(closeBtn);
    const hashtags = document.createElement("div");
    hashtags.classList.add("hashtags");
    console.log(product);
    product.hashtag.forEach(tag => {
      console.log(tag);
      modalTags.push(tag);
      const modalTag = document.createElement("span");
      modalTag.classList.add("modal-tag");
      modalTag.textContent = tag;
      hashtags.appendChild(modalTag);
    });
    modal.appendChild(hashtags);
    hashtagLine.appendChild(modal);
    card.appendChild(hashtagLine);

    //
    console.log(modalTags);
    const modals = document.querySelectorAll(".modal");

    modals.forEach((modal, index) => {
      const plusIcon = document.querySelectorAll(".plus_icon")[index];
      const closeModal = document.getElementsByClassName("close")[index];
      const hashtags = modal.querySelector(".hashtags");
      plusIcon.addEventListener("click", () => {
        modal.style.display = "block";
        hashtags.innerHTML = "";
        modalTags.forEach(tag => {
          const hashtagTag = document.createElement("span");
          hashtagTag.classList.add("hashtag-tag");
          hashtagTag.textContent = tag;
          hashtags.appendChild(hashtagTag);
        });
      });

      closeModal.addEventListener("click", () => {
        modal.style.display = "none";
      });

      window.addEventListener("click", event => {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    });

    // 카드 이미지 추가
    const cardImg = document.createElement("img");
    cardImg.classList.add("card_img");
    cardImg.src = product.imgSrc;
    card.appendChild(cardImg);

    // 하트 아이콘 추가
    const heartIcon = document.createElement("img");
    heartIcon.classList.add("heart");
    heartIcon.src = "asset/heart_blank.svg";
    heartIcon.alt = "하트";
    card.appendChild(heartIcon);

    // 카드 섹션에 추가
    cardSection.appendChild(card);
  });
}

//필터링
const filterTags = document.querySelector("#filter_section");
function renderFilterTags(selectedCategories) {
  filterTags.innerHTML = "";

  selectedCategories.forEach(category => {
    const filterTag = document.createElement("span");
    filterTag.classList.add("filter-tag");
    filterTag.textContent = category;
    // console.log(filterTag);
    const xButton = document.createElement("button");
    xButton.classList.add("filter-tag__close");
    xButton.textContent = "X";

  
    xButton.addEventListener("click", () => {
      const content = filterTag.textContent.replace("X", "");
      console.log(content);
      filterTag.remove();
      
      const typeList = document.querySelectorAll(".type_list"); // 모든 .type_list 요소를 선택

      typeList.forEach(function (item) {
        const span = item.querySelector("span"); // 현재 요소 내의 span 요소를 선택

        if (span.textContent === content) {
          console.log(span);
          const checkbox = item.querySelector('input[type="checkbox"]'); // 현재 요소 내의 checkbox 요소를 선택
          checkbox.checked = false; // checkbox를 해제
          console.log(checkbox);
        }
      });
      
      filterCards(products);
      
    });

    
    filterTag.appendChild(xButton);

    filterTags.appendChild;
    filterTags.appendChild(filterTag);
  });
}
function renderModal() {
  // modal 만들기
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";
  modal.appendChild(closeBtn);
  const hashtags = document.createElement("div");
  hashtags.classList.add("hashtags");
  product.hashtag.forEach(tag => {
    const modalTag = document.createElement("span");
    modalTag.classList.add("modal-tag");
    modalTag.textContent = tag;
    hashtags.appendChild(modalTag);
  });
  modal.appendChild(hashtags);
  hashtagLine.appendChild(modal);
  card.appendChild(hashtagLine);
}

function filterCards(products) {
  const selectedCategories = [];
  let isAllChecked = false;
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      console.log(checkbox.nextElementSibling.textContent);
      if (checkbox.nextElementSibling.textContent === "전체") {
        isAllChecked = true;
      }
      selectedCategories.push(checkbox.nextElementSibling.textContent);
    }
  });
  console.log(isAllChecked);
  console.log(products);
  const filteredProducts = products.filter(product => {
    console.log(product);
    // console.log(product.catesgory);
    return selectedCategories.includes(product.category);
  });
  console.log(filteredProducts);
  isAllChecked ? renderCards(products) : renderCards(filteredProducts);
  renderFilterTags(selectedCategories);
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    filterCards(products);
    console.log(products);
  });
});


//card 에 모달 띄우기
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  const cardName = card.querySelector(".card_name");
  const cardHashtag = card.querySelectorAll(".hashtag-tag");
  const cardImg = card.querySelector(".card_img");

  cardName.textContent = products[index].name;
  cardImg.src = products[index].imgSrc;

  products[index].hashtag.forEach((tag, tagIndex) => {
    console.log(tag);
    cardHashtag[tagIndex].textContent = tag;
  });
});


  renderCards(products);
