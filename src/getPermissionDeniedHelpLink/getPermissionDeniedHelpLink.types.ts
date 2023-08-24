/**
 * Represents a URL string that provides more information on how to enable geolocation permissions on web.
 */
export type HelpLink = string;

/**
 * Represents a URL string that navigates to the device settings or permissions page.
 */
export type SettingsLink = string;

export const DEFAULT_APP_SETTINGS_LINK = 'app-settings:LOCATION_SETTINGS';

export type GetPermissionDeniedHelpLink = (helpLink: HelpLink, settingsLink: SettingsLink) => string;
