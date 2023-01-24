import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const HangMan = ({
  fixed,
  numberOfMistakes = 0,
  fillCollor = '#000747',
  opacityColor = 0.2,
}) => {
  const gallows = useMemo(
    () => [
      {
        key: 'hm-item-part-1',
        d: `M6.25587 253.38C8.61083 252.578 10.9578 251.912 13.3047 
        251.358C15.6517 250.781 17.9986 250.315 20.3376 249.874C25.0235 
        249.024 29.6933 248.43 34.3632 247.981C43.6949 247.13 53.0106 246.914 
        62.2943 247.267C71.586 247.62 80.8536 248.526 90.0972 250.067C94.719 250.861 
        99.3328 251.8 103.947 252.995C106.254 253.605 108.552 254.239 110.851 254.985C113.15 
        255.707 115.449 256.541 117.732 257.512L117.7 258.475L103.754 258.194L89.8169 257.809L61.9418 
        256.886L34.0748 255.739L20.1453 255.089L6.21582 254.335L6.25587 253.38Z`,
        fill: fillCollor,
        opacity: 1,
      },
      {
        key: 'hm-item-part-2',
        d: `M54.8318 258.321C54.4896 255.755 54.2284 253.189 53.9403 250.622C53.6431 248.056 
    53.427 245.489 53.1928 242.923L52.4994 235.224L51.9411 227.525C51.1217 217.259 50.6894 
    207.001 50.1581 196.743C49.2306 176.227 48.8614 155.718 48.8614 135.21C48.8704 114.709 49.2576 
    94.2078 49.951 73.7143L50.5453 58.3461L51.3018 42.9778L52.2023 27.6171C52.5265 22.4994 52.9587 
    17.3741 53.3279 12.2564L53.7962 5.77646L60.9102 6.03987L72.7969 6.47638L78.7403 6.70217L84.6837 
    7.00321C92.6082 7.42467 100.533 7.77839 108.457 8.24501L120.344 9.01267C124.306 9.26856 128.268 
    9.50939 132.231 9.84806L144.117 10.7888C148.08 11.1651 152.042 11.4812 156.004 11.9177V12.8209L108.448 
    13.0391L60.8922 13.1219L61.7837 12.3919L60.541 73.8799C60.1628 94.3809 59.6225 114.874 59.1182 
    135.368L57.5963 196.856C57.1281 217.349 56.4797 237.843 55.9034 258.336L54.8318 258.321Z`,
        fill: fillCollor,
        opacity: 1,
      },
    ],
    [fillCollor]
  );
  const items = useMemo(
    () => [
      {
        key: 'hm-item-part-3',
        d: `M153.457 48.6828C153.457 44.5911 153.457 40.5075 153.457 36.4158C153.457 29.8932 153.457 23.3626 
    153.457 16.84C153.457 15.3317 153.457 13.8234 153.457 12.3151C153.457 10.9994 149.7 12.1707 149.7 
    13.31C149.7 17.4016 149.7 21.4853 149.7 25.5769C149.7 32.0995 149.7 38.6301 149.7 45.1527C149.7 
    46.661 149.7 48.1693 149.7 49.6776C149.7 50.9934 153.457 49.822 153.457 48.6828Z`,
        fill: fillCollor,
        opacity: opacityColor,
      },
      {
        key: 'hm-item-part-4',
        d: `M178.689 76.6666C178.648 80.5737 178.168 84.4728 177.095 88.3719C176.806 89.3347 176.486 90.2974 
      176.173 91.2762C175.821 92.239 175.404 93.1777 175.004 94.1484C174.539 95.0791 174.035 95.9937 173.538 
      96.9324C172.969 97.8149 172.385 98.7054 171.776 99.5959C169.213 103.022 165.752 105.918 161.731 
      107.731C157.726 109.552 153.233 110.347 148.883 110.042C144.518 109.745 140.312 108.301 136.652 
      106.247C132.975 104.161 129.803 101.489 127.064 98.5289C121.601 92.592 117.884 85.0665 116.939 76.6666C116.506 
      72.4947 116.859 68.0981 118.229 63.9503C119.582 59.7945 121.945 55.9515 124.941 52.6942C127.945 49.4369 131.621 
      46.7252 135.739 44.888C139.84 43.0267 144.389 42.1121 148.883 42.1682C153.377 42.2565 157.87 43.2834 161.883 
      45.241C165.896 47.1986 169.325 50.1831 171.872 53.649C174.427 57.1309 176.101 61.046 177.159 64.9452C178.232 
      68.8363 178.705 72.7594 178.689 76.6666ZM177.727 76.6666C177.703 72.8798 176.662 69.1251 174.78 65.9239C172.905
      62.7148 170.23 60.1234 167.362 58.1658C164.479 56.2002 161.403 54.8283 158.327 53.8495C155.251 52.8547 152.071 
      52.3733 148.891 52.4455C145.711 52.5097 142.587 53.1114 139.599 54.2025C136.628 55.3097 133.8 56.9544 131.373 
      59.1286C128.946 61.3028 126.96 63.9744 125.382 66.9188C123.812 69.8712 122.658 73.1606 122.21 76.6746C121.785 
      80.1726 122.073 83.8631 123.307 87.2889C124.516 90.7146 126.575 93.8756 129.258 96.3387C131.942 98.8097 135.274 
      100.495 138.686 101.345C142.107 102.235 145.575 102.3 148.891 102.019C152.215 101.698 155.395 100.976 158.479 
      99.8527C161.555 98.7295 164.591 97.2693 167.458 95.2636L169.557 93.651C170.198 93.0493 170.871 92.4476 171.52 
      91.8057C172.104 91.1238 172.729 90.4499 173.314 89.7358C173.818 88.9817 174.387 88.2356 174.852 87.4333C176.726 
      84.2241 177.759 80.4534 177.727 76.6666Z`,
        fill: fillCollor,
        opacity: opacityColor,
      },
      {
        key: 'hm-item-part-5',
        d: `M149.372 106.014C150.301 107.635 151.102 109.255 151.775 110.884C152.48 112.513 153.072 114.133 153.641 
      115.762C154.746 119.019 155.604 122.285 156.308 125.55C157.678 132.089 158.407 138.643 158.567 145.206C158.727 
      151.777 158.343 158.355 157.318 164.958C156.781 168.256 156.1 171.561 155.171 174.875C154.69 176.527 154.186 
      178.188 153.569 179.849C152.976 181.509 152.271 183.17 151.43 184.831L150.469 184.855L149.98 175.011L149.588 
      165.159C149.34 158.596 149.171 152.025 148.963 145.455C148.827 138.884 148.651 132.313 148.555 125.742L148.434 
      115.882L148.41 106.022L149.372 106.014Z`,
        fill: fillCollor,
        opacity: opacityColor,
      },
      {
        key: 'hm-item-part-6',
        d: `M149.3 122.02C149.42 123.504 149.436 124.924 149.348 126.28C149.284 127.652 149.123 128.96 148.939 
      130.259C148.547 132.835 147.938 135.282 147.209 137.648C145.711 142.358 143.669 146.738 141.137 150.814C138.606 
      154.89 135.618 158.676 132.078 162.126C130.292 163.835 128.377 165.48 126.255 166.98C125.181 167.726 124.084 
      168.456 122.89 169.13C121.721 169.82 120.455 170.446 119.078 171L118.261 170.494L121.841 164.252L125.502 
      158.059C127.953 153.935 130.476 149.859 132.959 145.752C135.506 141.692 138.021 137.608 140.609 133.565L144.502 
      127.516L148.483 121.514L149.3 122.02Z`,
        fill: fillCollor,
        opacity: opacityColor,
      },
      {
        key: 'hm-item-part-7',
        d: `M151.366 121.514C152.752 122.068 154.026 122.694 155.195 123.376C156.388 124.05 157.486 124.78 158.559 
      125.526C160.69 127.026 162.596 128.663 164.383 130.38C167.923 133.83 170.911 137.616 173.418 141.708C175.925 
      145.8 177.968 150.172 179.465 154.882C180.194 157.248 180.803 159.695 181.196 162.271C181.38 163.562 181.54 
      164.878 181.612 166.242C181.7 167.598 181.692 169.01 181.572 170.494L180.755 171L176.782 164.998L172.889 
      158.949C170.302 154.906 167.795 150.822 165.24 146.762C162.756 142.663 160.233 138.579 157.782 134.455L154.122 
      128.262L150.541 122.012L151.366 121.514Z`,
        fill: fillCollor,
        opacity: opacityColor,
      },
      {
        key: 'hm-item-part-8',
        d: `M155.961 171.069C156.112 172.756 156.133 174.371 156.021 175.912C155.94 177.472 155.738 178.959 155.505 
      180.436C155.009 183.364 154.239 186.146 153.318 188.837C151.424 194.191 148.842 199.172 145.642 203.805C142.442 
      208.439 138.665 212.744 134.19 216.666C131.932 218.609 129.511 220.479 126.828 222.185C125.471 223.033 124.084 
      223.863 122.575 224.629C121.097 225.414 119.497 226.125 117.755 226.754L116.722 226.18L121.249 219.083L125.876 
      212.042C128.975 207.353 132.164 202.72 135.303 198.05C138.524 193.434 141.703 188.791 144.974 184.194L149.895 
      177.317L154.928 170.494L155.961 171.069Z`,
        fill: fillCollor,
        opacity: opacityColor,
      },
      {
        key: 'hm-item-part-9',
        d: `M154.834 177.225C156.488 177.779 158.008 178.406 159.403 179.088C160.828 179.763 162.137 180.493 163.418 
      181.24C165.961 182.742 168.236 184.38 170.368 186.098C174.593 189.551 178.158 193.342 181.15 197.437C184.142 
      201.532 186.58 205.908 188.368 210.622C189.237 212.991 189.964 215.44 190.432 218.018C190.652 219.311 190.843 
      220.627 190.929 221.993C191.035 223.35 191.025 224.763 190.882 226.249L189.907 226.754L185.165 220.748L180.519 
      214.693C177.432 210.646 174.44 206.559 171.39 202.496C168.427 198.392 165.416 194.305 162.491 190.178L158.122 
      183.979L153.849 177.723L154.834 177.225Z`,
        fill: fillCollor,
        opacity: opacityColor,
      },
    ],
    [fillCollor, opacityColor]
  );

  const [hangmanParts, setHangmanParts] = useState(items);

  useEffect(() => {
    if (!fixed) {
      const newItems = items.map((item, index) => {
        if (index + 1 <= numberOfMistakes) {
          return { ...item, opacity: '1' };
        }
        return item;
      });
      setHangmanParts(newItems);
    }
  }, [fixed, numberOfMistakes, items]);

  return (
    <svg
      width="191"
      height="275"
      viewBox="0 0 191 275"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {gallows.map((item) => {
        return <path {...item} key={item.key} />;
      })}
      {hangmanParts.map((item) => {
        if (fixed) {
          return <path {...item} key={item.key} opacity={1} />;
        }
        return <path {...item} key={item.key} />;
      })}
    </svg>
  );
};

HangMan.propTypes = {
  fixed: PropTypes.bool,
  numberOfMistakes: PropTypes.number,
  opacityColor: PropTypes.number,
  fillCollor: PropTypes.string,
};

export default HangMan;
