import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { getLanguages } from '../../../store/slices/translate.slice';
import SelectSource from '../../partials/TranslateArea/SelectSource';
import SelectTarget from '../../partials/TranslateArea/SelectTarget';
import TranslateInput from '../../partials/TranslateArea/TranslateInput';
import TranslateOutput from '../../partials/TranslateArea/TranslateOutput';

import './TranslateArea.scss';

const TranslateArea = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  return (
    <section className="component is-translate-area">
      <div className="translate-area--left-side">
        <div className="language-selection">
          <SelectSource />
        </div>
        <TranslateInput />
      </div>
      <div className="translate-area--right-side">
        <div className="language-selection">
          <SelectTarget />
        </div>
        <TranslateOutput />
      </div>
    </section>
  );
};

export default TranslateArea;
