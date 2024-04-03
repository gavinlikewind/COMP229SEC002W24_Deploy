
   
    const config = {
        env: process.env.NODE_ENV || 'development', 
        port: process.env.PORT || 10000,
        jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
        mongoUri: process.env.MONGODB_URI || "mongodb+srv://gavinlikewind:71HLrYHNxU6VOuB9@cluster0.k7pj1q8.mongodb.net/Skeleton?retryWrites=true&w=majority"||
        process.env.MONGO_HOST ||
        'mongodb://' + (process.env.IP || 'localhost') + ':' + 
        (process.env.MONGO_PORT || '27017') +
        '/mernproject' 
        }
    export default config
        

