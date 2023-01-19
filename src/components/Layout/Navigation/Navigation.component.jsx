import React from 'react';
import { useLocation } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../../../assets/icons/Nav-Home.svg';
import { ReactComponent as HighscoreIcon } from '../../../assets/icons/Nav-Highscore.svg';
import { ReactComponent as RulesIcon } from '../../../assets/icons/Nav-Rules.svg';

import {
  NavigationStyled,
  NavigationList,
  NavigationListItem,
  LinkStyled,
  NavTextContainer,
} from './Navigation.style';

const Navigation = () => {
  const location = useLocation();

  let navigationItems = [
    { id: 'rules-icon', item: <RulesIcon />, to: 'how-to-play' },
    { id: 'hangman-text', item: 'hangman', to: null },
    { id: 'highscore-icon', item: <HighscoreIcon />, to: 'highscore' },
  ];

  if (
    location?.pathname.includes('game') ||
    location?.pathname.includes('how-to-play')
  ) {
    navigationItems = [
      { id: 'home-icon', item: <HomeIcon />, to: '/' },
      { id: 'hangman-text', item: 'hangman', to: null },
      { id: 'highscore-icon', item: <HighscoreIcon />, to: 'highscore' },
    ];
  }

  if (location?.pathname.includes('highscore')) {
    navigationItems = [
      { id: 'home-icon', item: <HomeIcon />, to: '/' },
      { id: 'hangman-text', item: 'hangman', to: null },
      { id: 'rules-icon', item: <RulesIcon />, to: 'how-to-play' },
    ];
  }

  return (
    <NavigationStyled>
      <NavigationList>
        {navigationItems.map((navigationItem) => (
          <NavigationListItem key={navigationItem?.id}>
            {navigationItem?.to ? (
              <LinkStyled to={navigationItem.to}>
                {navigationItem?.item}
              </LinkStyled>
            ) : (
              <NavTextContainer>{navigationItem?.item}</NavTextContainer>
            )}
          </NavigationListItem>
        ))}
      </NavigationList>
    </NavigationStyled>
  );
};

export default Navigation;
