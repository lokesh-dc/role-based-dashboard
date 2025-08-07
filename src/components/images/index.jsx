import Image from "next/image";
export default function NextImageCompo({
	src = "",
	height = 300,
	width = 200,
	alt = "",
	classes = "",
	style = {},
}) {
	return (
		<Image
			style={style}
			className={classes}
			src={src}
			height={height}
			width={width}
			alt={alt}
		/>
	);
}
