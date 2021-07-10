const figlet = require('figlet');
const txt = process.argv.slice(2);

figlet(txt, (err, data) => {
    console.log(data);
});

