const categories = document.querySelectorAll('.category');

const data = [
  {
    categoryName: 'Sopt',
    todos: [
      { id: 'check1', text: '웹팟 과제' },
      { id: 'check2', text: '1차 세미나 복습' },
      { id: 'check3', text: '리액트 서터디' },
    ]
  },
  {
    categoryName: 'Epris',
    todos: [
      { id: 'check4', text: '카드뉴스 피드백' },
      { id: 'check5', text: '컨셉 아이디어 회의' },
      { id: 'check6', text: '임원진 회의' },
    ]
  },
  {
    categoryName: 'Exercise',
    todos: [
      { id: 'check7', text: '기상운동' },
      { id: 'check8', text: '홈트 1회' },
      { id: 'check9', text: '스트레칭' },
    ]
  },
  {
    categoryName: 'Daily',
    todos: [
      { id: 'check10', text: '벙개~' },
      { id: 'check11', text: '분당팟 모각공' },
      { id: 'check12', text: '스벅 슈크림라떼 먹어보기 냠냠냠냐' },
    ]
  },
];

categories.forEach((category, index) => {
  const categoryName = category.querySelector('.name');
  const todos = category.querySelectorAll('.todo');

  categoryName.textContent = data[index].categoryName;

  todos.forEach((todo, todoIndex) => {
    const todoInput = todo.querySelector('input');
    const todoLabel = todo.querySelector('label');

    todoInput.id = data[index].todos[todoIndex].id;
    todoLabel.textContent = data[index].todos[todoIndex].text;
    todoLabel.setAttribute('for', data[index].todos[todoIndex].id);
  });
});

//input
/*
const todoList = [

    { category: Sopt,
      titleList: "웹팟 과제", completed: false },
    { title: "운동하기", completed: false },
    { title: "저녁 약속", completed: false }
  ];

//checkbox 클릭 시 completed: true로 변경
*/
  // + 버튼 클릭 이벤트 등록
  const addBtns = document.querySelectorAll('.add-todo-btn');
  const modalTemplate = document.querySelector('.modal-template');
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let newTodoElem;
  let newTodo;

function addTodo() {
  // ...

  // 새로운 할 일 추가
  newTodoElem = document.createElement('div');
  newTodoElem.classList.add('todo');
  newTodoElem.innerHTML = `
    <input type="checkbox" id="check${todoList.length}" />
    <label for="check${todoList.length}">${newTodo}</label>
  `;
  category.appendChild(newTodoElem);

  // checkboxes에 새로운 체크박스 추가
  const newCheckbox = newTodoElem.querySelector('input[type="checkbox"]');
  checkboxes.push (newCheckbox);
  // count 갱신
  countUnchecked();
};


  function countUnchecked() {
    // 1. HTML 파일에서 checkbox 요소들을 선택
  const allCheckboxes = [...checkboxes];
  if (newTodoElem) {
    allCheckboxes.push(newTodoElem.querySelector('input[type="checkbox"]'));
  }
    /*
    const allCheckboxes = Array.from(checkboxes).concat(newTodoElem);
    */
    // 2. 체크되지 않은 요소들의 개수를 계산
    const uncheckedCount = allCheckboxes
      .filter((checkbox) => !checkbox.checked)
      .length;
    
    // 3. 계산된 개수를 표시
    const countElement = document.getElementById('fri_count');
    countElement.textContent = uncheckedCount;
  };

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', countUnchecked);
  });


  addBtns.forEach(addBtn => {
    addBtn.addEventListener('click', () => {
      // 모달 생성 및 표시
      const modal = modalTemplate.cloneNode(true);
      modal.classList.add('modal');
      document.body.appendChild(modal);
      // 모달 보이기
      modal.style.display = 'block';
      // submit 이벤트 등록
      const form = modal.querySelector('form');

      form.addEventListener('submit', event => {
        event.preventDefault();
        const input = form.querySelector('input');
        const newTodo = input.value;
        const category = addBtn.closest('.category');
        const todoList = category.querySelectorAll('.todo');
        const newTodoElem = document.createElement('div');
        newTodoElem.classList.add('todo');
        newTodoElem.innerHTML = `
          <input type="checkbox" id="check${todoList.length}" />
          <label for="check${todoList.length}">${newTodo}</label>
        `;
        // 새로운 할 일 추가
        category.appendChild(newTodoElem);
        // checkboxes에 새로운 체크박스 추가
      checkboxes = document.querySelectorAll('input[type="checkbox"]');
        //count 갱신
        countUnchecked();
        modal.remove();
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // 달력 버튼 클릭 시 홈페이지로 이동
    document.querySelector("#calendar-btn").addEventListener("click", function() {
      window.location.href = "/";
    });
  
    // MY 버튼 클릭 시 mycategory 페이지로 이동
    document.querySelector("#my-btn").addEventListener("click", function() {
      window.location.href = "/mycategory";
    });
  });
  
  /*
  newTodoElem.addEventListener('input', countUnchecked);

  /*
      // submit 이벤트 등록
      const form = modal.querySelector('form');
      form.addEventListener('submit', event => {
        event.preventDefault();
        const input = form.querySelector('input');
        const newTodo = input.value;
        const todoList = addBtns.parentNode.parentNode.querySelectorAll('.todo');
        const newTodoElem = document.createElement('div');
        newTodoElem.classList.add('todo');
        newTodoElem.innerHTML = `
          <input type="checkbox" id="check${todoList.length}" />
          <label for="check${todoList.length}">${newTodo}</label>
        `;
         // 새로운 할 일 추가
            addBtns.parentNode.parentNode.appendChild(newTodoElem);
        modal.remove();
      });

  /*
// HTML 요소 참조
const addTodoBtn = document.querySelectorAll('.category-name button');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const inputTodo = document.querySelector('input[type="text"]');
const categoryList = document.querySelector('.category');

// + 버튼 클릭 시 모달 띄우기
addTodoBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
});

// 모달 닫기
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// 새로운 할 일 목록 추가
modalContent.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = inputTodo.value;
  inputTodo.value = '';
  modal.style.display = 'none';

  // 할 일 목록(todo) 추가
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo');
  todoItem.innerHTML = `
    <input type='checkbox' id='check${categoryList.childElementCount + 1}'>
    <label for='check${categoryList.childElementCount + 1}'>${newTodo}</label>
  `;
  categoryList.appendChild(todoItem);
});
 
 
  /*
  // 할 일 완료 클릭시 갯수가 줄어드는 함수
  function completeTodo() {
    const todoIndex = parseInt(event.target.dataset.index);
    todoList[todoIndex].completed = true;
    displayIncompleteTodoCount();
  }
  
  // HTML이 로드된 후 실행될 함수
  function init() {
    // 할일 목록을 HTML에 렌더링
    const todoListElement = document.getElementById("todo-list");
    todoList.forEach((todo, index) => {
      const todoElement = document.createElement("li");
      todoElement.innerText = todo.title;
      if (todo.completed) {
        todoElement.classList.add("completed");
      } else {
        todoElement.addEventListener("click", completeTodo);
        todoElement.dataset.index = index;
      }
      todoListElement.appendChild(todoElement);
    });
  
    // 미완료한 할일의 갯수를 HTML에 렌더링
    displayIncompleteTodoCount();
  }
  
  // HTML이 로드된 후 init 함수 실행
  window.addEventListener("load", init);*/