const config = {
    PORT: 3003,
    facebookApp: {
        id: 569977460625464,
        key: "0c6f0aad11c6a09213adbce905868da5",
        accessToken() {
            return this.id + "|" + this.key
        }
    },
    frontendURL: "http://localhost:3000",
    saltLevel: 10,
    mongoURI: "mongodb://localhost/eventation"
}


export default config