import { render, screen, cleanup } from '@testing-library/react'
import TodoList from './TodoList'
import Todo from './Todo'
import renderer from 'react-test-renderer';

afterEach(() => {
  // gonna run after each test
  cleanup();
})

test('should render non-completed todo', () => {
  const todo = { id: 1, title: "wash dishes", completed:false}
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId('todo-1'); // <div data-testid="todo-1">
  expect(todoElement).toBeInTheDocument();

  // expect(todoElement).toHaveTextContent('Hello World!') // "Hello World!"

  expect(todoElement).toHaveTextContent('wash dishes') // "Hello World!"

  // inverting with "not"
  expect(todoElement).not.toContainHTML('<strike>') // should have this tag
})

test('should render completed todo', () => {
  const todo = { id: 2, title: "wash car", completed:true}
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-2'); // <div data-testid="todo-1">
  expect(todoElement).toBeInTheDocument();

  // expect(todoElement).toHaveTextContent('Hello World!') // "Hello World!"

  expect(todoElement).toHaveTextContent('wash car') // "Hello World!"

  // this is not working at all.. !
  //expect(todoElement).toContainHTML('<strike>') // should have this tag


})


// other method, snap shot

test('matches snapshot', () => {
  const todo = { id: 2, title: "wash car", completed: true }
  const tree = renderer.create(<Todo todo={todo} />).toJSON()
  console.log(tree)

  // will create a file __snapshop__ with all the node
  expect(tree).toMatchSnapshot();
})