/**
 * Helper to push custom events to Google Tag Manager dataLayer
 */
export const trackGtmEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...eventData,
    });
  }
};

export const trackVinVerification = (location, vin = '') => {
  trackGtmEvent('verify_vin_click', {
    button_id: `btn-verify-vin-${location}`,
    button_location: location,
    vin_value: vin || undefined,
  });
};
