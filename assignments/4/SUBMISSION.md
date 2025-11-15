# CSC 317 Assignment 4 Submission

- Vireak Ny - 923791086

**GitHub Repository Link**: https://github.com/Vixeln/CSC317/tree/main/assignments/4
**GitHub Pages Link**: https://vixeln.github.io/CSC317/assignments/4/

## Description

My calculator app is based off of the MacOS calculator app. Inputs are handled by an [action system](#actions) that manages the unique methods that the calculator has. The app supports basic arithmetic operations (addition, subtraction, multiplication, and division); sign toggling, percentage conversion, expression clearing. 

### Layout

The calculator is laid out as a grid containing the active calculator expression and 3 keypad groups: Utility, Numpad, Operation. Each keypad group is itself a grid except for numpad.

The numpad is laid out as a flex box that flows from left to right, bottom to top. The reason for this is because I want the semantic order of each number key to roughly correspond to its actual number. Since lower numbers in most calculators start at the bototm and flow to the top but the default layout flow is top to bottom, I had to use flex to reverse the flow direction.

This layout decision means that the next button after the percentage key (%) is actually the toggler sign button (+/-) and not the division key (÷).

### Actions

Actions are the methods/commands that users can run to interact with the calculator expression, it can be triggered by clicking the calculator buttons via mouse or by a keyboard input.

The only way to interact with the expression is through actions, users cannot enter characters that are not on the keypad. This limitation is to minimize unexpected behavior on the calculator.

Actions are stored in an array of Action objects, making it scalable for when developers want to add their own custom behaviors to the calculator.

If I could improve on it, I would implement my own syntax tree instead of doing string manipulation

## Issues and Challenges

difficulties: figuring out a scalable way to impolement keyboard input and linking it to the calcualtor buttons. I tried many iterations before finalizing it and commiting to it. Hence the one big commit that implements all action methods.

I spent a lot of time figuring out how I wanted to implement the sign togglign system using Regular Expressions. I tried many different expressions until I was satisfied with its behavior

## Additional Feature
With how structured my keybinding system, I was able to easily add a tooltip whenever users hover over a button. The tooltip displays the action identifier and its keybind.

## Acknowledgements
- AI was used to generate a template CSS file to build off of
- MDN Web Docs was my main source of Javascript documentation and tutorial