# Scenario

We've accidentally deleted our reusable component library repository(!) but thankfully we were able to recover some unit tests from an old backup. Can you help us recreate our component?

## Task One - Configuration and Documentation

### How to Run

run `yarn` to get dependencies

Dev Env:
```
yarn dev
```

Test Watch:
```
yarn test
```

Storybook:
```
yarn storybook
```

### Main Tech Choices Explainer

#### Typescript + React + Vite
Typescript is in the norm in large component libraries and typing is important to make sure components are being used properly and theres zero confusion on what is required to use component. With React + Vite scaffolding is easy, up-to-date and includes basic linting ESLint that can be easily configured for more detailed linting in the future.

TODO: add more explicit ESLint rules for auto-formatting so not everyone's different environments alters too many files. Things like import order for react files, spacing, etc.

#### React Testing Library + Vitest

#### Storybook
The standard for component libraries. Works out of the box and has a lot of customization.

TODO: use storybook add-on to check for accessibility for devs that are working on future components to check against.

#### TailwindCSS
Not paticularly my favorite (personally prefer styled components) but Tailwind is great if you have no system design and need to spin it up quickly.

## Task Two - Component Build

Using the following unit test as a foundation, recreate a reusable component that would result in all of these tests passing.

Whilst the unit test was originally written with a specific testing library, if you need to refactor the functions to reflect a different package that is fine.

Consider the flexibility of this component, how you might break this down for different use cases, what configuration the end-consumer might need / want.

NOTE: However you configure the project from Task One, the expectation would be that this component can be seen rendered.


