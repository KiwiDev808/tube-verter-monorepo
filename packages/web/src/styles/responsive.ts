const responsive = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };
  
  export const device = {
    mobileS: `(min-device-width: ${responsive.mobileS}) and (max-device-height: 800px)`,
    mobile: `(min-device-width: ${responsive.mobileM}) and (max-device-height: 900px)`,
    tablet: `(min-device-width: ${responsive.tablet})`,
    laptop: `(min-width: ${responsive.laptop})`,
    laptopL: `(min-width: ${responsive.laptopL})`,
    desktop: `(min-width: ${responsive.desktop})`,
  };