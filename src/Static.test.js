import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import Static from './Static';

test('renders "STATIC" to be in the dom', () => {
  render(<Static />);
  const element = screen.getByText(/STATIC/);
  expect(element).toBeInTheDocument();
})


describe('Static counter', () => {
  test('Counter Element should be present', () => {
    render(<Static/>)
    const incrementButton = screen.getByText(/increment/i)
    const decrementButton = screen.getByText(/decrement/i)
    const counterValue = screen.getByTestId("counter-value")

    expect(incrementButton).toBeInTheDocument()
    expect(incrementButton).toBeEnabled()
    expect(decrementButton).toBeInTheDocument()
    expect(decrementButton).toBeDisabled()


    expect(counterValue).toBeInTheDocument()
    expect(counterValue).toHaveTextContent(0) // at first page load
  })
})

test('Increment increases value by 1 and enables decrement button present', () => {
  render(<Static />)
  const incrementButton = screen.getByText(/increment/i)
  const decrementButton = screen.getByText(/decrement/i)
  const counterValue = screen.getByTestId("counter-value")

  expect(counterValue).toHaveTextContent(0)
  // then simulate a click
  userEvent.click(incrementButton)
  expect(counterValue).toHaveTextContent(1)
  expect(decrementButton).not.toBeDisabled()
})

describe('Static Item List', () => {
  test('List Form Components render', () => {
    render(<Static />)
    const listItemInput = screen.getByLabelText(/Create List Item/i)
    const addItemButton = screen.getByTestId('add-item')

    expect(listItemInput).toBeInTheDocument()
    expect(addItemButton).toBeInTheDocument()
  })

  test('User can add item to page', () => {
    render(<Static />)
    const listItemInput = screen.getByLabelText(/Create List Item/i)
    const addItemButton = screen.getByTestId('add-item')

    expect(listItemInput).toHaveValue("")
    userEvent.type(listItemInput, "hello")
    expect(listItemInput).toHaveValue("hello")

    userEvent.click(addItemButton)
    expect(screen.getByText("hello")).toBeInTheDocument()
    expect(listItemInput).toHaveValue('')
  })


  test('User can remove item from page', () => {
    render(<Static />)
    const listItemInput = screen.getByLabelText(/Create List Item/i)
    const addItemButton = screen.getByTestId('add-item')

    userEvent.type(listItemInput, "hello")
    userEvent.click(addItemButton)
    const newItem = screen.getByText("hello")
    expect(newItem).toBeInTheDocument()

    const removeButton = screen.getByTestId('remove-item0')
    userEvent.click(removeButton)
    expect(newItem).not.toBeInTheDocument()
  })
})



