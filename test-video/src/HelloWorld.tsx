import {Img} from 'remotion';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import Logo from './logo.png';

export const HelloWorld = () => {
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill style={{opacity: `${frame / 100}`}}>
			<Img src={Logo} alt="logo" placeholder="" />
		</AbsoluteFill>
	);
};
