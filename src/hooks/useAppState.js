import { useEffect } from 'react';
import { AppState } from 'react-native';

const useAppState = (onChange) => {
  useEffect(() => {
    AppState.addEventListener('change', onChange);
    return () => {
      AppState.removeEventListener('change', onChange);
    };
  }, [onChange]);
};

export default useAppState;
