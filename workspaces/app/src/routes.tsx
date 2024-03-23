import { ArrowBack } from '@mui/icons-material';
import React, { lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

import { Text } from './foundation/components/Text';
const ActionLayout = lazy(() => import('./foundation/layouts/ActionLayout'));
const CommonLayout = lazy(() => import('./foundation/layouts/CommonLayout'));
import { Color, Space, Typography } from './foundation/styles/variables';
const AuthorDetailPage = lazy(() => import('./pages/AuthorDetailPage'));
const BookDetailPage = lazy(() => import('./pages/BookDetailPage'));
const EpisodeDetailPage = lazy(() => import('./pages/EpisodeDetailPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const TopPage = lazy(() => import('./pages/TopPage'));

const _BackToTopButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${Space * 1}px;
  border: none;
  background-color: transparent;
`;

export const Router: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        <Route element={<CommonLayout />} path={'/'}>
          <Route element={<TopPage />} path={''} />
        </Route>
        <Route
          element={
            <ActionLayout
              leftContent={
                <_BackToTopButton to={'/'}>
                  <ArrowBack style={{ color: Color.MONO_100, height: 32, width: 32 }} />
                  <Text color={Color.MONO_100} typography={Typography.NORMAL16} weight="bold">
                    トップへ戻る
                  </Text>
                </_BackToTopButton>
              }
            />
          }
          path={'/'}
        >
          <Route element={<BookDetailPage />} path={'books/:bookId'} />
          <Route element={<EpisodeDetailPage />} path={'books/:bookId/episodes/:episodeId'} />
          <Route element={<AuthorDetailPage />} path={'authors/:authorId'} />
          <Route element={<SearchPage />} path={'search'} />
        </Route>
      </Routes>
    </Suspense>
  );
};
