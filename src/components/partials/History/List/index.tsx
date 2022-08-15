import { Button, Card, Empty } from 'antd';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { clearHistory, selectHistory } from '../../../../store/slices/history.slice';

import './List.scss';

const HistoryList = () => {
  const history = useAppSelector(selectHistory);
  const dispatch = useAppDispatch();

  const handleClickClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <section className="component is-history-list">
      <div className="history-list--columns">
        {history.map((h) => (
          <div key={JSON.stringify(h)} className="history-list--columns__item">
            <Card title={`${h.sourceName} to ${h.targetName}`}>
              <p>
                {h.sourceName}: {h.q}
              </p>
              <p>
                {h.targetName}: {h.translatedText}
              </p>
            </Card>
          </div>
        ))}
      </div>
      {history.length > 0 ? (
        <div className="container-fluid">
          <Button onClick={handleClickClearHistory}>Clear History</Button>
        </div>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </section>
  );
};

export default HistoryList;
