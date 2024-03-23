import { Suspense } from 'react';

import { FeatureCard } from '../../../features/feature/components/FeatureCard';
import { useFeatureList } from '../../../features/feature/hooks/useFeatureList';

const FeaturedComponent: React.FC = () => {
  const { data: featureList } = useFeatureList({ query: {} });

  return (
    <>
      {featureList.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </>
  );
};

const FeaturedComponentWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <FeaturedComponent />
    </Suspense>
  );
};

export { FeaturedComponentWithSuspense as default };
