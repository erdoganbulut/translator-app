import React, { useEffect, useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Button, message } from 'antd';
import { AudioOutlined, CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  postTranslate,
  selectQ,
  setQ,
  setTranslatedText,
} from '../../../../store/slices/translate.slice';
import useDebounce from '../../../../common/debounce.hook';

const TraslateInput = () => {
  const text = useAppSelector(selectQ);
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce<string>(text, 1000);

  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    if (debouncedValue.length > 0) {
      dispatch(postTranslate());
    } else {
      dispatch(setTranslatedText(''));
    }
  }, [debouncedValue, dispatch]);

  const handleChange = (val: string) => {
    dispatch(setQ(val));
  };

  const handleClear = () => {
    handleChange('');
  };

  // Speech Initialize Start https://caniuse.com/speech-recognition
  const isSupport = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  let SpeechRecognition = null;
  let recognition: Record<string | number | symbol, any> = {};

  if (isSupport) {
    SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    // eslint-disable-next-line new-cap
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onspeechend = () => {
      recognition.stop();
      setIsRecording(false);
    };

    recognition.onerror = () => {
      message.error('Try Again');
      setIsRecording(false);
    };

    recognition.onresult = (event: any) => {
      const current = event.resultIndex;
      const { transcript } = event.results[current][0];
      handleChange(`${text}${text.length > 0 ? ' ' : ''}${transcript}`);
    };
  }
  // Speech Initialize End

  const handleStart = () => {
    recognition.start();
  };

  const handleStop = () => {
    recognition.stop();
    recognition.abort();
  };

  return (
    <div className="component is-translate-input">
      <TextArea
        size="large"
        placeholder="Text Here"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button onClick={handleClear} shape="circle" icon={<CloseOutlined />} />
      {isRecording ? (
        <Button
          shape="circle"
          disabled={!isSupport}
          onClick={handleStop}
          icon={<LoadingOutlined />}
        />
      ) : (
        <Button
          shape="circle"
          disabled={!isSupport}
          onClick={handleStart}
          icon={<AudioOutlined />}
        />
      )}
    </div>
  );
};

export default TraslateInput;
