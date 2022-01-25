import { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import SinglePost from './components/user/singlePost/Post';
import About from './components/admin/pages/About';
import Home from './components/user/home/Home';
import {
	CreatePost,
	UpdatePost,
	UpdateProfile,
} from './components/admin/home/AdminHome';
import DeletePost from './components/admin/pages/DeletePost';
import Register from './components/admin/auth/register/Register';
import Login from './components/admin/auth/login/Login';
import Gallery from './components/admin/pages/Gallery';
import Logout from './components/admin/pages/Logout';
import DelUser from './components/admin/pages/DelUser';
import DeleteProfile from './components/admin/pages/DeleteProfile';
import CreateProfile from './components/admin/dashboard/profile/CreateProfile';
import { useContext } from 'react';
import { AuthContext } from './context/auth/AuthContext';

function App() {
	const { user } = useContext(AuthContext);
	return (
		<Router>
			<Fragment>
				<Switch>
					{/* User */}
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/post/:postId'>
						<SinglePost />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/gallery'>
						<Gallery />
					</Route>
					{/* User */}

					{/* Admin */}
					<Route path='/register-admin'>
						<Register />
					</Route>
					<Route path='/login-admin'>
						<Login />
					</Route>
					{user && (
						<>
							<Route path='/admin'>
								{user ? <CreatePost /> : <Redirect to='/' />}
							</Route>
							<Route path='/user'>
								{user ? <CreateProfile /> : <Redirect to='/' />}
							</Route>
							<Route path='/updpost/:postId'>
								{user ? <UpdatePost /> : <Redirect to='/' />}
							</Route>
							<Route path='/updateprofile/:postId'>
								{user ? <UpdateProfile /> : <Redirect to='/' />}
							</Route>
							<Route path='/deletepost/:postId'>
								{user ? <DeletePost /> : <Redirect to='/' />}
							</Route>
							<Route path='/deleteprofile/:postId'>
								{user ? <DeleteProfile /> : <Redirect to='/' />}
							</Route>
							<Route path='/delaccount'>
								<DelUser />
							</Route>
						</>
					)}
					<Route path='/logout'>
						<Logout />
					</Route>

					{/* Admin */}
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
