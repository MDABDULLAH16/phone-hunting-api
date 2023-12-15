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
};

const searchPhone = () => {
  const getSearchText = document.getElementById("search-field").value;
  loadPhone(getSearchText);
};

loadPhone("iphone");
