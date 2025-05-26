# Scenario

We've accidentally deleted our reusable component library repository(!) but thankfully we were able to recover some unit tests from an old backup. Can you help us recreate our component?

## Task One - Configuration and Documentation

### How to Run

run `yarn` to get dependencies

Dev Env:
`yarn dev`

Test Watch:
`yarn test`

Storybook:
`yarn storybook`

### Main Tech Choices

#### Typescript + React + Vite
Typescript is in the norm in large component libraries and typing is important to make sure components are being used properly and theres zero confusion on what is required to use component. With React + Vite scaffolding is easy, up-to-date and includes basic linting ESLint that can be easily configured for more detailed linting in the future.

#### React Testing Library + Vitest

#### Storybook

#### TailwindCSS
Not paticularly my favorite (personally prefer styled components) but Tailwind is great if you have no system design and need to spin it up quickly.

Consider how you might handle linting, formatting, and any other Developer Experience improvements or quality of life support. Include these in the README.md as future improvements.

You are free to configure the project however you like. What is important is that you document the choices you make and why you made them.

If you run out of time to perform the actual configuration, please document what you would have done.

## Task Two - Component Build

Using the following unit test as a foundation, recreate a reusable component that would result in all of these tests passing.

Whilst the unit test was originally written with a specific testing library, if you need to refactor the functions to reflect a different package that is fine.

Consider the flexibility of this component, how you might break this down for different use cases, what configuration the end-consumer might need / want.

NOTE: However you configure the project from Task One, the expectation would be that this component can be seen rendered.


