class set{
    constructor(nombre, diseño,img){
    this.nombre = nombre;
    this.diseño =diseño;
    this.img = img;
}
};

const  set1 = new set("Argentina Campeon del mundo","1", "./img/argentina1.png");
const set2= new set("Argentina Campeon del mundo","2", "./img/argentina2.png");
const set3= new set("Argentina Campeon del mundo","3", "./img/argentina3.png");
const set5= new set("Capitan America", "unico", "./img/america.png");
const set6= new set("Among us", "unico", "./img/amongUs.png");
const set7= new set("Avengers", "unico", "./img/avengers1.png");
const set8= new set("Bebes", "unico", "./img/bebes.png");
const set9= new set("Bob Esponja","1", "./img/bobEsponja1.png");
const set10= new set("Bob Esponja","2", "./img/bobEsponja2.png");
const set11= new set("Buzz Lightyear", "Unico", "./img/buzz.png");
const set12= new set("Cars", "Unico", "./img/cars1.png");
const set13= new set("Cuphead", "unico", "./img/cuphead.png");
const set14= new set("Elmo", "unico", "./img/elmo.png");
const set15= new set("Encantados", "unico", "./img/encantados.png");
const set16= new set("Fornite", "1", "./img/fortnite.png");
const set17= new set("Frozen", "unico", "./img/frozen.png");
const set18= new set("Dragon Ball Z", "unico", "./img/goku.png");
const set19= new set("La granja de Zenon", "unico", "./img/granja.png");
const set20= new set("Hora de aventuras", "unico", "./img/hora.png");
const set21= new set("Hotweels", "unico", "./img/hotweels.png");
const set22= new set("Increible Hulk", "unico", "./img/hulk1.png");
const set23= new set("Ironman", "unico", "./img/ironman.png");
const set24= new set("Jurassic World", "unico", "./img/jurasic.png");
const set25= new set("Hello Kitty", "unico", "./img/kittie.png");
const set26= new set("Super Heroes Lego", "unico", "./img/legoSuper.png");
const set27= new set("Space Jam", "unico", "./img/looneyTunes.png");
const set28= new set("Super Mario Bros","unico","./img/marioBros.png");
const set29= new set("Merlina","unico","./img/merlina.png");
const set30= new set("Minnie","1","./img/minnie.png");
const set31= new set("Osos escandalosos","unico","./img/osos.png");
const set32= new set("Peppa Pig","unico","./img/peppa1.png");
const set33= new set("Plantas vs Zombies","unico","./img/plantas.png");
const set34= new set("Pocoyo","unico","./img/pocoyo.png");
const set35= new set("Princesas Disney","1","./img/princesas1.png");
const set36= new set("Princesas Disney","2","./img/princesas2.png");
const set37= new set("Princesas Disney","3","./img/princesas3.png");
const set38= new set("Pucca","unico","./img/pucca.png");
const set39= new set("Baby Shark","unico","./img/sharks.png");
const set40= new set("Sirenita","1","./img/sirenita.png");
const set41= new set("Sonic","1","./img/sonic1.png");
const set42= new set("Sonic","2","./img/sonic2.png");
const set43= new set("Spiderman","1","./img/spiderman1.png");
const set44= new set("Spiderman","2","./img/spiderman2.png");
const set45= new set("Spiderman","3","./img/spiderman3.png");
const set46= new set("Spiderman","4","./img/spiderman4.png");
const set47= new set("Spiderman","5","./img/spiderman5.png");
const set48= new set("Spiderman","6","./img/spiderman6.png");
const set49= new set("Stitch","unico","./img/stitch1.png");
const set50= new set("Super animales", "unico","./img/superAnimales.png");
const set51= new set("Teen Titans", "1", "./img/teenTitans.png");
const set52= new set("Toy Story","unico","./img/toyStory.png");
const set53= new set("Unicornios","1","./img/unicornio1.png");
const set54= new set("Unicornios","2","./img/unicornio2.png");
const set55= new set("Vampirina","unico","./img/vampirina.png");
const set56= new set("Winnie Poo","1","./img/winnie.png");
const set57= new set("Bob Esponja","3","./img/bobEsponja3.png");
const set58= new set("Boca Juniors","unico","./img/boca.png");
const set59= new set("River Plate","unico","./img/river.png");
const set60= new set("Fortnite","2","./img/fortnite2.png");
const set61= new set("Lol","unico","./img/lol.png");
const set62= new set("Gru","unico","./img/mandalorian.png");
const set63= new set("Mickey","unico","./img/Mickey.png");
const set64= new set("Minnie","2","./img/minnie2.png");
const set65= new set("Minnie","3","./img/minnie3.png");
const set66= new set("Naruto","unico","./img/naruto.png");
const set67= new set("Sirenita","2","./img/sirenita2.png");
const set68= new set("Teen Titans","2","./img/teenTitans2.png");
const set69= new set("TikTok","unico","./img/tikTok.png");
const set70= new set("Tren Thomas","unico","./img/trenThomas.png");
const set71= new set("winnie Poo","2","./img/winnie2.png");

const productos = [set1, set2, set3, set5, set6, set7,set8, set9, set10, set11, set12, set13,set14, set15, set16, set17, set18, set19, set20, set21,set22, set23, set24, set25, set26, set27,set28, set29, set30, set31, set34,
    set35, set36, set37, set38, set39, set40,set41, set42, set43, set44, set45, set46,set47, set48, set49,set50, set51, set52, set53, set54,set55, set56, 
    set57, set58, set59, set60, set61, set62,set63, set64, set65, set66, set67, set68,set69, set70,set71 ]







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
buscador.addEventListener('keyup',filtrar);
filtrar();

const cardImg = document.getElementById("cardImg");    
cardImg.addEventListener("click", () =>{
    cardImg.style.transform = scale(2.2);
})