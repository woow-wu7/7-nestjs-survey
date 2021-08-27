import React from 'react';
import Rx from 'rxjs/Rx';

const RxjsComponent = () => {
  var button = document.querySelector('button');
  Rx.Observable.fromEvent(button, 'click').subscribe(() =>
    console.log('Clicked!'),
  );

  return (
    <div style={{ border: '1px solid pink' }}>
      <p>rxjs测试</p>
      <button>button</button>
    </div>
  );
};

export default RxjsComponent;
