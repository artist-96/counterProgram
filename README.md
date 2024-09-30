This is a Counter Program with an exlcusive use of EVENT PROPAGATION and DELEGATION. We are capitalising on the fact that when any event occurs, 
by default it bubbles outwards from the point of click which we call Event.target till the end of the element on which event listener is attached
which we call Event.currentTarget. Since event Listners are very expensive and heavy on performance we try to minimise them, so we attach on single
event Listener on the entire container and use Event Delegation to code the entire project smartly.
