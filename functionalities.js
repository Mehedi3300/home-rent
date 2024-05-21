
document.getElementById('add-property-button').addEventListener('click', function (event) {
    const nameInput = document.getElementById('name').value;
    const blockInput = document.getElementById('block').value;
    const roadNumberInput = document.getElementById('road-number').value;
    const cityInput = document.getElementById('city').value;
    const stateInput = document.getElementById('house-no').value;
    const roomTypeInput = document.getElementById('room-type').value;
    const priceInput = document.getElementById('price').value;
    const descriptionInput = document.getElementById('description').value;

    if (nameInput && roadNumberInput && blockInput && cityInput && stateInput && roomTypeInput && priceInput) {
       const property = document.getElementById('property-list');
       const div = document.createElement('div');
       div.classList.add('card', 'w-[360px]', 'bg-base-100' , 'shadow-xl' , 'rounded-t-3xl' , 'transition-transform' ,'duration-300', 'ease-in-out' , 'transform' , 'hover:scale-105');
       div.innerHTML = `
       
       <figure><img src="images/property-2.png" alt="" /></figure>
       <div class="card-body">
         <h2 class="card-title">${nameInput},Road-${roadNumberInput},Block-${blockInput},${cityInput}</h2>
         <p>${roomTypeInput}</p>
         <h2 class="text-lg font-semibold text-[#F4511E]">${priceInput}/Month</h2>
         <div class="card-actions justify-end">
           <button class="btn bg-[#B68C5A] text-white btn-error px-4 lg:px-7 mt-4 border-none">Details</button>
         </div>
       </div>
        
       `;
       property.appendChild(div);


       alert('property added');

       
    }
    else {
        alert('Please fill out all fields.');
    }
});




