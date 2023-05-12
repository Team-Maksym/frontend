import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  digitContainer: {
    backgroundColor: 'black',
    borderRadius: '4px',
    padding: '4px',
    margin: '0 2px',
    // width: '16px',
    // height: '22px',
    overflow: 'hidden',
  },
  digit: {
    color: 'white',
    fontSize: '16px',
    // margin: '0',
    borderRadius: '4px',
    // width: '16px',
    // height: '22px',
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    transition: 'transform 0.3s ease-in-out',
  },
};

const Digit = ({ value, prevValue }) => {
  const [translateY, setTranslateY] = useState('0');

  useEffect(() => {
    if (prevValue !== null && prevValue !== value) {
      setTranslateY('-100%');
      setTimeout(() => {
        setTranslateY('0');
      }, 200);
    }
  }, [value, prevValue]);

  return (
    <Box style={{ ...styles.digitContainer }}>
      <Typography style={{ ...styles.digit, transform: `translateY(${translateY})` }}>
        {value}
      </Typography>
    </Box>
  );
};

export const DigitDisplay = ({ value }) => {
  const [currentValue, setCurrentValue] = useState(value.toString().padStart(5, '0'));
  const [prevValue, setPrevValue] = useState(null);

  useEffect(() => {
    if (value !== prevValue) {
      setPrevValue(currentValue);
      setCurrentValue(value.toString().padStart(5, '0'));
    }
  }, [value, prevValue, currentValue]);

  const digits = currentValue.split('').map((digit, i) => (
    <Digit key={i} value={digit} prevValue={prevValue && prevValue[i]} />
  ));

  return <Box style={styles.container}>{digits}</Box>;
};


// import { Box, Typography } from '@mui/material';
//
// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   digitContainer: {
//     backgroundColor: 'black',
//     borderRadius: '4px',
//     padding: '4px',
//     margin: '0 2px',
//   },
//   digit: {
//     color: 'white',
//     fontSize: '16px',
//     margin: '0',
//     background: 'black',
//     borderRadius: '4px',
//     width: '16px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// };
//
// export const DigitDisplay = ({ value }) => {
//   const digits = value
//     .toString()
//     .padStart(5, '0')
//     .split('')
//     .map((digit, i) => (
//       <Box key={i} style={styles.digitContainer}>
//         <Typography style={styles.digit}>{digit}</Typography>
//       </Box>
//     ));
//
//   return <Box style={styles.container}>{digits}</Box>;
// };
