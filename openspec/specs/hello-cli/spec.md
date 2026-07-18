# hello-cli Specification

## Purpose

Provide a minimal greeting CLI used to demonstrate incremental OpenSpec changes
and the OpenSpec Shipper delivery workflow.

## Requirements

### Requirement: Default greeting

The CLI SHALL print a default hello world greeting.

#### Scenario: Run without arguments

- **WHEN** the user runs `npm run start`
- **THEN** the program prints `Hello, world!`
