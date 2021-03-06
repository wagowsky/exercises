























// // ! This is a helper function to delegate events from an element to any child with a specified selector.
// // ? Use where required.

// function delegateEvent(fromElement, eventName, targetSelector, callback) {
//   fromElement.addEventListener(eventName, event => {
//     let targetsList = [...event.currentTarget.querySelectorAll(targetSelector)];

//     if (targetsList.includes(event.target)) {
//       callback(event);
//     }
//   });
// }

// /*global jQuery, Handlebars, Router */
// document.addEventListener("DOMContenLoaded", function () {
//   'use strict';

//   Handlebars.registerHelper('eq', function(a, b, options) {
//     return a === b ? options.fn(this) : options.inverse(this);
//   });

//   let ENTER_KEY = 13;
//   let ESCAPE_KEY = 27;

//   let util = {
//     uuid: function() {
//       /*jshint bitwise:false */
//       let i, random;
//       let uuid = '';

//       for (i = 0; i < 32; i++) {
//         random = (Math.random() * 16) | 0;
//         if (i === 8 || i === 12 || i === 16 || i === 20) {
//           uuid += '-';
//         }
//         uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
//           16
//         );
//       }

//       return uuid;
//     },
//     pluralize: function(count, word) {
//       return count === 1 ? word : word + 's';
//     },
//     store: function(namespace, data) {
//       if (arguments.length > 1) {
//         return localStorage.setItem(namespace, JSON.stringify(data));
//       } else {
//         let store = localStorage.getItem(namespace);
//         return (store && JSON.parse(store)) || [];
//       }
//     }
//   };

//   let App = {
//     init: function() {
//       this.todos = util.store('todos-jquery');
//       this.todoTemplate = Handlebars.compile(document.querySelector('#todo-template').innerHTML());
//       this.footerTemplate = Handlebars.compile(document.querySelector('#footer-template').innerHTML());
//       this.bindEvents();

//       new Router({
//         '/:filter': function(filter) {
//           this.filter = filter;
//           this.render();
//         }.bind(this)
//       }).init('/all');
//     },
//     bindEvents: function() {
//       document.querySelector('.new-todo').addEventListener('keyup', this.create.bind(this));

      
//       const toggles = document.querySelectorAll('.toggle-all');
      
//             for (let i = 0; i < toggles.length; i++) {
//               toggles[i].addEventListener('change', this.toggleAll.bind(this));
//             }

//       document.querySelector('.footer').addEventListener(
//         'click',
//         '.clear-completed',
//         this.destroyCompleted.bind(this)
//       );

//       delegateEvent(document.querySelector('.footer'), 'click', '.clear-completed', this.destroyCompleted.bind(this));





//       document.querySelector('.todo-list')
//         .addEventListener('change', '.toggle', this.toggle.bind(this))
//         .addEventListener('dblclick', 'label', this.editingMode.bind(this))
//         .addEventListener('keyup', '.edit', this.editKeyup.bind(this))
//         .addEventListener('focusout', '.edit', this.update.bind(this))
//         .addEventListener('click', '.destroy', this.destroy.bind(this));
//     },
//     render: function() {
//       let todos = this.getFilteredTodos();
//       document.querySelector('.todo-list').innerHTML(this.todoTemplate(todos));
//       document.querySelector('.main').toggle(todos.length > 0);
//       document.querySelector('.toggle-all').prop('checked', this.getActiveTodos().length === 0);
//       this.renderFooter();
//       document.querySelector('.new-todo').focus();
//       util.store('todos-jquery', this.todos);
//     },
//     renderFooter: function() {
//       let todoCount = this.todos.length;
//       let activeTodoCount = this.getActiveTodos().length;
//       let template = this.footerTemplate({
//         activeTodoCount: activeTodoCount,
//         activeTodoWord: util.pluralize(activeTodoCount, 'item'),
//         completedTodos: todoCount - activeTodoCount,
//         filter: this.filter
//       });

//       document.querySelector('.footer')
//         .toggle(todoCount > 0)
//         .html(template);
//     },
//     toggleAll: function(e) {
//       let isChecked = document.querySelector(e.target).prop('checked');

//       this.todos.forEach(function(todo) {
//         todo.completed = isChecked;
//       });

//       this.render();
//     },
//     getActiveTodos: function() {
//       return this.todos.filter(function(todo) {
//         return !todo.completed;
//       });
//     },
//     getCompletedTodos: function() {
//       return this.todos.filter(function(todo) {
//         return todo.completed;
//       });
//     },
//     getFilteredTodos: function() {
//       if (this.filter === 'active') {
//         return this.getActiveTodos();
//       }

//       if (this.filter === 'completed') {
//         return this.getCompletedTodos();
//       }

//       return this.todos;
//     },
//     destroyCompleted: function() {
//       this.todos = this.getActiveTodos();
//       this.render();
//     },
//     // accepts an element from inside the `.item` div and
//     // returns the corresponding index in the `todos` array
//     getIndexFromEl: function(el) {
//       let id = document.querySelector(el)
//         .closest('li')
//         .data('id');
//       let todos = this.todos;
//       let i = todos.length;

//       while (i--) {
//         if (todos[i].id === id) {
//           return i;
//         }
//       }
//     },
//     create: function(e) {
//       let input = document.querySelector(e.target);
//       let val = input.val().trim();

//       if (e.which !== ENTER_KEY || !val) {
//         return;
//       }

//       this.todos.push({
//         id: util.uuid(),
//         title: val,
//         completed: false
//       });

//       $input.val('');

//       this.render();
//     },
//     toggle: function(e) {
//       let i = this.getIndexFromEl(e.target);
//       this.todos[i].completed = !this.todos[i].completed;
//       this.render();
//     },
//     editingMode: function(e) {
//       let input = (e.target)
//         .closest('li')
//         .addClass('editing')
//         .find('.edit');
//       // puts caret at end of input
//       let tmpStr = $input.val();
//       $input.val('');
//       $input.val(tmpStr);
//       $input.focus();
//     },
//     editKeyup: function(e) {
//       if (e.which === ENTER_KEY) {
//         e.target.blur();
//       }

//       if (e.which === ESCAPE_KEY) {
//         (e.target)
//           .data('abort', true)
//           .blur();
//       }
//     },
//     update: function(e) {
//       let el = e.target;
//       let el = (el);
//       let val = el.val().trim();

//       if ($el.data('abort')) {
//        el.data('abort', false);
//       } else if (!val) {
//         this.destroy(e);
//         return;
//       } else {
//         this.todos[this.getIndexFromEl(el)].title = val;
//       }

//       this.render();
//     },
//     destroy: function(e) {
//       this.todos.splice(this.getIndexFromEl(e.target), 1);
//       this.render();
//     }
//   };

//   App.init();
// });




// ! This is a helper function to delegate events from an element to any child with a specified selector.
// ? Use where required.
function delegateEvent(fromElement, eventName, targetSelector, callback) {
  fromElement.addEventListener(eventName, event => {
    let targetsList = [...event.currentTarget.querySelectorAll(targetSelector)];
    if (targetsList.includes(event.target)) {
      callback(event);
    }
  });
}
/*global jQuery, Handlebars, Router */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  Handlebars.registerHelper('eq', function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
  });
  let ENTER_KEY = 13;
  let ESCAPE_KEY = 27;
  let util = {
    uuid: function () {
      /*jshint bitwise:false */
      let i, random;
      let uuid = '';
      for (i = 0; i < 32; i++) {
        random = (Math.random() * 16) | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += '-';
        }
        uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
          16
        );
      }

      return uuid;
    },
    pluralize: function (count, word) {
      return count === 1 ? word : word + 's';
    },
    store: function (namespace, data) {
      if (arguments.length > 1) {
        return localStorage.setItem(namespace, JSON.stringify(data));
      } else {
        let store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
      }
    }
  };
  let App = {
    init: function () {
      this.todos = util.store('todos-jquery');
      this.todoTemplate = Handlebars.compile(document.querySelector('#todo-template').innerHTML);
      this.footerTemplate = Handlebars.compile(document.querySelector('#footer-template').innerHTML);
      this.bindEvents();
      new Router({
        '/:filter': function (filter) {
          this.filter = filter;
          this.render();
        }.bind(this)
      }).init('/all');
    },
    bindEvents: function () {
      document.querySelector('.new-todo').addEventListener('keyup', this.create.bind(this));
<<<<<<< HEAD

      const toggles = document.querySelectorAll('.toggle-all');
      
      for (let i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener('change', this.toggleAll.bind(this));
      }
      document.querySelector('.footer').addEventListener(
        'click',
        this.destroyCompleted.bind(this)
      );
      //   document.querySelector('.todo-list')
      //     .addEventListener('change', '.toggle', this.classList.toggle.bind(this)) x
      //     .addEventListener('dblclick', 'label', this.editingMode.bind(this))
      //     .addEventListener('keyup', '.edit', this.editKeyup.bind(this))
      //     .addEventListener('focusout', '.edit', this.update.bind(this))
      //     .addEventListener('click', '.destroy', this.destroy.bind(this))
      let todoList = document.querySelector('.todo-list');
      delegateEvent(todoList, 'change', '.toggle', todoList.classList.toggle.bind(this))
      delegateEvent(todoList, 'dblclick', 'label', this.editingMode.bind(this))
=======
      document.querySelector('.toggle-all').addEventListener('change', this.toggleAll.bind(this));

      delegateEvent(document.querySelector('.footer'), 'click', '.clear-completed', this.destroyCompleted.bind(this));

      const todoList = document.querySelector('.todo-list');

      delegateEvent(todoList, 'change', '.toggle', this.toggle.bind(this));

      delegateEvent(todoList, 'dblclick', 'label', this.editingMode.bind(this));

      delegateEvent(todoList, 'keyup', '.edit', this.editKeyup.bind(this));

      delegateEvent(todoList, 'focusout', '.edit', this.update.bind(this));

      delegateEvent(todoList, 'click', '.destroy', this.destroy.bind(this));
>>>>>>> 7dffd8616c6c5a293312fb1dd2cf29ec9c992012
    },
    render: function () {
      let todos = this.getFilteredTodos();
      document.querySelector('.todo-list').innerHTML = this.todoTemplate(todos);
<<<<<<< HEAD
      document.querySelector('.main').classList.toggle(todos.length > 0);
      document.querySelector('.toggle-all').prop = 'checked', this.getActiveTodos().length === 0;
=======
      // toggle = Show & hide
      // style display block / none
      // toggle(condition) ==> jquery
      const main = document.querySelector('.main');
      if (todos.length > 0) { // condition
        main.style.display = 'block';
      } else {
        main.style.display = 'none'
      }
      // prop(property, value) ===> property = value
      document.querySelector('.toggle-all').checked = this.getActiveTodos().length === 0;
>>>>>>> 7dffd8616c6c5a293312fb1dd2cf29ec9c992012
      this.renderFooter();
      document.querySelector('.new-todo').focus();
      util.store('todos-jquery', this.todos);
    },
    renderFooter: function () {
      let todoCount = this.todos.length;
      let activeTodoCount = this.getActiveTodos().length;
      let template = this.footerTemplate({
        activeTodoCount: activeTodoCount,
        activeTodoWord: util.pluralize(activeTodoCount, 'item'),
        completedTodos: todoCount - activeTodoCount,
        filter: this.filter
      });
<<<<<<< HEAD
      document.querySelector('.footer')
        // .classList.toggle(todoCount > 0)
        .innerHTML = template
=======
      // toggle = Show & hide
      // style display block / none
      // toggle(condition) ==> jquery
      const footer = document.querySelector('.footer');
      if (todoCount > 0) { // condition
        footer.style.display = 'block';
      } else {
        footer.style.display = 'none'
      }
      footer.innerHTML = template;
>>>>>>> 7dffd8616c6c5a293312fb1dd2cf29ec9c992012
    },
    toggleAll: function (e) {
      let isChecked = e.forEach(element => {
        element.target.prop('checked')
      });
      this.todos.forEach(function (todo) {
        todo.completed = isChecked;
      });
      this.render();
    },
    getActiveTodos: function () {
      return this.todos.filter(function (todo) {
        return !todo.completed;
      });
    },
    getCompletedTodos: function () {
      return this.todos.filter(function (todo) {
        return todo.completed;
      });
    },
    getFilteredTodos: function () {
      if (this.filter === 'active') {
        return this.getActiveTodos();
      }
      if (this.filter === 'completed') {
        return this.getCompletedTodos();
      }
      return this.todos;
    },
    destroyCompleted: function () {
      this.todos = this.getActiveTodos();
      this.render();
    },
    // accepts an element from inside the `.item` div and
    // returns the corresponding index in the `todos` array
    getIndexFromEl: function (el) {
      let id = document.getElementById(el)
        .closest('li')
        .dataset.id;
      let todos = this.todos;
      let i = todos.length;
      while (i--) {
        if (todos[i].id === id) {
          return i;
        }
      }
    },
    create: function (e) {
      let input = e.target;
      let val = input.value.trim();
      if (e.which !== ENTER_KEY || !val) {
        return;
      }
      this.todos.push({
        id: util.uuid(),
        title: val,
        completed: false
      });
<<<<<<< HEAD
      input.value;
=======

      $input.value = '';

>>>>>>> 7dffd8616c6c5a293312fb1dd2cf29ec9c992012
      this.render();
    },
    toggle: function (e) {
      let i = this.getIndexFromEl(e.target);
      this.todos[i].completed = !this.todos[i].completed;
      this.render();
    },
    editingMode: function (e) {
<<<<<<< HEAD
      let input = e.target
        .closest('li')
        .classList.add('editing')
        .find('.edit')
      // puts caret at end of input
      let tmpStr = input.value;
      input.val('');
      input.val(tmpStr);
      input.focus();
=======
      let $input = $(e.target)
        .closest('li')
        .addClass('editing')
        .find('.edit');
      // puts caret at end of input
      let tmpStr = $input.val();
      $input.val('');
      $input.val(tmpStr);
      $input.focus();
>>>>>>> 7dffd8616c6c5a293312fb1dd2cf29ec9c992012
    },
    editKeyup: function (e) {
      if (e.which === ENTER_KEY) {
        e.target.blur();
      }
      if (e.which === ESCAPE_KEY) {
        $(e.target)
          .data('abort', true)
          .blur();
      }
    },
    update: function (e) {
      let el = e.target;
      let $el = $(el);
      let val = $el.val().trim();
<<<<<<< HEAD
=======

>>>>>>> 7dffd8616c6c5a293312fb1dd2cf29ec9c992012
      if ($el.data('abort')) {
        $el.data('abort', false);
      } else if (!val) {
        this.destroy(e);
        return;
      } else {
        this.todos[this.getIndexFromEl(el)].title = val;
      }
      this.render();
    },
    destroy: function (e) {
      this.todos.splice(this.getIndexFromEl(e.target), 1);
      this.render();
    }
  };
  App.init();
});