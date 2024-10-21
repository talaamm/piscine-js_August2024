function words(b){
    return b.split(' ')
}
function sentence(b){
return b.join(' ')
}
function yell(b){
return b.toUpperCase()
}
function whisper(b){
return "*" + b.toLowerCase() +"*"
}
function capitalize(b){
return b[0].toUpperCase() + b.slice(1).toLowerCase()
}