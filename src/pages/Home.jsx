import React from "react";
import Header from "../components/Header.jsx";
import Collabo from '../components/Collabo.jsx'
import { ReactSVG } from 'react-svg'
import Usage from '../components/Usage.jsx'

import homeMockUp from '../assets/images/homeMockUp.png'
import matchMockUp from '../assets/images/matchMockUp.png'
import logo from '../assets/images/logo.svg'
import chatView from '../assets/images/chatView.svg'
import matchView from '../assets/images/matchView.svg'
import categoryView from '../assets/images/categoryView.svg'

function Home() {
	const handleCtaClick = () => {
		console.log("CTA App Download Button Clicked");
		if (typeof window !== 'undefined' && typeof window.gtag === "function") {
			window.gtag("event", "button_click", {
				event_category: "CTA",
				event_label: "AppStoreDownload",
			});
		}
	};

	return (
		<div className="w-full min-w-[320px] h-full bg-brand-blue1 flex flex-col items-center text-center leading-tight">
			<Header/>
			<section className="w-full py-[180px] relative">
				<div className='w-full h-[10px] bg-orange-color mb-[120px] absolute top-0' />
				<Collabo />
			</section>
			<section className="w-full py-[180px] bg-black flex flex-col items-center justify-center text-brand-blue2">
				<img
					src={homeMockUp}
					alt="Home View"
					className="w-[230px] object-contain"
				/>
				<p className='mt-[40px] text-[30px] font-bold'>
					OX 퀴즈하듯<br />
					관심있는 창작자에게<br />
					호감을 표시하면 끝.
				</p>
				<p className='mt-[20px] font-bold'>그 어떤 플랫폼보다 쉽게 매칭이 됩니다.</p>
			</section>
			<section className="w-full py-[180px] flex flex-col items-center justify-center relative">
				<div className='w-full h-[10px] bg-orange-color absolute top-0' />
				<div className='mb-[150px]'>
					<p className="text-[18px] font-bold mb-[30px]">더 성장하고 싶은 창작자라면?</p>
					<p className="text-[30px] font-bold mb-[30px]">
						전 세계에 있는<br />
						문화•예술 창작자들에게<br />
						컨택토 해보세요!
					</p>
					<div className="w-[400px] h-[240px] flex flex-col items-center justify-between">
						{[
							['콜라보할 팀을 찾고있어요!', '#BAEF62'],
							['브랜드를 만들어 보고 싶어요.', '#1A76FF'],
							['친하게 지낼 동료 어디 없나요?', '#FF5D16'],
							['합동 전시 같이 할 작가 없나요?', '#FFDB1C'],
							['아트 레지던시 자리 남아요~', '#EF62C8'],
						].map((item, index) => (
							<div
								key={index}
								className='w-[400px] h-[45px] flex items-center justify-center border-black border-[2.5px]'
								style={{ backgroundColor: item[1] }}>
								<span className='text-[14px] font-bold'>{item[0]}</span>
							</div>
						))}
					</div>
				</div>
				<div>
					<p className='text-[18px] font-bold mb-[30px]'>다양한 창작분야와 협업해보고 싶지 않나요?</p>
					<p className="text-[30px] font-bold mb-[30px]">
						디자인, 패션, 예술,<br />
						공예, 미디어, 음악까지!
					</p>
					<div className="w-[400px] grid grid-cols-3 gap-[6px]">
						{[
							["Industrial", "#FFDB1C"],
							["Graphic", "#1A76FF"],
							["Fashion", "#FF5C16"],
							["UX/UI", "#EF62C7"],
							["Branding", "#BAEF62"],
							["Motion Graphic", "#54DBDB"],
							["Animation", "#FADAA9"],
							["Illustration", "#F31E51"],
							["Interior", "#FCA239"],
							["Architecture", "#CBE336"],
							["Textile", "#00D909"],
							["Fabric Product", "#A761FF"],
							["Styling", "#52FFF5"],
							["Bag Design", "#FA505B"],
							["Shoes Design", "#FFED8C"],
							["Painting", "#FCA239"],
							["Ridicule", "#BAEF62"],
							["Kinetic", "#EF62C7"],
							["Ceramics", "#57F67A"],
							["Wood", "#FFDB1C"],
							["Jewel", "#57F67A"],
							["Metal", "#FF5C16"],
							["Glass", "#FCA239"],
							["Printmaking", "#1A76FF"],
							["Aesthetics", "#CBE336"],
							["Tuffting", "#A661FF"],
							["Writing", "#00D909"],
							["Poet", "#FFEC8C"],
							["Video", "#EF62C7"],
							["Photo", "#F31E51"],
							["Advertising", "#52FFF5"],
							["Scenario", "#1A76FF"],
							["Compose", "#FA505B"],
						].map((item, index) => (
							<div
								key={index}
								className="p-[1px] flex flex-col items-center justify-center border-black border-[1.5px] text-[14px]"
								style={{ backgroundColor: item[1] }}>
								{item[0]}
							</div>
						))}
					</div>
					<div className="my-[30px] flex flex-col items-center justify-center gap-1.5">
						{[...Array(3)].map((_, idx) => (
							<span
								key={idx}
								className="w-[9px] h-[9px] bg-[#D9D9D9] rounded-full border-black border-[1px]"
							></span>
						))}
					</div>
					<p className='text-[18px] font-bold'>다양한 분야의 창작자들이 활동하고 있습니다!</p>
				</div>
			</section>
			<section className="w-full py-[180px] bg-black flex flex-col items-center justify-center text-brand-blue2">
				<img
					src={matchMockUp}
					alt="Match View"
					className="w-[230px] object-contain"
				/>
				<p className="mt-[40px] text-[30px] font-bold">
					서로 관심있다면<br />
					바로 매칭되어 이야기를<br />
					나눠볼 수 있습니다.
				</p>
				<p className="mt-[20px] font-bold">매칭된다면 반갑게 인사를 건네보세요!</p>
			</section>
			<section className="w-full py-[180px] bg-brand-peach flex flex-col items-center justify-center">
				<div className="mb-[300px]">
					<div className="flex justify-center items-end gap-2 mb-[40px]">
						<img
							src={logo}
							alt="Contacto Logo"
							className="w-[220px] object-contain"
						/>
						<span className="text-[25px] leading-none align-bottom">는</span>
					</div>
					<p className="text-[30px] font-bold mb-[40px]">
						창작활동의 스펙트럼을<br />
						넓힐 수 있는 기회입니다.
					</p>
					<div className="relative flex flex-col items-center">
						<div className="relative w-[300px] h-[450px] mb-[40px]">
							<img
								src={chatView}
								alt="Contacto+ 앱 채팅 화면 목업"
								className="w-full h-full object-cover object-top"
							/>
							{/* 그라데이션 오버레이 */}
							<div
								className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-brand-peach to-transparent pointer-events-none" />
						</div>
						<p className="font-bold">
							합동전시/캠페인/디제잉 파티 등 혼자서는<br />
							할 수 없는 다양한 프로젝트를 함께 기획해보세요.
						</p>
					</div>
				</div>
				<div className="mb-[300px]">
					<p className="text-[30px] font-bold mb-[40px]">
						해외의 아티스트와<br />
						친해질 수 있습니다!
					</p>
					<div className="relative flex flex-col items-center">
						<div className="relative w-[300px] h-[480px] mb-[40px]">
							<img
								src={matchView}
								alt="Contacto+ 앱 채팅 화면 목업"
								className="w-full h-full object-cover object-top"
							/>
							{/* 그라데이션 오버레이 */}
							<div
								className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-brand-peach to-transparent pointer-events-none" />
						</div>
						<p className="font-bold">
							해외가 궁금하신가요?<br />
							다양한 국적의 창작가들도 참여할 예정이랍니다!<br />
							미리 가입해서 다양한 국가의 창작자들과 이야기해봐요!
						</p>
					</div>
				</div>
				<div className="mb-[300px]">
					<p className="text-[30px] font-bold mb-[40px]">
						작은 규모의 창작가들이<br />
						규모를 키울 수 있습니다.
					</p>
					<div className="relative flex flex-col items-center">
						<div className="relative w-[300px] h-[500px] mb-[40px]">
							<img
								src={categoryView}
								alt="Contacto+ 앱 채팅 화면 목업"
								className="w-full h-full object-cover object-top"
							/>
							{/* 그라데이션 오버레이 */}
							<div
								className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-brand-peach to-transparent pointer-events-none" />
						</div>
						<p className="font-bold">
							내가 마침 창작활동을 막 시작한 창작초년생이라면<br />
							컨택토를 통해 협업을 진행해보세요!<br />
							더 빠르게 씬에서 눈에 띄게 될거에요.
						</p>
					</div>
				</div>
				<div>
					<p className="text-[30px] font-bold mb-[25px]">
						나와 결이 맞는 창작동료를<br />
						얻을 수 있는 놀이터입니다.
					</p>
					<p className="font-bold">
						나와 결이 맞고 생각이 맞는 창작동료를 찾기 어렵지 않았나요?<br />
						컨택토에서 찾아보세요!
					</p>
				</div>
			</section>
			{/* 스와이프 캐러셀 */}
			<section className="w-full py-[180px]">
				<div className="flex justify-center items-end gap-1">
					<img
						src={logo}
						alt="Contacto Logo"
						className="h-[25px] object-contain"
					/>
					<span className="text-[20px] leading-none align-bottom">는</span>
				</div>
				<p className="text-[30px] font-bold mb-[60px]">
					이렇게 사용할 수 있어요!
				</p>
				<Usage/>
			</section>
			{/* CTA */}
			<section className="w-full py-[180px] bg-black flex flex-col items-center justify-center">
				<div className="h-[300px] flex gap-2 mb-[50px]">
					<img
						src={homeMockUp}
						alt="Contacto App Mockups CTA"
						className="h-full object-contain"
					/>
					<img
						src={matchMockUp}
						alt="Contacto App Mockups CTA"
						className="h-full object-contain"
					/>
				</div>
				<div className="flex justify-center items-end gap-1 text-brand-green">
					<div className='w-[150px] h-[25px]'>
						<ReactSVG
							src={logo}
							alt="Contacto Logo"
							beforeInjection={(svg) => {
								svg.removeAttribute('width')
								svg.removeAttribute('height')
								svg.setAttribute('class', 'w-full h-full fill-current')
							}}
						/>
					</div>
					<span className="text-[20px] leading-none align-bottom">에서</span>
				</div>
				<p className="text-[30px] font-bold text-brand-green">
					지금 바로 협업하세요!
				</p>
			</section>
			{/* CTA Button */}
			<div className='fixed bottom-[70px] left-0 w-full flex justify-center z-50'>
				<a
					href="https://apps.apple.com/kr/app/contacto/id6736873767"
					onClick={handleCtaClick}
					className="py-1.5 px-11 bg-brand-green font-extrabold border-black border-2 cursor-pointer"
					target="_blank"
					rel="noopener noreferrer"
				>
					App Download (iOS only) →
				</a>
			</div>
		</div>
	);
}

export default Home;
