const fs = require('fs');
const path = require('path');

const musicDirectory = path.join(__dirname, 'music');
const musicJsonPath = path.join(__dirname, 'public', 'music.json');

// Ler o diretório de música e gerar o music.json
fs.readdir(musicDirectory, (err, files) => {
    if (err) {
        return console.error('Erro ao ler o diretório de música:', err);
    }

    const musicFiles = files.filter(file => path.extname(file) === '.mp3');
    fs.writeFile(musicJsonPath, JSON.stringify(musicFiles, null, 2), (err) => {
        if (err) {
            return console.error('Erro ao escrever o arquivo music.json:', err);
        }
        console.log('Arquivo music.json gerado com sucesso!');
    });
});

