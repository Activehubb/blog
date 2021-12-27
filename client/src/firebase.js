import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyD-NoV535CJJCeI6sGMbJ96mt6Z4Qm0KdY',
	authDomain: 'blog-f93fe.firebaseapp.com',
	projectId: 'blog-f93fe',
	storageBucket: 'blog-f93fe.appspot.com',
	messagingSenderId: '996696698937',
	appId: '1:996696698937:web:3ee4c3fa99629b59e71de8',
	measurementId: 'G-CY17WYHY48',
};

const firebaseApp = initializeApp(firebaseConfig)

const storage = getStorage(firebaseApp)
export default storage