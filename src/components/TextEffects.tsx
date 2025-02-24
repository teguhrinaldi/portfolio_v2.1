import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				'Coder',
				1500, // wait 1s before replacing "Mice" with "Hamsters"
				'Web Developer',
				1500,
				'Resolver',
				1500,
				'Programmer',
				1500,
			]}
			speed={50}
			className="text-[2rem] md:text-[2rem] font-bold text-yellow-400 uppercase "
			repeat={Infinity}
		/>
	);
};

export default TextEffect;
