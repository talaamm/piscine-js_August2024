
function getAcceleration(c){
   const {
        f, m , Δv , Δt , d , t,
    } = c
    
if (f && m !== undefined){
    return f / m
}else if (Δv && Δt !== undefined){
return Δv / Δt
}else if (d && t !== undefined ){
    return (2* d) / (t * t)
}else {
    return 'impossible'
}
}