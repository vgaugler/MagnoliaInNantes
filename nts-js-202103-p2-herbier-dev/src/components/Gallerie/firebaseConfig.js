import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCL5wU-8ZVgXBWd6DiN0NeonSZe6oF7vb8',
  authDomain: 'magnoliainnantes.firebaseapp.com',
  databaseURL:
    'https://magnoliainnantes-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'magnoliainnantes',
  storageBucket: 'magnoliainnantes.appspot.com',
  messagingSenderId: '437934417417',
  appId: '1:437934417417:web:9314afc06bab49516b7ad8',
  measurementId: 'G-NQBS06CRFC',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
