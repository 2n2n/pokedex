import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addClick, resetClicks } from '../redux/slice/clickSlice';

/**
 *
 * @todo
 * 1. when odd number, background color should be green
 * 2. when even number, background color should be blue
 */
const TestComponent = () => {
  const clicks = useSelector((state) => state.clicks.value);
  const dispatch = useDispatch();
  const h1Ref = useRef();
  const [inputRef, setInputRef] = useState();

  const [arrObj, setArrObj] = useState([{ content: 'blah1' }, { content: 'blah2' }]);
  const [activeIdx, setActiveIndex] = useState(0);

  useEffect(() => {
    setInputRef(arrObj[activeIdx].content);
  }, [activeIdx]);

  useEffect(() => {
    console.log('Change has been detected: ', arrObj);
  }, [arrObj]);

  return (
    <>
      <h1 ref={h1Ref}>Clicks: {clicks}</h1>
      <button onClick={() => dispatch(addClick())}>Click Me</button>
      <button onClick={() => dispatch(resetClicks())}>Reset</button>
      <hr />
      <input
        value={inputRef}
        onChange={(e) => {
          setInputRef(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setArrObj(
            arrObj.map((item, idx) => {
              if (idx === activeIdx) {
                item.content = inputRef;
              }
              return item;
            })
          );
        }}
      >
        update
      </button>
      <ul>
        {arrObj.map((item, idx) => {
          return <li onClick={() => setActiveIndex(idx)}>{item.content}</li>;
        })}
      </ul>
      <button onClick={() => setArrObj([...arrObj, { content: 'blah3' }])}>+</button>
      <button
        onClick={() => {
          const newArr = [...arrObj];
          newArr.pop();
          setArrObj(newArr);
        }}
      >
        -
      </button>
      <hr />
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestComponent;
