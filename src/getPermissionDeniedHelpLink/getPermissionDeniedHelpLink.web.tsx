import {GetPermissionDeniedHelpLink, DEFAULT_APP_SETTINGS_LINK} from './getPermissionDeniedHelpLink.types';

const getPermissionDeniedHelpLink: GetPermissionDeniedHelpLink = (helpLink, _settingsLink = DEFAULT_APP_SETTINGS_LINK) => helpLink;

export default getPermissionDeniedHelpLink;
