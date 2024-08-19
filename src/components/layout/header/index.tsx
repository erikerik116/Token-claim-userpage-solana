import LogoIcon from "../../../features/icon/logo";
import TwitterX from "../../../assets/img/main/x-twitter-brands-solid.svg";
import Discord from "../../../assets/img/main/discord-brands-solid.svg";
import { SocialBtn } from "../footer";
import { SocialBtnImg } from "../footer";

import * as S from "./index.styled";

const MenuIcon = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <S.MenuIconItem />
      <S.MenuIconItem />
      <S.MenuIconItem />
    </div>
  );
};

const Header = () => {
  return (
    <S.HeaderMainContainer>
      <S.MainContainer>
        <S.HeaderLogo>
          <LogoIcon />
        </S.HeaderLogo>

        <S.OtherBtn>
          <SocialBtn>
            <SocialBtnImg src={TwitterX} alt="TwitterX" />
          </SocialBtn>
          <SocialBtn>
            <SocialBtnImg src={Discord} alt="Discord" />
          </SocialBtn>
          <S.MenuBtn>
            <MenuIcon />
            MENU
          </S.MenuBtn>
        </S.OtherBtn>
        <S.HidBtn>
          <MenuIcon />
        </S.HidBtn>
      </S.MainContainer>
    </S.HeaderMainContainer>
  );
};

export default Header;
