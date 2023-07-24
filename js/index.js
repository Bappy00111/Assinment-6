const leadData = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => showData(data.data.tools.slice(0, 6)));
};

const showData = (data) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = " ";
  data.forEach((singelData) => {
    console.log(singelData.id);
    cardContainer.innerHTML += `
     <div class="card p-5 w-96 bg-base-100 shadow-2xl">
      <figure><img src="${singelData.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title font-bold">Features</h2>
            <ol>
             <li>1.Natural language processing</li>
             <li>2.Contextual understanding</li>
             <li>3.Text generation</li>
            </ol>
            <hr>
           <div class="flex justify-between items-center ">
           <div>
           <p class="font-bold">${singelData.name}</p>
           <div class="flex justify-center items-center gap-2">
           <i class="fa-regular fa-calendar-days"></i>
           <p>${singelData.published_in}</p>
           </div>
           </div>
           <div class="card-actions">
           <i class="fa-solid fa-arrow-right" onclick="my_modal_1.showModal()" ></i>
           </div>
           </div>
         </div>
        </div>
        `;
  });
};
{/* <i class="fa-solid fa-arrow-right" onclick="loadSingelData('${singelData.id}')"></i> */}

const seeMOre = () => {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => showData(data.data.tools));
};

const loadSingelData = (id) => {

  const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showSingelData(data.data));
};

const showSingelData = (data) => {
  console.log(data)
 
};
leadData();
