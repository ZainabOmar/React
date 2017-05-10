const firebase = require('firebase')
import { API_KEY } from 'react-native-dotenv'

// Initialize Firebase
const firebaseConfig = {
apiKey: API_KEY,
authDomain: "chat-app.firebaseapp.com",
databaseURL: "https://chat-app.firebaseio.com",
storageBucket: "chat-app.appspot.com"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp