const leadData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => showData(data.data.tools));
};

const showData = (data) => {
  const cardContainer = document.getElementById("card-container");
  data.forEach((singelData) => {
    console.log(singelData.image);
    cardContainer.innerHTML += `
     <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="${singelData.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
         </div>
        </div>
        `;
  });
};
leadData();
