const cars = [
    {
        marka: "Abarth",
        models: [
            {
                id: 1,
                model: "Abarth 595",
                barter: true,
                year: 2016,
                engine: 1.4,
                distance: "54 000",
                price: 35000,
                city: "Bakı",
                kredit: false,
                currency: "AZN",
                location: "used",
                picture: "abarth2.jpg"
            }]
    },

    {
        marka: "Alfa Romeo",
        models: [
            {
                id: 2,
                model: "Alfa Romeo Giulia",
                barter: true,
                year: 2022,
                price: 50600,
                distance: "0",
                engine: 2.0,
                city: "Bakı",
                kredit: false,
                location: "Salon",
                currency: "EURO",
                picture: "giulia.jpg"
            },
            {
                id: 3,
                model: "Alfa Romeo Stelvio",
                year: 2022,
                engine: 2.0,
                city: "Bakı",
                barter: true,
                location: "Salon",
                currency: "EURO",
                kredit: false,
                price: 56400,
                distance: "0",
                picture: "stelvio.jpg"
            }
        ]
    },
    {
        marka: "Audi",
        models: [
            {
                id: 4,
                model: "Audi 100",
                year: 2013,
                engine: 2.0,
                distance: "138 000",
                city: "Qax",
                price: 17800,
                currency: "USD",
                barter: false,
                kredit: false,
                location: "used",
                picture: "audi.jpg"
            }
        ]
    },
    {
        marka: "BMW",
        models: [
            {
                id: 5,
                model: "BMW Pro 935",
                year: 2011,
                engine: 8.5,
                distance: "109 000",
                price: 45000,
                currency: "AZN",
                barter: true,
                kredit: true,
                city: "Ağsu",
                location: "used",
                picture: "bmw.jpg"
            }
        ]
    },
    {
        marka: "Cadillac",
        models: [
            {
                id: 6,
                model: "Cadillac ATS",
                barter: true,
                location: "Salon",
                kredit: false,
                currency: "USD",
                distance: "69 300",
                engine: 2.0,
                year: 2018,
                price: 27000,
                city: "Balakən",
                picture: "cadillac-ats.jpg"
            },
            {
                id: 7,
                model: "Cadillac CT6",
                barter: true,
                location: "Salon",
                kredit: false,
                currency: "USD",
                distance: "103 000",
                engine: 2.0,
                year: 2016,
                price: 28500,
                city: "Ağstafa",
                picture: "cadillac-ct6.jpg"
            },
            {
                id: 8,
                model: "Cadillac CTS",
                barter: true,
                location: "Salon",
                kredit: false,
                currency: "USD",
                distance: "69 300",
                engine: 2.0,
                year: 2018,
                price: 27000,
                city: "Daşkəsən",
                picture: "cadillac-cts.jpg"
            },
        ]
    },
    {
        marka: "Chevrolet",
        models: [
            {
                id: 9,
                model: "Chevrolet Niva",
                year: 2010,
                engine: 1.7,
                distance: "320 000",
                price: 11000,
                city: "Qəbələ",
                kredit: false,
                barter: false,
                currency: "AZN",
                location: "used",
                picture: "chevrolet.jpg"
            }
        ]
    },
    {
        marka: "Daewoo",
        models: [
            {
                id: 10,
                model: "Daewoo Espero",
                year: 1996,
                distance: "225 000",
                price: 3450,
                engine: 1.5,
                currency: "AZN",
                kredit: false,
                barter: false,
                city: "Sumqayıt",
                location: "used",
                picture: "daewoo.jpg"
            }
        ]
    },
    {
        marka: "Ferrari",
        models: [
            {
                id: 11,
                model: "Ferrari California",
                year: 2014,
                distance: "20 000",
                price: 135000,
                engine: 3.9,
                currency: "USD",
                kredit: false,
                barter: true,
                city: "Horadiz",
                location: "Salon",
                picture: "ferrari.jpg"
            }
        ]
    },
    {
        marka: "Ford",
        models: [
            {
                id: 12,
                model: "Ford Escape",
                year: 2018,
                distance: "65 000",
                price: 28700,
                engine: 1.5,
                currency: "AZN",
                kredit: true,
                barter: false,
                city: "Şabran",
                location: "used",
                picture: "ford.jpg"
            }
        ]
    },
    {
        marka: "GAZ",
        models: [
            {
                id: 13,
                model: "GAZ 24",
                year: 1972,
                distance: "78 000",
                price: 16000,
                engine: 2.4,
                currency: "AZN",
                kredit: false,
                barter: false,
                city: "Samux",
                location: "used",
                picture: "gaz.jpg"
            }
        ]
    },
    {
        marka: "Hyundai",
        models: [
            {
                id: 14,
                model: "Hyundai Sonata",
                year: 2022,
                distance: "106",
                price: 52500,
                engine: 2.0,
                currency: "AZN",
                kredit: false,
                barter: false,
                city: "Yevlax",
                location: "Salon",
                picture: "hyundai.jpg"
            }
        ]
    },
    {
        marka: "Infiniti",
        models: [
            {
                id: 15,
                model: "Infiniti EX35",
                year: 2007,
                distance: "250 000",
                price: 20500,
                engine: 3.5,
                currency: "AZN",
                kredit: true,
                barter: false,
                city: "Xudat",
                location: "used",
                picture: "infiniti.jpg"
            }
        ]
    },
    {
        marka: "Jaguar",
        models: [
            {
                id: 16,
                model: "Jaguar XE",
                year: 2017,
                distance: "65 000",
                price: 28500,
                engine: 2.0,
                currency: "USD",
                kredit: false,
                barter: true,
                city: "Qax",
                location: "used",
                picture: "jaguar-xe.jpg"
            },
            {
                id: 17,
                model: "Jaguar XF",
                year: 2011,
                distance: "168 000",
                price: 25000,
                engine: 3.0,
                currency: "USD",
                kredit: true,
                barter: false,
                city: "Bakı",
                location: "used",
                picture: "jaguar-xf.jpg"
            }
        ]
    },
    {
        marka: "Porsche",
        models: [
            {
                id: 18,
                model: "Porsche Cayenne",
                year: 2013,
                distance: "94 000",
                price: 36500,
                engine: 3.6,
                currency: "AZN",
                kredit: false,
                barter: false,
                city: "Ağdaş",
                location: "Salon",
                picture: "porsche.jpg"
            }
        ]
    },
    {
        marka: "Setra",
        models: [
            {
                id: 19,
                model: "Setra 417 HDH",
                year: 2005,
                distance: "999 000",
                price: 75000,
                engine: 12,
                currency: "AZN",
                kredit: true,
                barter: false,
                city: "Salyan",
                location: "used",
                picture: "setra-215.jpg"
            },
            {
                id: 20,
                model: "Setra 215 HD",
                year: 1992,
                distance: "655 000",
                price: 32500,
                engine: 12,
                currency: "AZN",
                kredit: false,
                barter: false,
                city: "Bakı",
                location: "used",
                picture: "setra-417.jpg"
            }
        ]
    },
    {
        marka: "Opel",
        models: [
            {
                id: 21,
                model: "Opel Agila",
                year: 2000,
                distance: "200 000",
                price: 5500,
                engine: 1.2,
                currency: "AZN",
                kredit: true,
                barter: true,
                city: "Samux",
                location: "used",
                picture: "opel.jpg"
            }
        ]
    },
    {
        marka: "Suzuki",
        models: [
            {
                id: 22,
                model: "Suzuki Baleno",
                year: 1998,
                distance: "264 493",
                price: 3500,
                engine: 1.6,
                currency: "AZN",
                kredit: false,
                barter: false,
                city: "Astara",
                location: "used",
                picture: "suzuki.jpg"
            }
        ]
    },
    {
        marka: "Toyota",
        models: [
            {
                id: 23,
                model: "Toyota Alphard",
                year: 2013,
                distance: "154 000",
                price: 27800,
                engine: 3.5,
                currency: "EURO",
                kredit: true,
                barter: true,
                city: "Ağdaş",
                location: "Salon",
                picture: "toyota.jpg"
            }
        ]
    },
    {
        marka: "Volvo",
        models: [
            {
                id: 24,
                model: "Volvo XC 60",
                year: 2018,
                distance: "105 000",
                price: 40000,
                engine: 2.0,
                currency: "EURO",
                kredit: false,
                barter: false,
                city: "Naxçıvan",
                location: "used",
                picture: "volvo.jpg"
            }
        ]
    },
    {
        marka: "Volkswagen",
        models: [
            {
                id: 25,
                model: "Volkswagen Amarok",
                year: 2011,
                distance: "153 000",
                price: 27900,
                engine: 2.0,
                currency: "AZN",
                kredit: false,
                barter: false,
                city: "Naxçıvan",
                location: "used",
                picture: "volkswagen.jpg"
            }
        ]
    },
    {
        marka: "Audi",
        models: [
            {
                id: 26,
                model: "Audi A4",
                year: 1998,
                distance: "300 000",
                price: 7400,
                engine: 1.8,
                currency: "AZN",
                kredit: false,
                barter: false,
                city: "Samux",
                location: "Salon",
                picture: "audi2.jpg"
            }
        ]
    }
]
let marka = document.querySelector(".marka")
let model = document.querySelector(".model")
const allcards = document.querySelector(".car_carts")

let code = ""
function Allcarts_setter() {
    code = ""
    cars.forEach((item, index) => {
        code += `<div id="${index}" class="cart">
                        <div class="photo_sec">
                            <img src="./img/${item.models[0].picture}" alt="">
                            <i onclick='red_heart(this)' class="fa-regular fa-heart"></i>
                            ${(item.models[0].barter) ? '<i class="fa-solid fa-rotate barter"></i>' : ''}
                        </div>
                        <div class="about_sec">
                            <p>${item.models[0].price} ${(item.models[0].currency == "AZN") ? "₼" : (item.models[0].currency == "Euro") ? "€" : "$"}</p>
                            <p>${item.marka} ${item.models[0].model}</p>
                            <p>${item.models[0].year}, ${item.models[0].engine} L, ${item.models[0].distance} km </p>
                            <p>${item.models[0].city} </p>
                        </div>                    
                    </div>`
    })
    allcards.innerHTML = code
}
Allcarts_setter()

function red_heart(th) {
    th.classList.toggle("fa-regular")
    th.classList.toggle("fa-solid")
    th.classList.toggle("red")

}

{
    code = "<option>Marka</option>"
    cars.forEach((item, index) => {
        code += `<option >${item.marka}</option>`
    })
    marka.innerHTML = code
}
model.disabled = true
function optionSet(th) {
    if (th.value == "Marka") {
        model.disabled = true
        model.innerHTML = "Model"

    }
    else {
        model.disabled = false

    }
    code = '<option>Model</option>'
    cars.filter((item) => item.marka == th.value)
        .forEach(item => {
            code += `<option>${item.models[0].model}</option>`
        })
    model.innerHTML = code
}

function filter() {
    code = ""

    cars.filter(item => {
        if(marka.value == "Marka"){
            Allcarts_setter()
        }
        else if (model.value == "Model") {
            return item.marka == marka.value 
        }
        else {
            return (item.marka == marka.value && item.models[0].model == model.value)
        }
    }).forEach((item, index) => {
                code += `<div id="${index}" class="cart">
                            <div class="photo_sec">
                                <img src="./img/${item.models[0].picture}" alt="">
                                <i onclick='red_heart(this)' class="fa-regular fa-heart"></i>
                                ${(item.models[0].barter) ? '<i class="fa-solid fa-rotate barter"></i>' : ''}
                            </div>
                            <div class="about_sec">
                                <p>${item.models[0].price} ${(item.models[0].currency == "AZN") ? "₼" : (item.models[0].currency == "Euro") ? "€" : "$"}</p>
                                <p>${item.marka} ${item.models[0].model}</p>
                                <p>${item.models[0].year}, ${item.models[0].engine} L, ${item.models[0].distance} km </p>
                                <p>${item.models[0].city} </p>
                            </div>                    
                        </div>`
            })

    allcards.innerHTML = code
}

