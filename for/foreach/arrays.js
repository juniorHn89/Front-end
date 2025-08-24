// 1. Array de números
const numeros = [5, 12, 8, 130, 44];

// 2. Array de strings
const frutas = ["manzana", "banana", "cereza", "naranja", "uva"];

// 3. Array mixto (diferentes tipos de datos)
const mixto = [42, "Hola mundo", true, { nombre: "Ana", edad: 25 }, [1, 2, 3]];


numeros.forEach(numbers => {
    frutas.forEach(fruits =>{
        mixto.forEach(mixs => {
            console.log(`${numbers}${fruits}${mixs}`);
            
        })
    })
})

 