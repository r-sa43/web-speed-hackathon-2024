import moment from 'moment-timezone';
import { Suspense } from 'react';

import { BookCard } from '../../../features/book/components/BookCard';
import { useRelease } from '../../../features/release/hooks/useRelease';
import { getDayOfWeekStr } from '../../../lib/date/getDayOfWeekStr';

const ReleaseComponent: React.FC = () => {
  const todayStr = getDayOfWeekStr(moment());
  const { data: release } = useRelease({ params: { dayOfWeek: todayStr } });

  return <>{release.books?.map((book) => <BookCard key={book.id} releaseBook={book} />)}</>;
};

const ReleaseComponentWithSuspence: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <ReleaseComponent />
    </Suspense>
  );
};

export { ReleaseComponentWithSuspence as default };
