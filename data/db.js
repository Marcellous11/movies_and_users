import mongoose from 'mongoose'

const userScheme = mongoose.Schema({
    firstName: String,
    lastName:String,
    email: String,
    username: String,
    favoriteGenre: String,
    dateJoined: String,
    isActive: Boolean,
    watchlistCount: Number
    },
    {
        collection:"users"
    }
)

const movieScheme = mongoose.Schema(
   {
  title: String,
  director: String,
  releaseYear: Number,
  genre: String,
  runtimeMinutes: Number,
  rating: String,
  imdbScore: Number,
  inTheaters: Boolean
},
    {
        collection:"movies"
    }
)

const Movie = mongoose.model("movie",movieScheme)

const User = mongoose.model("user",userScheme)


async function ConnectDatabase(){
    await mongoose.connect(process.env.MONGOOSE_URI)
    console.log("Database connected")

}

async function getUserModel(){
    if(mongoose.connection.readyState != 1){
        throw new Error("Model is not coectd")
    }
    return User
}

async function getMovieModel(){
    if(mongoose.connection.readyState != 1){
        throw new Error("Model is not connectd")
    }
    return Movie
}

async function closeDatabase(){
   await mongoose.disconnect()
}

export {ConnectDatabase,getMovieModel,getUserModel,closeDatabase}