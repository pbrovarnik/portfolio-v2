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
