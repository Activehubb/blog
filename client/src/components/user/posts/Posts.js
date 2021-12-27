import Post from '../post/Post';
import './post.css';

const Posts = ({ posts }) => {
	return (
		<div className='post lg:grid lg:grid-cols-2'>
			{posts && (
				posts.map((post) => <Post post={post}/>)
			)}
		</div>
	);
};

export default Posts;
