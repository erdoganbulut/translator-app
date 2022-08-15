import { Spin } from 'antd';
import React from 'react';
import { ERequestStatus } from '../../../../common/request';
import { useAppSelector } from '../../../../store/hooks';
import { selectStatus, selectTranslatedText } from '../../../../store/slices/translate.slice';

const TraslateOutput = () => {
  const translatedText = useAppSelector(selectTranslatedText);
  const status = useAppSelector(selectStatus);

  return (
    <div className="component is-translate-output">
      {status === ERequestStatus.LOADING ? <Spin /> : <p>{translatedText}</p>}
    </div>
  );
};

export default TraslateOutput;
