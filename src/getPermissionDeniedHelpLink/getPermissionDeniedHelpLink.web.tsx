import {GetPermissionDeniedHelpLink, DEFAULT_APP_SETTINGS_LINK} from './getPermissionDeniedHelpLink.types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPermissionDeniedHelpLink: GetPermissionDeniedHelpLink = (helpLink, _settingsLink = DEFAULT_APP_SETTINGS_LINK) => {
    return helpLink;
};

export default getPermissionDeniedHelpLink;
