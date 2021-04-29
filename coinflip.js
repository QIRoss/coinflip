const fs = require('fs');

let data = fs.readFileSync('./coin_flip.csv', {encoding:'utf8', flag:'r'});

data = data.split('\n');
for(let index = 1;index<data.length-1;index++){
    data[index] = data[index].split(',');
    data[index][1] = Math.round(Math.random());
    data[index] = data[index].join(',');
}
data = data.join("\n");
fs.writeFileSync("result.csv",data);