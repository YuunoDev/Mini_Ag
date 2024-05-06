import { Car } from "./car";

export const OurCars: Car[] = [
    {   id: 0, 
        img: '../../assets/images/car0.jpg', 
        name: 'BMW Serie 5 4 PTS 540I M SPORT, TA', 
        year: 2018, 
        description: 'El BMW Serie 5 540i M Sport combina elegancia y potencia en un sedán de lujo.' + 
        'Con su diseño atlético, motor TwinPower Turbo de seis cilindros y el paquete M Sport que realza'+
        ' su dinamismo, ofrece una experiencia de conducción emocionante. Equipado con tecnología de vanguardia'+
        'y características de seguridad avanzadas, este vehículo garantiza comodidad y rendimiento en cada viaje.', 
        pricerent: 100, 
        isRented: true, 
        brand: 'BMW' },
    { id: 1, img: 'car1.jpg', name: 'Audi', year: 2016, description: 'white', pricerent: 150, isRented: false, brand: 'Audi' },
    { id: 2, img: 'car2.jpg', name: 'Mercedes', year: 2015, description: 'gray', pricerent: 200, isRented: false, brand: 'Mercedes' },
    { id: 3, img: 'car3.jpg', name: 'Toyota', year: 2017, description: 'red', pricerent: 80, isRented: false, brand: 'Toyota' },
    { id: 4, img: 'car4.jpg', name: 'Ford', year: 2019, description: 'blue', pricerent: 90, isRented: false, brand: 'Ford' },
    { id: 5, img: 'car5.jpg', name: 'Chevrolet', year: 2014, description: 'black', pricerent: 70, isRented: false, brand: 'Chevrolet' },
    { id: 6, img: 'car6.jpg', name: 'Nissan', year: 2013, description: 'white', pricerent: 60, isRented: false, brand: 'Nissan' },
    { id: 7, img: 'car7.jpg', name: 'Hyundai', year: 2012, description: 'gray', pricerent: 50, isRented: false, brand: 'Hyundai' },
    { id: 8, img: 'car8.jpg', name: 'Honda', year: 2011, description: 'red', pricerent: 40, isRented: false, brand: 'Honda' },
    { id: 9, img: 'car9.jpg', name: 'Kia', year: 2010, description: 'blue', pricerent: 30, isRented: false, brand: 'Kia' }
];