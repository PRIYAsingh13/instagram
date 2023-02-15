import Firebase from 'Firebase/app';
import 'Firebase/firestore';
import 'Firebase/auth';


const config = {}

const Firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore;


export {Firebase,FieldValue }