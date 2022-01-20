import React from 'react';
import { useRef } from 'react/cjs/react.development';
import { useEffect } from 'react/cjs/react.production.min';

export default function useMounted() {

    const mounted=useRef(false)

    useEffect(() => {
        mounted.current=true
      
        return () => {
          mounted.current=false
        };
      }, []);


  return mounted
}
