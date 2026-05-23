import swaggerAutogen from "swagger-autogen"

const doc = {
    info: {
        title : "Small Movie API",
        description: "Small collection of movies managed by a smaller number of people"
    },
    host: "localhost:8000",
    schemes: ["http"]
}

const outFile= "./swagger.json"
const endpointsFiles = ['./routes/index.js']

swaggerAutogen()(outFile,endpointsFiles,doc)