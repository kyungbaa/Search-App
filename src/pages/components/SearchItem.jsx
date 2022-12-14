import React from 'react';
import styled from 'styled-components';
import { highlightIncludedText } from '../../utils/func';
const SearchItem = React.forwardRef(({ result, searchText, isFocus }, ref) => {
  return isFocus ? (
    <Item ref={ref} isFocus={isFocus}>
      {highlightIncludedText(result.sickNm, searchText)}
    </Item>
  ) : (
    <Item isFocus={isFocus}>{highlightIncludedText(result.sickNm, searchText)}</Item>
  );
});

const Item = styled.div`
  padding: 6px 0;
  font-size: 14px;
  background-color: ${({ isFocus }) => (isFocus ? '#ddf1ff' : 'white')};
`;

export default SearchItem;
