import { Fragment } from 'react';
import Post from '../post/Post';
import './post.css';

const Posts = ({postData}) => {
	return (
		<Fragment>
			<div className='lg:justify-between lg:grid lg:grid-cols-2'>
				{postData ? (
					postData.map((post) => <Post post={post} key={post._id} />)
				) : (
					<>No Posts Yet</>
				)}
			</div>
		</Fragment>
	);
};

export default Posts;
