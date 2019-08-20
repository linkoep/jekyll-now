---
layout: page
title: Smart-Home Blinds
---
1. [Introduction](#introduction)
1. [Hardware](#hardware)
   1. [Motor and Power](#motorAndPower)
   1. [Controlling the Motor](#controllingTheMotor)
   1. [Controlling the Relay](#controllingTheRelay)
   1. [Interfacing with the Blinds](#interfacingWithTheBlinds)

<a name="introduction"></a>
## Introduction 
A while back, I acquired Samsung's SmartThings hub, along with some smart bulbs
and a Google Home Mini, which allows me to control the lights in my room from
my phone or with my voice. I wanted to start integrating other devices into
this smart home system, and continuing with the trend of controlling lighting I
decided to start with the blinds on my windows. 

{% include image-capt.html 
	url="Blinds/MyBlinds.jpg" 
	alt="My Blinds"
	caption="The blinds in my room" 
%}

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

<a name="controllingTheMotor"></a>
### Controlling the Motor
Now that I had the motor assembly, I had to replace the switch from the
screwdriver with something that I could control from a microcontroller of some
sort. Since the motor may be operating at a higher current and voltage than the
microcontroller can handle directly, I used a relay. Once again we need to
provide for rotation in both directions, as well as no rotation, for which we
use two SPDT relays.

{% include image-capt.html 
	url="Blinds/Relay_Config.png" 
	alt="The configuration of the two SPDT Relays. C terminals go to the motor, NC to GND, and NO to VDC"
	caption="The relay configuration." 
%}

When both relays are off, the motor receives no power and is off. Turning on
the left relay supplies power to the left motor terminal while leaving the
right terminal grounded, completing the circuit. Turning on the right relay
supplies power to the right motor terminal, while the left is grounded, causing
the motor to turn the opposite direction. The fourth state (on, on) is not
used, as we have four relay states but only three motor states.

<a name="controllingTheRelay"></a>
### Controlling the Relay
To complete the hardware setup, I needed a microcontroller that would send
signals to the relays, and was able to somehow communicate with the SmartThings
platform. I decided on an ESP8266, and found the [NodeMCU Development
Kit](https://www.nodemcu.com/index_en.html) to fit my needs. While I did not
take advantage of much of the NodeMCU firmware or use Lua for this project, the
single-board development kit made for easy prototyping, and integrated nicely
with the arduino tools I was familiar with.

To connect the MCU, I simply wired the screwdriver's LED power to VIN, LED
Ground to GND, connected those same pins to the relay VCC and GND, and then
connected D0 and D1 to relay IN1 and IN2

{% include image-capt.html 
	url="Blinds/Circuit.png" 
	alt="The final circuit"
	caption="The final circuit" 
%}

<a name="interfacingWithTheBlinds"></a>
### Interfacing with the Blinds
Now that I had a microcontroller-controlled motor, the last step was to connect
it to the blinds. I took some measurements, hopped into [Fusion
360](https://www.autodesk.com/products/fusion-360/overview), and designed and
3D-printed a wheel that the link chain would lock into. By placing a phillips
hole in the middle of the wheel, I was able to mount it to the motor by simply
inserting a phillips bit into the wheel and motor, once again taking advantage
of the features of the cordless screwdriver.

{% include image-capt.html 
	url="Blinds/Wheel.jpg" 
	alt="The link-chain drive wheel"
	caption="The drive wheel" 
%}

All that was left to do was to mount the motor, battery pack, and boards using
some brackets, screws, and duct tape, and I was ready to program and test my
prototype.

{% include image-capt.html 
	url="Blinds/Full.jpg" 
	alt="The completed prototype"
	caption="The completed prototype" 
%}

