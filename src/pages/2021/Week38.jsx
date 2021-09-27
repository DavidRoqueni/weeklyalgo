import { React, useState } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import * as styles from '../../styles/week38.module.css';

const Week38 = () => {
  const array = ['a', 'a', 'c', 'd', 'c', 'e', 'e', 'g', 'g', 'f'];
  const mapped = array.map((y) => "'" + y + "'");
  const cppCode = {
    code: `char findNonrepeator(char ar[], int size){
        std::unordred_map<char, int> map;
        for (n = 0; n < size; n++)
        {
            map[ar[n]] += 1;
        }
        for (n = 0; n < size; n++)
        {
            if (map[ar[n]] == 1) return ar[n];
        }
        return ' ';
 }`,
    language: 'cpp',
  };
  const pythonCode = {
    code: `def firstNonReaptor(ar, size):
      map = dict()
      for x in ar:
        if(x in map):
          map[x] += 1
        else:
          map[x] = 1
      for x in ar:
        if(map[x] == 1):
          return x
      return ' '`,
    language: 'python',
  };
  const javaCode = {
    code: `public char firstNonRepeator(char[] ar, int size){
      Map<Character,Integer> map = new HashMap<Character,Integer>();
      for(char i : ar)
      {
          map.merge(i, 1, (a,b) -> a+b);
      }
      for(char i : ar)
      {
          if(map.get(i) == 1) return i;
      }
      return ' ';
}`,
    language: 'java',
  };
  const [currentCode, setCurrentCode] = useState(cppCode);
  const [currentIndex, setCurrentIndex] = useState(NaN);
  const [currentKey, setCurrentKey] = useState(' ');
  const [map, setMap] = useState({});
  const [showMap, setShowMap] = useState(false);
  const [running, setRunning] = useState(false);
  let found = false;
  const firstNonRepeat = function () {
    const temp = {};
    setCurrentKey(-1);
    setRunning(true);
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        if (array[i] in temp) temp[array[i]]++;
        else temp[array[i]] = 1;
        setMap(temp);
        setCurrentIndex(i);
      }, 2000 * i);
    }
    setTimeout(() => {
      for (let j = 0; j < array.length; j++) {
        // eslint-disable-next-line no-loop-func
        setTimeout(() => {
          if (!found) {
            setCurrentIndex(j);
            setCurrentKey(array[j]);
          }
          if (temp[array[j]] === 1) {
            setRunning(false);
            found = true;
            return array[j];
          }
          if (j === array.length - 1) setRunning(false);
        }, 2000 * j);
      }
    }, 2000 * array.length + 20);
  };
  return (
    <div className='container main'>
      <h1>Prompt</h1>
      <div className='prompt'>
        Given an array of characters find the first nonrepeating charater in
        that array. If there is no nonreapting character return and empty space.
        The input will be between 1 and 10,000 indices all char will be between
        a-z lowercase and you will be provided the length of the array.
      </div>
      <div className='row mt-40'>
        <h2 className='col'>Sample Input</h2>
        <h2 className='col'>Sample Output</h2>
      </div>
      <div className='row'>
        <h4 className='col sample'>[{mapped.toString()}]</h4>
        <h4 className='col '>d</h4>
      </div>
      <h1 className='mt-40'>Solution</h1>
      <div className='prompt'>
        There are several ways to solve this problem. One of the first that
        might come to mind is a solution in which we use two pointers that loop
        over the list to find a match. That is to say have one pointer on the
        current index and then a second to iterate over the list and see if we
        find a match. The problem with this is that this solution is very slow
        resulting in a time complexity of O(N&sup2;). We should see if we can
        find a solution faster than this approach.
        <br />
        <br />
        An improved approach may be to iterate through the list and generate a
        HashMap with the current character as the Key and the times it has been
        seen as the value. Doing this enables us to iterate through the list a
        single time and now know how many times each character has been seen.
        Once we do that we are able to go back through the array again and check
        the map for its value, and because HashMaps have constant time look up
        we are able to reach a time complexity of O(2N). But because we drop the
        constant as the difference between N and 2N is negligable we are able to
        call our new solution O(N). For space complexity we also reach O(N) as
        worst case we are inputing a new key for ever single character in the
        array.
      </div>
      <div className='row mt-10'>
        <h1>Code</h1>
        <div className='code-buttons'>
          <button
            type='button'
            className='btn btn-primary ml-5'
            onClick={() => setCurrentCode(cppCode)}
          >
            c++
          </button>
          <button
            type='button'
            className='btn btn-primary ml-5'
            onClick={() => setCurrentCode(javaCode)}
          >
            java
          </button>
          <button
            type='button'
            className='btn btn-primary ml-5'
            onClick={() => setCurrentCode(pythonCode)}
          >
            python
          </button>
        </div>
        <div className='row code-options'></div>
        <CopyBlock
          text={currentCode.code}
          language={currentCode.language}
          theme={dracula}
        />
      </div>
      <h1 className='mt-40'>How It Works</h1>
      {showMap ? (
        <div className={styles.minHeight}>
          <h4 className='mt-10'>Array</h4>
          <div className='row'>
            {array.map((e, index) => (
              <div key={index} className='col'>
                <div className={styles.relative}>
                  <div className={styles.arrow}></div>
                </div>
                <div
                  className={
                    index === currentIndex ? styles.active + ' box ' : 'box col'
                  }
                >
                  {e.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
          <h4 className='mt-10'>Dictionary</h4>
          <div className='row'>
            {Object.keys(map).map((e, index) => {
              return (
                <div className='col'>
                  <div className='box'>{e.toUpperCase()}</div>
                  <div
                    className={
                      currentKey === e ? styles.active + ' box' : 'box'
                    }
                  >
                    {map[e]}
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className='btn btn-primary mt-40'
            disabled={running}
            onClick={() => firstNonRepeat()}
          >
            Run Again
          </button>
        </div>
      ) : (
        <button
          className='btn btn-primary'
          onClick={() => {
            setShowMap(true);
            setTimeout(() => {
              firstNonRepeat();
            }, 2000);
          }}
        >
          Show Me
        </button>
      )}
    </div>
  );
};

export default Week38;
