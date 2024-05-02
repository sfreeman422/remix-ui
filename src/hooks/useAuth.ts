import {
  accessTokenName,
  refreshTokenName,
  redirectTokenName,
} from "./useAuth.constants";

const getTokens = () => {
  const accessToken = localStorage.getItem(accessTokenName);
  const refreshToken = localStorage.getItem(refreshTokenName);
  const redirectToken = localStorage.getItem(redirectTokenName);

  return { accessToken, refreshToken, redirectToken };
};

const getSpotifyTokensFromParams = () => {
  const params = new URLSearchParams(window.location.search);
  const accessToken = params.get("accessToken");
  const refreshToken = params.get("refreshToken");

  return { accessToken, refreshToken };
};

const setTokens = (
  accessToken: string,
  refreshToken: string,
  redirectToken?: string
) => {
  localStorage.setItem(accessTokenName, accessToken);
  localStorage.setItem(refreshTokenName, refreshToken);
  if (redirectToken) {
    localStorage.setItem(redirectTokenName, redirectToken);
  }
};

export function useAuth() {
  const paramTokens = getSpotifyTokensFromParams();
  const tokens = getTokens();

  if (paramTokens.accessToken && paramTokens.refreshToken) {
    setTokens(paramTokens.accessToken, paramTokens.refreshToken);
    return {
      accessToken: paramTokens.accessToken,
      refreshToken: paramTokens.refreshToken,
    };
  } else if (tokens.accessToken && tokens.refreshToken) {
    // Confirm they are valid
    // If not valid, send to login page
  }
  return { accessToken: undefined, refreshToken: undefined };
}
