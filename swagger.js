import swaggerAutogen from "swagger-autogen"

const doc = {
    info: {
        title : "Small Movie API",
        description: "Small collection of movies managed by a smaller number of people"
    },
    host: "https://movies-and-users-api.onrender.com",
    schemes: ["https"]
}

const outFile= "./swagger.json"
const endpointsFiles = ['./routes/index.js']

swaggerAutogen()(outFile,endpointsFiles,doc)