export type AnalyticsEventType =
  | "demo_cta_click"
  | "contact_cta_click"
  | "pricing_plan_selected"
  | "industry_selected"
  | "workflow_step_selected"
  | "demo_form_submit"
  | "demo_form_success"
  | "demo_form_error"
  | "language_change"
  | "video_play";

export interface SafeEventProperties {
  section?: string;
  plan?: string;
  industry?: string;
  step?: string;
  language?: string;
  source?: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Tracks typed client events without sending PII.
 * If NEXT_PUBLIC_ANALYTICS_ID is unset, acts as a documented no-op stub.
 */
export function trackEvent(
  eventName: AnalyticsEventType,
  properties?: SafeEventProperties
): void {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  // In development, log to console for debugging without PII
  if (process.env.NODE_ENV === "development") {
    // console.log(`[SortPi Analytics - Stub] Event: ${eventName}`, properties || {});
  }

  if (!analyticsId) {
    // Documented no-op when provider is unconfigured
    return;
  }

  // If a provider like Plausible / Google Analytics is configured in production:
  try {
    if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag("event", eventName, properties);
    }
  } catch (err) {
    // Fail silently in client
  }
}
