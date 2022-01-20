import {
  MainBox,
  HeaderBox,
  MainContainer,
  MainCenter,
  Footer,
  Text,
} from "./Main.styled";
import "twin.macro";

const Main = () => {
  return (
    <MainBox>
      <HeaderBox>
        <div tw="flex items-center flex-row">
          <div tw="flex ml-auto">
            <a href="#" tw="flex flex-row items-center">
              <span tw="flex flex-col ml-2">
                <span tw="truncate w-20 font-semibold tracking-wide leading-none">
                  Hello
                </span>
                <span tw="truncate w-20 text-gray-500 text-xs leading-none mt-1">
                  Manager
                </span>
              </span>
            </a>
          </div>
        </div>
      </HeaderBox>
      <MainContainer>
        <h1 tw="font-bold text-2xl text-gray-700">Dashboard</h1>

        <MainCenter></MainCenter>
      </MainContainer>
      <Footer>
        <Text>© AI-1 2022. All rights reserved. </Text>
      </Footer>
    </MainBox>
  );
};

export default Main;
