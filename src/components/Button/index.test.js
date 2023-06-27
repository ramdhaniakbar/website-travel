/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react"
import { render } from "@testing-library/react"
import Button from "./index"
import { BrowserRouter as Router } from "react-router-dom"

test("Should not allow click button if isDisabled is present", () => {
	const { container } = render(<Button isDisabled></Button>)
	const button = container.querySelector("span.disabled")
	expect(button).toBeInTheDocument()
})

test("Should render loading/spinner", () => {
	const { container, getByText } = render(<Button isLoading></Button>)

	expect(getByText(/loading/i)).toBeInTheDocument()
	expect(container.querySelector("span")).toBeInTheDocument()
})

test("Should render <a> tag", () => {
	const { container } = render(<Button type="link" isExternal></Button>)

	const button = container.querySelector("a")
	expect(button).toBeInTheDocument()
})

test("Should render <Link> component", () => {
	const { container } = render(
		<Router>
			<Button href="" type="link"></Button>
		</Router>
	)

	const button = container.querySelector("a")
	expect(button).toBeInTheDocument()
})
