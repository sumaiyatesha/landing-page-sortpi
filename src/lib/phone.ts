/**
 * Converts Bengali digits (০-৯) to Arabic numerals (0-9).
 */
export function normalizeBengaliDigits(input: string): string {
  const bengaliToEnglish: Record<string, string> = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };
  return input.replace(/[০-৯]/g, (match) => bengaliToEnglish[match] || match);
}

export interface PhoneValidationResult {
  isValid: boolean;
  normalized?: string;
  error?: string;
}

/**
 * Validates and normalizes a Bangladeshi mobile number.
 * Accepts:
 *  - 01XXXXXXXXX (11 digits, operator digit 3 to 9)
 *  - +8801XXXXXXXXX (14 characters)
 * Returns normalized international format: +8801XXXXXXXXX
 */
export function validateAndNormalizeBDPhone(rawPhone: string): PhoneValidationResult {
  if (!rawPhone || typeof rawPhone !== "string") {
    return { isValid: false, error: "Phone number is required." };
  }

  // 1. Convert Bengali digits if present
  let clean = normalizeBengaliDigits(rawPhone.trim());

  // 2. Remove spaces, dashes, parentheses
  clean = clean.replace(/[\s\-\(\)]/g, "");

  // 3. Match against local 01XXXXXXXXX or international +8801XXXXXXXXX or 8801XXXXXXXXX
  const localRegex = /^01[3-9]\d{8}$/;
  const internationalRegex = /^\+8801[3-9]\d{8}$/;
  const withoutPlusRegex = /^8801[3-9]\d{8}$/;

  if (internationalRegex.test(clean)) {
    return { isValid: true, normalized: clean };
  }

  if (withoutPlusRegex.test(clean)) {
    return { isValid: true, normalized: `+${clean}` };
  }

  if (localRegex.test(clean)) {
    // Convert local 01XXXXXXXXX to +8801XXXXXXXXX
    const normalized = `+88${clean}`;
    return { isValid: true, normalized };
  }

  return {
    isValid: false,
    error: "Please enter a valid Bangladeshi mobile number (e.g. 017XXXXXXXX or +88017XXXXXXXX).",
  };
}
