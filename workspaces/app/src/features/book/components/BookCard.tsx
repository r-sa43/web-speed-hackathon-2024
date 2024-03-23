import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import type { ReleaseBook } from '@wsh-2024/schema/src/api/releases/GetReleaseResponse';

import { Flex } from '../../../foundation/components/Flex';
import { Image } from '../../../foundation/components/Image';
import { Text } from '../../../foundation/components/Text';
import { useImage } from '../../../foundation/hooks/useImage';
import { Color, Radius, Space, Typography } from '../../../foundation/styles/variables';

const _Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: ${Radius.SMALL};
  background-color: ${Color.MONO_A};
  max-width: 192px;
  border: 1px solid ${Color.MONO_30};
`;

const _ImgWrapper = styled.div`
  > img {
    border-radius: ${Radius.SMALL} ${Radius.SMALL} 0 0;
  }
`;

const _AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  > img {
    border-radius: 50%;
  }
`;

type Props = {
  releaseBook: ReleaseBook;
};

const BookCard: React.FC<Props> = ({ releaseBook }) => {
  const imageUrl = useImage({ height: 128, imageId: releaseBook.image.id, width: 192 });
  const authorImageUrl = useImage({ height: 32, imageId: releaseBook.author.image.id, width: 32 });

  return (
    <_Wrapper to={`/books/${releaseBook.id}`}>
      {imageUrl != null && (
        <_ImgWrapper>
          <Image alt={releaseBook.image.alt} height={128} objectFit="cover" src={imageUrl} width={192} />
        </_ImgWrapper>
      )}

      <Flex align="stretch" direction="column" flexGrow={1} gap={Space * 1} justify="space-between" p={Space * 2}>
        <Text color={Color.MONO_100} typography={Typography.NORMAL14} weight="bold">
          {releaseBook.name}
        </Text>

        <Flex align="center" gap={Space * 1} justify="flex-end">
          {authorImageUrl != null && (
            <_AvatarWrapper>
              <Image alt={releaseBook.author.name} height={32} objectFit="cover" src={authorImageUrl} width={32} />
            </_AvatarWrapper>
          )}
          <Text color={Color.MONO_100} typography={Typography.NORMAL12}>
            {releaseBook.author.name}
          </Text>
        </Flex>
      </Flex>
    </_Wrapper>
  );
};

const BookCardWithSuspense: React.FC<Props> = (props) => {
  return (
    <Suspense fallback={null}>
      <BookCard {...props} />
    </Suspense>
  );
};

export { BookCardWithSuspense as BookCard };
