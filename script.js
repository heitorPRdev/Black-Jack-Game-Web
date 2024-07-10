const div_main = document.getElementById('div_main')

const cart1_player = document.getElementById('cart1_play')
const cart2_player = document.getElementById('cart2_play')
const btn_Blja = document.getElementById('btn_Blja')

const maxn_cart = 11
function clear(){
    div_main.innerHTML = ''
}
function random(num){
    return parseInt(Math.random() * num) + 1
}
function bot(){
    const turnos_id = document.getElementById('turnos')
    cart1_player.disabled = true
    cart2_player.disabled = true
    btn_Blja.disabled = true
    const desci = random(2)
    turnos_id.innerHTML = ''
    turnos_id.innerHTML = 'Turno do Bot'
    setTimeout(() =>{
        
        game_func()

        return desci
    }, 5000)
    
        
}
function game_func(){
    const turnos_id = document.getElementById('turnos')
    turnos_id.innerHTML = 'Seu turno'
    cart1_player.disabled = false
    cart2_player.disabled = false
    btn_Blja.disabled = false
    cart1_player.innerHTML = random(11)
    cart2_player.innerHTML = random(11)
    cart1_player.addEventListener('click',()=>{
        cart1_player.innerHTML = random(11)
        bot()
    })
    cart2_player.addEventListener('click',()=>{
        cart2_player.innerHTML = random(11)
        bot()
    })
    btn_Blja.addEventListener('click',()=>{
        // pontuacao()
    })
    

}

function main(){
    game_func()
}
window.onload = main
