interface animeConfig {
  hmdonghua: {
    siteName: string;
    description: string;
    logo: string;
    favicon: string;
    image: string;
  };

  hmdonghuaApi: {
    apiUrl: string;
    baseUrlPath: string;
  };
}

const animeConfig: animeConfig = {
  hmdonghua: {
    siteName: "hmdonghua",
    description: "Nonton donghua gratis ga pake karcis hanya di Hmdonghua",
    logo: "/images/logo.png",
    favicon: "/favicon.png",
    image: "/images/hmdonghua.jpg",
  },

  hmdonghuaApi: {
    apiUrl: "https://www.hmdonghua.com",
    baseUrlPath: "/anime/donghua",
  },
};

export default animeConfig;