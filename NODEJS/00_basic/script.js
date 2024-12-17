const fileSYstem = require('fs')

const nameOfFile = 'Hello'
const dataOfFile = 'Hello Ravi Bhai'

function fileSYstemWriteFile(fileName, data){
    fileSYstem.writeFile(`${fileName}`, `${data}`, (err) => {
        if(err) throw err
        console.log(`file is created and data written successfully.`);
    })
}
 const writeFile = () =>  fileSYstemWriteFile(String(nameOfFile, dataOfFile));
writeFile()