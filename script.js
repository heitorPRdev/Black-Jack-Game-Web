const div_main = document.getElementById('div_main')

const cart1_player = document.getElementById('cart1_play')
const cart2_player = document.getElementById('cart2_play')
const btn_Blja = document.getElementById('btn_Blja')
let partida = 0
const maxn_cart = 11
function clear(){
    div_main.innerHTML = ''
}
function random(num){
    return parseInt(Math.random() * num) + 1
}
function pontuacao(pontBot,pontPlayer){
    document.getElementById('opasc').style.visibility = 'visible'
    const ppontu= document.getElementById('ppontu')
    const reset=document.getElementById('reset')
    if(pontBot > pontPlayer){
        ppontu.innerText = `Você perdeu desculpe. Clique no botão para recomeçar`
    }
    if(pontBot < pontPlayer){
        ppontu.innerText = 'Parabéns você ganhou! Clique no botão para jogar novamente'

    }if(pontBot == pontPlayer){
        ppontu.innerText = 'Empate!! Clique no botão para jogar novamente'
    }
    reset.addEventListener('click',()=>{
        document.getElementById('opasc').style.visibility = 'hidden'
        game_func()
    })
    
}
function bot(cat1,cart2){
    const turnos_id = document.getElementById('turnos')
    cart1_player.disabled = true
    cart2_player.disabled = true
    btn_Blja.disabled = true
    const desci = random(2)
    let candocar = random(11)+random(11)
    turnos_id.innerText = 'Turno do Bot'
    if(partida >= 3){
        if (desci == 1){
        
            cart1_pnum = parseInt(cart1_player.innerText)
            cart2_pnum = parseInt(cart2_player.innerText)
            pontuacao(cart1_pnum+cart2_pnum,candocar)
        }
        
    }
    setTimeout(() =>{
            
        game_func(candocar)

    }, 5000)
    partida += 1
        
}
function game_func(botcars=0){
    const turnos_id = document.getElementById('turnos')
    turnos_id.innerText = 'Seu turno'
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
    if (!botcars == 0){
        
        btn_Blja.addEventListener('click',()=>{
            cart1_player.disabled = true
            cart2_player.disabled = true
            btn_Blja.disabled = true
            cart1_pnum = parseInt(cart1_player.innerText)
            cart2_pnum = parseInt(cart2_player.innerText)
            pontuacao(botcars,cart1_pnum+cart2_pnum)
        })
    }else{
        btn_Blja.disabled = true
    }
    
   

}
window.onload = game_func()
