import { useRef, useState } from "react";

/**
 *
 * @todo
 * 1. when odd number, background color should be green
 * 2. when even number, background color should be blue
 */
const TestComponent = () => {
  const [counter, setCounter] = useState(0);
  const h1Ref = useRef();

  const onClickHandler = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
<>
<h1 ref={h1Ref}>Clicks: {counter}</h1>
<button onClick={onClickHandler}>Click Me</button>
<hr />
<button
type="button"
class="btn btn-primary"
data-bs-toggle="modal"
data-bs-target="#staticBackdrop"
>
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
<button
  type="button"
  class="btn-close"
  data-bs-dismiss="modal"
  aria-label="Close"
></button>
</div>
<div class="modal-body">...</div>
<div class="modal-footer">
<button
  type="button"
  class="btn btn-secondary"
  data-bs-dismiss="modal"
>
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
