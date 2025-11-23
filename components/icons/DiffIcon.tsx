import type React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

const DiffIcon = (props: IconProps) => {
	const { title, ...rest } = props;
	return (
		<svg
			{...rest}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			{title ? <title>{title}</title> : null}
			<path d="M12 3v14" />
			<path d="M5 10h14" />
			<path d="M5 21h14" />
		</svg>
	);
};

export default DiffIcon;
