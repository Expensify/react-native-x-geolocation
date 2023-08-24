/**
 * Represents a URL string that provides more information on how to enable geolocation permissions on web.
 */
export type HelpLink = string;

/**
 * Represents a URI scheme that deep-links into specific system settings or permissions page on a device.
 */
export type SettingsLink = string;

/**
 * Default URI scheme that deep-links to the location settings page on the device.
 */
export const DEFAULT_APP_SETTINGS_LINK = 'app-settings:LOCATION_SETTINGS';

export type GetPermissionDeniedHelpLink = (helpLink: HelpLink, settingsLink: SettingsLink) => string;
