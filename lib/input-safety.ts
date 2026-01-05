export interface ValidationResult {
    value: string
    isValid: boolean
    reason?: string
}

const VIN_REGEX = /^[A-HJ-NPR-Z0-9]+$/ // Alphanumeric, no I, O, Q
const PLATE_REGEX = /^[A-Z0-9]+$/ // Alphanumeric only
const STATE_REGEX = /^[A-Z]{2}$/ // Exactly 2 letters

/**
 * Normalizes and validates a VIN.
 * Rules:
 * - Uppercase, trim, remove whitespace/dashes
 * - Exactly 17 characters
 * - Alphanumeric only
 * - Disallow I, O, Q (standard VIN exclusion)
 */
export function normalizeVin(raw: string): ValidationResult {
    if (!raw) return { value: "", isValid: false }

    // 1. Basic sanitization: Uppercase, trim, remove invisible chars/dashes/spaces
    let value = raw
        .toUpperCase()
        .trim()
        .replace(/[\u200B-\u200D\uFEFF]/g, "") // Remove zero-width spaces
        .replace(/[^A-Z0-9]/g, "") // Remove non-alphanumeric (including dashes/spaces)

    // 2. VIN Rule: No I, O, Q
    // If user typed them, they are already stripped or we can verify existence.
    // Actually, standard VINs don't have I, O, Q. If the user input contains them, it's invalid.
    // However, cleaning them out entirely might be aggressive if they *intended* a VIN.
    // Better to flag them as invalid characters if strict, or map them if we want to be "helpful" (e.g. O -> 0).
    // Security-focused approach: fail on invalid chars rather than guessing.
    // But our regex replace above `[^A-Z0-9]` keeps I, O, Q. We need to check for them specifically.

    // Let's re-run a stricter check on the sanitized value for I/O/Q specific error
    if (/[IOQ]/.test(value)) {
        return {
            value,
            isValid: false,
            reason: "VINs cannot contain letters I, O, or Q",
        }
    }

    // 3. Length Check
    if (value.length !== 17) {
        return {
            value,
            isValid: false,
            reason: `VIN must be exactly 17 characters (currently ${value.length})`,
        }
    }

    // 4. Structure Check (already covered by regex replace, but let's be double sure)
    if (!VIN_REGEX.test(value)) {
        return {
            value,
            isValid: false,
            reason: "VIN contains invalid characters",
        }
    }

    return { value, isValid: true }
}

/**
 * Normalizes and validates a License Plate.
 * Rules:
 * - Uppercase, trim
 * - Alphanumeric only
 * - Length 2-8 characters
 */
export function normalizePlate(raw: string): ValidationResult {
    if (!raw) return { value: "", isValid: false }

    let value = raw
        .toUpperCase()
        .trim()
        .replace(/[\u200B-\u200D\uFEFF]/g, "")
        .replace(/[^A-Z0-9]/g, "")

    if (value.length < 2) {
        return {
            value,
            isValid: false,
            reason: "Plate must be at least 2 characters",
        }
    }

    if (value.length > 8) {
        // If strict, we can slice it or fail.
        // "max length enforced" implies we might slice it input-side, 
        // but validation-side we should just check. 
        // Let's treat > 8 as invalid for strict safety.
        return {
            value,
            isValid: false,
            reason: "Plate cannot exceed 8 characters",
        }
    }

    if (!PLATE_REGEX.test(value)) {
        return {
            value,
            isValid: false,
            reason: "Plate contains invalid characters",
        }
    }

    return { value, isValid: true }
}

/**
 * Normalizes and validates a US State Code.
 * Rules:
 * - Uppercase, trim
 * - Exactly 2 letters
 */
export function normalizeState(raw: string): ValidationResult {
    if (!raw) return { value: "", isValid: false }

    let value = raw
        .toUpperCase()
        .trim()
        .replace(/[^A-Z]/g, "") // Letters only

    if (value.length !== 2) {
        return {
            value,
            isValid: false,
            reason: "State code must be 2 letters",
        }
    }

    return { value, isValid: true }
}

/**
 * Formatting for display (visual only, not for storage/submission)
 * e.g. groups VIN for readability
 */
export function formatVinDisplay(vin: string): string {
    // Use the normalize function to get the clean value first, but don't strictly validate length here (as user is typing)
    const clean = vin.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, "")

    if (clean.length <= 4) return clean
    if (clean.length <= 8) return `${clean.slice(0, 4)}-${clean.slice(4)}`
    if (clean.length <= 12) return `${clean.slice(0, 4)}-${clean.slice(4, 8)}-${clean.slice(8)}`
    return `${clean.slice(0, 4)}-${clean.slice(4, 8)}-${clean.slice(8, 12)}-${clean.slice(12, 17)}`
}

/**
 * Mask sensitive data for display
 */
export function maskData(value: string, visibleChars = 4): string {
    if (!value || value.length <= visibleChars) return value
    return "*".repeat(value.length - visibleChars) + value.slice(-visibleChars)
}
