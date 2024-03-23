import { Suspense } from 'react';

import type { Ranking } from '@wsh-2024/schema/src/api/rankings/GetRankingListResponse';

import { RankingCard } from '../../../features/ranking/components/RankingCard';
import { useRankingList } from '../../../features/ranking/hooks/useRankingList';

const RankingComponent: React.FC = () => {
  const { data: rankingList } = useRankingList({ query: {} });

  return (
    <>
      {rankingList.map((ranking: Ranking) => (
        <RankingCard key={ranking.id} bookId={ranking.book.id} ranking={ranking} />
      ))}
    </>
  );
};

const RankingComponentWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <RankingComponent />
    </Suspense>
  );
};

export { RankingComponentWithSuspense as default };
