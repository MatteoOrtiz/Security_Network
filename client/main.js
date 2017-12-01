import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//importar vista HTML
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // declaracion del contador
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

//Eventos asociados
Template.hello.events({
  //seleccion del evento click
  'click button'(event, instance) {
    //Se incrementa el contador en +1 al hacer click
    instance.counter.set(instance.counter.get() + 1);
  },
});
