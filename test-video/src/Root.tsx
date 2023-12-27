import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

export const RemotionRoot: React.FC = () => {
	return (
		<div>
			<Composition
				width={2000}
				height={2000}
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={60}
				fps={20}

			/>
		</div>
	);
};
