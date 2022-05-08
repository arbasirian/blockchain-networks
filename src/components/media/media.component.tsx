import { createMedia } from "@artsy/fresnel";

const breakpoints = {
  mobile: 0,
  tablet: 767,
  desktop: 992,
};

export const mediaQuery = {
  mobile: `(max-width: ${breakpoints.tablet}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
};

const BlockchainNetworksAppMedia = createMedia({ breakpoints });

// Make styles for injection into the header of the page
export const mediaStyles = BlockchainNetworksAppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = BlockchainNetworksAppMedia;
