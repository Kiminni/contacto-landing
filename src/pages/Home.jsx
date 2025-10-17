import React from "react";
import Header from "../components/Header.jsx";
import Collabo from '../components/Collabo.jsx'
import { ReactSVG } from 'react-svg'
import Usage from '../components/Usage.jsx'
import { useTranslation } from 'react-i18next';

import homeMockUp from '../assets/images/homeMockUp.png'
import matchMockUp from '../assets/images/matchMockUp.png'
import logo from '../assets/images/logo.svg'
import chatView from '../assets/images/chatView.svg'
import matchView from '../assets/images/matchView.svg'
import categoryView from '../assets/images/categoryView.svg'

function Home() {
	const { t } = useTranslation();

	const handleCtaClick = (e) => {
		console.log("CTA App Download Button Clicked");
		
		// Google Analytics
		if (typeof window !== 'undefined' && typeof window.gtag === "function") {
			window.gtag("event", "button_click", {
				event_category: "CTA",
				event_label: "AppStoreDownload",
			});
		}
		// Facebook Pixel ViewContent 이벤트
		if (typeof window !== 'undefined' && typeof window.fbq === "function") {
			console.log("event triggered");
			window.fbq('track', 'ViewContent');
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
				<p className='mt-[40px] text-[30px] font-bold' dangerouslySetInnerHTML={{ __html: t('home_section1_title') }} />
				<p className='mt-[20px] font-bold'>{t('home_section1_subtitle')}</p>
			</section>
			<section className="w-full py-[180px] flex flex-col items-center justify-center relative">
				<div className='w-full h-[10px] bg-orange-color absolute top-0' />
				<div className='mb-[150px]'>
					<p className="text-[18px] font-bold mb-[30px]">{t('home_section2_subtitle1')}</p>
					<p className="text-[30px] font-bold mb-[30px]" dangerouslySetInnerHTML={{ __html: t('home_section2_title1') }} />
					<div className="w-[400px] h-[240px] flex flex-col items-center justify-between">
						{[
							[t('home_section2_list1_item1'), '#BAEF62'],
							[t('home_section2_list1_item2'), '#1A76FF'],
							[t('home_section2_list1_item3'), '#FF5D16'],
							[t('home_section2_list1_item4'), '#FFDB1C'],
							[t('home_section2_list1_item5'), '#EF62C8'],
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
					<p className='text-[18px] font-bold mb-[30px]'>{t('home_section2_subtitle2')}</p>
					<p className="text-[30px] font-bold mb-[30px]" dangerouslySetInnerHTML={{ __html: t('home_section2_title2') }} />
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
					<p className='text-[18px] font-bold'>{t('home_section2_subtitle3')}</p>
				</div>
			</section>
			<section className="w-full py-[180px] bg-black flex flex-col items-center justify-center text-brand-blue2">
				<img
					src={matchMockUp}
					alt="Match View"
					className="w-[230px] object-contain"
				/>
				<p className="mt-[40px] text-[30px] font-bold" dangerouslySetInnerHTML={{ __html: t('home_section3_title1') }} />
				<p className="mt-[20px] font-bold">{t('home_section3_subtitle1')}</p>
			</section>
			<section className="w-full py-[180px] bg-brand-peach flex flex-col items-center justify-center">
				<div className="mb-[300px]">
					<div className="flex justify-center items-end gap-2 mb-[40px]">
						<img
							src={logo}
							alt="Contacto Logo"
							className="w-[220px] object-contain"
						/>
						<span className="text-[25px] leading-none align-bottom">{t('home_section4_post_logo')}</span>
					</div>
					<p className="text-[30px] font-bold mb-[40px]" dangerouslySetInnerHTML={{ __html: t('home_section4_title1') }} />
					<div className="relative flex flex-col items-center">
						<div className="relative w-[300px] h-[450px] mb-[40px]">
							<img
								src={chatView}
								alt={t('alt_chat_mockup')}
								className="w-full h-full object-cover object-top"
							/>
							{/* Gradient overlay */}
							<div
								className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-brand-peach to-transparent pointer-events-none" />
						</div>
						<p className="font-bold" dangerouslySetInnerHTML={{ __html: t('home_section4_text1') }} />
					</div>
				</div>
				<div className="mb-[300px]">
					<p className="text-[30px] font-bold mb-[40px]" dangerouslySetInnerHTML={{ __html: t('home_section4_title2') }} />
					<div className="relative flex flex-col items-center">
						<div className="relative w-[300px] h-[480px] mb-[40px]">
							<img
								src={matchView}
								alt={t('alt_match_mockup')}
								className="w-full h-full object-cover object-top"
							/>
							{/* Gradient overlay */}
							<div
								className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-brand-peach to-transparent pointer-events-none" />
						</div>
						<p className="font-bold" dangerouslySetInnerHTML={{ __html: t('home_section4_text2') }} />
					</div>
				</div>
				<div className="mb-[300px]">
					<p className="text-[30px] font-bold mb-[40px]" dangerouslySetInnerHTML={{ __html: t('home_section5_title_small_scale') }} />
					<div className="relative flex flex-col items-center">
						<div className="relative w-[300px] h-[500px] mb-[40px]">
							<img
								src={categoryView}
								alt={t('alt_category_mockup')}
								className="w-full h-full object-cover object-top"
							/>
							{/* Gradient overlay */}
							<div
								className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-brand-peach to-transparent pointer-events-none" />
						</div>
						<p className="font-bold" dangerouslySetInnerHTML={{ __html: t('home_section5_text_small_scale') }} />
					</div>
				</div>
				<div>
					<p className="text-[30px] font-bold mb-[25px]" dangerouslySetInnerHTML={{ __html: t('home_section5_title_playground') }} />
					<p className="font-bold" dangerouslySetInnerHTML={{ __html: t('home_section5_text_playground') }} />
				</div>
			</section>
			{/* Swipe carousel */}
			<section className="w-full py-[180px] flex flex-col items-center justify-center">
				<div className="flex justify-center items-end gap-1">
					<img
						src={logo}
						alt="Contacto Logo"
						className="h-[25px] object-contain"
					/>
					<span className="text-[20px] leading-none align-bottom">{t('home_section4_post_logo')}</span>
				</div>
				<p className="text-[30px] font-bold mb-[60px]">
					{t('home_section5_title1')}
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
					<span className="text-[20px] leading-none align-bottom">{t('home_section6_text_after_logo')}</span>
				</div>
				<p className="text-[30px] font-bold text-brand-green" dangerouslySetInnerHTML={{ __html: t('home_section6_text_collaborate') }} />
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
					{t('home_section6_button')} →
				</a>
			</div>
			<div className="w-full text-center py-[20px] text-[14px] font-bold text-gray-400">
				{t('home_section6_footer_text')}
			</div>
			<div className="w-full text-center pb-[20px] text-[12px] text-gray-500">
				{t('copyright_text')}
			</div>
		</div>
	);
}

export default Home;
