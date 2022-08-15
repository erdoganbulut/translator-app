import { Card } from 'antd';
import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectHistory } from '../../../../store/slices/history.slice';

import './List.scss';

const HistoryList = () => {
  const history = useAppSelector(selectHistory);

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
    </section>
  );
};

export default HistoryList;
