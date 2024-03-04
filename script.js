// Fungsi untuk mengacak urutan array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// Fungsi untuk memuat data driver
function loadDriversRandom(data) {
  var driverGrid = document.getElementById('driverGrid');
  var randomData = shuffleArray(data.ojek_database).slice(0, 12);

  driverGrid.innerHTML = ''; // Kosongkan menuGrid sebelum menambah 

    
  randomData.forEach(function(ojek) {
    
    var driverCard = document.createElement('div');
    driverCard.classList.add('driver-card');
    driverCard.innerHTML = `
      <img src="images/${ojek.pp}" alt="${ojek.name}">
      <h3>${ojek.name}</h3>
    `;
    driverGrid.appendChild(driverCard);
  });
}

// Fungsi untuk memuat menu makanan
function loadMenu(menu) {
  var menuGrid = document.getElementById('menuGrid');
  var randomData = shuffleArray(menu).slice(0, 6); // Ambil 6 item acak

  menuGrid.innerHTML = ''; // Kosongkan menuGrid sebelum menambah 

  randomData.forEach(function(item) {
    var menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
    `;
    menuGrid.appendChild(menuItem);
  });
}

// Data JSON untuk ojek_database
var ojekData = {
  "ojek_database": [
    {
      "id": "1",
      "name": "sutoyo",
      "hp": "08328332765",
      "pp": "08328332765.webp",
      "location": "-6.912473, 107.548692"
    },
    {
      "id": "2",
      "name": "budi",
      "hp": "08123456789",
      "pp": "08123456789.webp",
      "location": "-6.922573, 107.619896"
    },
    {
      "id": "3",
      "name": "andi",
      "hp": "08567891234",
      "pp": "08567891234.webp",
      "location": "-6.903231, 107.618538"
    },
    {
      "id": "4",
      "name": "cecep",
      "hp": "08765432198",
      "pp": "08765432198.webp",
      "location": "-6.890185, 107.598938"
    },
    {
      "id": "5",
      "name": "dian",
      "hp": "08234567891",
      "pp": "08234567891.webp",
      "location": "-6.926217, 107.626050"
    },
    {
      "id": "6",
      "name": "eko",
      "hp": "08123456789",
      "pp": "08123456789.webp",
      "location": "-6.913790, 107.609755"
    },
    {
      "id": "7",
      "name": "fajar",
      "hp": "08345678912",
      "pp": "08345678912.webp",
      "location": "-6.896211, 107.624814"
    },
    {
      "id": "8",
      "name": "gita",
      "hp": "08456789123",
      "pp": "08456789123.webp",
      "location": "-6.932908, 107.602790"
    },
    {
      "id": "9",
      "name": "hadi",
      "hp": "08567891234",
      "pp": "08567891234.webp",
      "location": "-6.891036, 107.608886"
    },
    {
      "id": "10",
      "name": "indah",
      "hp": "08678912345",
      "pp": "08678912345.webp",
      "location": "-6.924096, 107.596983"
    },
    {
      "id": "11",
      "name": "joko",
      "hp": "08789123456",
      "pp": "08789123456.webp",
      "location": "-6.906465, 107.626202"
    },
          {
      "id": "13",
      "name": "dolo",
      "hp": "08785123456",
      "pp": "08785123456.webp",
      "location": "-6.906465, 107.625202"
    },
    {
      "id": "12",
      "name": "kiki",
      "hp": "08891234567",
      "pp": "08891234567.webp",
      "location": "-6.887230, 107.623850"
    }
  ]
};

// Data JSON untuk menu makanan
var menuData = [
      {
        "name": "Nasi Sambal",
        "price": "Rp 14.000",
        "image": "images/food.webp"
      },
         {
        "name": "Nasi Goreng",
        "price": "Rp 13.000",
        "image": "images/food.webp"
      },
         {
        "name": "Mie Goreng",
        "price": "Rp 15.000",
        "image": "images/food.webp"
      },
        {
        "name": "Nasi Sambal",
        "price": "Rp 14.000",
        "image": "images/food.webp"
      },
         {
        "name": "Nasi Goreng",
        "price": "Rp 13.000",
        "image": "images/food.webp"
      },
         {
        "name": "Mie Goreng",
        "price": "Rp 15.000",
        "image": "images/food.webp"
      },
        {
        "name": "Nasi Sambal",
        "price": "Rp 14.000",
        "image": "images/food.webp"
      },
         {
        "name": "Nasi Goreng",
        "price": "Rp 13.000",
        "image": "images/food.webp"
      },
         {
        "name": "Mie Goreng",
        "price": "Rp 15.000",
        "image": "images/food.webp"
      },
    ];

// Panggil fungsi saat halaman dimuat
loadDriversRandom(ojekData);
loadMenu(menuData); 
