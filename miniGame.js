function Jugador(nombre){
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function(jugadorbjetivo){
        if(this.sp >= 40){
            this.sp-= 40;
            jugadorbjetivo.pv += 20;

        }else{
            console.info(this.nombre + " no tiene sp");
        }
        this.estado(jugadorbjetivo);
    }

    this.tirarFlecha = function(jugadorbjetivo){
        if(jugadorbjetivo.pv > 40){
            jugadorbjetivo.pv -= 40;
            if(jugadorbjetivo.sp >= 40){
                jugadorbjetivo.sp -= 40;
            }
        }else{
            jugadorbjetivo.pv = 0;
            console.error(jugadorbjetivo.nombre + " murio");
        }
        this.estado(jugadorbjetivo)
    }

    this.estado = function(jugadorbjetivo){
        console.info(this);
        console.info(jugadorbjetivo);
    }
}

let gandalf = new Jugador("gandalf");
let legolas = new Jugador("legolas");

console.log(gandalf);
console.log(legolas);

gandalf.tirarFlecha(legolas)


