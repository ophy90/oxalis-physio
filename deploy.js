require("dotenv").config();
const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const path = require("path");

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: path.join(__dirname, "build"),
    remoteRoot: process.env.FTP_REMOTE_PATH,
    include: ["*", "**/*"],
    deleteRemote: false, // true if replace all at each deploy
    forcePasv: true,
};

console.log("📦 Build ready. Starting FTP deploy...");

ftpDeploy
    .deploy(config)
    .then(res => {
        console.log("Déploiement terminé avec succès !");
        console.log(res);
    })
    .catch(err => {
        console.error("Erreur de déploiement :", err);
    });
