export const config = {
    authority: 'https://<your-keycloak-server>/auth/realms/<your-realm>',
    client_id: '<your-client-id>',
    redirect_uri: 'http://localhost:4000/callback',
    response_type: 'code',
    scope: 'openid profile email roles',
    post_logout_redirect_uri: window.location.origin,
    automaticSilentRenew: true,
    silent_redirect_uri: window.location.origin + '/silent-renew.html',
  };