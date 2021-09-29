import { ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import { CopyBlock, dracula } from 'react-code-blocks';
import { React, useState } from 'react';

const AddTwoNumbers = () => {
  const pythonCode = {
    code: `class Solution:
        def addTwoNumbers(self, l1, l2 ,c = 0):
            head = ListNode(0)
            currentNode = head 
            carry = 0
            
            while l1 or l2 or carry:
                carry += l1.val if l1 else 0
                carry += l2.val if l2 else 0
                
                carry, out = divmod(carry, 10)
                currentNode.val = out
                
                l1 = l1.next if l1 else None
                l2 = l2.next if l2 else None
                if l1 != None or l2 != None or carry != 0:
                    temp = ListNode(0)
                    currentNode.next = temp
                    currentNode = temp
                
            return head`,
    language: 'python',
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
      {/* Sample input and output  */}
      <div className='row'>
        {/* <h4 className='col sample'>[{mapped.toString()}]</h4>
        <h4 className='col '>d</h4> */}
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
        <ToggleButtonGroup
          color='primary'
          exclusive
          sx={{ marginBottom: '5px', marginLeft: 'auto', marginRight: '0px' }}
          value={currentCodeDisplay}
          onChange={handleCodeChange}
        >
          <ToggleButton value='cpp'>CPP</ToggleButton>
          <ToggleButton value='java'>Java</ToggleButton>
          <ToggleButton value='python'>Python</ToggleButton>
        </ToggleButtonGroup>
        <div className='row code-options'></div>
        <CopyBlock
          text={currentCode.code}
          language={currentCode.language}
          theme={dracula}
        />
      </div>
      {/*<h1 className='mt-40'>How It Works</h1>
      {showMap ? (
        <div className={styles.minHeight}>
          <h4 className='mt-10'>Array</h4>
          <div className='row'>
            {array.map((e, index) => (
              <div key={index} className='col'>
                <input
                  className={
                    index === currentIndex && !displayError
                      ? `${styles.active} box array`
                      : 'box array col'
                  }
                  disabled={running}
                  value={e.toUpperCase()}
                  onChange={(e) => handleArrayChange(e.target.value, index)}
                ></input>
              </div>
            ))}
          </div>
          <h4 className='mt-10'>Dictionary</h4>
          <div className='row'>
            {Object.keys(map).map((e, index) => {
              return (
                <div className='col' key={index}>
                  <div className='box'>{e.toUpperCase()}</div>
                  <div
                    className={
                      currentKey === e ? `${styles.activeKey} box` : 'box'
                    }
                  >
                    {map[e]}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={
              displayError ? `mt-10 ${styles.activeKey} text-large` : `hidden`
            }
          >
            No Result Found
          </div>
          <div className=' mt-40'>
            Try changing the array and see how it effects the algorithm
          </div>
          <button
            className='btn btn-primary mt-10'
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
      )} */}
    </div>
  );
};

export default AddTwoNumbers;
