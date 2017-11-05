const createElement = function(descriptor) {
  let elmDescriptor = {
    type: "div",
    attrs: [],
    children: [],
    eventListeners: []
  };
  Object.assign(elmDescriptor, descriptor);
  
  let elm = document.createElement(elmDescriptor.type);

  elmDescriptor.attrs.forEach((attr) => {
    elm[attr.name] = attr.value;
  });
  
  elmDescriptor.eventListeners.forEach((listener) => {
    elm.addEventListener(listener.type, listener.handler);
  });
  
  elmDescriptor.children.forEach((child) => {
    elm.appendChild(createElement(child));
  });

  if (elmDescriptor.name) {
    createElement.domReferences[elmDescriptor.name] = elm;
  }

  return elm;
};

createElement.domReferences = {};

export default createElement; 
