---
layout: page
title: Smart-Home Blinds
---
1. [Introduction](#introduction)
1. [Hardware](#hardware)
   1. [Motor and Power](#motorAndPower)

<a name="introduction"></a>
## Introduction 
A while back, I acquired Samsung's SmartThings hub, along with some smart bulbs
and a Google Home Mini, which allows me to control the lights in my room from
my phone or with my voice. I wanted to start integrating other devices into
this smart home system, and continuing with the trend of controlling lighting I
decided to start with the blinds on my windows. 

My blinds are [roller
blinds](https://www.web-blinds.com/blind-types-explained/), and so the easiest
way to automate them was to add a wheel that rotated the link chain in the
desired direction to raise and lower the blinds. I wanted to keep the blinds I
had, ruling out many available products, and [those
products](https://www.the-ambient.com/guides/best-smart-blinds-homekit-alexa-448)
that integrated with existing blinds were often over $100 for a single blind,
slow, and required their own hub instead of integrating with what I had. I
decided that since all I really needed was a way to turn a motor, this would be
a great project to tackle myself.

<a name="hardware"></a>
## Hardware 
<a name="motorAndPower"></a>
### Motor and Power
The first order of business was to find a motor. While once can buy individual
motors, batteries, etc. online, I often gravitate towards using cordless
rechargeable screwdrivers (I used [this
one](https://smile.amazon.com/Apollo-Tools-DT1036-Rechargeable-Screwdriver/dp/B00JXPXLPY?sa-no-redirect=1))
as they provide a strong motor, compatible battery, charging circuit, and
charger all in one package, often cheaper than it would be to order and ship
each component, and certainly easing power management concerns. I disassembled
the screwdriver, 

{% include image-capt.html 
	url="Blinds/Disassembly.jpg" 
	alt="A screw hiding under a sticker on the cordless screwdriver"
	caption="Disassembling the electric screwdriver -- be sure to check for hidden screws!" 
%}

and was left with the motor, a battery pack, a charging port,
and a charge indicator, all already wired together. Two other lucky benefits:
 - The screwdriver is already wired to turn in both directions. I just need to replace the DPDT switch, but all the wires are present.
 - The screwdriver contains additional wiring for an LED flashlight. I can use this to provide power to my microcontroller that is separated from the motor power.

{% include image-capt.html 
	url="Blinds/Disassembled.jpg" 
	alt="The disassembled cordless screwdriver"
	caption="The disassembled screwdriver -- note the pre-wired battery, motor, charging ciruit, and momentary DPDT switch" 
%}
