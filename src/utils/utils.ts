type BrowserType = 'Unknown' | 'Chrome' | 'Edge' | 'Firefox' | 'Safari' | 'IE';

export function getBrowser(): BrowserType {
	let userAgent = navigator.userAgent;
	let browser: BrowserType = 'Unknown';

	// Detect Chrome
	if (/Chrome/.test(userAgent) && !/Chromium/.test(userAgent)) {
		browser = 'Chrome';
	}
	// Detect Chromium-based Edge
	else if (/Edg/.test(userAgent)) {
		browser = 'Edge';
	}
	// Detect Firefox
	else if (/Firefox/.test(userAgent)) {
		browser = 'Firefox';
	}
	// Detect Safari
	else if (/Safari/.test(userAgent)) {
		browser = 'Safari';
	}
	// Detect Internet Explorer
	else if (/Trident/.test(userAgent)) {
		browser = 'IE';
	}

	return browser;
}

export const isTouchDevice = () => {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

export function setTranslateXOnHeroText(scrollingElement: HTMLDivElement, textContainer: HTMLDivElement) {
	const scrollingElementWidth = scrollingElement.offsetWidth;
	const containerWidth = textContainer.offsetWidth;

	const maxTranslateX = (scrollingElementWidth - containerWidth) / 2;
	textContainer.style.transform = `translateX(-${maxTranslateX}px)`;
}

export function setOpacityOnHeroText(headerTitleElement: HTMLDivElement, textContainer: HTMLDivElement) {
	const headerRect = headerTitleElement.getBoundingClientRect();
	const textContainerRect = textContainer.getBoundingClientRect();

	if (headerRect.top <= textContainerRect.top && headerRect.bottom >= textContainerRect.top) {
		textContainer.style.opacity = '0';
		headerTitleElement.style.opacity = '1';
	}

	// currently not working because in the intersection observer display is set to none
	if (headerRect.top > textContainerRect.top && headerRect.top < textContainerRect.bottom) {
		textContainer.style.opacity = '1';
		headerTitleElement.style.opacity = '0';
	}
}

export function setPointerEventsOnHeaderTitleText(headerTitleElement: HTMLDivElement) {
	const headerTitleText = headerTitleElement.querySelector('h1');
	if (!headerTitleText) return;

	if (window.innerWidth > 1023) {
		headerTitleText.style.pointerEvents = 'auto';
		headerTitleText.style.cursor = 'pointer';
		headerTitleText.onclick = () => {
			window.history.replaceState(null, 'Pasha Brovarnik', '/');
			window.scrollTo(0, 0);
		};
	} else {
		headerTitleText.style.pointerEvents = 'auto';
		headerTitleText.style.cursor = 'text';
		headerTitleText.onclick = null;
	}
}
