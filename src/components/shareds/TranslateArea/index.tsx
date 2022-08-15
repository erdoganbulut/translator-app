import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { getLanguages } from '../../../store/slices/translate.slice';
import SelectSource from '../../partials/TranslateArea/SelectSource';
import SelectTarget from '../../partials/TranslateArea/SelectTarget';
import TranslateInput from '../../partials/TranslateArea/TranslateInput';
import TranslateOutput from '../../partials/TranslateArea/TranslateOutput';

const TranslateArea = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);

  return (
    <section className="component is-translate-area">
      <div className="translate-area--left-side">
        <SelectSource />
        <TranslateInput />
      </div>
      <div className="translate-area--rigt-side">
        <SelectTarget />
        <TranslateOutput />
      </div>
    </section>
  );
};

export default TranslateArea;
