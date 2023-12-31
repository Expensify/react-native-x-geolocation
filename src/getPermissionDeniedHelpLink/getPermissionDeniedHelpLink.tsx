import {GetPermissionDeniedHelpLink, DEFAULT_APP_SETTINGS_LINK} from './getPermissionDeniedHelpLink.types';

const getPermissionDeniedHelpLink: GetPermissionDeniedHelpLink = (_helpLink, settingsLink = DEFAULT_APP_SETTINGS_LINK) => settingsLink;

export default getPermissionDeniedHelpLink;
