// importacion parcual
function info(text){
    console.log("INFO:", text);
    return text;
}

function error(text){
    console.log("ERROR:", text);
    return text;
}

// importaciones parciales
module.exports.info = info;
module.exports.error = error;
// module.exports = {info, error};