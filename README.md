# SVG Logo Maker

## Description 

In this exercise, I'll be utilizing what I have learned in past assignments to create a generator that creates svg logos. 

## Usage

To use this app, start by opening up your terminal and typing 'node index' 
You will then be confronted with 4 prompts

 - Type in your text, only three letters please!

 - Choose the color of your text (either by name or by hex code)

 - Choose which shape you want in the background of your text

 - Choose the color of your shape (either by name or by hex code)


## User Story

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Credits

- w3schools for help on shape's dimensions 