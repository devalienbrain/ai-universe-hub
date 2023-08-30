const loadApiData = async() => {

let apiAllData = await fetch('https://openapi.programming-hero.com/api/ai/tools');
apiAllData = await apiAllData.json();

showData(apiAllData);
}

function showData(apiAllData){
  console.log(apiAllData.data.tools.length);
  const datas = apiAllData.data.tools;
const apiDataContainer = document.getElementById('api-data-container');

datas.forEach(data => {
  const div = document.createElement('div');
  
  div.innerHTML=`<div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${data.image}" alt="" class="rounded-xl" />
  </figure>
  <div class="card-body items-start text-left">
    <h2 class="card-title"> Features</h2>
    <ul>
      <li>1. ${data.features[0]}</li>
      <li>2. ${data.features[1]}</li>
      <li>3. ${data.features[2]}</li>
    </ul>

<hr class="border w-full">
<h2 class="card-title">${data.name}</h2>
<ul>
<li>${data.published_in}</li>
</ul>
  </div>
</div>`;

apiDataContainer.appendChild(div);

});

}

loadApiData();