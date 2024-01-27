//clase constructora

class set{
    constructor(nombre, diseño,img){
    this.nombre = nombre;
    this.diseño =diseño;
    this.img = img;
}
};

//instancias de productos
const productos = [
new set("Cuphead", "unico", "./img/cuphead.png"),
new set("Merlina","unico","./img/merlina.png"),
new set("Minnie","1","./img/minnie.png"),
new set("Osos escandalosos","unico","./img/osos.png"),
new set("Peppa Pig","unico","./img/peppa1.png"),
new set("Plantas vs Zombies","unico","./img/plantas.png"),
new set("Pocoyo","unico","./img/pocoyo.png"),
new set("Princesas Disney","1","./img/princesas1.png"),
new set("Princesas Disney","2","./img/princesas2.png"),
new set("Princesas Disney","3","./img/princesas3.png"),
new set("Elmo", "unico", "./img/elmo.png"),
new set("Encantados", "unico", "./img/encantados.png"),
 new set("Fornite", "1", "./img/fortnite.png"),
new set("Frozen", "unico", "./img/frozen.png"),
 new set("Dragon Ball Z", "unico", "./img/goku.png"),
new set("La granja de Zenon", "unico", "./img/granja.png"),
new set("Hora de aventuras", "unico", "./img/hora.png"),
new set("Hotweels", "unico", "./img/hotweels.png"),
new set("Increible Hulk", "unico", "./img/hulk1.png"),
new set("Ironman", "unico", "./img/ironman.png"),
new set("Jurassic World", "unico", "./img/jurasic.png"),
 new set("Hello Kitty", "unico", "./img/kittie.png"),
new set("Super Heroes Lego", "unico", "./img/legoSuper.png"),
new set("Space Jam", "unico", "./img/looneyTunes.png"),
new set("Super Mario Bros","unico","./img/marioBros.png"),
new set("Argentina Campeon del mundo","1", "./img/argentina1.png"),
 new set("Argentina Campeon del mundo","2", "./img/argentina2.png"),
new set("Argentina Campeon del mundo","3", "./img/argentina3.png"),
new set("Capitan America", "unico", "./img/america.png"),
new set("Among us", "unico", "./img/amongUs.png"),
new set("Avengers", "unico", "./img/avengers1.png"),
new set("Bebes", "unico", "./img/bebes.png"),
new set("Bob Esponja","1", "./img/bobEsponja1.png"),
new set("Bob Esponja","2", "./img/bobEsponja2.png"),
new set("Buzz Lightyear", "Unico", "./img/buzz.png"),
new set("Cars", "Unico", "./img/cars1.png"),
new set("Pucca","unico","./img/pucca.png"),
new set("Baby Shark","unico","./img/sharks.png"),
new set("Sirenita","1","./img/sirenita.png"),
new set("Sonic","1","./img/sonic1.png"),
new set("Sonic","2","./img/sonic2.png"),
new set("Spiderman","1","./img/spiderman1.png"),
new set("Spiderman","2","./img/spiderman2.png"),
new set("Spiderman","3","./img/spiderman3.png"),
new set("Spiderman","4","./img/spiderman4.png"),
new set("Spiderman","5","./img/spiderman5.png"),
new set("Spiderman","6","./img/spiderman6.png"),
new set("Stitch","unico","./img/stitch1.png"),
new set("Super animales", "unico","./img/superAnimales.png"),
new set("Teen Titans", "1", "./img/teenTitans.png"),
new set("Toy Story","unico","./img/toyStory.png"),
new set("Unicornios","1","./img/unicornio1.png"),
new set("Unicornios","2","./img/unicornio2.png"),
new set("Vampirina","unico","./img/vampirina.png"),
new set("Winnie Poo","1","./img/winnie.png"),
new set("Bob Esponja","3","./img/bobEsponja3.png"),
new set("Boca Juniors","unico","./img/boca.png"),
new set("River Plate","unico","./img/river.png"),
new set("Fortnite","2","./img/fortnite2.png"),
new set("Lol","unico","./img/lol.png"),
new set("Gru","unico","./img/mandalorian.png"),
new set("Mickey","unico","./img/Mickey.png"),
new set("Minnie","2","./img/minnie2.png"),
new set("Minnie","3","./img/minnie3.png"),
new set("Naruto","unico","./img/naruto.png"),
new set("Sirenita","2","./img/sirenita2.png"),
new set("Teen Titans","2","./img/teenTitans2.png"),
new set("TikTok","unico","./img/tikTok.png"),
new set("Tren Thomas","unico","./img/trenThomas.png"),
new set("winnie Poo","2","./img/winnie2.png")
]


//Funcion buscador
const buscador = document.getElementById("buscador");
const resultado = document.getElementById("resultado");
const filtrar = () =>{
        resultado.innerHTML = '';
        const texto = buscador.value.toLowerCase();
        for ( let producto of productos ){
            let nombre = producto.nombre.toLowerCase();
    
            if ( nombre.indexOf(texto) !== -1){
                resultado.innerHTML += `
                <div class="card border-primary mb-3" style="width: 18rem;" >
                    <img src=${producto.img} class="card-img-top img" alt="..." id="cardImg">
                    <div class="card-body">
                        <h4 class="card-header text-center"> "${producto.nombre}"</h5>
                        <br>
                        <h6 class="card-title">Motivo: ${producto.diseño} </h5>
                        
                        <button class="btn botonStyle"><p class="card-text">Precio 3 piezas: $4.500 </p>
                    
                        <button  class="btn btn-success disabled"><p class="card-text">Precio 4 piezas(taza): $6.000</p>
                    </div>
                </div>
                `
            }
    
        }
        if ( resultado.innerHTML === '' ){
            resultado.innerHTML = `<li>Producto no encontrado</li>`
        }
    
    }

//llamo al metodo de filtrado    
buscador.addEventListener('keyup',filtrar);
filtrar();

const cardImg = document.getElementById("cardImg");    
cardImg.addEventListener("click", () =>{
    cardImg.style.transform = scale(2.2);
})