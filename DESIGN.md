# Purpose

Provide a frontend for the [busylight](https://github.com/JnyJny/busylight) project. 

# Background

[busylight](https://github.com/JnyJny/busylight) is a useful tool for controlling various office status lights (such as the [Embrava Blynclight series](https://embrava.com/collections/blynclight)). Some capabilities include turning lights on/off and changing light color through the command line or web API. This frontend aims to expand the usability of busylight by adding a visual interface through which users can control lights. 

# Requirements

## User should be able to:

- Control their lights on a machine seperate from the light host machine 
- View a list of their available lights
- Select a light to manage
- Set a custom name for the light
- View the current color of the light
- Set the color of the light
- View additional details about the light (e.g. model, manufacturer) 
- Use interface on mobile or desktop devices

## Application should:

- Run entirely in the browser
- Be able to be served up statically
- Persist custom light names between page loads/browser sessions
- Offer a minimalist and intuitive user experience
- Adhere to basic accessibility guidelines
- Provide clear documentation  

# Design

See brainstorming whiteboard below:

![image](https://user-images.githubusercontent.com/100453050/180666572-3d6f8bee-4772-4d97-bccf-65e5be7762ee.png)

See wireframe minimum viable product below:

(wireframe goes here)

# Milestones

## Minimum release

- Display light name
- Display light color
- Display additional details about the light (e.g. model, manufacturer) 
- Display a button for each available light color
- Allow user to change light color through button presses
- Implement interface for mobile devices

## Version 1.0

- Display list of all available lights
- Allow user to select a light to manage
- Allow user to change a light's display name
- Implement button to delete a color
- Write basic documentation

## Version 2.0

- Implement interface for desktop devices 
- Implement edit mode to modify existing colors (name, color value, delete color)
- Verify adherence to accessibility guidelines
- Expand documentation to include screenshots

## Version 2.1

- Control multiple lights at once

## Version 3.0

- Define light groups

# Tests

## Unit tests 

### Component/code unit tests

### Visual unit tests

## Functional tests 

- Verify intereface is functional on mobile devices 
- TBD

# Runbook (how to run this software)

- TBD
