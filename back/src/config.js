const config = {
    PORT: 3003,
    facebookApp: {
        id: 336631404238833,
        key: "f026515fd9ce11c72168f811dc5ed81b",
        accessToken() {
            return this.id + "|" + this.key
        }
    },
    frontendURL: "http://localhost:3000",
    saltLevel: 10,
    mongoURI: "mongodb://localhost/eventation"
}


export default config