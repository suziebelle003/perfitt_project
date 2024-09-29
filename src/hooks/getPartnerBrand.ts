import { abcmartLogo, kolonLogo, perfittCircleLogo, shoemarkerLogo } from "../assets/images/images";

export const getPartnerBrand = (link: string) => {
  if (link.includes('a-rt.com'))
    return {
      name: "ABC Mart",
      image: abcmartLogo
    }
  else if (link.includes('shoemarker.co.kr'))
    return {
      name: "Shoemarker",
      image: shoemarkerLogo
    }
  else if (link.includes('kolonmall.com'))
    return {
      name: "Kolon Mall",
      image: kolonLogo
    }
  else return {
    name: "Perfitt",
    image: perfittCircleLogo
  };
};
