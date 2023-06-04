import { TitleList, TabButton, Content } from './styles';
import { useState } from 'react';
import { Description } from '../description/Description';

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TitleList>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <TabButton active key={item.title}>
                  {item.title}
                </TabButton>
              );
            }
            return (
              <TabButton
                key={item.title}
                onClick={() => setActiveTab(index)}
              >
                {item.title}
              </TabButton>
            );
          })}
      </TitleList>
      <Content>
        <Description
          fS={14}
          lH={21}
        >
          {tabs[activeTab].content}
        </Description>
      </Content>
    </>
  );
};
