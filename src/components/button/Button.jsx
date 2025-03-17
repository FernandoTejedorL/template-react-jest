import { StyledButton } from './button.styles';

const Button = ({ color, children, ...props }) => {
	return (
		<StyledButton color={color} {...props}>
			{children}
		</StyledButton>
	);
};

export default Button;
