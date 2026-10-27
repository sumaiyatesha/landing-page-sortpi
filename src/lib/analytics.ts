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

type GtagFunction = (...args: unknown[]) => void;

/**
 * Tracks typed client events without sending PII.
 * If NEXT_PUBLIC_ANALYTICS_ID is unset, acts as a documented no-op stub.
 */
export function trackEvent(
  eventName: AnalyticsEventType,
  properties?: SafeEventProperties
): void {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;

  if (!analyticsId) {
    // Documented no-op when provider is unconfigured
    return;
  }

  // If a provider like Plausible / Google Analytics is configured in production:
  try {
    if (typeof window !== "undefined") {
      const win = window as unknown as { gtag?: GtagFunction };
      if (typeof win.gtag === "function") {
        win.gtag("event", eventName, properties);
      }
    }
  } catch {
    // Fail silently in client
  }
}
