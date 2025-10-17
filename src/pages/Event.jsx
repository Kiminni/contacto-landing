import React, { useRef, useEffect, useState } from 'react';
import eventLanding from '../assets/images/eventLanding.png';
import eventLanding2 from '../assets/images/eventLanding2.png';
import downloadButton from '../assets/images/downloadButton.png';
import eventFormButton from '../assets/images/eventFormButton.png';
import landingPageButton from '../assets/images/landingPageButton.png';

function Event() {
	const firstImageRef = useRef(null);
	const [imageWidth, setImageWidth] = useState(null);

	useEffect(() => {
		const updateWidth = () => {
			if (firstImageRef.current) {
				setImageWidth(firstImageRef.current.offsetWidth);
			}
		};

		// 이미지 로드 후 너비 측정
		if (firstImageRef.current) {
			firstImageRef.current.onload = updateWidth;
			updateWidth(); // 이미 로드된 경우
		}

		// 윈도우 리사이즈 시 업데이트
		window.addEventListener('resize', updateWidth);
		return () => window.removeEventListener('resize', updateWidth);
	}, []);

	const handleDownload = () => {
		// App Store URL (실제 CONTACTO 앱 URL로 변경 필요)
		window.open('https://apps.apple.com/kr/app/contacto/id6736873767', '_blank');
	};

	const handleEventForm = () => {
		// 이벤트 폼 URL (실제 폼 URL로 변경 필요)
		window.open('https://forms.gle/your-form-id', '_blank');
	};

	const handleLandingPage = () => {
		window.open('https://contactocreator.com/ko', '_blank');
	};

	return (
		<div className="w-full min-h-screen bg-black flex flex-col items-center">
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
		</div>
	);
}

export default Event;

