import c from "../assets/images/C.svg";
import t from "../assets/images/T.svg";

export default function Header() {
	return (
		<div className="w-full h-[84px] bg-brand-green py-[20px] px-[25px]">
			<div className="w-full h-full flex items-center gap-2">
				<img src={c} className="h-full" alt="c" />
				<div className="w-full h-[3px] bg-black" />
				<img src={t} className="h-full" alt="t" />
			</div>
		</div>
	);
}
