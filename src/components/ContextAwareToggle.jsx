import React, {useContext} from 'react';
import {useAccordionToggle} from 'react-bootstrap';
import AccordionContext from 'react-bootstrap/AccordionContext';
import '../css/ContextAwareToggle.css'

const ContextAwareToggle = ({ children, eventKey, text}) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );

  const isCurrentEventKey = currentEventKey === eventKey;
  const nestedText = (React.Children.toArray(children)[0]).props.children;

  console.log(nestedText)

  return (
    <button
      style = {{outline: "none"}}
      className = {isCurrentEventKey ? "pressed" : "notPressed"}
      type="button"
      onClick={decoratedOnClick}
    >
      <h2>
        {nestedText}{isCurrentEventKey ? ' -' : ' +'}
      </h2>
    </button>
  );
}

export default ContextAwareToggle;