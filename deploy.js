// deploy.js
require("dotenv").config();
console.log('Host:', process.env.FTP_HOST);
console.log('User:', process.env.FTP_USER);
console.log('Password:', process.env.FTP_PASSWORD ? 'OK' : 'Manquant');
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const path = require("path");

const config = {
    user:process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: path.join(__dirname, "build"),
    remoteRoot: process.env.FTP_REMOTE_PATH,
    include: ["*", "**/*"],
    deleteRemote: true, // replace the previous files
    forcePasv: true,
};

console.log("Build ready. Starting FTP deploy...");

ftpDeploy
    .deploy(config)
    .then(res => {
        console.log("Déploiement terminé avec succès !");
        console.log(res);
    })
    .catch(err => {
        console.error("Erreur de déploiement :", err);
    });