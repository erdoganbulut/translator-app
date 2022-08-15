import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectHistory } from '../../../../store/slices/history.slice';

const HistoryList = () => {
  const history = useAppSelector(selectHistory);

  return (
    <div className="component is-history-list">
      <div className="history-list--columns">
        <div className="history-list--columns__item">{JSON.stringify(history)}</div>
      </div>
    </div>
  );
};

export default HistoryList;
