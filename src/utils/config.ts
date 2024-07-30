import 'dotenv/config'

const PORT = process.env.PORT ?? 3000
const MONGO_URI = process.env.MONGO_URI ?? 'Add mongodb connection'

export default {PORT, MONGO_URI}; 