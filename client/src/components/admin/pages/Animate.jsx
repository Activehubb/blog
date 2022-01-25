import './animate.css';

export default function Animate({ type }) {
	const Loading = () => (
		<div className='loading'>
			<div className='container mx-auto'>
				<div className='flex-col flex justify-center items-center h-screen'>
					<div className='balls '>
						<div className='ball ball1 shadow-lg'></div>
						<div className='ball ball2 shadow-lg'></div>
						<div className='ball ball3 shadow-lg'></div>
					</div>
				</div>
			</div>
		</div>
	);

	if (type === 'loading') return <Loading />;
}
