//LoadPHone hunting api
const loadPhone = async (searchText) => {
  const url2 = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  //   const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  const res = await fetch(url2);
  const data = await res.json();
  displayPhone(data.data);
};

const displayPhone = (phones) => {
  const getPhoneContainer = document.getElementById("phone-container");
  getPhoneContainer.innerText = "";
  //   const slicePhone = phones.slice(0, 3);
  //   console.log(slicePhone);
  phones = phones.slice(0, 10);

  const noFoundMassage = document.getElementById("no-found-massage");
  if (phones.length === 0) {
    noFoundMassage.classList.remove("d-none");
  } else {
    noFoundMassage.classList.add("d-none");
  }

  phones.forEach((phone) => {
    console.log(phone);

    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
    <div class="card h-100">
                    <img src="${phone.image}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.slug}</p>
                        <p class="card-text">Brand: ${phone.brand}</p>
                    </div>
                </div>
    `;
    getPhoneContainer.appendChild(phoneDiv);
  });
  //   load over hare
  spinnerToggle(false);
};

// load start with search btn clicked
const searchPhone = () => {
  const getSearchText = document.getElementById("search-field");
  const searchText = getSearchText.value;
  loadPhone(searchText);
  spinnerToggle(true);
};

// loader function
const spinnerToggle = (isLoading) => {
  const spninnerContainer = document.getElementById("loader");
  if (isLoading === true) {
    spninnerContainer.classList.remove("d-none");
  } else {
    spninnerContainer.classList.add("d-none");
  }
};

// loadPhone("iphone");
