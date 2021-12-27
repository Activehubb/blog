import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SinglePost from './components/user/singlePost/Post';
import About from './components/admin/pages/About';
import Home from './components/user/home/Home';
import {CreatePost, UpdatePost, UpdateProfile} from './components/admin/home/AdminHome';
import  DeletePost  from './components/admin/pages/DeletePost';
import Register from './components/admin/auth/register/Register';
import Login from './components/admin/auth/login/Login';
import PrivateRoute from './routes/PrivateRoute';
import Gallery from './components/admin/pages/Gallery';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './constants/auth';
import setAuth from './utils/setAuth';
import { UserSetting } from './components/admin/settings/Setting';
import DeleteProfile from './components/admin/pages/DeleteProfile';

if (localStorage.token) {
	setAuth(localStorage.token);
}

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Switch>
						{/* User */}
						<Route exact path='/' component={Home} />
						<Route exact path='/post/:postId' component={SinglePost} />
						<Route exact path='/about' component={About} />
						<Route exact path='/gallery' component={Gallery} />
						{/* User */}

						{/* Admin */}
						<Route exact path='/register-admin' component={Register} />
						<Route exact path='/login-admin' component={Login} />
						<PrivateRoute exact path='/admin' component={CreatePost} />
						<PrivateRoute exact path='/user' component={UserSetting} />
						<PrivateRoute exact path='/updpost/:postId' component={UpdatePost} />
						<Route exact path='/updateprofile/:postId' component={UpdateProfile} />
						<Route exact path='/deletepost/:postId' component={DeletePost} />
						<Route exact path='/deleteprofile/:postId' component={DeleteProfile} />

						{/* Admin */}
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
