import React from 'react';
import { Select, Spin } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  selectLanguages,
  selectLanguagesStatus,
  selectSource,
  selectTarget,
  setTarget,
} from '../../../../store/slices/translate.slice';
import { ERequestStatus } from '../../../../common/request';

const SelectTarget = () => {
  const languages = useAppSelector(selectLanguages);
  const languagesStatus = useAppSelector(selectLanguagesStatus);
  const source = useAppSelector(selectSource);
  const target = useAppSelector(selectTarget);
  const dispatch = useAppDispatch();

  const handleChange = (val: string) => {
    dispatch(setTarget(val));
  };

  return (
    <div className="component is-select-target">
      {languagesStatus === ERequestStatus.LOADING ? (
        <Spin />
      ) : (
        <Select
          onChange={handleChange}
          size="large"
          showSearch
          defaultValue={target}
          style={{ width: 120 }}
        >
          {languages.map((l) => (
            <Select.Option key={l.code} value={l.code} disabled={l.code === source}>
              {l.name}
            </Select.Option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default SelectTarget;
