import React, { useRef, useEffect, useState } from 'react';
import eventLanding from '../assets/images/eventLanding.png';
import eventLanding2 from '../assets/images/eventLanding2.png';
import mobileEventLanding from '../assets/images/mobileEventLanding.png';
import downloadButton from '../assets/images/downloadButton.png';
import eventFormButton from '../assets/images/eventFormButton.png';
import landingPageButton from '../assets/images/landingPageButton.png';
import mobileLandingPageButton from '../assets/images/mobileLandingPageButton.png';

function Event() {
	const firstImageRef = useRef(null);
	const [imageWidth, setImageWidth] = useState(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const updateWidth = () => {
			if (firstImageRef.current) {
				setImageWidth(firstImageRef.current.offsetWidth);
			}
		};

		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		// 초기 모바일 체크
		checkMobile();

		// 이미지 로드 후 너비 측정
		if (firstImageRef.current) {
			firstImageRef.current.onload = updateWidth;
			updateWidth(); // 이미 로드된 경우
		}

		// 윈도우 리사이즈 시 업데이트
		const handleResize = () => {
			updateWidth();
			checkMobile();
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleDownload = () => {
		window.open('https://apps.apple.com/kr/app/contacto/id6736873767', '_blank');
		window.fbq('track', 'ViewContent');
	};

	const handleEventForm = () => {
		window.open('https://docs.google.com/forms/d/e/1FAIpQLScRMfNrABUU-R8KSjbJIuMcBZ-HsIxRcMx6SackZSljuQ51og/viewform?usp=header', '_blank');
	};

	const handleLandingPage = () => {
		window.open('https://contactocreator.com/ko', '_blank');
	};

	return (
		<div className="w-full min-h-screen bg-black flex flex-col items-center">
			{isMobile ? (
				// 모바일 버전
				<>
					<img 
						ref={firstImageRef}
						src={mobileEventLanding} 
						alt="CONTACTO Mobile Event" 
						className="w-full h-auto object-contain"
					/>
					
					{/* 모바일 랜딩 페이지 버튼 */}
					<button
						onClick={handleLandingPage}
						className="cursor-pointer w-full"
					>
						<img 
							src={mobileLandingPageButton} 
							alt="Go to Landing Page" 
							className="w-full h-auto"
						/>
					</button>
					
					{/* 모바일 플로팅 버튼 - 화면 하단 고정, 세로 배치 */}
					<div className="fixed bottom-4 left-0 right-0 z-50 flex flex-col items-start gap-2 px-4">
						{/* 다운로드 버튼 - 위 */}
						<button
							onClick={handleDownload}
							className="cursor-pointer w-[50%] max-w-[200px]"
						>
							<img 
								src={downloadButton} 
								alt="Download" 
								className="w-full h-auto"
							/>
						</button>

						{/* 이벤트 폼 버튼 - 아래 */}
						<button
							onClick={handleEventForm}
							className="cursor-pointer w-[50%] max-w-[200px]"
						>
							<img 
								src={eventFormButton} 
								alt="Event Form" 
								className="w-full h-auto"
							/>
						</button>
					</div>
				</>
			) : (
				// 데스크탑 버전
				<>
					{/* 첫 번째 이미지 섹션 */}
					<div className="relative w-full max-h-screen flex justify-center">
						<img 
							ref={firstImageRef}
							src={eventLanding} 
							alt="CONTACTO App Download Event" 
							className="max-h-screen w-auto object-contain"
						/>
					</div>
					
					{/* 두 번째 이미지 */}
					<img 
						src={eventLanding2} 
						alt="CONTACTO Event Details" 
						className="h-auto object-contain"
						style={{ width: imageWidth ? `${imageWidth}px` : 'auto' }}
					/>
					
					{/* 랜딩 페이지 버튼 */}
					<div className="flex justify-center">
						<button
							onClick={handleLandingPage}
							className="cursor-pointer"
							style={{ width: imageWidth ? `${imageWidth}px` : 'auto' }}
						>
							<img 
								src={landingPageButton} 
								alt="Go to Landing Page" 
								className="w-full h-auto"
							/>
						</button>
					</div>

					{/* 다운로드 버튼 - 이미지 왼쪽 하단 고정 */}
					<button
						onClick={handleDownload}
						className="fixed bottom-4 cursor-pointer z-50"
						style={{
							left: imageWidth ? `calc((100vw - ${imageWidth}px) / 2)` : '0',
							width: imageWidth ? `${imageWidth * 0.15}px` : '128px'
						}}
					>
						<img 
							src={downloadButton} 
							alt="Download" 
							className="w-full h-auto"
						/>
					</button>

					{/* 이벤트 폼 버튼 - 이미지 오른쪽 하단 고정 */}
					<button
						onClick={handleEventForm}
						className="fixed bottom-4 cursor-pointer z-50"
						style={{
							right: imageWidth ? `calc((100vw - ${imageWidth}px) / 2)` : '0',
							width: imageWidth ? `${imageWidth * 0.15}px` : '128px'
						}}
					>
						<img 
							src={eventFormButton} 
							alt="Event Form" 
							className="w-full h-auto"
						/>
					</button>
				</>
			)}
		</div>
	);
}

export default Event;
