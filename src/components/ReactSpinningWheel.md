```jsx static
// style.less
.overrlap-with-content{
    height:0;
    position: relative;
    top: 60px;
}
// component.js
import {ReactSpinningWheel} from 'react-components';

const component= ()=>(
    <ReactSpinningWheel  classNames=".overrlap-with-content"/>
)
```
live example:
```javascript
<div>
    <div className="spinner-example-1">
        <ReactSpinningWheel />
        <h1>default creat a gap. to remove the gap, you need to set {'{'} position: relative; height:0; top: 100px {'}'}
          like the example shown below</h1>
    </div>
    <div className="spinner-example-2">
        <ReactSpinningWheel classNames="loading-overlap"/>
        <h1>in your styles/index.less file, you cannot use @import 'spinner' because *.less is not registered as a default extention<br/>
            only js and json are default extensions
        </h1>
        <h1>you don't need `babel-cli` if you don't run `babel-node`
        </h1>
    </div>
</div>
```