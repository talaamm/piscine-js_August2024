const escapeStr = ' `, \\, /, "  \' '
const arr = [4 , '2']
const obj = {str: '' , num:0 , bool:false, undef: undefined}
const nested = Object.freeze
 ({arr: Object.freeze ([4, undefined, '2']) , obj: Object.freeze ({str:'' , num:5, bool:false})})