const div_main = document.getElementById('div_main')

const cart1_player = document.getElementById('cart1_play')
const cart2_player = document.getElementById('cart2_play')
const btn_Blja = document.getElementById('btn_Blja')
const btn_continuar = document.getElementById('btn_continuar')
let partida = 0
const maxn_cart = 11

let pon = 0
function random(num){
    return parseInt(Math.random() * num) + 1
}
function pontuacao(pontBot,pontPlayer){
    
    
    document.getElementById('opasc').style.visibility = 'visible'
    const ppontu= document.getElementById('ppontu')
    const reset=document.getElementById('reset')
    
    if(pontBot <= 21 && pontPlayer < pontBot ||   pontPlayer > 21){
        ppontu.innerText = `Você perdeu! A soma das cartas dele é ${pontBot}. Clique no botão para recomeçar`
        
    }
    else if(pontPlayer <= 21 && pontBot < pontPlayer || pontBot > 21){
        ppontu.innerText = `Parabéns você ganhou! a soma das cartas do bot é ${pontBot}.Clique no botão para jogar novamente`
        
    }
    else if(pontBot == pontPlayer){
        ppontu.innerText = 'Empate!! Clique no botão para jogar novamente'
    }
    pon = 1
    reset.addEventListener('click',()=>{
        document.getElementById('opasc').style.visibility = 'hidden'
        window.location.reload()
        
    })
    
}
function bot(){
    const turnos_id = document.getElementById('turnos')
    cart1_player.disabled = true
    cart2_player.disabled = true
    btn_Blja.disabled = true
    const desci = random(2)
    let candocar = random(11)+random(11)
    turnos_id.innerText = 'Turno do Bot'
    if(partida >= 5){
        if (desci == 1){
            cart1_pnum = parseInt(cart1_player.innerText)
            cart2_pnum = parseInt(cart2_player.innerText)

            pontuacao(cart1_pnum+cart2_pnum,candocar)
            
        }
    }
    
    if(!pon == 1){
        setInterval(()=>{
            game_func()
            partida += 1
            pon = 0
        },5000)
    }else{
        pon = 0
    }
    
}
function game_func(){
    const turnos_id = document.getElementById('turnos')
    turnos_id.innerText = 'Seu turno'
    if(!pon == 1){
        cart1_player.disabled = false
        cart2_player.disabled = false
        btn_Blja.disabled = false
        btn_continuar.disabled = false
    }else{
        cart1_player.disabled = true
        cart2_player.disabled = true
        btn_Blja.disabled = true
        btn_continuar.disabled = true
    }
    
    if (cart1_player.innerText == ''){
        cart1_player.innerText = random(11)
    }if(cart2_player.innerText == ''){
        cart2_player.innerText = random(11)
    }
    
    cart1_player.addEventListener('click',()=>{
        cart1_player.innerHTML = random(11)
        bot()
    })
    cart2_player.addEventListener('click',()=>{
        cart2_player.innerHTML = random(11)
        bot()
    })

    btn_continuar.addEventListener('click',()=>{
        btn_continuar.disabled = true
        bot()
    })
    if (partida >=1){
        
        btn_Blja.addEventListener('click',()=>{
            
            cart1_pnum = parseInt(cart1_player.innerText)
            cart2_pnum = parseInt(cart2_player.innerText)

            pontuacao(random(11)+random(11),random(11)+random(11))
            cart1_player.disabled = true
            cart2_player.disabled = true
            btn_Blja.disabled = true
            btn_continuar.disabled = true
        })
    }else{
        btn_Blja.disabled = true
        btn_continuar.disabled = false
    }
    
   

}
window.onload = game_func()
