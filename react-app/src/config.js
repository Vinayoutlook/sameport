
export default {
    oidc: {
        issuer: process.env.REACT_APP_ISSUER,
        clientId: process.env.REACT_APP_CLIENT_ID,
        redirectUri: window.location.origin + '/login/callback',
        scopes: ['openid', 'profile', 'email'],
        "useInteractionCodeFlow": true,
    },
    widget: {
        issuer: process.env.REACT_APP_ISSUER,
        clientId: process.env.REACT_APP_CLIENT_ID,
        redirectUri: window.location.origin + '/login/callback',
        scopes: ['openid', 'profile', 'email'],
        logoText: 'Windico',
        "useInteractionCodeFlow": true,
        features: {
            rememberMe: true,
        },
    }
  };