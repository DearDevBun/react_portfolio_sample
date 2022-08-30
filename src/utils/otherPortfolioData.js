import HealthFrontiersPic from "../pages/assets/images/healthFrontiers.png";
import DevBunPic from "../pages/assets/images/devBun.png"

function OtherProjectCard(otherTitle, otherAbout, otherImgURL, otherSiteURL){
    this.otherTitle = otherTitle;
    this.otherAbout = otherAbout;
    this.otherSiteURL = otherSiteURL;
    this.otherImgURL = otherImgURL;

}

const OtherTechSite = new OtherProjectCard(
    "Seattle Foundation",
    "A squarespace website for the non profit organization ",
    HealthFrontiersPic,
    "https://www.seattlefoundation.org/",
);

const DevBun = new OtherProjectCard(
    "Dev Bun",
    "A wordpress programming blog mainly focused on teaching new topic",
    DevBunPic,
    "https://www.devbun.com/",
);

let otherPortfolioData = [OtherTechSite, DevBun ];

export default otherPortfolioData;